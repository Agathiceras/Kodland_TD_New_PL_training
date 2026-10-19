/* =====================================================================
   PARALLEL LESSONS TRAINING — ENGINE
   All the texts live in content/<lang>.js (window.PL_CONTENT).
   Translators never need to open this file.
   ===================================================================== */
'use strict';
const C = window.PL_CONTENT, U = C.ui, S = C.s;

/* ---------- Config (not translated) ---------- */
const CONFIG = {
  PASS: 0.7,                    // 70% to pass each module check
  CLASSROOM_SIM: 'https://agathiceras.github.io/PL_simulation_test/Classroom_Simulator.html',
  BO_SIM: 'BO_simulator/Simulacion_BO_PL.html',
  SIM_CODE: 'PL-SIM-4827',      // shown at the end of the Classroom simulator
  BO_CODE: 'PL-BO-3815',        // shown at the end of the BO simulator
  DEV_CODE: 'PLDEV'             // Developer options (not case-sensitive)
};
const PKEY = 'kl-newpl-progress-v2';
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--){ const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
// Opens the simulators in the same language as the training (BO: en/pl/tr/it · Classroom: en/it/pl)
const withLang = url => url + (url.indexOf('?') >= 0 ? '&' : '?') + 'lang=' + encodeURIComponent(C.lang || 'en');
const norm = s => String(s || '').trim().toUpperCase().replace(/\s+/g, '');
const fmt = (s, o) => String(s).replace(/\{(\w+)\}/g, (m, k) => (k in o ? o[k] : m));

/* ---------- Progress (localStorage) ---------- */
let P = {};
function loadP(){ try { P = JSON.parse(localStorage.getItem(PKEY) || '{}') || {}; } catch(e){ P = {}; } }
function saveP(){ try { localStorage.setItem(PKEY, JSON.stringify(P)); } catch(e){} }
const passed = id => !!(P[id] && P[id].passed);
function setResult(id, pct, ok){ const o = P[id] || {}; P[id] = Object.assign(o, { passed: ok || !!o.passed, score: Math.max(pct, o.score || 0) }); saveP(); }
const flag = k => !!(P.flags && P.flags[k]);
function setFlag(k, v){ P.flags = P.flags || {}; P.flags[k] = v; saveP(); }

/* =========================================================
   MODULES — structure only (texts come from C.modules)
   check: quiz | tf | chat | qa | sim      needs: a flag that must be set before the check opens
   ========================================================= */
const MODULES = [
  { id:'m1', e:'🌟', color:'#cdf24a', check:'quiz', needs:'metAll', sections:[['what','🧩'],['runs','📋'],['time','⏱️'],['why','🚀'],['students','🧒']] },
  { id:'m2', e:'🗺️', color:'#ffd34d', check:'tf', sections:[['structure','🗺️'],['matter','⭐'],['opening','🎬'],['closing','🏁']] },
  { id:'m3', e:'🧭', color:'#ec5fa6', check:'chat', sections:[['role','🧭'],['mindset','🌱'],['feedback','💬'],['notes','📝'],['first','🚀']] },
  { id:'m4', e:'🖥️', color:'#5b8cff', check:'quiz', needs:'boCode', sections:[['bo','🗂️'],['tnotes','📒'],['rules','📏']] },
  { id:'m5', e:'❓', color:'#3fd16b', check:'qa', sections:[['qa','❓']] },
  { id:'m6', e:'🎮', color:'#f5a623', check:'sim', sections:[] }
].map((m, i) => Object.assign({}, C.modules[m.id], m, { n:i + 1 }));   // structure wins over same-named content keys (needs, sections)
const TOTAL = MODULES.length;
const QA = C.qa;
const unlocked = m => { const i = MODULES.indexOf(m); return i <= 0 || passed(MODULES[i - 1].id); };
const coreDone = () => MODULES.every(m => passed(m.id));

/* Stage visuals (texts come from C.stages) */
const STAGE_LOOK = [['🔌','#3e5bb5'],['😊','#3e5bb5'],['📓','#3e5bb5'],['🎯','#2f8a4f'],['🎬','#b36b12'],['🪞','#b36b12'],['📌','#b36b12']];
const STAGES = C.stages.map((s, i) => Object.assign({ e:STAGE_LOOK[i][0], c:STAGE_LOOK[i][1] }, s));
const NOTE_TIMES = [0, 10, 20];

/* =========================================================
   BUILDERS
   ========================================================= */
const callout = (type, icon, html) => `<div class="callout ${type}"><span class="ci">${icon}</span><div>${html}</div></div>`;
const fig = (src, alt, cap) => `<figure class="fig"><img src="${src}" alt="${alt}" data-zoom>${cap ? `<figcaption>${cap}</figcaption>` : ''}</figure>`;
const flip = (e, t, back) => `<div class="flip" data-flip><div class="in"><div class="fc front"><span class="fe">${e}</span><b>${t}</b><small>${U.flipHint}</small></div><div class="fc back">${back}</div></div></div>`;
const trio = cards => `<div class="trio">${cards.map(c => `<div class="ti"><span class="tie">${c[0]}</span><h3>${c[1]}</h3><p>${c[2]}</p></div>`).join('')}</div>`;
// Google Drive video (or any embeddable link) + the subtitles reminder underneath
const driveVideo = (src, title, note) => `<div class="video"><iframe src="${src}" allow="autoplay; fullscreen" allowfullscreen loading="lazy" title="${title}"></iframe></div>
  <p class="subs">💬 ${note}</p>`;
function videoBlock(src, intro, title, note){ return `<p class="p">${intro}</p>${driveVideo(src, title, note)}`; }
function flowHTML(id, title, items, phases){
  let n = 0;
  const cells = items.map((s, i) => s.k === 'indep'
    ? `<div class="indep" data-st="${i}"><span class="ib">${s.e}</span><span class="sn">${s.t}</span>${s.tag ? `<span class="ftag">${s.tag}</span>` : ''}</div>`
    : `<div class="stg ${s.k}" data-st="${i}"><span class="si">${s.e}</span><span class="sx">${++n}</span><span class="sn">${s.t}</span>${s.tag ? `<span class="ftag">${s.tag}</span>` : ''}</div>`).join('');
  return `<div class="flow flow-${id}" data-flow>
    <div class="flow-title">${title}</div>
    <div class="flow-body"><div class="line"><i></i></div><div class="flow-row">${cells}</div></div>
    <div class="phases" style="grid-template-columns:${phases.map(p => p[2] + 'fr').join(' ')}">${phases.map(p => `<span class="${p[0]}">${p[1]}</span>`).join('')}</div>
  </div>`;
}
const codeBox = id => {
  const label = id === 'simCode' ? U.codeLabelSim : U.codeLabelBO;
  return `<div class="codebox ${flag(id) ? 'ok' : ''}" data-codebox="${id}">
  ${flag(id) ? `<span class="cb-ok">${fmt(U.codeOk, { label })}</span>`
    : `<label for="in-${id}">${U.codeLabel}</label>
       <div class="cb-row"><input id="in-${id}" type="text" autocomplete="off" placeholder="${U.codePlaceholder}"><button class="btn-y" data-code="${id}">${U.codeUnlock}</button></div>
       <span class="cb-err" id="err-${id}"></span>`}</div>`;
};
const launch = (icon, title, text, steps, href, btn) => `<div class="launch" style="margin-top:16px"><span class="le">${icon}</span><div>
  <h3>${title}</h3><p>${text}</p>
  <div class="steps3">${steps.map((s, i) => `<div><b>${i + 1}</b>${s}</div>`).join('')}</div>
  <div class="btn-row" style="margin-top:12px"><a class="btn-y" href="${href}" target="_blank" rel="noopener" style="text-decoration:none">${btn}</a></div></div></div>`;
const ladder = () => `<div class="ladder">${C.qaLadder.rows.map((r, i) => `<div class="lrow"><span class="lr">${i + 1}</span><span class="lw">${r[0]}</span><span class="lv">${C.qaLadder.beats}</span><span class="ll">${r[1]}</span></div>`).join('')}</div>`;
const anna = () => `<div class="anna">${C.qaAnna.map(r => `<div><b>${r[0]}</b><span>${r[1]}</span></div>`).join('')}</div>`;
const qaAnswer = a => a.replace('{LADDER}', ladder()).replace('{ANNA}', anna())
  .replace('{VIDEO}', `<div class="drivewrap"><iframe src="${C.videos.content}" allow="autoplay; fullscreen" allowfullscreen loading="lazy" title="${S.tnotes.videoTitle}"></iframe></div><p class="subs">💬 ${U.subsRemember}</p>`);

/* =========================================================
   SECTION BODIES
   ========================================================= */
const BODY = {
/* ---------- Module 1 ---------- */
what:() => { const x = S.what; return `
  <p class="p">${x.intro}</p>
  <div class="defn"><span class="de">⚡</span><p>${x.definition}</p></div>
  <p class="p">${x.how}</p>
  ${fig('images/Console_lobby.png', x.imgAlt, x.imgCaption)}`; },

runs:() => `<p class="p">${S.runs.intro}</p>${trio(S.runs.cards)}`,

time:() => { const x = S.time; return `
  <p class="p">${x.intro}</p>
  <div class="example"><span class="de">💡</span><p>${x.example}</p></div>
  <div class="formula">
    <div class="fx">${x.formula}</div>
    <div class="fchips">${[2,3,4,5].map(n => `<button data-fn="${n}"><b>${fmt(x.chipStudents, { n })}</b><span>${fmt(x.chipMin, { m:60 + (n - 1) * 10 })}</span></button>`).join('')}</div>
  </div>
  <div class="card" style="margin-top:14px">
    <div class="wh"><b>${x.tryIt}</b><span class="tag">${x.tryTag}</span></div>
    <input type="range" min="2" max="5" value="3" id="nStud" aria-label="${x.students}">
    <div style="display:flex;align-items:flex-end;gap:22px;margin-top:10px;flex-wrap:wrap">
      <div><div class="bignum" id="nNum">3</div><div style="font-size:13px;color:var(--muted)">${x.students}</div></div>
      <div><div class="bignum" id="tutMin">80</div><div style="font-size:13px;color:var(--muted)">${x.minYou}</div></div>
      <div><div class="bignum" style="color:var(--lime)">60</div><div style="font-size:13px;color:var(--muted)">${x.minEach}</div></div>
    </div>
    <div class="slots" id="slots"></div>
  </div>`; },

why:() => `<p class="p">${S.why.intro}</p>
  <div class="grid3">${S.why.cards.map(c => flip(c[0], c[1], c[2])).join('')}</div>
  ${callout('warn', '📌', S.why.scope)}`,

students:() => {
  const x = S.students, sl = x.slides;
  // Scenes are pure decoration (emojis + animation); the texts come from the content file
  const SCENES = [
    `<div class="scene" style="background:radial-gradient(circle at 50% 60%,#4a5aa0,#2d3450)"><span class="crowd" style="left:14%;top:18%">👥</span><span class="crowd" style="right:16%;top:24%;animation-delay:.8s">🗣️</span><span class="crowd" style="left:22%;bottom:30%;animation-delay:1.6s">👥</span><span class="crowd" style="right:20%;bottom:34%;animation-delay:2.2s">📢</span><span class="av">🧑‍💻</span><span class="fl" style="right:30%;top:30%;animation:bob 2s infinite">🎧</span><div class="desk"></div></div>`,
    `<div class="scene" style="background:radial-gradient(circle at 50% 60%,#5a4a8f,#2d3450)"><span class="fl" style="animation:orbit 7s linear infinite">📚</span><span class="fl" style="animation:orbit 7s linear infinite;animation-delay:-2.3s">💡</span><span class="fl" style="animation:orbit 7s linear infinite;animation-delay:-4.6s">🔍</span><span class="av">🧒</span><span class="bubble" style="right:12%;top:16%">${x.bubble}</span></div>`,
    `<div class="scene" style="background:radial-gradient(circle at 50% 60%,#3f6b80,#2d3450)"><span class="fl" style="left:18%;bottom:20%;animation:rise 4s ease-in infinite">⏯️</span><span class="fl" style="left:44%;bottom:18%;animation:rise 4s ease-in infinite;animation-delay:1.3s">💻</span><span class="fl" style="right:18%;bottom:22%;animation:rise 4s ease-in infinite;animation-delay:2.6s">✅</span><span class="av">👧</span></div>`,
    `<div class="scene" style="background:radial-gradient(circle at 50% 60%,#4e7a45,#2d3450)"><span class="av">🧑‍🎨</span><span class="fl" style="right:26%;top:26%;animation:wave 1.2s infinite">🛠️</span><span class="fl" style="left:24%;top:24%;animation:blink 1.6s infinite">✨</span><div class="minibar"><i></i></div></div>`
  ];
  return `<p class="p">${x.intro}</p>
  ${callout('tip', '👉', x.howTo)}
  <div class="car" id="car" style="margin-top:14px">
    <div class="track" id="carTrack">${sl.map((s, i) => `<div class="slide">${SCENES[i]}<div class="stext"><span class="who">${s.who}</span><h3>${s.title}</h3><p>${s.text}</p><p class="quote">${s.quote}</p></div></div>`).join('')}</div>
    <div class="arrows"><button data-car="-1" aria-label="‹">‹</button><span class="carN" id="carN"></span><button data-car="1" aria-label="›" class="nxt">›</button></div>
    <div class="dots" id="carDots"></div>
  </div>
  <div id="carDone"></div>
  ${callout('good', '💚', x.reassure)}`; },

/* ---------- Module 2 ---------- */
structure:() => {
  const x = S.structure, open = STAGES.slice(0, 4).map(s => ({ e:s.e, t:s.t, k:'open' })), close = STAGES.slice(4);
  return `
  <p class="p">${x.intro}</p>
  ${flowHTML('rg', x.regularTitle, [...open, { e:'🧑‍🏫', t:x.theory, k:'main' }, ...close.map(s => ({ e:s.e, t:s.t, k:'close' }))],
    [['ph1', x.phOpening, 4], ['ph4', x.phMain, 1], ['ph3', x.phClosing, 3]])}
  <div class="bridge"><span class="de">⬇️</span><p>${x.bridge}</p></div>
  ${flowHTML('pl', x.plTitle, [...open, { e:'🧑‍💻', t:x.indep, k:'indep', tag:x.tagIndep }, ...close.map((s, i) => ({ e:s.e, t:s.t, k:'close', tag:i === 0 ? x.tagFeedback : '' }))],
    [['ph1', x.phOpening, 4], ['ph2', x.phSelf, 1.3], ['ph3', x.phClosing, 3]])}
  <div class="diffs"><div><span class="de">🔁</span><span>${x.diff1}</span></div><div><span class="de">💬</span><span>${x.diff2}</span></div></div>
  <div class="btn-row" style="margin-top:12px"><button class="btn-g" id="flowReplay">${U.replay}</button></div>`; },

matter:() => { const x = S.matter; return `
  <p class="p">${x.intro}</p>
  <div class="grid2">
    <div class="card"><div class="wh"><b>${x.card1Title}</b></div><p class="p" style="margin:0">${x.card1Text}</p></div>
    <div class="card cute"><div class="wh"><b>${x.card2Title}</b></div><p class="p" style="margin:0">${x.card2Text}</p></div>
  </div>
  <p class="p" style="margin-top:16px">${x.outro}</p>`; },

opening:() => `<p class="p">${S.opening.intro}</p>
  <div class="stc" data-range="0,4"><div class="stc-l"></div><div class="stc-r"></div></div>
  <div class="sec2">${videoBlock(C.videos.opening, S.opening.video, S.opening.videoTitle, U.subsRemember)}</div>`,

closing:() => `<p class="p">${S.closing.intro}</p>
  <div class="stc" data-range="4,7"><div class="stc-l"></div><div class="stc-r"></div></div>
  <div class="sec2">${videoBlock(C.videos.closing, S.closing.video, S.closing.videoTitle, U.subsRemember)}</div>`,

/* ---------- Module 3 ---------- */
role:() => `<p class="p">${S.role.intro}</p>${trio(S.role.cards)}`,

mindset:() => { const x = S.mindset; return `
  <p class="p">${x.intro}</p>
  <div class="qalist" data-acc>${x.skills.map(s => `<div class="qa sk"><button class="qa-q"><span class="qi">${s[0]}</span><span>${s[1]}</span><span class="qx">+</span></button><div class="qa-a"><p>${s[2]}</p></div></div>`).join('')}</div>
  <h3 class="subh">${x.mythsTitle}</h3>
  <p class="p">${x.mythsIntro}</p>
  <div class="myths">${x.myths.map(m => `<button class="myth" data-myth><span class="mtag">${U.mythTag}</span><span class="mq">${m[0]}</span><span class="ma">${m[1]}</span><span class="mh">${U.mythHint}</span></button>`).join('')}</div>`; },

feedback:() => { const x = S.feedback; return `
  <p class="p">${x.intro}</p>
  <div class="q3">${x.q3.map(q => `<div><span>${q[0]}</span><b>${q[1]}</b><small>${q[2]}</small></div>`).join('')}</div>
  <div class="card" style="margin-top:14px">
    <div class="wh"><b>${x.compareTitle}</b><span class="tag">${x.tryTag}</span></div>
    <div class="seg" id="fbSeg"><button data-k="v" aria-pressed="true">${x.vague}</button><button data-k="s" aria-pressed="false">${x.specific}</button></div>
    <div class="fbx" id="fbOut"></div>
  </div>
  ${callout('tip', '🩹', x.mistakes)}`; },

notes:() => { const x = S.notes; return `
  <p class="p">${x.intro}</p>
  ${callout('good', '✋', x.hands)}
  <p class="p" style="margin-top:16px">${x.example}</p>
  <div class="scrub" data-n="3" data-names="${x.names}" data-start="16:00" data-notes="1">
    <div class="scrub-top"><button class="btn-y tplay" style="padding:10px 18px">${U.scrubPlay}</button><span class="clock">16:00</span><input type="range" min="0" max="80" value="0" class="trange" style="flex:1;min-width:200px" aria-label="Time"></div>
    <div class="scrub-grid"><div class="lanes"></div><div class="notebook"><div class="nb-title">${U.scrubNotesTitle}</div><div class="nb-lines"></div></div></div>
    <div class="legend"><span><i class="s-on"></i>${U.legendOpening}</span><span><i class="s-ind"></i>${U.legendIndep}</span><span><i class="s-off"></i>${U.legendClosing}</span><span><i class="s-tut"></i>${U.legendSession}</span></div>
  </div>
  ${callout('tip', '🗒️', x.writeDown)}
  <div class="sec2">${videoBlock(C.videos.checkin, x.checkin, x.videoTitle, U.subsCan)}</div>`; },

first:() => { const x = S.first; const li = a => a.map(t => `<div><span>${t}</span></div>`).join(''); return `
  <p class="p">${x.intro}</p>
  <div class="grid2">
    <div class="card"><div class="wh"><b>${x.beforeTitle}</b></div><div class="dolist">${li(x.before)}</div></div>
    <div class="card"><div class="wh"><b>${x.adaptTitle}</b></div><div class="dolist">${li(x.adapt)}</div></div>
  </div>
  <div class="card" style="margin-top:14px"><div class="wh"><b>${x.checklistTitle}</b><span class="tag">${x.checklistTag}</span></div>
    <div class="cklist">${x.checklist.map((t, i) => `<button class="ck" data-ck="${i}"><span class="ckb"></span><span>${t}</span></button>`).join('')}</div></div>
  <div class="card" style="margin-top:14px"><div class="wh"><b>${x.questionsTitle}</b></div>
    <p class="p" style="font-size:15px">${x.questionsIntro}</p>
    <div class="grid2">${x.questions.map(q => `<button class="oq" data-oq data-hint="${x.questionsHint}"><b>${q[0]}</b><span>${q[1]}</span></button>`).join('')}</div></div>
  ${callout('warn', '💛', x.repeat)}`; },

/* ---------- Module 4 ---------- */
bo:() => { const x = S.bo; return `
  <p class="p">${x.intro}</p>
  <div class="grid2">
    ${fig('images/Image2.png', x.imgAlt, x.imgCaption)}
    <div class="card"><div class="wh"><b>${x.consoleTitle}</b></div>
      <div class="facts" style="grid-template-columns:1fr;margin-top:0">
        <div class="fact"><span class="fn">60′</span><span>${x.console60}</span></div>
        <div class="fact"><span class="fn">30′</span><span>${x.console30}</span></div>
      </div></div>
  </div>
  ${launch('🖥️', x.simTitle, x.simText, x.simSteps, withLang(CONFIG.BO_SIM), x.simButton)}
  ${codeBox('boCode')}`; },

tnotes:() => { const x = S.tnotes; return `
  <div class="defn"><span class="de">📒</span><p>${x.intro}</p></div>
  <div class="grid3" style="margin-top:14px">${x.cards.map(c => `<div class="ti"><span class="tie">${c[0]}</span><h3>${c[1]}</h3><p>${c[2]}</p></div>`).join('')}</div>
  ${callout('tip', '🖥️', x.simReminder)}
  <div class="sec2">${videoBlock(C.videos.content, x.video, x.videoTitle, U.subsCan)}</div>`; },

rules:() => `<p class="p">${S.rules.intro}</p>
  <div class="sorter" id="sorter">${S.rules.items.map(r => `<div class="srow" data-ans="${r[2]}"><span class="sei">${r[0]}</span><span class="stx">${r[1]}</span><span class="sbtns"><button data-pick="yes">${U.sorterDo}</button><button data-pick="no">${U.sorterDont}</button></span><span class="sfb">${r[3]}</span></div>`).join('')}</div>`,

/* ---------- Module 5 ---------- */
qa:() => `<p class="p">${S.qa.intro}</p>
  <div class="qaprog" id="qaProg"></div>
  <div class="qalist">${QA.map((x, i) => `<div class="qa" data-qa="${i}"><button class="qa-q"><span class="qi">${x.ic}</span><span>${x.q}</span><span class="qx">+</span></button><div class="qa-a">${qaAnswer(x.a)}</div></div>`).join('')}</div>`
};

/* =========================================================
   RENDERING
   ========================================================= */
const view = $('#view');
function langSwitch(){
  const L = window.PL_LANGUAGES || [];
  if (L.length < 2) return '';
  return `<select class="nlang" id="langSel" aria-label="${U.language}">${L.map(l => `<option value="${l.code}" ${l.code === C.lang ? 'selected' : ''}>${l.flag} ${l.name}</option>`).join('')}</select>`;
}
function renderNav(kind){
  const done = MODULES.filter(m => passed(m.id)).length;
  $('#nav').innerHTML = `<span class="logo">kodland<small>${U.brand}</small></span><span class="sp"></span>${langSwitch()}
    ${kind === 'home' ? `<span class="npill">${fmt(U.navModulesPill, { done, total:TOTAL })}</span>` : ''}
    ${kind === 'core' ? `<button class="nbtn" data-go="">${U.navHome}</button>` : ''}
    ${kind === 'module' ? `<button class="nbtn" data-go="core1">${U.navModules}</button>` : ''}
    ${kind === 'quiz' ? `<button class="nbtn" data-exit>${U.navBackModule}</button>` : ''}`;
  const ls = $('#langSel'); if (ls) ls.onchange = () => { location.search = '?lang=' + ls.value; };
}

function renderHome(){
  renderNav('home');
  const done = MODULES.filter(m => passed(m.id)).length;
  view.innerHTML = `
  <div class="hero"><span class="kicker">${U.homeKicker}</span><h1>${U.homeTitle1} <span class="hl">${U.homeTitle2}</span></h1><p class="lead">${U.homeLead}</p></div>
  <div class="facts" style="margin-top:22px">
    <div class="fact"><span class="fn">🧑‍💻</span><span>${U.homeFact1}</span></div>
    <div class="fact"><span class="fn">🔁</span><span>${U.homeFact2}</span></div>
  </div>
  <div class="cores single">
    <div class="core open" data-go="core1" role="button" tabindex="0">
      <span class="big">⚡</span><span class="cn">${U.coreLabel}</span><h2>${U.coreTitle}</h2>
      <p>${fmt(U.coreDesc, { total:TOTAL })}</p>
      <div class="prog" style="margin:0 0 16px;background:var(--bg2)"><b>${done}/${TOTAL}</b><div class="ptrack"><div class="pfill" style="width:${done / TOTAL * 100}%"></div></div></div>
      <button class="btn-y">${done === 0 ? U.btnStart : done === TOTAL ? U.btnReview : U.btnContinue}</button>
    </div>
  </div>`;
}

function renderCore1(){
  renderNav('core');
  const done = MODULES.filter(m => passed(m.id)).length;
  view.innerHTML = `
  <div class="hero"><span class="kicker">${U.listKicker}</span><h1>${U.listTitle1} <span class="hl">${U.listTitle2}</span></h1><p class="lead">${fmt(U.listLead, { total:TOTAL })}</p></div>
  <div class="prog"><b>${done}/${TOTAL}</b><div class="ptrack"><div class="pfill" style="width:${done / TOTAL * 100}%"></div></div><span style="color:var(--muted);font-size:14px">${done === TOTAL ? U.listAllDone : U.listModulesComplete}</span></div>
  <div class="mods">
    ${MODULES.map(m => {
      const lock = !unlocked(m), ok = passed(m.id);
      const badge = ok ? (m.check === 'sim' ? U.badgeDoneSim : fmt(U.badgeDone, { score:P[m.id].score })) : lock ? fmt(U.badgeLocked, { prev:m.n - 1 }) : m.check === 'sim' ? U.badgeEnterSim : U.badgeStart;
      return `<button class="mcard ${lock ? 'locked' : ''} ${ok ? 'done' : ''} ${m.check === 'sim' ? 'simcard' : ''}" ${lock ? 'data-locked' : `data-go="${m.id}"`} style="border-top:6px solid ${m.color}">
        <span class="mn">${fmt(U.listModuleN, { n:m.n })}</span><span class="me">${m.e}</span><h3>${m.title}</h3><p>${m.desc}</p><span class="badge">${badge}</span></button>`;
    }).join('')}
  </div>
  ${done === TOTAL ? `<div class="mcta"><span class="e">🏆</span><div class="grow"><h3>${U.listDoneTitle}</h3><p>${U.listDoneText}</p></div><button class="btn-y" data-go="done">${U.listDoneBtn}</button></div>` : ''}`;
}

function ctaHTML(m){
  const ready = !m.needs || flag(m.needs);
  const n = (C.quiz[m.id] || []).length;
  const info = { quiz:[U.ctaQuizH, fmt(U.ctaQuizP, { n })], tf:[U.ctaTfH, fmt(U.ctaTfP, { n })], chat:[U.ctaChatH, U.ctaChatP], qa:[U.ctaQaH, U.ctaQaP] }[m.check];
  if (m.check === 'qa'){
    return `<span class="e">${passed(m.id) ? '🏅' : '📖'}</span><div class="grow"><h3>${info[0]}</h3><p>${info[1]}</p></div>
      <button class="btn-y" id="qaDone" ${qaAllOpen() || passed(m.id) ? '' : 'disabled'}>${passed(m.id) ? U.ctaQaBtnDone : U.ctaQaBtn}</button>`;
  }
  return `<span class="e">${passed(m.id) ? '🏅' : '📝'}</span>
    <div class="grow"><h3>${info[0]}</h3><p>${info[1]}</p>${ready ? '' : `<div class="lockmsg">🔒 ${m.needsMsg || ''}</div>`}</div>
    <button class="btn-y" id="startCheck" ${ready ? '' : 'disabled'}>${passed(m.id) ? U.ctaRetake : U.ctaStart}</button>`;
}
// the lock message text comes from content (modules.mX.needs)
MODULES.forEach(m => { if (m.needs && C.modules[m.id].needs) m.needsMsg = C.modules[m.id].needs; });
const refreshCTA = m => { const c = $('#mcta'); if (c) c.innerHTML = ctaHTML(m); };

function renderModule(m){
  clearTimers();
  if (m.check === 'sim'){ renderSim(m); return; }
  renderNav('module');
  view.innerHTML = `
  <div class="mhead"><span class="eyebrow">${fmt(U.moduleEyebrow, { n:m.n, total:TOTAL })}</span><h1>${m.e} ${m.title}</h1><div class="mobj">${m.obj}</div></div>
  <div class="chips">${m.sections.map(s => `<button class="chip" data-jump="${s[0]}">${s[1]} ${m.sections_t[s[0]]}</button>`).join('')}</div>
  ${m.sections.map(s => `<section class="sec" id="sec-${s[0]}"><div class="sh"><span class="se">${s[1]}</span><h2>${m.sections_t[s[0]]}</h2></div>${BODY[s[0]]()}</section>`).join('')}
  <div class="mcta" id="mcta">${ctaHTML(m)}</div>`;
  initWidgets(m);
}
// section titles from content (kept apart from the [id, emoji] structure)
MODULES.forEach(m => { m.sections_t = C.modules[m.id].sections || {}; });

/* ---------- Module 6: the simulation (opens in a new tab; a code completes the module) ---------- */
function renderSim(m){
  renderNav('module');
  const x = S.sim;
  view.innerHTML = `
  <div class="mhead"><span class="eyebrow">${fmt(U.simEyebrow, { n:m.n, total:TOTAL })}</span><h1>${x.title}</h1><div class="mobj">${m.obj}</div></div>
  <section class="sec" style="margin-top:28px">
    ${trio(x.cards)}
    ${callout('warn', '⚠️', x.example)}
    ${launch('🎮', x.launchTitle, x.launchText, x.steps, withLang(CONFIG.CLASSROOM_SIM), x.button)}
    ${codeBox('simCode')}
  </section>`;
}

/* =========================================================
   WIDGETS
   ========================================================= */
let timers = [];
const later = (fn, ms) => { const t = setTimeout(fn, ms); timers.push(t); return t; };
function clearTimers(){ timers.forEach(clearTimeout); timers.forEach(clearInterval); timers = []; }
const qaAllOpen = () => QA.every((_, i) => flag('qa' + i));

function initWidgets(m){
  // Students slider + formula chips (M1)
  const ns = $('#nStud');
  if (ns){
    const draw = () => {
      const n = +ns.value, total = 60 + (n - 1) * 10;
      $('#tutMin').textContent = total; $('#nNum').textContent = n;
      $$('[data-fn]').forEach(b => b.classList.toggle('on', +b.dataset.fn === n));
      $('#slots').innerHTML = `<div class="slot tutor"><span>${U.sliderYou}</span><div class="bar"><div class="fillb" style="left:0;width:${total}%">${fmt(U.sliderMin, { m:total })}</div></div></div>` +
        Array.from({ length:n }, (_, i) => `<div class="slot"><span>${fmt(U.sliderStudent, { n:i + 1 })}</span><div class="bar"><div class="fillb" style="left:${i * 10}%;width:60%">${fmt(U.sliderJoins, { m:i * 10 })}</div></div></div>`).join('');
    };
    ns.oninput = draw; draw();
    $$('[data-fn]').forEach(b => b.onclick = () => { ns.value = b.dataset.fn; draw(); });
  }
  $$('[data-flip]').forEach(f => f.onclick = () => f.classList.toggle('on'));
  $$('[data-myth]').forEach(b => b.onclick = () => { b.classList.add('on'); b.querySelector('.mtag').textContent = U.realityTag; });

  // Persona carousel (manual): "1 of 4", the check unlocks once every slide has been seen
  const car = $('#car');
  if (car){
    const n = $$('.slide', car).length, seen = new Set(); let i = 0;
    $('#carDots').innerHTML = Array.from({ length:n }, (_, k) => `<button data-dot="${k}" aria-label="${k + 1}"></button>`).join('');
    const go = k => {
      i = Math.max(0, Math.min(n - 1, k)); seen.add(i);
      $('#carTrack').style.transform = `translateX(-${i * 100}%)`;
      $('#carN').textContent = fmt(U.carouselOf, { i:i + 1, n });
      $$('#carDots button').forEach((d, j) => { d.classList.toggle('on', j === i); d.classList.toggle('seen', seen.has(j)); });
      $('[data-car="-1"]', car).disabled = i === 0;
      $('[data-car="1"]', car).disabled = i === n - 1;
      if (seen.size === n || flag('metAll')){
        if (!flag('metAll')){ setFlag('metAll', true); refreshCTA(m); confetti(60); }
        $('#carDone').innerHTML = callout('good', '✅', U.carouselDone);
      }
    };
    $$('[data-car]', car).forEach(b => b.onclick = () => go(i + +b.dataset.car));
    $$('[data-dot]', car).forEach(b => b.onclick = () => go(+b.dataset.dot));
    go(0);
  }

  // Lesson structure diagrams (M2): the regular one builds first, then the parallel one
  const flows = $$('[data-flow]');
  if (flows.length){
    const STEP = 380, SPAN = 8 * STEP + 400;
    const playOne = (f, delay) => {
      $$('[data-st]', f).forEach(s => s.classList.remove('in')); $('.phases', f).classList.remove('in'); f.classList.remove('shown');
      const ln = $('.line i', f); ln.style.transition = 'none'; ln.style.width = '0';
      later(() => { f.classList.add('shown'); ln.style.transition = `width ${8 * STEP}ms linear`; ln.style.width = '100%'; }, delay);
      $$('[data-st]', f).forEach(s => later(() => s.classList.add('in'), delay + 150 + +s.dataset.st * STEP));
      later(() => $('.phases', f).classList.add('in'), delay + 8 * STEP + 200);
    };
    const play = () => flows.forEach((f, k) => playOne(f, k * SPAN));
    let played = false;
    const check = () => { if (played || !document.body.contains(flows[0])) return; const r = flows[0].getBoundingClientRect();
      if (r.top < innerHeight * .8 && r.bottom > 0){ played = true; play(); window.removeEventListener('scroll', check); } };
    window.addEventListener('scroll', check, { passive:true });
    later(check, 300);
    $('#flowReplay').onclick = play;
  }

  // Stage carousels (M2): each one shows a range of STAGES
  $$('.stc').forEach(stc => {
    const [a, b] = stc.dataset.range.split(',').map(Number), list = STAGES.slice(a, b);
    let i = 0; const seen = new Set();
    const draw = () => {
      const s = list[i]; seen.add(i);
      const L = $('.stc-l', stc), R = $('.stc-r', stc);
      L.style.background = `radial-gradient(circle at 50% 40%,${s.c},#262c40)`;
      L.innerHTML = `<span class="phase">${s.ph}</span><span class="bi">${s.e}</span><span class="bn">${fmt(U.stageLabel, { abs:a + i + 1, i:i + 1, n:list.length })}</span>`;
      R.innerHTML = `<h3>${s.t}</h3><p class="goal">${s.goal}</p>
        <div class="dolist">${s.d.map((x, k) => `<div style="animation-delay:${k * .12}s"><span>${x}</span></div>`).join('')}</div>
        <div class="stc-nav"><div class="stc-dots">${list.map((x, k) => `<button class="${k === i ? 'on' : ''} ${seen.has(k) ? 'seen' : ''}" data-s="${k}" title="${x.t}">${x.e}</button>`).join('')}</div><span class="sp"></span>
        <button class="btn-g" data-sd="-1" ${i === 0 ? 'disabled style="opacity:.4"' : ''}>←</button><button class="btn-y" data-sd="1" style="padding:11px 18px">${i === list.length - 1 ? U.stageFirst : U.stageNext}</button></div>`;
      $$('[data-s]', stc).forEach(x => x.onclick = () => { i = +x.dataset.s; draw(); });
      $$('[data-sd]', stc).forEach(x => x.onclick = () => { i = (i + +x.dataset.sd + list.length) % list.length; draw(); });
    };
    draw();
  });

  // Vague vs specific feedback (M3)
  const fbSeg = $('#fbSeg');
  if (fbSeg){
    const x = S.feedback;
    const draw = k => { $('#fbOut').innerHTML = (k === 'v' ? x.vagueEx : x.specificEx).map(t => `<div class="fbi ${k}">${k === 'v' ? '😐' : '🌟'} ${t}</div>`).join('') +
      `<p class="fbn">${k === 'v' ? x.vagueNote : x.specificNote}</p>`; };
    $$('button', fbSeg).forEach(b => b.onclick = () => { $$('button', fbSeg).forEach(y => y.setAttribute('aria-pressed', String(y === b))); draw(b.dataset.k); });
    draw('v');
  }

  // Timing scrubber with live notes (M3)
  $$('.scrub').forEach(sc => {
    const N = +sc.dataset.n, names = (sc.dataset.names || '').split(','), total = 60 + (N - 1) * 10;
    const [h0, m0] = (sc.dataset.start || '16:00').split(':').map(Number);
    const clk = t => { const x = h0 * 60 + m0 + t; return `${Math.floor(x / 60)}:${String(x % 60).padStart(2, '0')}`; };
    const pct = x => x / total * 100;
    const lanes = $('.lanes', sc), range = $('.trange', sc), nb = $('.nb-lines', sc);
    lanes.innerHTML = `<div class="lane"><span class="ln">${U.scrubYou}</span><div class="track"><div class="seg2 s-tut" style="left:0;width:100%"></div></div><span class="state stT"></span></div>` +
      Array.from({ length:N }, (_, k) => `<div class="lane"><span class="ln">${names[k] || fmt(U.sliderStudent, { n:k + 1 })}</span><div class="track">
        <div class="seg2 s-on" style="left:${pct(k * 10)}%;width:${pct(8)}%"></div><div class="seg2 s-ind" style="left:${pct(k * 10 + 8)}%;width:${pct(42)}%"></div><div class="seg2 s-off" style="left:${pct(k * 10 + 50)}%;width:${pct(10)}%"></div></div><span class="state st${k}"></span></div>`).join('') +
      '<div class="playhead"></div>';
    const draw = () => {
      const t = +range.value;
      $('.clock', sc).textContent = clk(t);
      const tr = $('.track', lanes), lr = lanes.getBoundingClientRect(), r = tr.getBoundingClientRect();
      $('.playhead', lanes).style.left = (r.left - lr.left + r.width * t / total) + 'px';
      let tutor = U.scrubFree, mode = 'ind';
      for (let k = 0; k < N; k++){
        const s = k * 10, el = $('.st' + k, lanes); let c = '', txt = '';
        if (t < s){ txt = U.scrubNotJoined; }
        else if (t < s + 8){ c = 'on'; txt = U.scrubOpening; tutor = fmt(U.scrubOpeningX, { name:names[k] }); mode = 'on'; }
        else if (t < s + 50){ c = 'ind'; txt = U.scrubWorking; }
        else if (t < s + 60){ c = 'off'; txt = U.scrubClosing; if (mode !== 'on'){ tutor = fmt(U.scrubClosingX, { name:names[k] }); mode = 'off'; } }
        else { c = 'done'; txt = U.scrubFinished; }
        el.className = 'state st' + k + ' ' + c; el.textContent = txt;
      }
      if (t >= 35 && t < 38 && mode === 'ind') tutor = U.scrubHelping;
      const stT = $('.stT', lanes); stT.className = 'state stT ' + mode;
      stT.textContent = t >= total ? U.scrubOver : tutor;
      // Notes: all lines are always in the page; each one fades in once its time has come
      if (nb){
        if (!nb.children.length) nb.innerHTML = `<div class="nbl dim nb-empty">${U.scrubNotesEmpty}</div>` + S.notes.lines.map((l, i) => `<div class="nbl" data-t="${NOTE_TIMES[i]}">${l}</div>`).join('');
        let any = false;
        $$('.nbl[data-t]', nb).forEach(l => { const on = +l.dataset.t <= t; l.classList.toggle('show', on); any = any || on; });
        $('.nb-empty', nb).classList.toggle('show', !any);
      }
    };
    range.oninput = draw; draw();
    window.addEventListener('resize', draw);
    let iv = null; const pb = $('.tplay', sc);
    pb.onclick = () => {
      if (iv){ clearInterval(iv); iv = null; pb.textContent = U.scrubPlay; return; }
      if (+range.value >= total) range.value = 0;
      pb.textContent = U.scrubPause;
      iv = setInterval(() => { range.value = +range.value + 1; draw(); if (+range.value >= total){ clearInterval(iv); iv = null; pb.textContent = U.scrubReplay; } }, 160);
      timers.push(iv);
    };
  });

  // Skills accordions (M3), first-lesson checklist and open questions
  $$('[data-acc] .qa').forEach(q => $('.qa-q', q).onclick = () => q.classList.toggle('open'));
  $$('[data-ck]').forEach(b => b.onclick = () => b.classList.toggle('on'));
  $$('[data-oq]').forEach(b => b.onclick = () => b.classList.toggle('on'));

  // Rules sorter (M4)
  $$('#sorter .srow').forEach(r => { const fb = r.querySelector('.sfb'), base = fb.innerHTML;
    $$('[data-pick]', r).forEach(b => b.onclick = () => {
      const ok = b.dataset.pick === r.dataset.ans;
      r.classList.remove('ok', 'ko'); void r.offsetWidth; r.classList.add(ok ? 'ok' : 'ko');
      fb.innerHTML = (ok ? '✓ ' : '✗ ' + U.sorterNotQuite + ' ') + base;
    }); });

  // Q&A accordions (M5): every question has to be opened once
  const qaProg = $('#qaProg');
  if (qaProg){
    const upd = () => { const n = QA.filter((_, i) => flag('qa' + i)).length;
      qaProg.innerHTML = `${fmt(U.qaProgress, { n, total:QA.length })}<div class="ptrack"><div class="pfill" style="width:${n / QA.length * 100}%"></div></div>`;
      $$('.qa[data-qa]').forEach(q => q.classList.toggle('read', flag('qa' + q.dataset.qa))); refreshCTA(m); };
    $$('.qa[data-qa]').forEach(q => $('.qa-q', q).onclick = () => { q.classList.toggle('open'); if (!flag('qa' + q.dataset.qa)) setFlag('qa' + q.dataset.qa, true); upd(); });
    upd();
  }
}

/* =========================================================
   QUIZ ENGINE (multiple choice and true/false)
   ========================================================= */
let QZ = null;
function startQuiz(m){
  clearTimers();
  const tf = m.check === 'tf';
  // Multiple-choice options are shuffled each run; true/false keeps True first
  QZ = { m, i:0, score:0, items:shuffle(C.quiz[m.id]).map(q => {
    if (tf) return { q:q.q, o:[U.quizTrue, U.quizFalse], a:q.a, e:q.e, tf:true };
    const idx = shuffle(q.o.map((_, k) => k)); return { q:q.q, o:idx.map(k => q.o[k]), a:idx.indexOf(q.a), e:q.e }; }) };
  renderQ();
}
function renderQ(){
  renderNav('quiz');
  const { items, i, m } = QZ, q = items[i];
  view.innerHTML = `<div class="quiz">
    <div class="qbar"><i style="width:${i / items.length * 100}%"></i></div>
    <span class="qmeta">${m.e} ${fmt(U.quizMeta, { n:m.n, kind:q.tf ? U.quizKindTF : U.quizKindQ, i:i + 1, total:items.length })}</span>
    <h2 class="qq">${q.q}</h2>
    <div id="opts" class="${q.tf ? 'tfopts' : ''}">${q.o.map((o, k) => `<button class="qopt" data-o="${k}">${q.tf ? '' : `<span class="k">${'ABC'[k]}</span>`}<span>${o}</span></button>`).join('')}</div>
    <div class="qfb" id="qfb"></div>
    <button class="btn-y qnext" id="qnext">${i === items.length - 1 ? U.quizResult : U.quizNext}</button>
  </div>`;
  $$('#opts .qopt').forEach(b => b.onclick = () => {
    const k = +b.dataset.o, ok = k === q.a;
    $('#opts').classList.add('answered');
    b.classList.add(ok ? 'right' : 'wrong');
    $(`#opts [data-o="${q.a}"]`).classList.add('right');
    if (ok) QZ.score++;
    const fb = $('#qfb'); fb.className = 'qfb show ' + (ok ? 'ok' : 'ko'); fb.innerHTML = (ok ? U.quizCorrect : U.quizWrong) + q.e;
    const nx = $('#qnext'); nx.classList.add('show'); nx.disabled = true; later(() => { nx.disabled = false; nx.focus(); }, 900);
  });
  $('#qnext').onclick = () => { QZ.i++; if (QZ.i < QZ.items.length) renderQ(); else finishCheck(QZ.m, QZ.score, QZ.items.length); };
}

/* =========================================================
   CHAT CHECK (Module 3) — a conversation on a phone
   ========================================================= */
function startChat(m){
  clearTimers();
  renderNav('quiz');
  const X = C.chat, ITEMS = X.items;
  let i = 0, score = 0, clock = 8;
  const now = () => `17:${String(clock++).padStart(2, '0')}`;
  view.innerHTML = `<div class="chatwrap">
    <div class="phone">
      <div class="ph-status"><span>17:08</span><span class="ph-notch"></span><span>📶 🔋</span></div>
      <div class="ph-head"><span class="ph-back">‹</span><span class="ph-av">🧑‍🏫</span><div><b>${X.name}</b><small id="phState">${X.online}</small></div><span class="ph-icons">📹 📞</span></div>
      <div class="ph-body" id="cbody"><span class="ph-day">${X.today}</span></div>
      <div class="ph-replies" id="creplies"></div>
      <div class="ph-input"><span class="ph-field" id="phField">${X.waiting}</span><span class="ph-send">➤</span></div>
    </div>
    <div class="chat-side">
      <span class="qmeta">${m.e} ${fmt(X.meta, { n:m.n })}</span>
      <h2 class="qq" style="font-size:20px;margin-bottom:12px">${X.title}</h2>
      <p class="p" style="font-size:15px">${X.intro}</p>
      <div class="cdots" id="cdots">${ITEMS.map(() => '<i></i>').join('')}</div>
      <div id="cside"></div>
    </div>
  </div>`;
  const body = $('#cbody'), replies = $('#creplies'), side = $('#cside');
  const push = html => { body.insertAdjacentHTML('beforeend', html); body.scrollTo({ top:body.scrollHeight, behavior:'smooth' }); later(() => { body.scrollTop = body.scrollHeight; }, 450); };
  const say = (text, then, wait = 1100) => {
    $('#phState').textContent = X.typing;
    push('<div class="typing" id="typing"><i></i><i></i><i></i></div>');
    later(() => { $('#typing').remove(); $('#phState').textContent = X.online;
      push(`<div class="msg them">${text}<span class="mt">${now()}</span></div>`); then && then(); }, wait);
  };
  const dots = (k, cls) => { const d = $$('#cdots i')[k]; if (d) d.className = cls; };
  const ask = () => {
    const c = ITEMS[i];
    dots(i, 'cur');
    replies.innerHTML = ''; $('#phField').textContent = X.alexTyping;
    side.innerHTML = `<div class="cfb wait">${fmt(X.questionN, { i:i + 1, n:ITEMS.length })}</div>`;
    say(c.them, () => {
      $('#phField').textContent = X.chooseReply;
      replies.innerHTML = `<div class="ph-pick">${X.tapReply}</div>${c.o.map((o, k) => `<button class="ph-opt" data-o="${k}"><span class="k">${'ABC'[k]}</span><span>${o}</span></button>`).join('')}`;
      $$('[data-o]', replies).forEach(b => b.onclick = () => answer(+b.dataset.o));
    });
  };
  const answer = k => {
    const c = ITEMS[i], ok = k === c.a, last = i === ITEMS.length - 1;
    if (ok) score++;
    replies.innerHTML = ''; $('#phField').textContent = X.message;
    push(`<div class="msg me ${ok ? '' : 'ko'}">${c.o[k]}<span class="mt">${now()} ✓✓</span></div>`);
    dots(i, ok ? 'ok' : 'ko');
    side.innerHTML = `<div class="cfb ${ok ? 'ok' : 'ko'}">${ok ? X.great : X.notBest}${ok ? c.ok : c.ko}${ok ? '' : `<br><br>${X.better} “${c.o[c.a]}”`}</div>
      ${last ? `<div class="cfb wait" style="margin-top:12px">${fmt(X.last, { s:score, n:ITEMS.length })}</div>` : ''}
      <div class="btn-row" style="margin-top:14px"><button class="btn-y" id="cnext" disabled>${last ? X.result : X.continue}</button></div>`;
    // Short pause before the button is active, so the feedback gets read
    later(() => { const b = $('#cnext'); if (b){ b.disabled = false; b.classList.add('ready'); } }, last ? 2200 : 1200);
    $('#cnext').onclick = () => {
      i++;
      if (i < ITEMS.length){ ask(); return; }
      side.innerHTML = '';
      say(score / ITEMS.length >= CONFIG.PASS ? X.byeGood : X.byeBad, () => later(() => finishCheck(m, score, ITEMS.length), 1600), 900);
    };
  };
  say(X.hi1, () => say(X.hi2, () => {
    later(() => { push(`<div class="msg me">${X.hiReply}<span class="mt">${now()} ✓✓</span></div>`); later(ask, 700); }, 700);
  }, 1300), 900);
}

/* =========================================================
   RESULT + FINAL SCREEN
   ========================================================= */
function finishCheck(m, score, n){
  clearTimers();
  const pct = Math.round(score / n * 100), ok = score / n >= CONFIG.PASS;
  setResult(m.id, pct, ok);
  showResult(m, ok, `<div class="pct ${ok ? 'pass' : 'fail'}">${pct}%</div><p>${fmt(U.resultAnswered, { s:score, n })}`);
}
function showResult(m, ok, top){
  renderNav('core');
  const next = MODULES[MODULES.indexOf(m) + 1];
  view.innerHTML = `<div class="result">
    <div class="re">${ok ? '🎉' : '😅'}</div>
    <h1>${ok ? (m.check === 'qa' || m.check === 'sim' ? U.resultComplete : U.resultPassed) : U.resultAlmost}</h1>
    ${top} ${ok ? (next ? fmt(U.resultUnlocked, { n:next.n, title:next.title }) : '') : U.resultNeed}</p>
    <div class="btn-row">
      ${ok ? (next ? `<button class="btn-y" data-go="${next.id}">${fmt(U.resultGoModule, { n:next.n })}</button>` : `<button class="btn-y" data-go="done">${U.resultNextSteps}</button>`) : `<button class="btn-y" data-retake="${m.id}">${U.ctaRetake}</button>`}
      <button class="btn-g" data-go="${m.id}">${U.resultReview}</button>
    </div></div>`;
  window.scrollTo(0, 0);
  if (ok) confetti();
}

function renderDone(){
  renderNav('core');
  const D = C.done;
  view.innerHTML = `<div class="result" style="max-width:780px">
    <div class="re">🏆</div><h1>${D.title}</h1>
    <div class="donebody">${D.body}</div>
    <div class="mods" style="grid-template-columns:repeat(3,1fr);text-align:left">
      ${MODULES.map(m => `<div class="mcard done" style="min-height:0"><span class="me">${m.e}</span><h3>${m.title}</h3><span class="badge">✓</span></div>`).join('')}</div>
    <div class="btn-row" style="justify-content:center;margin-top:18px"><button class="btn-y" data-go="">${D.btnHome}</button><button class="btn-g" data-go="m6">${D.btnPractice}</button><button class="btn-g" data-go="core1">${D.btnReview}</button></div></div>`;
  confetti(240);
}

/* ---------- Confetti (no library) ---------- */
function confetti(count = 160){
  const cv = $('#confetti'), cx = cv.getContext('2d');
  cv.width = innerWidth; cv.height = innerHeight;
  const colors = ['#cdf24a', '#ffd34d', '#5b8cff', '#ec5fa6', '#3fd16b', '#ffffff'];
  const ps = Array.from({ length:count }, () => ({
    x:innerWidth / 2 + (Math.random() - .5) * 200, y:innerHeight * .35,
    vx:(Math.random() - .5) * 16, vy:-Math.random() * 15 - 6, r:Math.random() * 360, vr:(Math.random() - .5) * 18,
    w:6 + Math.random() * 7, h:8 + Math.random() * 10, c:colors[Math.floor(Math.random() * colors.length)] }));
  let f = 0;
  const tick = () => {
    cx.clearRect(0, 0, cv.width, cv.height);
    ps.forEach(p => { p.vy += .38; p.vx *= .99; p.x += p.vx; p.y += p.vy; p.r += p.vr;
      cx.save(); cx.translate(p.x, p.y); cx.rotate(p.r * Math.PI / 180); cx.fillStyle = p.c; cx.globalAlpha = Math.max(0, 1 - f / 170); cx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h); cx.restore(); });
    if (++f < 180) requestAnimationFrame(tick); else cx.clearRect(0, 0, cv.width, cv.height);
  };
  tick();
}

/* ---------- Modal ---------- */
function modal(html){ const m = $('#modal'); m.innerHTML = `<div class="mbox">${html}</div>`; m.classList.add('show'); }
function closeModal(){ $('#modal').classList.remove('show'); }
const lockModal = txt => modal(`<div style="font-size:48px">🔒</div><h2>${U.lockTitle}</h2><p>${txt}</p><button class="btn-y" onclick="closeModal()">${U.ok}</button>`);

/* =========================================================
   ROUTER
   ========================================================= */
const go = path => { location.hash = '#/' + path; };
function route(){
  clearTimers(); closeModal(); QZ = null;
  const id = location.hash.replace(/^#\/?/, '').split('/').filter(Boolean)[0];
  const m = MODULES.find(x => x.id === id);
  if (!id) renderHome();
  else if (id === 'core1') renderCore1();
  else if (id === 'done' && coreDone()) renderDone();
  else if (m){
    if (!unlocked(m)){ go('core1'); setTimeout(() => lockModal(fmt(U.lockPrev, { prev:m.n - 1 })), 50); return; }
    renderModule(m);
  } else renderHome();
  window.scrollTo(0, 0);
}
window.addEventListener('hashchange', route);
const curModule = () => MODULES.find(x => location.hash.replace(/^#\/?/, '').split('/')[0] === x.id);
const startCheck = m => { m.check === 'chat' ? startChat(m) : startQuiz(m); window.scrollTo(0, 0); };

// Completion codes (BO and Classroom simulations)
function tryCode(id){
  const inp = $('#in-' + id), want = id === 'simCode' ? CONFIG.SIM_CODE : CONFIG.BO_CODE;
  if (!inp) return;
  if (norm(inp.value) !== norm(want)){ $('#err-' + id).textContent = U.codeError; inp.focus(); return; }
  setFlag(id, true);
  const m = curModule();
  if (id === 'simCode'){ setResult('m6', 100, true); showResult(MODULES[5], true, `<p>${U.resultSimAccepted}`); return; }
  $(`[data-codebox="${id}"]`).outerHTML = codeBox(id);
  if (m) refreshCTA(m);
  confetti(80);
}

document.addEventListener('click', e => {
  const t = e.target;
  const g = t.closest('[data-go]'); if (g && !t.closest('a')){ go(g.dataset.go); if (g.dataset.go === (location.hash.replace(/^#\/?/, '') || '')) route(); return; }
  if (t.closest('[data-locked]')){ lockModal(U.lockGeneric); return; }
  const j = t.closest('[data-jump]'); if (j){ $('#sec-' + j.dataset.jump).scrollIntoView({ behavior:'smooth' }); return; }
  const z = t.closest('[data-zoom]'); if (z){ $('#lbImg').src = z.src; $('#lb').classList.add('show'); return; }
  if (t.closest('#lb')){ $('#lb').classList.remove('show'); return; }
  if (t.id === 'modal') closeModal();
  const cd = t.closest('[data-code]'); if (cd){ tryCode(cd.dataset.code); return; }
  const sc = t.closest('#startCheck');
  if (sc){ if (!sc.disabled) startCheck(curModule()); return; }
  if (t.closest('#qaDone') && !t.closest('#qaDone').disabled){ const m = MODULES[4]; if (passed(m.id)) go('m6'); else { setResult(m.id, 100, true); showResult(m, true, `<p>${U.resultQaRead}`); } return; }
  const r = t.closest('[data-retake]'); if (r){ startCheck(MODULES.find(x => x.id === r.dataset.retake)); return; }
  if (t.closest('[data-exit]')){ renderModule(curModule() || MODULES[0]); window.scrollTo(0, 0); }
});
// A click on a disabled check button doesn't fire — shake the lock message instead
document.addEventListener('pointerdown', e => {
  if (!e.target.closest('#mcta')) return;
  const b = $('#startCheck'); if (b && b.disabled){ const l = $('.lockmsg'); if (l){ l.classList.remove('shake'); void l.offsetWidth; l.classList.add('shake'); } }
});
document.addEventListener('keydown', e => {
  if (e.key === 'Enter' && e.target.matches('.codebox input')){ tryCode(e.target.id.replace('in-', '')); return; }
  if ((e.key === 'Enter' || e.key === ' ') && e.target.matches('[role=button]')){ e.preventDefault(); e.target.click(); }
  if (e.key === 'Escape'){ closeModal(); $('#lb').classList.remove('show'); }
});

/* =========================================================
   DEVELOPER OPTIONS (reviewers only — kept in English, not translated)
   "🛠 Developer" link at the bottom of the page (code: CONFIG.DEV_CODE), or Shift+D three times.
   ========================================================= */
function setDev(on){
  if (on){ MODULES.forEach(m => { if (!passed(m.id)) P[m.id] = { passed:true, score:100 }; });
    P.flags = Object.assign({}, P.flags, { metAll:true, boCode:true, simCode:true }); QA.forEach((_, i) => P.flags['qa' + i] = true); P.dev = true; }
  else delete P.dev;
  saveP(); devBadge(); route();
}
function resetProgress(){ P = {}; saveP(); devBadge(); go(''); route(); }
function devBadge(){
  $$('.devbadge').forEach(x => x.remove());
  if (P.dev) document.body.insertAdjacentHTML('beforeend', '<button class="devbadge" id="devBadge">🔓 DEV MODE · options</button>');
}
function openDev(unlockedPanel){
  if (!unlockedPanel && !P.dev){
    modal(`<div style="font-size:44px">🛠</div><h2>Developer options</h2><p>For reviewers only. Enter the developer code:</p>
      <input id="devCode" type="password" autocomplete="off" style="width:100%;padding:12px 14px;border-radius:12px;border:2px solid #d5d9e5;font-size:16px;margin:4px 0 6px">
      <p id="devErr" style="color:#c0303f;font-weight:600;min-height:20px;margin:4px 0"></p>
      <div class="btn-row" style="justify-content:center"><button class="btn-g" style="color:var(--ink);border-color:#c9cdd8" onclick="closeModal()">Cancel</button><button class="btn-y" id="devGo">Continue</button></div>`);
    const tryDev = () => { if (norm($('#devCode').value) === norm(CONFIG.DEV_CODE)) openDev(true); else $('#devErr').textContent = 'Wrong code.'; };
    $('#devGo').onclick = tryDev; $('#devCode').onkeydown = e => { if (e.key === 'Enter') tryDev(); };
    setTimeout(() => $('#devCode').focus(), 50);
    return;
  }
  modal(`<div style="font-size:44px">🛠</div><h2>Developer options</h2>
    <p>Developer mode is <b>${P.dev ? 'ON' : 'OFF'}</b>. ${P.dev ? 'All modules are unlocked, including the code-protected steps.' : 'Turn it on to unlock all modules.'}</p>
    <p style="font-size:13px">Simulation codes — Classroom: <b>${CONFIG.SIM_CODE}</b> · BO: <b>${CONFIG.BO_CODE}</b></p>
    <div class="btn-row" style="justify-content:center;flex-direction:column;align-items:stretch;gap:8px;margin-top:14px">
      <button class="btn-y" id="devToggle">${P.dev ? '🔒 Turn developer mode off' : '🔓 Unlock all modules'}</button>
      <button class="btn-g" style="color:var(--ink);border-color:#c9cdd8" id="devReset">♻️ Reset all progress</button>
      <button class="btn-g" style="color:var(--ink);border-color:#c9cdd8" onclick="closeModal()">Close</button>
    </div>
    <p style="font-size:12.5px;margin-top:12px">Turning it off keeps the modules that were unlocked. Use “Reset all progress” to start from zero.</p>`);
  $('#devToggle').onclick = () => { closeModal(); setDev(!P.dev); };
  $('#devReset').onclick = () => { closeModal(); resetProgress(); };
}
document.addEventListener('click', e => { if (e.target.closest('#devLink') || e.target.closest('#devBadge')) openDev(false); });
let dk = [];
document.addEventListener('keydown', e => {
  if (!(e.shiftKey && e.key.toLowerCase() === 'd')) return;
  const now = Date.now(); dk = dk.filter(x => now - x < 1200); dk.push(now);
  if (dk.length >= 3){ dk = []; openDev(true); }
});

/* ---------- Start ---------- */
document.documentElement.lang = C.lang || 'en';
$('#footText').textContent = U.footer;
$('#devLink').textContent = U.devLink;
loadP();
devBadge();
route();
