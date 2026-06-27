const fs = require('fs');
const app    = fs.readFileSync('app.js',     'utf8');
const html   = fs.readFileSync('index.html', 'utf8');
const server = fs.readFileSync('server.js',  'utf8');

const errors   = [];
const warnings = [];
const ok       = [];

// ─── 1. callAI duplicado ───────────────────────────────────────────
const callAICount = (app.match(/async function callAI/g) || []).length;
if (callAICount > 1) errors.push('CRÍTICO: callAI duplicada x' + callAICount);
else ok.push('callAI: solo 1 definición');

// ─── 2. window.* funciones expuestas ──────────────────────────────
const windowFns = [
  'openConfig','closeConfig','saveConfig','switchProvider',
  'handleFileUpload','renderChallenge','validateAnswer',
  'startKangourouMode','startOlympiadesMode','startProgressifMode',
  '_launchNextChallenge','_activateDemoAndStart','_autoSaveKey'
];
windowFns.forEach(fn => {
  if (!app.includes('window.' + fn)) errors.push('MISSING: window.' + fn);
  else ok.push('window.' + fn + ' OK');
});

// ─── 3. Funciones internas necesarias ─────────────────────────────
const internalFns = [
  '_showLoading','_showError','injectArena','showToast',
  'setLED','buildNASAPrompt','_validateChallenge','_parseJSON',
  '_tryDemoFallback','_checkProxy'
];
internalFns.forEach(fn => {
  if (!app.includes('function ' + fn)) errors.push('MISSING: function ' + fn);
  else ok.push('function ' + fn + ' OK');
});

// ─── 4. PROXY_URL definido ────────────────────────────────────────
if (!app.includes("PROXY_URL")) errors.push("MISSING: PROXY_URL en app.js");
else ok.push("PROXY_URL OK");

// ─── 5. response_format en OpenRouter (server.js) ─────────────────
if (server.includes("response_format") && server.includes("openrouter")) {
  warnings.push("server.js: response_format:{type:json_object} peut échouer avec certains modèles OpenRouter");
}

// ─── 6. Panel IDs HTML vs switchProvider ──────────────────────────
const panelRe = /id="panel-([^"]+)"/g;
const panelIds = [];
let m;
while ((m = panelRe.exec(html)) !== null) panelIds.push(m[1]);
ok.push('Panels HTML: ' + panelIds.join(', '));

// ─── 7. _autoSaveKey en app.js ────────────────────────────────────
if (!app.includes('window._autoSaveKey') && !app.includes("'_autoSaveKey'")) {
  errors.push("MISSING: window._autoSaveKey (utilisé dans index.html oninput)");
}

// ─── 8. saveConfig gère openrouter ────────────────────────────────
if (!app.includes('openrouter') || !app.includes('openrouter-key')) {
  warnings.push("saveConfig: n'enregistre pas la clé openrouter (inutile avec proxy mais confusant)");
}

// ─── 9. buildNASAPrompt existe ────────────────────────────────────
if (!app.includes('function buildNASAPrompt')) {
  errors.push("MISSING: function buildNASAPrompt");
} else {
  ok.push("buildNASAPrompt OK");
}

// ─── 10. server.js port ────────────────────────────────────────────
if (!server.includes('3001')) errors.push("server.js: port 3001 manquant");
else ok.push("server.js port 3001 OK");

// ─── 11. CORS localhost:5173 ──────────────────────────────────────
if (!server.includes('5173')) warnings.push("server.js CORS: port 5173 non listé");
else ok.push("CORS 5173 OK");

// ─── Rapport ──────────────────────────────────────────────────────
console.log("\n╔════════════════════════ RAPPORT D'AUDIT ════════════════════╗");
console.log("║ Fichiers analysés: app.js, index.html, server.js           ║");
console.log("╚═════════════════════════════════════════════════════════════╝\n");

console.log("🔴 ERREURS CRITIQUES (" + errors.length + "):");
errors.forEach(e => console.log("  ❌ " + e));

console.log("\n⚠️  AVERTISSEMENTS (" + warnings.length + "):");
warnings.forEach(w => console.log("  ⚠️  " + w));

console.log("\n✅ VALIDATIONS (" + ok.length + "):");
ok.forEach(o => console.log("  ✅ " + o));

console.log("\n" + (errors.length === 0 ? "✅ AUCUNE ERREUR CRITIQUE" : "❌ " + errors.length + " ERREUR(S) À CORRIGER"));
