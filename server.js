require('dotenv').config();
const express = require('express');
const cors    = require('cors');
const fetch   = require('node-fetch');
const path    = require('path');

const app  = express();
const PORT = process.env.PORT || 80;

// ── Middleware ──────────────────────────────────────────────────────
app.use(express.json({ limit: '50kb' }));
app.use(cors());
app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});
// ── Rate Limiter ────────────────────────────────────────────────────
const _rateMap   = new Map();
const RATE_LIMIT = 30;
const RATE_WIN   = 60_000;

function checkRateLimit(ip) {
  const now   = Date.now();
  const entry = _rateMap.get(ip) || { count: 0, resetAt: now + RATE_WIN };
  if (now > entry.resetAt) { entry.count = 0; entry.resetAt = now + RATE_WIN; }
  entry.count++;
  _rateMap.set(ip, entry);
  return entry.count <= RATE_LIMIT;
}

// ── Circuit Breaker ─────────────────────────────────────────────────
const CB = {
  failures: 0,
  openUntil: 0,
  threshold:  5,
  resetAfter: 30_000,
  isOpen() { return this.failures >= this.threshold && Date.now() < this.openUntil; },
  success() { this.failures = 0; },
  fail()    { this.failures++; this.openUntil = Date.now() + this.resetAfter; },
};

// ── Fetch avec timeout AbortController (30s) ───────────────────────
async function fetchWithTimeout(url, options) {
  const controller = new AbortController();
  const timeoutId  = setTimeout(() => controller.abort(), 30_000);
  try {
    const res = await fetch(url, { ...options, signal: controller.signal });
    clearTimeout(timeoutId);
    return res;
  } catch (err) {
    clearTimeout(timeoutId);
    if (err.name === 'AbortError') {
      throw new Error('Timeout (>30s) — le serveur distant est trop lent.');
    }
    throw err;
  }
}

// ── Parseur JSON robuste ────────────────────────────────────────────
function parseJSON(text) {
  if (!text) throw new Error('Réponse vide de Qwen');
  
  let s = text.trim();
  
  // 1. Restaurer UNIQUEMENT les caractères de contrôle problématiques (LaTeX)
  let safeJson = s.replace(/\x0C/g, '\\\\f')
                  .replace(/\x08/g, '\\\\b')
                  .replace(/\x09/g, '\\\\t');
                  
  // 2. Remplacer les retours à la ligne litéraux par un espace pour ne pas casser JSON.parse
  safeJson = safeJson.replace(/[\r\n]+/g, ' ');
  
  // 3. Échapper les antislashs LaTeX non échappés (ex: \sum -> \\sum, \pi -> \\pi)
  // Indispensable car \s, \p etc. déclenchent "SyntaxError: Bad escape character" dans JSON.parse
  safeJson = safeJson.replace(/(?<!\\)\\(?![\\"])/g, '\\\\');
  
  const normalizeKeys = (parsed) => {
    // 1. Recherche floue pour "question"
    if (!parsed.question) {
      parsed.question = parsed.pregunta || parsed.q || parsed.enonce || parsed.enunciado || Object.values(parsed).find(v => typeof v === 'string' && v.length > 50) || Object.values(parsed)[0];
    }
    
    // 2. Recherche floue pour "options" (c'est le seul tableau du JSON)
    if (!parsed.options) {
      const arrKey = Object.keys(parsed).find(k => Array.isArray(parsed[k]));
      if (arrKey) parsed.options = parsed[arrKey];
      else parsed.options = parsed.opciones || parsed.choices || parsed.alternativas || parsed.respuestas || [];
    }
    
    // 3. Recherche floue pour "correct"
    if (!parsed.correct) {
      parsed.correct = parsed.correcto || parsed.correcta || parsed.respuesta_correcta || parsed.solucion || parsed.solution || parsed.reponse || parsed.a;
      
      // Si toujours rien, on cherche une chaîne courte ou qui commence par "A.", "B.", etc.
      if (!parsed.correct) {
        const potentialAnswers = Object.values(parsed).filter(v => typeof v === 'string' && v !== parsed.question && v !== parsed.answer_type);
        if (potentialAnswers.length > 0) {
          parsed.correct = potentialAnswers[0];
        } else {
          parsed.correct = "A"; // Fallback extrême pour ne pas crasher
        }
      }
    }
    
    // 4. Type de réponse
    if (!parsed.answer_type) {
      parsed.answer_type = parsed.tipo_respuesta || parsed.type || 'qcm';
    }
    
    return parsed;
  };
  
  try { return normalizeKeys(JSON.parse(safeJson)); } catch (_) {}
  
  const fence = safeJson.match(/```(?:json)?\s*(.*?)\s*```/);
  if (fence) { 
    try { return normalizeKeys(JSON.parse(fence[1].trim())); } catch (_) {} 
  }
  
  // 3. Fallback ultime
  require('fs').writeFileSync('last_failed_json.txt', safeJson, 'utf-8');
  throw new Error('Réponse non-JSON : ' + safeJson.substring(0, 150));
}

// ── Appel DashScope (Alibaba Cloud) ─────────────────────────────────
async function callQwen(prompt, directive) {
  // Accepter DASHSCOPE_API_KEY ou APIKEY (car l'utilisateur a mis la clé dans APIKEY)
  const key = process.env.APIKEY || process.env.DASHSCOPE_API_KEY;
  if (!key || key.startsWith('http')) {
    throw new Error('Clé API (APIKEY) manquante ou invalide dans le fichier .env.');
  }

  // Permettre un endpoint personnalisé (ex: APIHOST = ws-...maas.aliyuncs.com)
  const host = process.env.APIHOST || 'dashscope.aliyuncs.com';
  let url = `https://${host}/api/v1/services/aigc/text-generation/generation`;
  
  // Si l'utilisateur a fourni une URL complète dans APIHOST (par erreur)
  if (host.startsWith('http')) {
    url = host.endsWith('/api/v1') 
        ? `${host}/services/aigc/text-generation/generation` 
        : host;
  }

  const modelId = process.env.MODEL || 'qwen-max';

  console.log(`[Proxy] 🚀 DashScope API | Host: ${host} | Model: ${modelId}`);

  const res = await fetchWithTimeout(url, {
    method:  'POST',
    headers: {
      'Authorization': 'Bearer ' + key,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: modelId,
      input: {
        messages: [
          { role: "system", content: prompt },
          { role: "user", content: directive || "Génère le défi" }
        ]
      },
      parameters: {
        result_format: "message",
        temperature: 0.7,
        max_tokens: 2000
      }
    }),
  });

  if (res.status === 429) {
    throw new Error('Quota Qwen épuisé (429). Réessaie plus tard.');
  }
  if (!res.ok) {
    const b = await res.json().catch(() => ({}));
    throw new Error(b?.message || `Erreur DashScope HTTP ${res.status}`);
  }

  const data = await res.json();
  const text = data.output?.choices?.[0]?.message?.content || '';
  CB.success();
  return parseJSON(text);
}

// ══════════════════════════════════════════════════════════════════
//  ROUTES
// ══════════════════════════════════════════════════════════════════

// GET /api/status
app.get('/api/status', (req, res) => {
  res.json({
    ok: true,
    provider: 'dashscope',
    dashscopeKey: !!process.env.DASHSCOPE_API_KEY,
    circuitBreaker: CB.isOpen() ? 'OUVERT' : 'FERMÉ',
    rateLimit: `${RATE_LIMIT} req/min`,
  });
});

// POST /api/generate
app.post('/api/generate', async (req, res) => {
  const ip = req.ip || 'unknown';
  if (!checkRateLimit(ip)) {
    return res.status(429).json({ error: `Trop de requêtes — limite : ${RATE_LIMIT}/min.` });
  }
  if (CB.isOpen()) {
    const waitSec = Math.ceil((CB.openUntil - Date.now()) / 1000);
    return res.status(503).json({ error: `Service indisponible — réessaie dans ${waitSec}s.` });
  }

  const { prompt, directive } = req.body;
  if (!prompt || typeof prompt !== 'string' || prompt.length > 10_000) {
    return res.status(400).json({ error: 'Prompt invalide ou trop long.' });
  }

  // Sanitisation anti-injection
  const sanitized = prompt
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/ignore (all )?previous instructions?/gi, '[FILTERED]')
    .replace(/forget your (system |previous )?prompt/gi, '[FILTERED]');

  try {
    const data = await callQwen(sanitized, directive);
    return res.json({ ok: true, provider: 'dashscope', data });
  } catch (err) {
    CB.fail();
    console.error(`[Proxy] ❌ DashScope API échoué :`, err.message);
    return res.status(502).json({ error: err.message });
  }
});

// ── Démarrage ───────────────────────────────────────────────────────
app.listen(PORT, () => {
  const hasKey = !!(process.env.APIKEY || process.env.DASHSCOPE_API_KEY);
  const host = process.env.APIHOST || 'dashscope.aliyuncs.com';
  console.log(`\n╔══════════════════════════════════════════════╗`);
  console.log(`║  MathRoyale Proxy (Qwen) — port ${PORT}        ║`);
  console.log(`╠══════════════════════════════════════════════╣`);
  console.log(`║  API Key : ${hasKey ? '✅ OK (.env)               ' : '⚠️  vide                 '}║`);
  console.log(`║  Endpoint: ${host.substring(0, 32).padEnd(32, ' ')}║`);
  console.log(`╚══════════════════════════════════════════════╝\n`);
});

// Debug global log
process.on('uncaughtException', err => {
  require('fs').appendFileSync('error.log', err.stack + '\\n');
});

