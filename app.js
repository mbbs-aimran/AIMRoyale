// ═══════════════════════════════════════════════════════════════════
//  app.js — MathRoyale Engine v1.0
//  The NASA Program — Multi-provider AI Math Challenge System
//  Stack : Vanilla JS · Fermat Chroma Design System
// ═══════════════════════════════════════════════════════════════════

// ═══════════════════════════════════════════════════════════════════
// 1. INTERNATIONALISATION (i18n)
// ═══════════════════════════════════════════════════════════════════

const TRANSLATIONS = {
  fr: {
    btn_config:       'Config / API / Annales',
    btn_kangourou:    'Concours Kangourou',
    btn_olympiades:   'Olympiades Math',
    btn_progressif:   'Mode Progressif',
    config_title:     '⚙️ Configuration IA & Annales',
    annales_title:    '📄 Importer les Annales',
    label_sujet:      "Sujet d'Annale (.pdf ou .docx)",
    label_correction: 'Correction Officielle (.pdf ou .docx)',
    upload_hint:      'Cliquer ou glisser PDF / DOCX',
    btn_close:        'Fermer',
    btn_save:         '💾 Sauvegarder',
    config_saved:     '✅ Configuration sauvegardée !',
    no_provider:      "⚠️ Configure une clé API d'abord",
    loading_title:    'The NASA Program en route…',
    loading_sub:      'Génération du défi spatial…',
    trophy_earned:    '+10 🏆 Trophées !',
    correct_answer:   '🎯 Excellent ! Réponse correcte !',
    wrong_answer:     '❌ Mauvaise réponse. La bonne était :',
    next_challenge:   '🚀 Défi Suivant',
    parse_ok_sujet:   '✅ Sujet analysé avec succès',
    parse_ok_correct: '✅ Correction analysée avec succès',
    parse_error:      '❌ Erreur de lecture du fichier',
    mode_kangourou:   '🦘 Mode Kangourou activé !',
    mode_olympiades:  '🏅 Mode Olympiades activé !',
    mode_progressif:  '📈 Mode Progressif activé !',
    enter_answer:     'Votre réponse…',
    validate:         'Valider ✓',
    error_log_count:  'erreur(s) enregistrée(s)',
    dark_on:          '☀️ Mode clair activé',
    dark_off:         '🌙 Mode sombre activé',
    welcome_title:    'AIMRoyale',
    welcome_sub:      'The NASA Program — Entraîneur IA pour les Olympiades',
    step1: '⚙️ Configure ton fournisseur IA (OpenRouter)',
    step2: '📄 Importe tes annales et corrections (PDF ou DOCX)',
    step3: '🦘 Choisis un mode : Kangourou, Olympiades ou Progressif',
    step4: '🚀 The NASA Program génère ton défi mathématique !',
    start_config:     '⚙️ Commencer la configuration',
    ai_error_prefix:  '❌ Erreur IA :',
    config_grade_label: 'Niveau Scolaire',
    config_diff_label: 'Difficulté',
    grade_college: 'Collège',
    grade_seconde: 'Seconde',
    grade_premiere: 'Première',
    grade_terminale: 'Terminale',
    diff_facile: 'Facile',
    diff_moyen: 'Moyen',
    diff_difficile: 'Difficile',
    diff_extreme: 'Extrême',
  },
  en: {
    btn_config:       'Config / API / Archives',
    btn_kangourou:    'Kangaroo Contest',
    btn_olympiades:   'Math Olympiad',
    btn_progressif:   'Progressive Mode',
    config_title:     '⚙️ AI Config & Archives',
    annales_title:    '📄 Import Archives',
    label_sujet:      'Exam Paper (.pdf or .docx)',
    label_correction: 'Official Solution (.pdf or .docx)',
    upload_hint:      'Click or drag a PDF / DOCX file',
    btn_close:        'Close',
    btn_save:         '💾 Save',
    config_saved:     '✅ Configuration saved!',
    no_provider:      '⚠️ Configure an API key first',
    loading_title:    'The NASA Program is launching…',
    loading_sub:      'Generating your space mission challenge…',
    trophy_earned:    '+10 🏆 Trophies earned!',
    correct_answer:   '🎯 Excellent! Correct answer!',
    wrong_answer:     '❌ Wrong answer. Correct was:',
    next_challenge:   '🚀 Next Challenge',
    parse_ok_sujet:   '✅ Exam paper parsed successfully',
    parse_ok_correct: '✅ Solution parsed successfully',
    parse_error:      '❌ File reading error',
    mode_kangourou:   '🦘 Kangaroo Mode activated!',
    mode_olympiades:  '🏅 Olympiad Mode activated!',
    mode_progressif:  '📈 Progressive Mode activated!',
    enter_answer:     'Your answer…',
    validate:         'Validate ✓',
    error_log_count:  'error(s) recorded',
    dark_on:          '☀️ Light mode on',
    dark_off:         '🌙 Dark mode on',
    welcome_title:    'AIMRoyale',
    welcome_sub:      'The NASA Program — AI Trainer for Math Olympiads',
    step1: '⚙️ Configure your AI provider (OpenRouter)',
    step2: '📄 Import your exam papers and solutions (PDF or DOCX)',
    step3: '🦘 Choose a mode: Kangaroo, Olympiad, or Progressive',
    step4: '🚀 The NASA Program generates your math challenge!',
    start_config:     '⚙️ Start configuration',
    ai_error_prefix:  '❌ AI Error:',
    config_grade_label: 'School Grade',
    config_diff_label: 'Difficulty',
    grade_college: 'Middle School (6th-8th)',
    grade_seconde: '10th Grade / Sophomore',
    grade_premiere: '11th Grade / Junior',
    grade_terminale: '12th Grade / Senior',
    diff_facile: 'Easy',
    diff_moyen: 'Medium',
    diff_difficile: 'Hard',
    diff_extreme: 'Extreme',
  },
  es: {
    btn_config:       'Config / API / Exámenes',
    btn_kangourou:    'Concurso Canguro',
    btn_olympiades:   'Olimpiadas de Matemáticas',
    btn_progressif:   'Modo Progresivo',
    config_title:     '⚙️ Config IA & Exámenes',
    annales_title:    '📄 Importar Exámenes',
    label_sujet:      'Examen (.pdf o .docx)',
    label_correction: 'Solución Oficial (.pdf o .docx)',
    upload_hint:      'Haz clic o arrastra un PDF / DOCX',
    btn_close:        'Cerrar',
    btn_save:         '💾 Guardar',
    config_saved:     '✅ ¡Configuración guardada!',
    no_provider:      '⚠️ Configura una clave API primero',
    loading_title:    'El Programa NASA está en camino…',
    loading_sub:      'Generando tu desafío espacial…',
    trophy_earned:    '¡+10 🏆 Trofeos ganados!',
    correct_answer:   '🎯 ¡Excelente! ¡Respuesta correcta!',
    wrong_answer:     '❌ Respuesta incorrecta. La correcta era:',
    next_challenge:   '🚀 Siguiente Desafío',
    parse_ok_sujet:   '✅ Examen analizado con éxito',
    parse_ok_correct: '✅ Solución analizada con éxito',
    parse_error:      '❌ Error al leer el archivo',
    mode_kangourou:   '🦘 ¡Modo Canguro activado!',
    mode_olympiades:  '🏅 ¡Modo Olimpiadas activado!',
    mode_progressif:  '📈 ¡Modo Progresivo activado!',
    enter_answer:     'Tu respuesta…',
    validate:         'Validar ✓',
    error_log_count:  'error(es) registrado(s)',
    dark_on:          '☀️ Modo claro activado',
    dark_off:         '🌙 Modo oscuro activado',
    welcome_title:    'AIMRoyale',
    welcome_sub:      'The NASA Program — Entrenador IA para Olimpiadas',
    step1: '⚙️ Configura tu proveedor de IA (OpenRouter)',
    step2: '📄 Importa tus exámenes y soluciones (PDF o DOCX)',
    step3: '🦘 Elige un modo: Canguro, Olimpiadas o Progresivo',
    step4: '🚀 ¡The NASA Program genera tu desafío matemático!',
    start_config:     '⚙️ Comenzar configuración',
    ai_error_prefix:  '❌ Error IA:',
    config_grade_label: 'Nivel Escolar',
    config_diff_label: 'Dificultad',
    grade_college: 'ESO (1º a 3º)',
    grade_seconde: '4º de la ESO',
    grade_premiere: '1º Bachillerato',
    grade_terminale: '2º Bachillerato (EBAU)',
    diff_facile: 'Fácil',
    diff_moyen: 'Medio',
    diff_difficile: 'Difícil',
    diff_extreme: 'Extremo',
  }
};

// ═══════════════════════════════════════════════════════════════════
// 2. GLOBAL STATE
// ═══════════════════════════════════════════════════════════════════

const VERSION = 'v2.6';
console.log(`[MathRoyale] Démarrage — Version ${VERSION}`);

// Purge automatique du poison "Poco F7" qui restait bloqué dans le cache
if (localStorage.getItem('mr_mission_directive')?.includes('Poco F7')) {
  localStorage.removeItem('mr_mission_directive');
  console.log('[MathRoyale] Ancienne directive Poco F7 effacée.');
}

// ── MemoryAgent : charge la mémoire persistante depuis localStorage ──
const _DEFAULT_AGENT_MEMORY = {
  preferredUniverse:  'NASA Deep Space',
  topicScores: {
    'arithmétique':    { correct: 0, total: 0 },
    'géométrie':       { correct: 0, total: 0 },
    'algèbre':         { correct: 0, total: 0 },
    'probabilités':    { correct: 0, total: 0 },
    'suites':          { correct: 0, total: 0 },
    'trigonométrie':   { correct: 0, total: 0 },
    'logique':         { correct: 0, total: 0 },
  },
  recentMistakes:    [],  // tableau FIFO plafonné à 5 éléments
  consecutiveStreak: {},  // { 'géométrie': 2, … }
};

const STATE = {
  lang:             localStorage.getItem('mr_lang')    || 'fr',
  theme:            localStorage.getItem('mr_theme')   || 'nasa',
  trophies:     parseInt(localStorage.getItem('mr_trophies') || '0'),
  currentMode:      null,
  currentChallenge: null,
  answered:         false,
  sessionCorrect:   0,
  sessionTotal:     0,
  currentProvider:  localStorage.getItem('ai_provider') || 'openrouter',
  katexReady:       false,
  demoMode:         localStorage.getItem('mr_demo') === '1',
  _mockIdx:         0,
  questionHistory:  [],   // dernières questions pour éviter les répétitions
  schoolGrade:      localStorage.getItem('user_school_grade') || 'terminale',
  difficultyLevel:  localStorage.getItem('user_difficulty_level') || 'moyen',
  memory: JSON.parse(localStorage.getItem("qwen_agent_memory")) || {
    preferredUniverse: "NASA Deep Space",
    topicScores: {},
    recentMistakes: [],
    consecutiveStreak: {}
  }
};

/**
 * Persiste STATE.memory dans localStorage.
 * Appelé après chaque mise à jour de la mémoire de l'Agent.
 */
function _saveAgentMemory() {
  localStorage.setItem("qwen_agent_memory", JSON.stringify(STATE.memory));
}

// ★ Exposition globale de isDemoMode (getter/setter) — raccourci console
Object.defineProperty(window, 'isDemoMode', {
  get: () => STATE.demoMode,
  set: (v) => {
    STATE.demoMode = !!v;
    if (STATE.demoMode) localStorage.setItem('mr_demo', '1');
    else                localStorage.removeItem('mr_demo');
    const chk = document.getElementById('demo-toggle');
    if (chk) chk.checked = STATE.demoMode;
    setLED(STATE.demoMode || isProviderConfigured() ? 'active' : 'idle');
    showToast(STATE.demoMode
      ? '🧪 Mode Démo ON — aucun appel API'
      : '🔌 Mode Démo OFF — appels API actifs');
  },
  configurable: true,
});

// ═══════════════════════════════════════════════════════════════════
// ★  BANQUE DE DÉFIS MOCK — CRASH TEST KaTeX
//    8 challenges couvrant : QCM long, QCM court, numeric,
//    formules complexes (intégrale, limite, système, déterminant…)
// ═══════════════════════════════════════════════════════════════════
const MOCK_CHALLENGES = [
  {
    question: '🛸 Mission Apollo-37 — Calcul de trajectoire :\n\nLe rover NASA doit parcourir une distance $d$ définie par $d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$ entre deux balises martiennes situées en $(x_1, y_1) = (3, -4)$ et $(x_2, y_2) = (9, 4)$. La batterie autorise un maximum de $d_{\\max} = 10$ km. Le rover peut-il effectuer le trajet ?',
    answer_type: 'qcm',
    options: [
      'A. Oui, car $d = 10$ km exactement',
      'B. Non, car $d = \\sqrt{100} = 10 > d_{\\max}$',
      'C. Oui, car $d = \\sqrt{64+64} \\approx 11{,}3$ km et $d_{\\max}$ est ignoré',
      'D. Non, car $d = 8$ km seulement',
    ],
    correct: 'A. Oui, car $d = 10$ km exactement',
  },
  {
    question: '🚀 Orbite Géostationnaire — The NASA Program :\n\nL\'altitude $h$ d\'une orbite géostationnaire vérifie $\\left(\\frac{T}{2\\pi}\\right)^2 = \\frac{(R_T + h)^3}{GM}$. Sachant que $T = 86400$ s, $R_T = 6{,}371 \\times 10^6$ m et $GM = 3{,}986 \\times 10^{14}$ m³/s², calculez $h$ en km (valeur approchée) :',
    answer_type: 'numeric',
    options: [],
    correct: '35786',
  },
  {
    question: '🛰️ Mission Telstar-X — Quadratique orbitale :\n\nLa position angulaire $\\theta(t)$ du satellite vérifie $2\\theta^2 - 5\\theta - 3 = 0$. Les solutions sont données par la formule $\\theta = \\dfrac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$ avec $a = 2,\\; b = -5,\\; c = -3$. Quelle est la solution physiquement admissible ($\\theta > 0$) ?',
    answer_type: 'qcm',
    options: [
      'A. $\\theta = 3$',
      'B. $\\theta = -\\tfrac{1}{2}$',
      'C. $\\theta = \\tfrac{5}{4}$',
      'D. $\\theta = -3$',
    ],
    correct: 'A. $\\theta = 3$',
  },
  {
    question: '☄️ Comète de Halley — Intégrale de carburant :\n\nLa quantité de carburant consommée par le propulseur ionique est $Q = \\displaystyle\\int_{0}^{\\pi} \\sin(t)\\, dt$. Calculez $Q$ :',
    answer_type: 'numeric',
    options: [],
    correct: '2',
  },
  {
    question: '🌌 Deep Space 9 — Limite de vitesse :\n\nLa vitesse limite du vaisseau en approche orbitale est $v = \\displaystyle\\lim_{n \\to +\\infty} n \\left(\\sqrt{1 + \\dfrac{k}{n}} - 1\\right)$. Pour $k = 4$, quelle est cette limite ?',
    answer_type: 'qcm',
    options: [
      'A. $v = 0$',
      'B. $v = 2$',
      'C. $v = +\\infty$',
      'D. $v = \\dfrac{k}{2} = 2$',
    ],
    correct: 'B. $v = 2$',
  },
  {
    question: '🔭 Hubble Repair — Système d\'équations :\n\nPour aligner deux miroirs du télescope Hubble, les ingénieurs résolvent :\n$$\\begin{cases} 3x + 2y = 14 \\\\ 5x - y = 7 \\end{cases}$$\nDonnez le couple solution $(x, y)$ :',
    answer_type: 'qcm',
    options: [
      'A. $(x, y) = (2, 4)$',
      'B. $(x, y) = (2, 4)$ — LONG DISTRACTEUR : vérifier $5(2)-4=6 \\neq 7$',
      'C. $(x, y) = (\\tfrac{28}{13}, \\tfrac{49}{13})$',
      'D. $(x, y) = (1, 2)$',
    ],
    correct: 'A. $(x, y) = (2, 4)$',
  },
  {
    question: '🌠 Stress Test KaTeX Extrême — Déterminant matriciel :\n\nLa stabilité gyroscopique du lanceur Ariane-7 est gouvernée par $\\det(A) \\neq 0$ avec $A = \\begin{pmatrix} 1 & 2 & 3 \\\\ 0 & 4 & 5 \\\\ 1 & 0 & 2 \\end{pmatrix}$. Calculez $\\det(A)$ :',
    answer_type: 'numeric',
    options: [],
    correct: '-1',
  },
  {
    question: '🪐 Jupiter Probe — Longueur d\'arc :\n\nCe défi teste le rendu d\'une formule très longue sur petits écrans. La longueur de la trajectoire courbe du probe est $L = \\displaystyle\\int_{a}^{b} \\sqrt{1 + \\left(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\right)^{\\!2}}\\, \\mathrm{d}x$ avec $y = \\tfrac{x^3}{6} + \\tfrac{1}{2x}$, $a = 1$, $b = 3$. La valeur exacte de $L$ est :',
    answer_type: 'qcm',
    options: [
      'A. $L = \\dfrac{17}{6}$',
      'B. $L = \\dfrac{8}{3}$',
      'C. $L = \\pi$',
      'D. $L = \\sqrt{8}$',
    ],
    correct: 'A. $L = \\dfrac{17}{6}$',
  },
];

// ═══════════════════════════════════════════════════════════════════
// 3. UTILITY HELPERS
// ═══════════════════════════════════════════════════════════════════

/** Traduction courante */
function t(key) {
  return (TRANSLATIONS[STATE.lang] || TRANSLATIONS.fr)[key] || key;
}

/** Toast — notification pill */
let _toastTimer = null;
function showToast(msg, duration = 2800) {
  const el = document.getElementById('toast');
  if (!el) return;
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(_toastTimer);
  _toastTimer = setTimeout(() => el.classList.remove('show'), duration);
}

/** LED IA */
function setLED(status /* 'idle' | 'active' | 'loading' | 'error' */) {
  const led = document.getElementById('cloud-led');
  if (!led) return;
  led.className = '';
  if (status === 'active')  led.classList.add('led-active');
  if (status === 'loading') led.classList.add('led-loading');
  if (status === 'error')   led.classList.add('led-error');
  led.title = {
    idle:    'IA non configurée',
    active:  'IA connectée ✅',
    loading: 'IA en cours… 🔄',
    error:   'Erreur de connexion ❌'
  }[status] || '';
}

/** Mise à jour du compteur de trophées */
function updateTrophyDisplay(animate = false) {
  const el = document.getElementById('trophy-count');
  if (el) el.textContent = STATE.trophies;
  localStorage.setItem('mr_trophies', STATE.trophies);
  if (animate) {
    const badge = document.getElementById('trophy-badge');
    badge?.classList.add('pop');
    setTimeout(() => badge?.classList.remove('pop'), 400);
  }
}

/** Applique les traductions data-i18n */
function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.textContent = t(key);
  });
}

/** Injecte du HTML dans l'arène avec animation */
function injectArena(html) {
  const arena = document.getElementById('arena-center');
  if (!arena) return;
  arena.innerHTML = html;
  arena.classList.remove('fade-in');
  void arena.offsetWidth;           // reflow → restart animation
  arena.classList.add('fade-in');
  tryRenderMath();
}

/** Échappe HTML (sécurité) */
function esc(str) {
  const d = document.createElement('div');
  d.appendChild(document.createTextNode(String(str ?? '')));
  return d.innerHTML;
}

/** Normalise une réponse pour comparaison souple */
function normalizeAnswer(val) {
  return String(val ?? '')
    .trim()
    .toLowerCase()
    .replace(/\s+/g, ' ')
    .replace(/,/g, '.')
    .replace(/[^a-z0-9.\-+*/=]/g, '');
}

/** Enregistre une erreur dans le log local */
function logError(question, wrongAnswer, correctAnswer, mode) {
  const key = 'math_agent_error_log';
  const logs = JSON.parse(localStorage.getItem(key) || '[]');
  logs.push({
    timestamp:     new Date().toISOString(),
    mode,
    question:      String(question   ?? '').slice(0, 200),
    wrongAnswer:   String(wrongAnswer ?? ''),
    correctAnswer: String(correctAnswer ?? ''),
  });
  // Conserver les 100 dernières erreurs
  if (logs.length > 100) logs.splice(0, logs.length - 100);
  localStorage.setItem(key, JSON.stringify(logs));
}

/** KaTeX auto-render si disponible */
function tryRenderMath() {
  // Vérifie dynamiquement — robuste même si l'événement katex-ready est manqué
  if (window.renderMathInElement) STATE.katexReady = true;
  if (!STATE.katexReady) return;
  try {
    const arena = document.getElementById('arena-center');
    if (arena && window.renderMathInElement) {
      window.renderMathInElement(arena, {
        delimiters: [
          { left: '$$', right: '$$', display: true  },
          { left: '$',  right: '$',  display: false },
          { left: '\\(', right: '\\)', display: false },
          { left: '\\[', right: '\\]', display: true  },
        ],
        throwOnError: false,
      });
    }
  } catch (_) { /* ignore */ }
}

// ═══════════════════════════════════════════════════════════════════
// 4. DARK MODE
// ═══════════════════════════════════════════════════════════════════

window.toggleDark = function () {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  if (isDark) {
    document.documentElement.removeAttribute('data-theme');
    localStorage.removeItem('mr_dark');
    document.getElementById('dark-toggle').textContent = '🌙';
    showToast(t('dark_on'));
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('mr_dark', '1');
    document.getElementById('dark-toggle').textContent = '☀️';
    showToast(t('dark_off'));
  }
};

// ═══════════════════════════════════════════════════════════════════
// 5. LANGUE
// ═══════════════════════════════════════════════════════════════════

window.setLanguage = function (lang) {
  STATE.lang = lang;
  localStorage.setItem('mr_lang', lang);
  applyTranslations();
  // Mettre à jour le placeholder du textarea selon la langue
  _updateMissionPlaceholder(lang);
  showToast(`🌐 ${lang.toUpperCase()}`);
};

/** Met à jour le placeholder trilingue de la directive de mission */
function _updateMissionPlaceholder(lang) {
  const ta = document.getElementById('mission-directive');
  if (!ta) return;
  const ph = ta.getAttribute(`data-placeholder-${lang}`)
           || ta.getAttribute('data-placeholder-fr');
  if (ph) ta.placeholder = ph;
  // Libellé section
  const lbl = document.getElementById('mission-label-text');
  const labels = {
    fr: '🔭 DIRECTIVE DE MISSION',
    en: '🔭 MISSION DIRECTIVE',
    es: '🔭 DIRECTIVA DE MISIÓN',
  };
  if (lbl) lbl.textContent = labels[lang] || labels.fr;
}

/**
 * Renvoie le texte libre de la directive de mission (textarea #mission-directive).
 * Trimmé, tronqué à 400 caractères. Retourne null si vide.
 */
function _getMissionDirective() {
  const ta = document.getElementById('mission-directive');
  if (!ta) return null;
  const val = ta.value.trim().slice(0, 400);
  return val.length > 0 ? val : null;
}

// ═══════════════════════════════════════════════════════════════════
// 6. GESTION DES FICHIERS & CONFIGURATION
// ═══════════════════════════════════════════════════════════════════

window.openConfig = function () {
  const modal = document.getElementById('config-modal');
  if (!modal) return;

  const get    = k  => localStorage.getItem(k) || '';
  const setVal = (id, v) => { const el = document.getElementById(id); if (el) el.value = v; };

  _restoreFileLabel('sujet',      'user_annales_text',     'sujet-filename');
  _restoreFileLabel('correction', 'user_corrections_text', 'correction-filename');

  const demoChk = document.getElementById('demo-toggle');
  if (demoChk) demoChk.checked = STATE.demoMode;

  // Restaurer les sélecteurs pédagogiques
  setVal('school-grade-select',     STATE.schoolGrade);
  setVal('difficulty-level-select', STATE.difficultyLevel);

  modal.classList.add('open');
};

function _restoreFileLabel(type, storageKey, elId) {
  const text = localStorage.getItem(storageKey);
  const el   = document.getElementById(elId);
  if (!el) return;
  if (text) {
    const name = localStorage.getItem(`${storageKey}_name`) || '✅ Fichier chargé';
    el.textContent = `✅ ${name}`;
    el.style.display = 'inline-block';
  } else {
    el.style.display = 'none';
  }
}

window.closeConfig = function () {
  document.getElementById('config-modal')?.classList.remove('open');
};

window.saveConfig = function () {
  const g  = id => document.getElementById(id)?.value?.trim() || '';

  // Mode démo
  const demoChk = document.getElementById('demo-toggle');
  if (demoChk) {
    STATE.demoMode = demoChk.checked;
    if (STATE.demoMode) localStorage.setItem('mr_demo', '1');
    else                localStorage.removeItem('mr_demo');
  }

  // Cadrage pédagogique — persistance
  const grade      = g('school-grade-select')     || 'terminale';
  const difficulty = g('difficulty-level-select') || 'moyen';
  STATE.schoolGrade     = grade;
  STATE.difficultyLevel = difficulty;
  localStorage.setItem('user_school_grade',     grade);
  localStorage.setItem('user_difficulty_level', difficulty);
  _saveAgentMemory();

  setLED('active');
  showToast(t('config_saved'));
  window.closeConfig();
};

/** Active / désactive le Mode Démo depuis n'importe quel endroit */
window.toggleDemoMode = function () {
  STATE.demoMode = !STATE.demoMode;
  if (STATE.demoMode) localStorage.setItem('mr_demo', '1');
  else                localStorage.removeItem('mr_demo');
  showToast(STATE.demoMode ? '🧪 Mode Démo ON — aucun appel API' : '🔌 Mode Démo OFF — appels API actifs');
  setLED('active');
  // Sync éventuelle checkbox si la modale est ouverte
  const chk = document.getElementById('demo-toggle');
  if (chk) chk.checked = STATE.demoMode;
};

/**
 * Synchronise le toggle HTML → STATE (live, avant "Sauvegarder").
 * Déclenché par onchange sur la checkbox #demo-toggle.
 */
window._syncDemoToggle = function (chkEl) {
  STATE.demoMode = chkEl.checked;
  if (STATE.demoMode) localStorage.setItem('mr_demo', '1');
  else                localStorage.removeItem('mr_demo');
  showToast(STATE.demoMode
    ? '🧪 Mode Démo ON — aucun appel API'
    : '🔌 Mode Démo OFF — appels API actifs');
  setLED('active');
};

/**
 * Injecte le texte brut simulant l'extraction PDF d'une annale
 * directement dans localStorage pour tester le parseur.
 * Appel : window.injectMockSujet()
 */
window.injectMockSujet = function () {
  const MOCK_PDF_TEXT = `CONCOURS MATHÉMATIQUES KANGOUROU — NIVEAU TERMINALE
Année 2024 · Sujet Officiel

EXERCICE 1 — Géométrie analytique (4 points)
Dans un repère orthonormé (O, i, j), on considère les points A(1 ; 2) et B(7 ; 10).
1°) Calculer la distance AB.
2°) Donner l'équation de la droite (AB).
3°) Trouver le point M de (AB) équidistant de A et B.

EXERCICE 2 — Suites (5 points)
Soit la suite (u_n) définie par u_0 = 3 et u_{n+1} = 2u_n - 1 pour tout n ≥ 0.
1°) Calculer u_1, u_2, u_3.
2°) Montrer que la suite (v_n) = u_n - 1 est géométrique.
3°) En déduire l'expression de u_n en fonction de n.
Réponse : u_n = 2^n + 1

EXERCICE 3 — Probabilités (4 points)
Une urne contient 3 boules rouges et 5 boules bleues.
On tire successivement 2 boules SANS remise.
P(2 rouges) = C(3,2)/C(8,2) = 3/28
P(couleurs différentes) = (3×5×2)/56 = 30/56 = 15/28

EXERCICE 4 — Fonctions et dérivées (7 points)
Soit f(x) = x³ - 6x² + 9x + 2 sur ℝ.
f'(x) = 3x² - 12x + 9 = 3(x-1)(x-3)
f est croissante sur ]-∞ ; 1] ∪ [3 ; +∞[
f est décroissante sur [1 ; 3]
Maximum local en x=1 : f(1) = 6
Minimum local en x=3 : f(3) = 2

BARÈME : /20 points — Durée : 2h00`;

  const MOCK_CORRECTION_TEXT = `CORRECTION OFFICIELLE — KANGOUROU 2024 TERMINALE

EX.1 : AB = sqrt((7-1)² + (10-2)²) = sqrt(36+64) = sqrt(100) = 10 unités.
Pente : m = (10-2)/(7-1) = 8/6 = 4/3. Droite : y = (4/3)x + 2/3.
Milieu M = ((1+7)/2 ; (2+10)/2) = (4 ; 6).

EX.2 : u_1=5, u_2=9, u_3=17. v_n = u_n - 1 → v_{n+1} = 2v_n, raison q=2.
v_n = v_0 × 2^n = 2 × 2^n = 2^{n+1}. Donc u_n = 2^{n+1} + 1.

EX.3 : Calculs confirmés par dénombrement. P(2R) = 3/28.

EX.4 : Tableau de variation confirmé. f(1) = 1-6+9+2 = 6. f(3) = 27-54+27+2 = 2.`;

  localStorage.setItem('user_annales_text',     MOCK_PDF_TEXT);
  localStorage.setItem('user_corrections_text', MOCK_CORRECTION_TEXT);
  localStorage.setItem('user_annales_text_name',     'mock_kangourou_2024.pdf');
  localStorage.setItem('user_corrections_text_name', 'mock_correction_2024.pdf');

  showToast('📄 Annale + correction mock injectées dans localStorage !');
  console.group('[MathRoyale] 📄 Mock Sujet injecté');
  console.log('Sujet   :', MOCK_PDF_TEXT.length, 'chars');
  console.log('Correction:', MOCK_CORRECTION_TEXT.length, 'chars');
  console.log('%c Copiez ce texte pour tester le parseur :', 'font-weight:bold; color:#f59e0b');
  console.log(MOCK_PDF_TEXT.slice(0, 500) + '\n[...tronqué — voir localStorage]');
  console.groupEnd();
};

/**
 * 🔴 CRASH TEST RUNNER — Parcourt les 8 défis Mock en séquence automatique.
 * Lance depuis la console : window.runCrashTest()
 * @param {number} delayMs  Pause entre deux défis (défaut 3000 ms)
 */
window.runCrashTest = async function (delayMs = 3000) {
  console.group('[MathRoyale] ⚡ CRASH TEST — KaTeX Stress Sequence');
  console.log(`Injection de ${MOCK_CHALLENGES.length} défis — pause ${delayMs}ms entre chacun.`);

  // Forcer le mode démo
  STATE.demoMode = true;
  localStorage.setItem('mr_demo', '1');
  STATE._mockIdx = 0;

  const total = MOCK_CHALLENGES.length;
  for (let i = 0; i < total; i++) {
    const mock = MOCK_CHALLENGES[i];
    // Alterner les modes pour couvrir les deux
    STATE.currentMode = (i % 3 === 0) ? 'kangourou'
                      : (i % 3 === 1) ? 'olympiades'
                      : 'progressif';

    console.log(
      `%c [${i + 1}/${total}] ${mock.answer_type.toUpperCase()} — ${mock.question.slice(0, 70)}…`,
      'color: #00f0ff'
    );

    window.renderChallenge(mock);
    showToast(`⚡ Crash Test ${i + 1}/${total} — ${mock.answer_type.toUpperCase()}`);

    if (i < total - 1) {
      await new Promise(r => setTimeout(r, delayMs));
    }
  }

  console.log('%c ✅ Crash Test terminé ! Vérifiez visuellement le rendu KaTeX.', 'font-weight:bold; color:#059669');
  console.groupEnd();
  showToast('✅ Crash Test completé — 8/8 défis rendus !');
};

function isProviderConfigured() {
  return true; // Authentification côté serveur
}

// ═══════════════════════════════════════════════════════════════════
// 7. PARSEURS DE FICHIERS (PDF.js + Mammoth)
// ═══════════════════════════════════════════════════════════════════

window.handleFileUpload = async function (type, inputEl) {
  const file = inputEl.files?.[0];
  if (!file) return;

  const storageKey = type === 'sujet' ? 'user_annales_text' : 'user_corrections_text';
  const filenameEl = document.getElementById(`${type}-filename`);

  if (filenameEl) {
    filenameEl.textContent = `⏳ ${file.name}`;
    filenameEl.style.display = 'inline-block';
  }

  try {
    let text = '';

    if (file.name.toLowerCase().endsWith('.pdf')) {
      text = await _parsePDF(file);
    } else if (file.name.toLowerCase().endsWith('.docx')) {
      text = await _parseDOCX(file);
    } else {
      throw new Error('Format non supporté (PDF ou DOCX uniquement)');
    }

    if (!text || text.trim().length < 5) {
      throw new Error('Le fichier semble vide ou illisible');
    }

    localStorage.setItem(storageKey, text);
    localStorage.setItem(`${storageKey}_name`, file.name);

    if (filenameEl) filenameEl.textContent = `✅ ${file.name}`;

    const toastKey = type === 'sujet' ? 'parse_ok_sujet' : 'parse_ok_correct';
    showToast(t(toastKey));

  } catch (err) {
    console.error('[MathRoyale] File parse error:', err);
    if (filenameEl) filenameEl.textContent = `❌ Erreur`;
    showToast(t('parse_error'));
  }
};

async function _parsePDF(file) {
  if (typeof pdfjsLib === 'undefined') {
    throw new Error('PDF.js non chargé');
  }
  const arrayBuffer = await file.arrayBuffer();
  const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;

  const pageTexts = [];
  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    const content = await page.getTextContent();
    const str = content.items.map(item => item.str || '').join(' ');
    pageTexts.push(str);
  }
  return pageTexts.join('\n');
}

async function _parseDOCX(file) {
  if (typeof mammoth === 'undefined') {
    throw new Error('Mammoth non chargé');
  }
  const arrayBuffer = await file.arrayBuffer();
  const result = await mammoth.extractRawText({ arrayBuffer });
  return result.value;
}

// ═══════════════════════════════════════════════════════════════════
// 8. PROMPT BUILDER — Multi-thème + Langue Forcée
// ═══════════════════════════════════════════════════════════════════

const LANG_NAMES = { fr: 'français', en: 'English', es: 'español' };
const MODE_LABELS = {
  kangourou:  'Concours Kangourou (niveau lycée)',
  olympiades: 'Olympiades Mathématiques Internationales (niveau avancé)',
  progressif: 'Entraînement Progressif Adaptatif',
};

// ──────────────────────────────────────────────────────────────────
// COGNITIVE MEMORY SUMMARY — Compression du profil Agent pour le prompt
// ──────────────────────────────────────────────────────────────────

/**
 * Extrait les 2 thèmes les plus faibles et le lore préféré de l'Agent.
 * Retourne une chaîne compacte injectée en tête du prompt système.
 */
function getCognitiveMemorySummary() {
  const mem = STATE.memory;
  if (!mem) return '';

  // Calculer les ratios de réussite pour chaque thème
  const scores = Object.entries(mem.topicScores || {})
    .filter(([, v]) => v.total > 0)
    .map(([topic, v]) => ({ topic, ratio: v.correct / v.total, total: v.total }))
    .sort((a, b) => a.ratio - b.ratio); // croissant : les pires en premier

  const weakTopics = scores.slice(0, 2).map(s => {
    const pct = Math.round(s.ratio * 100);
    return `${s.topic} (${pct}% success on ${s.total} questions)`;
  });

  // Récupérer les erreurs récentes
  const recentConcepts = (mem.recentMistakes || []).slice(0, 3)
    .map(m => m.concept || m.topic)
    .filter(Boolean);

  const weakStr    = weakTopics.length    > 0 ? weakTopics.join(', ')    : 'none identified yet';
  const mistakeStr = recentConcepts.length > 0 ? recentConcepts.join(', ') : 'none';
  const lore       = mem.preferredUniverse || 'NASA Deep Space';

  return `[AGENT MEMORY PROFILE] Weaknesses: ${weakStr} | Recent mistakes: ${mistakeStr} | Active Lore Preference: ${lore} | Task: Target these weaknesses using the active lore.`;
}

function buildNASAPrompt(mode, annalesText, correctionsText, trophies) {
  const lang        = LANG_NAMES[STATE.lang] || 'français';
  const modeLabel   = MODE_LABELS[mode]      || mode;
  const directive   = (_getMissionDirective() || '').slice(0, 200);

  // ── Seed aléatoire : force le modèle à générer quelque chose de différent à chaque appel
  const TOPICS = [
    'arithmétique et divisibilité', 'géométrie plane', 'algèbre et équations',
    'probabilités et combinatoire', 'suites numériques', 'géométrie analytique',
    'fonctions et limites', 'nombres premiers', 'trigonométrie', 'logique et dénombrement',
    'géométrie dans l\'espace', 'statistiques', 'théorie des graphes', 'optimisation',
  ];
  const topicSeed = TOPICS[Math.floor(Math.random() * TOPICS.length)];
  const nonce     = Math.random().toString(36).slice(2, 8); // token unique

  // ── Historique anti-répétition : les 6 dernières questions
  const historyBlock = STATE.questionHistory.length > 0
    ? `\n\n⚠️ QUESTIONS DÉJÀ POSÉES — NE PAS RÉPÉTER (ni le sujet, ni les valeurs, ni la structure) :\n${
        STATE.questionHistory.map((q, i) => `Q${i + 1}: ${q.slice(0, 80)}…`).join('\n')
      }`
    : '';

  // Instruction contextuelle selon la directive libre
  const universeInstruction = directive
    ? `Tu dois réécrire l'énoncé en l'immergeant à 100% dans l'univers et les consignes narratives suivantes, telles que demandées par l'élève : «${directive}». Si l'élève parle de personnages de jeux vidéo, fais-les interagir fidèlement avec leur lore et leurs mécaniques. Si c'est de la Formule 1, utilise la terminologie technique exacte du paddock. Sois précis et immersif.`
    : `Génère un problème mathématique ORIGINAL de niveau ${modeLabel} sur le thème : ${topicSeed}. Contexte narratif varié et inattendu.`;

  // Indice de difficulté adaptatif pour le mode Progressif
  let difficultyHint = '';
  if (mode === 'progressif') {
    const level =
      trophies < 800  ? 'élémentaire (lycée débutant)' :
      trophies < 1200 ? 'intermédiaire (lycée confirmé)' :
      trophies < 1800 ? 'difficile (prépa / olympiade régionale)' :
                        'expert (olympiade nationale / internationale)';
    difficultyHint = `\nNIVEAU ADAPTATIF : L'apprenant a ${trophies} trophées → difficulté ${level}.`;
  }

  // ── Cadrage pédagogique strict ────────────────────────────────────
  const GRADE_LABELS = {
    college_6e: '6ème (Collège)', college_5e: '5ème (Collège)',
    college_4e: '4ème (Collège)', college_3e: '3ème (Collège)',
    seconde: 'Seconde (Lycée)',   premiere: 'Première (Lycée)',
    terminale: 'Terminale (Lycée)', prepa_mpsi: 'MPSI / PCSI (Prépa)',
    prepa_mp:  'MP / PC / PSI (Prépa)', olympiade: 'Olympiades / Concours Nationaux',
  };
  const DIFF_LABELS = {
    facile:    'FACILE — Maîtrise des bases fondamentales du programme',
    moyen:     'MOYEN — Application standard du programme officiel',
    difficile: 'DIFFICILE — Raisonnement avancé, pièges de calcul, démonstrations',
    extreme:   'EXTRÊME — Niveau compétition, créativité mathématique maximale',
  };
  const gradeLabel = GRADE_LABELS[STATE.schoolGrade]     || STATE.schoolGrade;
  const diffLabel  = DIFF_LABELS[STATE.difficultyLevel]  || STATE.difficultyLevel;
  const pedagogicalDirective = `\n\nIl est STRICTEMENT INTERDIT d'utiliser des concepts ou notions non enseignés au niveau scolaire : ${STATE.schoolGrade}. Adapte la complexité des calculs au niveau : ${STATE.difficultyLevel}.`;

  // Contexte des annales (tronqué à 3000 / 2000 tokens)
  const annalesSection    = annalesText
    ? `\n\n═══ SUJET D'ANNALE OFFICIEL ═══\n${annalesText.slice(0, 3000)}`
    : '';
  const correctionSection = correctionsText
    ? `\n\n═══ CORRECTION OFFICIELLE ═══\n${correctionsText.slice(0, 2000)}`
    : '';

  // ── MemoryAgent : injection du profil cognitif en tête du prompt ──
  const memorySummary = getCognitiveMemorySummary();
  const memoryBlock   = memorySummary ? `${memorySummary}\n\n` : '';

  const modeFormatRule = mode === 'kangourou'
    ? "Si le mode est 'kangourou', l'énoncé du problème doit obligatoirement être de TAILLE MOYENNE (entre 3 et 5 lignes maximum). Il doit être 100% original, logique et synthétique, en respectant l'esprit authentique du Concours Kangourou."
    : "Si le mode est 'olympiades', génère un problème de niveau olympique international, mais formate-le obligatoirement en QCM avec exactement 4 options valides dans la structure JSON.";

  return `${memoryBlock}[NONCE:${nonce}] CONSIGNE DE LANGUE ABSOLUE : Tu dois obligatoirement rédiger l'intégralité de ta réponse (question ET toutes les options du QCM) STRICTEMENT dans la langue suivante : ${lang}. Ne mélange JAMAIS les langues. Si la langue est l'espagnol, tout doit être en espagnol. Si c'est l'anglais, tout en anglais. Si c'est le français, tout en français.${pedagogicalDirective}

Tu es un moteur de contextualisation mathématique de haut niveau, spécialisé dans les défis de niveau ${modeLabel}.${difficultyHint}

RÈGLES ABSOLUES :
1. ${annalesSection ? `Une annale est fournie ci-dessous : analyse le problème. CONSERVE EXACTEMENT les mêmes variables, les mêmes valeurs numériques et la même réponse. ${universeInstruction}` : universeInstruction}
2. FORMAT DE RÉPONSE OBLIGATOIRE : answer_type doit être EXCLUSIVEMENT "qcm" avec EXACTEMENT 4 options. Le type "numeric" (saisie libre) est SUPPRIMÉ pour les modes kangourou et olympiades. INTERDIT d'utiliser "numeric".
3. Un seul choix est correct parmi les 4 options. Les 3 distracteurs doivent être plausibles, proches de la bonne réponse, et correspondre à des erreurs de calcul courantes.
4. RÈGLE LATEX ABSOLUE : Écris du LaTeX pur avec un SEUL antislash. INTERDIT d'écrire des doubles antislashs (\\\\ est INTERDIT). Correct : \\frac{a}{b}, \\sqrt{x}, \\int. Utilise délimiteurs $...$ ou $$...$$.
5. Dans le champ "correct" : écris TOUJOURS le texte complet de la bonne option, copié EXACTEMENT depuis le tableau "options". Jamais une lettre seule (A, B, C, D interdits seuls).
6. ${modeFormatRule}
7. ORIGINALITÉ ABSOLUE : Invente des valeurs numériques et des scénarios complètement différents à chaque fois. Ne réutilise JAMAIS un énoncé déjà posé.
8. SÉCURITÉ DE SYNTAXE : Ferme obligatoirement chaque délimiteur mathématique '$' ouvert. N'écris jamais '\\%' avec un antislash, utilise toujours le symbole de texte plat '%' pour les pourcentages.


RÉPONSE OBLIGATOIRE — JSON STRICT (AUCUN texte avant, aucun texte après, AUCUN bloc markdown) :
{
  "question": "${mode === 'kangourou' ? 'Énoncé de taille moyenne (3-5 lignes), style Concours Kangourou, narratif et synthétique, LaTeX $...$…' : 'Énoncé Olympiades de haut niveau — AUCUNE LIMITE DE LONGUEUR. Aussi long et détaillé que nécessaire pour que le problème soit original, rigoureux et fasse vraiment réfléchir. Raisonnement multi-étapes, LaTeX $...$…'}",
  "answer_type": "qcm",
  "options": ["Valeur ou expression exacte A", "Valeur ou expression exacte B", "Valeur ou expression exacte C", "Valeur ou expression exacte D"],
  "correct": "Texte EXACT copié depuis options (pas une lettre seule)"
}${annalesSection}${correctionSection}`;
}

// ═══════════════════════════════════════════════════════════════════
// 9. APPEL IA VIA PROXY BACKEND (DashScope)
// ═══════════════════════════════════════════════════════════════════

// ─── Protection anti-429 : 1 requête à la fois + cooldown 3s ────────
const _aiRateLimiter = {
  busy:       false,
  lastCallAt: 0,
  COOLDOWN:   3000,
};

async function callAI(prompt) {
  // Mode Démo
  if (STATE.demoMode) return _getDemoChallenge();

  // ── 0. Anti-429 : verrou + cooldown ──────────────────────────────
  if (_aiRateLimiter.busy) {
    throw new Error('⏳ Une requête est déjà en cours — attends la réponse avant de relancer.');
  }
  const elapsed = Date.now() - _aiRateLimiter.lastCallAt;
  if (elapsed < _aiRateLimiter.COOLDOWN) {
    const wait = Math.ceil((_aiRateLimiter.COOLDOWN - elapsed) / 1000);
    throw new Error(`COOLDOWN:${wait}`);
  }
  _aiRateLimiter.busy = true;

  try {
    const directive = typeof _getMissionDirective === 'function' ? _getMissionDirective() : '';
    
    // Appel au nouveau backend local (Alibaba Cloud proxy)
    const res = await fetch('/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt, directive })
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      throw new Error(errorData.error || `Erreur Serveur HTTP ${res.status}`);
    }

    const json = await res.json();
    if (!json.ok || !json.data) {
      throw new Error(json.error || "Erreur lors de l'appel au serveur DashScope");
    }

    _aiRateLimiter.lastCallAt = Date.now();
    return json.data; // Le backend a déjà parsé et validé le JSON !

  } catch (err) {
    if (!err.message?.startsWith('COOLDOWN:')) {
      _aiRateLimiter.lastCallAt = Date.now();
    }
    throw err;
  } finally {
    _aiRateLimiter.busy = false;
  }
}


/**
 * Affiche un countdown visuel dans l'arène après un 429.
 * L'utilisateur voit le décompte exact et le bouton se réactive automatiquement.
 */
function _show429Countdown(seconds) {
  const mode = STATE.currentMode || 'kangourou';
  let remaining = seconds;

  function render() {
    const isReady = remaining <= 0;
    injectArena(`
      <div class="error-card" style="border-color:#f59e0b; background:#fffbeb;">
        <div style="font-size:48px;">${isReady ? '🚀' : '⏳'}</div>
        <div class="error-card__title" style="color:#92400e;">
          ${isReady ? 'Prêt !' : 'Quota temporairement atteint'}
        </div>
        <div class="error-card__msg" style="font-size:15px;">
          ${isReady
            ? 'Le quota est rechargé. Lance le défi !'
            : `OpenRouter limite les requêtes par minute selon le modèle.<br/>Recharge automatique dans <b style="font-size:24px;color:#92400e;">${remaining}s</b>`
          }
        </div>
        <div style="margin-top:14px;">
          <button class="validate-btn"
                  id="retry-after-429"
                  onclick="window._launchNextChallenge('${mode}')"
                  style="background:${isReady ? '#00b894' : '#ccc'};border-color:${isReady ? '#007a65' : '#999'};cursor:${isReady ? 'pointer' : 'not-allowed'};font-size:16px;"
                  ${isReady ? '' : 'disabled'}>
            ${isReady ? '🚀 Lancer le défi !' : `⏳ ${remaining}s…`}
          </button>
        </div>
      </div>
    `);
  }

  render();
  setLED('error');

  const interval = setInterval(() => {
    remaining--;
    if (remaining <= 0) {
      clearInterval(interval);
      remaining = 0;
      setLED(isProviderConfigured() ? 'active' : 'idle');
    }
    render();
  }, 1000);
}

/**
 * Compte à rebours automatique avant le prochain défi.
 * S'affiche quand le cooldown anti-429 est encore actif.
 * Lance startMode(mode) automatiquement à 0 — aucune action requise.
 */
function _showAutoCountdown(seconds, mode) {
  let n = seconds;
  setLED('loading');

  function renderCountdown() {
    const digits = ['0','1','2','3','4','5','6','7','8','9'];
    const color = n <= 3 ? '#00f0ff' : '#a3e635';
    injectArena(`
      <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;
                  padding:40px 20px;gap:16px;text-align:center;">
        <div style="font-size:14px;letter-spacing:.15em;color:#8899aa;text-transform:uppercase;">
          🚀 Prochain défi dans…
        </div>
        <div id="countdown-digit"
             style="font-size:96px;font-weight:900;line-height:1;
                    color:${color};
                    text-shadow:0 0 30px ${color}88;
                    animation:cdPop .35s ease-out;">
          ${n}
        </div>
        <div style="font-size:13px;color:#556677;">
          Préparation de la question en cours…
        </div>
        <div style="display:flex;gap:6px;margin-top:4px;">
          ${Array.from({length: seconds}, (_, i) =>
            `<div style="width:8px;height:8px;border-radius:50%;
                         background:${i < (seconds - n) ? color : '#1a2a3a'};
                         transition:background .3s;"></div>`
          ).join('')}
        </div>
      </div>
      <style>
        @keyframes cdPop {
          0%   { transform:scale(1.6); opacity:0; }
          60%  { transform:scale(.9);  opacity:1; }
          100% { transform:scale(1);   opacity:1; }
        }
      </style>
    `);
  }

  renderCountdown();

  const interval = setInterval(() => {
    n--;
    if (n <= 0) {
      clearInterval(interval);
      // Auto-lance le prochain défi seulement si aucune requête n'est en cours
      if (!_aiRateLimiter.busy) startMode(mode);
      return;
    }
    renderCountdown();
  }, 1000);
}

/**
 * Bascule en Mode Démo si la clé est invalide ou le quota épuisé.
 */
function _tryDemoFallback(errMsg) {
  // ⚠️ Ne pas capturer "configurer votre clé" ici — ce n'est pas une erreur d'auth,
  // c'est une erreur de configuration que l'utilisateur doit corriger lui-même.
  const isAuthErr = errMsg.includes('401')
                 || errMsg.includes('403')
                 || errMsg.toLowerCase().includes('unauthorized')
                 || errMsg.toLowerCase().includes('api keys are not supported');
  if (!isAuthErr) return false;

  STATE.demoMode = true;
  localStorage.setItem('mr_demo', '1');
  const chk = document.getElementById('demo-toggle');
  if (chk) chk.checked = true;
  setLED('active');

  injectArena(`
    <div class="error-card" style="border-color:#f59e0b; background:#fffbeb;">
      <div style="font-size:36px;">🔑</div>
      <div class="error-card__title" style="color:#92400e;">
        Clé API manquante — Mode Démo activé
      </div>
      <div class="error-card__msg">
        Ouvre <b>⚙️ Configuration</b> et colle ta clé OpenRouter (format <code>sk-or-v1-...</code>).
        <br/>En attendant, le Mode Démo est actif.
      </div>
      <div style="display:flex;gap:10px;justify-content:center;margin-top:12px;flex-wrap:wrap;">
        <button class="validate-btn" onclick="window.startKangourouMode()" style="background:#f59e0b;border-color:#92400e;">🦘 Défi Kangourou</button>
        <button class="validate-btn" onclick="window.openConfig()">⚙️ Config</button>
      </div>
    </div>
  `);
  showToast('🧪 Mode Démo activé — clé API manquante ou invalide', 5000);
  return true;
}

/* ─── Parseur JSON robuste ─── */
// ═══════════════════════════════════════════════════════════════════
// ANTI-ARTEFACTS LATEX — window.cleanMathText()
// Appelée juste avant le rendu KaTeX pour nettoyer les réponses IA
// ═══════════════════════════════════════════════════════════════════

/**
 * Nettoie le texte reçu de l'IA avant rendu KaTeX.
 * Supprime les doubles antislashs, les résidus markdown, les sauts
 * de ligne corrompus et normalise les délimiteurs LaTeX.
 */
window.cleanMathText = function (text) {
  if (!text) return '';

  let s = String(text);

  // ── BLINDAGE PRÉ-KATEX ────────────────────────────────────────────
  // A. Pourcentages : \% → % (l'IA échappe parfois à tort)
  s = s.replace(/\\%/g, '%');

  // B. Anti-bégaiement : formule identique dupliquée après \n ou <br>
  //    Capture: (\$[^$]+\$)\s*[\n<br>]+\s*\1  → garde une seule occurrence
  s = s.replace(/(\$[^$\n]+\$)(\s*(?:\n|<br\s*\/?>)\s*\1)+/g, '$1');

  // C. Équilibrage des délimiteurs $ (pare-balles KaTeX)
  //    Si le nombre de $ est impair → ajoute un $ final pour fermer
  const dollarCount = (s.match(/(?<!\\)\$/g) || []).length;
  if (dollarCount % 2 !== 0) {
    s += '$';
    console.warn('[cleanMathText] Délimiteur $ impair — fermeture automatique ajoutée');
  }

  return s
    // 1. Dé-doubler les antislashs LaTeX (\\frac → \frac)
    .replace(/\\\\/g, '\\')
    // 2. Normaliser les sauts de ligne littéraux \n
    .replace(/\\n/g, '\n')
    // 3. Supprimer les balises markdown gras/italique résiduelles
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/\*([^*]+)\*/g, '$1')
    .replace(/__([^_]+)__/g, '$1')
    // 4. Supprimer les blocs code fence résiduels
    .replace(/```[a-z]*\n?/gi, '')
    .replace(/```/g, '')
    // 5. S'assurer que les délimiteurs $...$ ne sont pas collés à des quotes HTML
    .replace(/&quot;\$/g, '$')
    .replace(/\$&quot;/g, '$');
};


function _parseJSON(text) {
  if (!text) throw new Error('Réponse vide de l\'IA');

  const s = text.trim();

  // Tentative directe
  try { return JSON.parse(s); } catch (_) {}

  // Extraction du premier bloc JSON
  const match = s.match(/\{[\s\S]*\}/);
  if (match) {
    try { return JSON.parse(match[0]); } catch (_) {}
  }

  // Extraction depuis code fence ```json ... ```
  const fence = s.match(/```(?:json)?\s*([\s\S]*?)```/);
  if (fence) {
    try { return JSON.parse(fence[1].trim()); } catch (_) {}
  }

  throw new Error('La réponse IA n\'est pas un JSON valide');
}

/* ─── Validation du schéma JSON ─── */
function _validateChallenge(data) {
  if (typeof data !== 'object' || data === null) throw new Error('JSON non-objet');
  if (!data.question)     throw new Error('Champ "question" manquant');
  if (!data.answer_type)  data.answer_type = 'numeric'; // fallback gracieux
  if (data.correct === undefined || data.correct === null) throw new Error('Champ "correct" manquant');

  // Filet de sécurité Olympiades : toujours forcer numeric même si le modèle désobéit
  if (STATE.currentMode === 'olympiades' && data.answer_type === 'qcm') {
    console.warn('[MathRoyale] Olympiades : QCM converti en numeric (règle absolue)');
    data.answer_type = 'numeric';
    data.options = [];
  }

  // Si QCM sans options valides → basculer silencieusement en numeric
  if (data.answer_type === 'qcm' && (!Array.isArray(data.options) || data.options.length < 2)) {
    console.warn('[MathRoyale] QCM sans options — bascule en numeric');
    data.answer_type = 'numeric';
    data.options = [];
  }
  return data;
}

// ═══════════════════════════════════════════════════════════════════
// 10. MODES DE JEU
// ═══════════════════════════════════════════════════════════════════

async function startMode(mode) {
  STATE.currentMode = mode;
  STATE.answered    = false;

  // ★ LABO D'ERREURS — Mode Progressif lit le journal des fautes
  if (mode === 'progressif') {
    const errorLog = JSON.parse(localStorage.getItem('math_agent_error_log') || localStorage.getItem('math_agent_memory') || '[]');

    if (errorLog.length === 0) {
      injectArena(`
        <div class="challenge-card" style="text-align:center; padding:32px 20px;">
          <div style="font-size:15px; color:var(--color-on-surface-variant); line-height:1.6;">
            Félicitations Commandant ! Aucun bug ni erreur détectée dans vos archives. Continuez à vous entraîner en modes Kangourou ou Olympiades ! 🚀
          </div>
        </div>
      `);
      setLED('active');
      return;
    }

    // Sélectionne le dernier défi échoué dans la liste
    const entry = errorLog[errorLog.length - 1];

    const recovered = {
      question:    entry.question || 'Question archivée',
      answer_type: entry.answer_type || 'numeric',
      options:     entry.options || [],
      correct:     entry.correctAnswer || entry.correct || '',
      _fromErrorLog: true,
    };

    STATE.currentChallenge = recovered;
    STATE.answered         = false;
    setLED('active');

    window.renderChallenge(recovered);
    return;
  }

  if (STATE.demoMode) {
    _showLoading();
    setLED('loading');
    await new Promise(r => setTimeout(r, 600));
    const mock = MOCK_CHALLENGES[STATE._mockIdx % MOCK_CHALLENGES.length];
    STATE._mockIdx++;
    STATE.currentChallenge = mock;
    STATE.answered         = false;
    setLED('active');
    showToast(`🧪 Mock #${STATE._mockIdx}/${MOCK_CHALLENGES.length} — Mode Démo`);
    window.renderChallenge(mock);
    return;
  }

  // ★ Vérification clé API AVANT de lancer le spinner
  if (!isProviderConfigured()) {
    injectArena(`
      <div class="error-card" style="border-color:#f59e0b; background:#fffbeb;">
        <div style="font-size:36px;">🔑</div>
        <div class="error-card__title" style="color:#92400e;">Clé API manquante</div>
        <div class="error-card__msg">
          Ouvre <b>⚙️ Configuration</b> et colle ta clé OpenRouter<br/>
          (format <code>sk-or-v1-...</code> depuis <a href="https://openrouter.ai/keys" target="_blank" style="color:#0369a1;">openrouter.ai/keys</a>)
        </div>
        <div style="margin-top:12px;">
          <button class="validate-btn" onclick="window.openConfig()" style="background:#f59e0b;border-color:#92400e;">⚙️ Configurer maintenant</button>
        </div>
      </div>
    `);
    setLED('idle');
    return;
  }

  _showLoading();
  setLED('loading');

  try {
    const annalesText    = localStorage.getItem('user_annales_text')    || '';
    const correctionsText= localStorage.getItem('user_corrections_text') || '';
    const prompt         = buildNASAPrompt(mode, annalesText, correctionsText, STATE.trophies);

    const raw  = await callAI(prompt);
    const data = _validateChallenge(raw);

    STATE.currentChallenge = data;
    STATE.answered         = false;

    // ── Enregistrer la question dans l'historique anti-répétition ──
    if (data.question) {
      STATE.questionHistory.unshift(data.question);
      if (STATE.questionHistory.length > 6) STATE.questionHistory.pop();
    }

    setLED('active');
    window.renderChallenge(data);

  } catch (err) {
    console.error('[MathRoyale] AI Error:', err);

    // ── Cooldown actif → compte à rebours automatique ─────────────
    if (err.message?.startsWith('COOLDOWN:')) {
      const wait = parseInt(err.message.split(':')[1]) || 5;
      _showAutoCountdown(Math.min(wait, 9), mode);
      return;
    }


    // ── Erreur d'auth permanente → fallback démo ──────────────────
    if (_tryDemoFallback(err.message || '')) return;

    setLED('error');
    _showError(err.message);
    showToast(`${t('ai_error_prefix')} ${err.message}`, 4000);
  }
}

window.startKangourouMode  = function () { showToast(t('mode_kangourou'));  startMode('kangourou'); };
window.startOlympiadesMode = function () { showToast(t('mode_olympiades')); startMode('olympiades'); };
window.startProgressifMode = function () { showToast(t('mode_progressif')); startMode('progressif'); };

// Exposé pour le onclick du bouton "Défi Suivant"
window._launchNextChallenge = function (mode) { startMode(mode); };

// ══════════════════════════════════════════════════════════════════
// MOTEUR DE VARIANTES — Mode Labo d'Erreurs
// Génère un problème conceptuellement identique avec un nouvel univers
// ══════════════════════════════════════════════════════════════════
window.generateProgressiveVariant = async function() {
  const challenge = STATE.currentChallenge;
  if (!challenge || !challenge.question) return;

  _showLoading();
  setLED('loading');

  const variantPrompt = `Voici un défi que l'élève a échoué : ${challenge.question}. Ta mission est de générer un problème STRICTEMENT IDENTIQUE en termes de concept mathématique de fond, de compétences requises et de niveau de difficulté. Cependant, tu dois impérativement changer l'univers narratif (Lore), modifier toutes les valeurs numériques et créer de nouvelles options de réponse valides. Conserve le schéma JSON strict de l'application.`;

  try {
    const raw = await callAI(variantPrompt);
    const data = _validateChallenge(raw);
    data._fromErrorLog = true;
    STATE.currentChallenge = data;
    STATE.answered = false;
    setLED('active');
    window.renderChallenge(data);
  } catch (err) {
    setLED('error');
    _showError(err.message);
  }
};

// ═══════════════════════════════════════════════════════════════════
// 11. RENDU ADAPTATIF DES DÉFIS
// ═══════════════════════════════════════════════════════════════════

window.renderChallenge = function (data) {
  STATE.currentChallenge = data;
  STATE.answered         = false;

  /* ── Badges du header ── */
  const modeColors = {
    kangourou:  'challenge-badge',
    olympiades: 'challenge-badge challenge-badge--blue',
    progressif: 'challenge-badge challenge-badge--orange',
  };
  const modeEmojis = { kangourou: '🦘', olympiades: '🏅', progressif: '📈' };
  const badgeClass = modeColors[STATE.currentMode] || 'challenge-badge';
  const badgeEmoji = modeEmojis[STATE.currentMode] || '🚀';

  const modeLabelShort = {
    kangourou:  'Kangourou',
    olympiades: 'Olympiades',
    progressif: `Progressif · ${STATE.trophies}🏆`,
  }[STATE.currentMode] || 'NASA';

  /* ── Stats bar ── */
  const errors = JSON.parse(localStorage.getItem('math_agent_error_log') || '[]').length;
  const statsHtml = `
    <div class="stats-bar">
      <div class="stat-chip">🏆 ${STATE.trophies}</div>
      <div class="stat-chip">✅ ${STATE.sessionCorrect} / ${STATE.sessionTotal}</div>
      ${errors > 0
        ? `<div class="stat-chip stat-chip--danger">❌ ${errors} ${t('error_log_count')}</div>`
        : ''}
    </div>`;

  /* ── Zone de réponse ── */
  let answerHtml = '';

  // Stocker les options dans STATE pour les récupérer par index (évite d'échapper les backslashes LaTeX)
  STATE._currentOptions = Array.isArray(data.options) ? [...data.options] : [];

  if (data.answer_type === 'qcm' && STATE._currentOptions.length >= 2) {
    const buttons = STATE._currentOptions.map((opt, i) => {
      const letter = String.fromCharCode(65 + i);
      return `<button class="qcm-btn" id="qcm-opt-${i}"
                      data-idx="${i}"
                      onclick="window._checkQCM(this)"
                      aria-label="Option ${letter}">${opt}</button>`;
    }).join('');

    answerHtml = `<div class="qcm-grid">${buttons}</div>`;

    if (STATE.currentMode === 'olympiades') {
      answerHtml = `
  <div id="olympiades-reveal-zone" style="margin-top: 14px; text-align: center;">
    <button type="button" class="next-btn" id="btn-reveal-olympiades"
            style="background: #0f172a; border: 2px solid #a855f7; color: #fff; padding: 10px 20px; cursor: pointer; font-weight: bold;"
            onclick="document.getElementById('olympiades-options-box').style.display='grid'; this.style.display='none';">
      👁️ J'ai terminé mes calculs — Afficher les options
    </button>
    <div id="olympiades-options-box" style="display: none;">
      ${answerHtml}
    </div>
  </div>
  `;
    } else if (STATE.currentMode === 'progressif') {
      answerHtml = `
  ${answerHtml}
  <button type="button" class="next-btn" style="background: #1e1b4b; border-color: #4f46e5; margin-top: 14px;" onclick="window.generateProgressiveVariant()">
    🔄 Générer une variante similaire
  </button>
  `;
    }

  } else {
    answerHtml = `
      <div class="numeric-area">
        <input type="number" id="numeric-answer" class="numeric-input"
               placeholder="${t('enter_answer')}"
               aria-label="Réponse numérique"
               step="any" />
        <button class="validate-btn" onclick="window._checkNumeric()">${t('validate')}</button>
      </div>`;
  }

  // ★ BLINDAGE KaTeX : on utilise textContent puis innerHTML pour la question
  //   afin que KaTeX puisse interpréter les délimiteurs $...$ dans le texte brut
  injectArena(`
    ${statsHtml}
    <div class="challenge-card">
      <div class="challenge-badge-row">
        <span class="${badgeClass}">🚀 The NASA Program</span>
        <span class="${badgeClass}">${badgeEmoji} ${esc(modeLabelShort)}</span>
        ${STATE.demoMode
          ? '<span class="challenge-badge demo-badge-pulse" style="background:#f59e0b;border-color:#92400e;color:#fff;">🧪 DÉMO</span>'
          : ''}
      </div>
      <div class="challenge-question" id="challenge-text">${_safeLatex(window.cleanMathText(data.question))}</div>
      <div id="answer-area">${answerHtml}</div>
      <div id="result-area"></div>
    </div>
  `);

  /* ── Rendre KaTeX dans les boutons QCM (innerHTML déjà posé) ── */
  tryRenderMath();

  /* ── Auto-focus & Enter pour numéric ── */
  if (data.answer_type === 'numeric') {
    setTimeout(() => {
      const inp = document.getElementById('numeric-answer');
      inp?.focus();
      inp?.addEventListener('keydown', e => {
        if (e.key === 'Enter') window._checkNumeric();
      });
    }, 250);
  }
};

/**
 * Prépare une chaîne pour l'injection innerHTML avec LaTeX préservé.
 * Remplace les sauts de ligne \n par <br> et préserve les délimiteurs $.
 * N'échappe PAS les caractères spéciaux LaTeX (\, {, }) qui doivent rester.
 */
function _safeLatex(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    // ré-autoriser $ pour KaTeX après échappement HTML
    .replace(/\\n|\n/g, '<br />');
}

// ═══════════════════════════════════════════════════════════════════
// 12. VÉRIFICATION DES RÉPONSES & RÉCOMPENSES
// ═══════════════════════════════════════════════════════════════════

// ★ Nouvelle signature : reçoit l'élément bouton, récupère l'option par data-idx
window._checkQCM = function (btnEl) {
  if (STATE.answered) return;
  STATE.answered = true;
  STATE.sessionTotal++;

  const idx         = parseInt(btnEl.dataset.idx ?? '0', 10);
  const selectedOpt = STATE._currentOptions[idx] ?? '';
  const rawCorrect  = STATE.currentChallenge?.correct ?? '';

  // ── Résolution des réponses en format lettre (A/B/C/D) ──
  // Si l'IA retourne "B" au lieu du texte complet, on mappe vers l'option
  let correct = rawCorrect;
  const letterMap = { a: 0, b: 1, c: 2, d: 3, e: 4 };
  const letterMatch = rawCorrect.trim().match(/^([A-Ea-e])\.?$/);
  if (letterMatch) {
    const letterIdx = letterMap[letterMatch[1].toLowerCase()];
    if (letterIdx !== undefined && STATE._currentOptions[letterIdx]) {
      correct = STATE._currentOptions[letterIdx];
    }
  }

  const isCorrect = normalizeAnswer(selectedOpt) === normalizeAnswer(correct);

  // Coloration de tous les boutons
  document.querySelectorAll('.qcm-btn').forEach(btn => {
    btn.disabled = true;
    const btnIdx  = parseInt(btn.dataset.idx ?? '-1', 10);
    const btnOpt  = STATE._currentOptions[btnIdx] ?? '';
    if (normalizeAnswer(btnOpt) === normalizeAnswer(correct)) {
      btn.classList.add('correct');
    }
  });

  if (isCorrect) {
    _handleCorrect();
  } else {
    btnEl.classList.add('wrong');
    _handleWrong(correct, selectedOpt);
  }
};

window._checkNumeric = function () {
  if (STATE.answered) return;
  const inp     = document.getElementById('numeric-answer');
  const userVal = inp?.value?.trim();
  if (!userVal) { inp?.focus(); return; }

  STATE.answered = true;
  STATE.sessionTotal++;
  if (inp) inp.disabled = true;

  const correct   = STATE.currentChallenge?.correct;
  const isCorrect = normalizeAnswer(userVal) === normalizeAnswer(correct);

  if (inp) {
    inp.style.borderColor  = isCorrect ? '#00f0ff'                : 'var(--color-error)';
    inp.style.background   = isCorrect ? '#003d4f'                : '#2a0a0a';
    inp.style.color        = isCorrect ? '#00f0ff'                : 'var(--color-error)';
  }

  if (isCorrect) {
    _handleCorrect();
  } else {
    _handleWrong(correct, userVal);
  }
};

function _handleCorrect() {
  STATE.sessionCorrect++;
  STATE.trophies += 10;
  updateTrophyDisplay(true);
  showToast(t('trophy_earned'));
  setLED('active');
  _showResult(true, STATE.currentChallenge?.correct);

  // ── MemoryAgent : Learning Loop — mise à jour mémoire sur succès ──
  const topic = _detectCurrentTopic();
  if (topic) {
    // Initialiser si nouveau thème
    if (!STATE.memory.topicScores[topic]) {
      STATE.memory.topicScores[topic] = { correct: 0, total: 0 };
    }
    STATE.memory.topicScores[topic].correct++;
    STATE.memory.topicScores[topic].total++;

    // Streak consécutif
    STATE.memory.consecutiveStreak[topic] = (STATE.memory.consecutiveStreak[topic] || 0) + 1;

    // ── SMART DECAY (Algorithme d'oubli) ──
    // Si 3 réussites d'affilée → concept maîtrisé : effacer les erreurs de ce thème
    if (STATE.memory.consecutiveStreak[topic] >= 3) {
      const before = STATE.memory.recentMistakes.length;
      STATE.memory.recentMistakes = STATE.memory.recentMistakes.filter(m => m.topic !== topic);
      if (STATE.memory.recentMistakes.length < before) {
        console.log(`[MemoryAgent] 🧹 Smart Decay : "${topic}" maîtrisé — erreurs oubliées.`);
        showToast(`🧠 Agent : "${topic}" maîtrisé — oublié de la mémoire d'erreurs !`, 3000);
      }
    }
  }
  _saveAgentMemory();
}

function _handleWrong(correct, wrongAnswer) {
  setLED('error');
  logError(
    STATE.currentChallenge?.question,
    wrongAnswer,
    correct,
    STATE.currentMode
  );
  showToast(`${t('wrong_answer')} ${String(correct)}`);
  _showResult(false, correct);
  setTimeout(() => setLED(isProviderConfigured() ? 'active' : 'idle'), 2500);

  // ── MemoryAgent : Learning Loop — mise à jour mémoire sur échec ──
  const topic = _detectCurrentTopic();
  if (topic) {
    // Initialiser si nouveau thème
    if (!STATE.memory.topicScores[topic]) {
      STATE.memory.topicScores[topic] = { correct: 0, total: 0 };
    }
    STATE.memory.topicScores[topic].total++;

    // Réinitialiser la streak de ce thème
    STATE.memory.consecutiveStreak[topic] = 0;

    // Ajouter à recentMistakes avec FIFO (max 5)
    STATE.memory.recentMistakes.push({ topic: topic, timestamp: Date.now() });
    if (STATE.memory.recentMistakes.length > 5) {
      STATE.memory.recentMistakes.shift(); // éviction du plus ancien (FIFO)
    }
    console.log(`[MemoryAgent] 📝 Erreur enregistrée : "${topic}" — recentMistakes:`, STATE.memory.recentMistakes.length);
  }
  _saveAgentMemory();
}

/**
 * Détecte le thème mathématique actuel à partir du prompt/mode.
 * Analyse les mots-clés de la question courante pour classifier le sujet.
 */
function _detectCurrentTopic() {
  const question = (STATE.currentChallenge?.question || '').toLowerCase();
  const mode     = STATE.currentMode || '';

  // Correspondances mots-clés → thèmes de la mémoire
  const keywordMap = [
    { theme: 'probabilités',  keys: ['probabilité', 'probability', 'combinatoire', 'urne', 'tirage', 'permutation', 'arrangement', 'combinaison'] },
    { theme: 'géométrie',     keys: ['triangle', 'cercle', 'angle', 'aire', 'périmètre', 'rayon', 'diamètre', 'vecteur', 'droite', 'plan', 'théorème de thalès', 'pythagore', 'trapèze', 'rectangle', 'losange'] },
    { theme: 'algèbre',       keys: ['équation', 'inéquation', 'polynôme', 'racine', 'facteur', 'discriminant', 'système', 'matrice', 'déterminant'] },
    { theme: 'suites',        keys: ['suite', 'récurrence', 'arithmétique', 'géométrique', 'terme', 'raison', 'convergence', 'limite de suite'] },
    { theme: 'arithmétique',  keys: ['entier', 'divisibilité', 'premier', 'pgcd', 'ppcm', 'modulo', 'congruence', 'chiffre'] },
    { theme: 'trigonométrie', keys: ['sin', 'cos', 'tan', 'sinus', 'cosinus', 'tangente', 'radian', 'angle'] },
    { theme: 'logique',       keys: ['raisonnement', 'démonstration', 'preuve', 'absurde', 'implication', 'équivalence', 'récurrence'] },
  ];

  for (const { theme, keys } of keywordMap) {
    if (keys.some(k => question.includes(k))) return theme;
  }

  // Fallback sur le mode de jeu
  if (mode === 'olympiades') return 'algèbre';
  if (mode === 'kangourou')  return 'arithmétique';
  return null;
}

function _showResult(isCorrect, correct) {
  const resultArea = document.getElementById('result-area');
  if (!resultArea) return;

  const feedbackHtml = isCorrect
    ? `<div class="result-feedback success">🎯 ${t('correct_answer')}</div>`
    : `<div class="result-feedback error">❌ ${t('wrong_answer')} <strong>${esc(String(correct))}</strong></div>`;

  const mode = STATE.currentMode;

  // Bouton "Variante IA" uniquement en mode Labo d'Erreurs
  const variantBtnHtml = mode === 'progressif'
    ? `<button class="next-btn" onclick="window.generateProgressiveVariant()"
         style="background:linear-gradient(135deg,#7c3aed,#a855f7);border-color:#7c3aed;">
         🔄 Générer une variante similaire
       </button>`
    : '';

  const nextBtnHtml = `
    <button class="next-btn" onclick="window._launchNextChallenge('${mode}')">
      <span>🚀</span> ${t('next_challenge')}
    </button>`;

  resultArea.innerHTML = feedbackHtml + nextBtnHtml + variantBtnHtml;
  tryRenderMath();
}

// ═══════════════════════════════════════════════════════════════════
// 13. ÉTATS VISUELS (Loading / Error / Welcome)
// ═══════════════════════════════════════════════════════════════════

function _showLoading() {
  injectArena(`
    <div class="loading-card">
      <span class="loading-rocket" role="img" aria-label="Fusée">🚀</span>
      <div class="loading-title">${t('loading_title')}</div>
      <div class="loading-sub">${t('loading_sub')}</div>
      <div>
        <div class="skeleton-line" style="width:80%;"></div>
        <div class="skeleton-line" style="width:60%;"></div>
        <div class="skeleton-line" style="width:70%;"></div>
        <div class="skeleton-line" style="width:50%;"></div>
      </div>
    </div>
  `);
}

function _showError(msg) {
  injectArena(`
    <div class="error-card">
      <div style="font-size:40px;">🛸</div>
      <div class="error-card__title">Erreur de connexion IA</div>
      <div class="error-card__msg">${esc(msg)}</div>
      <button class="btn-welcome" onclick="window.openConfig()" style="max-width:220px; margin:0 auto;">
        ⚙️ Configurer l'API
      </button>
    </div>
  `);
}

function _showWelcome() {
  const steps = [
    t('step1'), t('step2'), t('step3'), t('step4'),
  ];
  const stepsHtml = steps.map((s, i) => `
    <div class="step-item">
      <span class="step-item__num">${i + 1}</span>
      <span class="step-item__text">${esc(s)}</span>
    </div>`).join('');

  injectArena(`
    <div class="welcome-card">
      <div class="welcome-card__hero" role="img" aria-label="Fusée">🚀</div>
      <div class="welcome-card__title">${t('welcome_title')}</div>
      <div class="welcome-card__sub">${esc(t('welcome_sub'))}</div>
      <div class="steps-list">${stepsHtml}</div>

      <!-- Bouton Demo DIRECT — sans API -->
      <button class="btn-welcome" id="btn-demo-direct"
        style="background:#f59e0b; border-color:#92400e; margin-bottom:10px;"
        onclick="window._activateDemoAndStart()">
        🧪 Démarrer en Mode Démo (sans API)
      </button>

      <button class="btn-welcome" onclick="window.openConfig()"
        style="background:var(--color-primary);">
        ${t('start_config')}
      </button>
    </div>
  `);
}

/** Lance directement le mode démo sans passer par Config */
window._activateDemoAndStart = function () {
  STATE.demoMode = true;
  localStorage.setItem('mr_demo', '1');
  const chk = document.getElementById('demo-toggle');
  if (chk) chk.checked = true;
  setLED('active');
  showToast('🧪 Mode Démo activé — aucun appel API !');
  // Lancer immédiatement un défi Kangourou demo
  setTimeout(() => startMode('kangourou'), 400);
};

/**
 * Diagnostic complet — appelle depuis la console : window.diagnose()
 * Affiche l'état de toutes les clés, du mode démo et de KaTeX.
 */
window.diagnose = function () {
  const keys = {
    gemini_user:  localStorage.getItem('user_gemini_key')  ? '✅ Présente (user_gemini_key)' : '❌ Absente',
    gemini_compat: localStorage.getItem('ai_gemini_key')  ? '✅ Présente (ai_gemini_key)'   : '❌ Absente',
  };
  console.group('[MathRoyale] 🔬 DIAGNOSTIC');
  console.log('Clés API :', keys);
  console.log('Rate Limiter :', { busy: _aiRateLimiter.busy, cooldownRestant: Math.max(0, _aiRateLimiter.COOLDOWN - (Date.now() - _aiRateLimiter.lastCallAt)) + 'ms' });
  console.log('Mode Démo :', STATE.demoMode ? '✅ ON' : '❌ OFF');
  console.log('KaTeX ready :', STATE.katexReady ? '✅' : '❌');
  console.log('Trophées :', STATE.trophies);
  console.log('Langue :', STATE.lang);
  console.groupEnd();
  showToast('🔬 Diagnostic affiché dans la Console (F12)');
};

// ═══════════════════════════════════════════════════════════════════
// 14. INITIALISATION
// ═══════════════════════════════════════════════════════════════════

function init() {
  /* Langue */
  const savedLang = localStorage.getItem('mr_lang') || 'fr';
  STATE.lang = savedLang;
  const langSel = document.getElementById('lang-selector');
  if (langSel) langSel.value = savedLang;
  applyTranslations();
  _updateMissionPlaceholder(savedLang);

  /* Directive de mission — restaurer + compteur de caractères */
  const ta      = document.getElementById('mission-directive');
  const counter = document.getElementById('mission-char-count');
  if (ta) {
    const saved = localStorage.getItem('mr_mission_directive') || '';
    ta.value = saved;
    if (counter) counter.textContent = `${saved.length} / 400`;
    ta.addEventListener('input', () => {
      const len = ta.value.length;
      if (counter) counter.textContent = `${len} / 400`;
      localStorage.setItem('mr_mission_directive', ta.value.trim());

      // ── MemoryAgent : extraction autonome du lore préféré ──
      // Si l'utilisateur saisit un univers narratif, l'Agent le mémorise cross-session
      if (ta.value.trim().length > 10) {
        STATE.memory.preferredUniverse = ta.value.trim().slice(0, 80);
        _saveAgentMemory();
      }
    });
  }

  /* Dark mode */
  if (localStorage.getItem('mr_dark') === '1') {
    document.documentElement.setAttribute('data-theme', 'dark');
    const btn = document.getElementById('dark-toggle');
    if (btn) btn.textContent = '☀️';
  }

  /* Trophées */
  STATE.trophies = parseInt(localStorage.getItem('mr_trophies') || '0');
  updateTrophyDisplay();

  /* LED */
  setLED(isProviderConfigured() || STATE.demoMode ? 'active' : 'idle');

  /* Fermeture modale au clic sur le backdrop */
  document.getElementById('config-modal')?.addEventListener('click', e => {
    if (e.target.id === 'config-modal') window.closeConfig();
  });

  /* KaTeX — écoute l'événement ET vérifie si déjà chargé */
  if (window.renderMathInElement) {
    STATE.katexReady = true;
  }
  document.addEventListener('katex-ready', () => {
    STATE.katexReady = true;
  });

  /* Écran d'accueil */
  _showWelcome();
}

/* Lancer apr�s le chargement du DOM */
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
