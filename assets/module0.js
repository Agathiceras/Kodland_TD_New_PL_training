/* =====================================================================
   MODULE 0 (mindset) + FINAL MODULE (first-lesson mindset) — BUILDER
   No texts here: they are in module0-<lang>.js. The SAME file is used by the EM and the PL training.
   M0.build(track, lang, opts) → Module 0 (with .final = the final module) for 'em' or 'pl'.
   opts = { flag(name), setFlag(name), refresh() } — the training’s own progress functions.
   ===================================================================== */
window.M0 = (function(){
  const X = window.M0_CONTENT;
  if (!X) return null;

  /* ---------- CONFIG ----------
     SURVEY_URL: the Web App URL of the Google Apps Script of EACH training’s Google Sheet (em / pl)
     (see Training_Surveys/SETUP.md). Empty = the answers are not sent anywhere (useful while testing). */
  const SURVEY_URL = {
    em: 'https://script.google.com/macros/s/AKfycbzHRdwAWsDqR3mZjy_Ca3JAwBe1k68CjSSA6zrdroKf05lIhsYvSjIpR9L9b-0NkR90/exec',   // Google Sheet of the EM training
    pl: 'https://script.google.com/macros/s/AKfycbwp4gXWtYb9Gl6kp7EylKZ5EMwYHovTnwmdKcWbjdyUC2iuSjMaYFgbyAjrUFb7mrI8fg/exec'    // Google Sheet of the PL training
  };
  const GIF = 'images/how-do-you-feel-matty-matheson.gif';          // Module 0 survey
  const GIF_FINAL = 'images/just-checking-in-on-you-peek.gif';      // final module survey
  // Region preselected from the training language (the tutor can change it). en and ar are used by several regions: no default.
  const REGION_BY_LANG = { es:'latam', pt:'brazil', it:'italy', pl:'poland', ru:'cis', tr:'mena', id:'indonesia' };
  const IDKEY = 'kl-m0-identity';

  /* ---------- styles (they adapt to each training through its CSS variables) ---------- */
  const css = `
  .m0-road{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:12px;margin:6px 0 4px}
  .m0-step{position:relative;background:var(--surface,var(--panel));border:2px solid var(--line);border-radius:18px;padding:16px 16px 14px}
  .m0-step .m0-n{position:absolute;top:12px;right:14px;font-size:12px;font-weight:800;color:var(--muted)}
  .m0-step .m0-i{font-size:28px;line-height:1}
  .m0-step b{display:block;margin:8px 0 4px;font-size:15.5px}
  .m0-step p{margin:0;font-size:14px;line-height:1.55;color:var(--muted)}
  .m0-why{border-left:6px solid var(--lime);font-size:16px;line-height:1.7}
  .m0-why p{margin:0}
  .m0-ck{display:grid;gap:9px;margin:8px 0 6px}
  .m0-ck .ck{width:100%;cursor:pointer}
  .m0-all{display:none;margin-top:10px;font-weight:700}
  .m0-all.show{display:block;animation:m0in .4s ease}
  .m0-whyrow{display:grid;grid-template-columns:280px 1fr;gap:14px;align-items:stretch}
  .m0-whyrow .m0-why{display:flex;align-items:center}
  .m0-scene{position:relative;min-height:230px;border-radius:20px;overflow:hidden}
  .m0-scene.em{background:radial-gradient(circle at 50% 45%,#7b5cf0,#2f2a6b)}
  .m0-scene.pl{background:radial-gradient(circle at 50% 50%,#3f6b80,#2d3450)}
  .m0-scene .av{position:absolute;left:50%;top:46%;transform:translate(-50%,-50%);font-size:62px;line-height:1;animation:m0bob 2.4s ease-in-out infinite}
  .m0-scene.pl .av{top:50%}
  .m0-scene .orb{position:absolute;left:50%;top:46%;font-size:26px;line-height:1;animation:m0orbit 8s linear infinite}
  .m0-loop{position:absolute;left:0;right:0;bottom:12px;display:flex;justify-content:center;align-items:center;gap:5px}
  .m0-loop span{font-size:17px;background:rgba(255,255,255,.14);border-radius:10px;padding:4px 7px;opacity:.4;animation:m0lit 4s infinite}
  .m0-loop span:nth-of-type(2){animation-delay:1s}.m0-loop span:nth-of-type(3){animation-delay:2s}.m0-loop span:nth-of-type(4){animation-delay:3s}
  .m0-loop i{font-style:normal;color:rgba(255,255,255,.5);font-size:12px}
  .m0-scene .st{position:absolute;font-size:32px;line-height:1;padding:8px;border-radius:50%;animation:m0glow 4s infinite}
  .m0-scene .clk{position:absolute;left:50%;top:10px;transform:translateX(-50%);font-size:22px;animation:m0tick 2s ease-in-out infinite}
  @keyframes m0bob{0%,100%{transform:translate(-50%,-50%)}50%{transform:translate(-50%,-58%)}}
  @keyframes m0orbit{from{transform:translate(-50%,-50%) rotate(0deg) translateX(86px) rotate(0deg)}to{transform:translate(-50%,-50%) rotate(360deg) translateX(86px) rotate(-360deg)}}
  @keyframes m0lit{0%,22%{opacity:1;transform:scale(1.18)}32%,100%{opacity:.4;transform:none}}
  @keyframes m0glow{0%,22%{background:rgba(205,242,74,.35);box-shadow:0 0 0 7px rgba(205,242,74,.22);transform:scale(1.12)}32%,100%{background:transparent;box-shadow:none;transform:none}}
  @keyframes m0tick{0%,100%{transform:translateX(-50%) rotate(-8deg)}50%{transform:translateX(-50%) rotate(8deg)}}
  .m0-open{width:100%;min-height:80px;font:inherit;font-size:15px;padding:11px 13px;border-radius:12px;border:2px solid var(--line);background:var(--soft,var(--bg2));color:inherit;resize:vertical}
  .m0-open:focus{outline:none;border-color:var(--lime)}
  .m0-sq.opt-q .m0-sqt::before{content:""}
  .m0-sqt em{font-style:normal;font-weight:600;color:var(--muted);font-size:13.5px}
  .m0-mentors{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:12px;margin:6px 0 4px}
  .m0-mentor{background:var(--surface,var(--panel));border:2px solid var(--lime);border-radius:18px;padding:16px}
  .m0-reg{display:inline-block;font-size:11.5px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;background:var(--lime);color:#1f2433;border-radius:999px;padding:3px 10px;margin-bottom:10px}
  .m0-person{display:flex;align-items:center;gap:10px;font-weight:700;font-size:15px;margin:6px 0}
  .m0-person i{flex:0 0 38px;height:38px;border-radius:50%;display:grid;place-items:center;font-style:normal;font-size:13px;font-weight:800;color:#fff;background:linear-gradient(135deg,#8B5CF6,#ec5fa6)}
  .m0-for{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:10px;margin:8px 0}
  .m0-for div{display:flex;gap:10px;align-items:center;background:var(--soft,var(--bg2));border:1px solid var(--line);border-radius:14px;padding:12px 14px;font-size:14.5px;font-weight:600}
  .m0-for span{font-size:22px}
  .m0-steps{display:grid;gap:8px;margin-top:10px}
  .m0-steps div{display:flex;gap:12px;align-items:flex-start;font-size:15px;line-height:1.5}
  .m0-steps b.m0-k{flex:0 0 28px;height:28px;border-radius:50%;background:var(--lime);color:#1f2433;display:grid;place-items:center;font-size:13px}
  .m0-told{display:grid;gap:10px;margin:8px 0}
  .m0-t{display:grid;grid-template-columns:1fr 1fr;gap:0;text-align:left;width:100%;padding:0;border:2px solid var(--line);border-radius:18px;overflow:hidden;background:var(--surface,var(--panel));color:inherit;font:inherit;cursor:pointer}
  .m0-t > span{padding:14px 16px;font-size:14.5px;line-height:1.55}
  .m0-t small{display:block;font-size:11px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:var(--muted);margin-bottom:4px}
  .m0-t .m0-so{background:var(--soft,var(--bg2));position:relative}
  .m0-t .m0-so .m0-tx{opacity:0;transition:opacity .35s}
  .m0-t .m0-hint{position:absolute;inset:0;display:grid;place-items:center;font-weight:800;font-size:13.5px;color:var(--muted);transition:opacity .25s}
  .m0-t.on{border-color:var(--lime)}
  .m0-t.on .m0-so{background:rgba(196,240,70,.16)}
  .m0-t.on .m0-so .m0-tx{opacity:1}
  .m0-t.on .m0-hint{opacity:0}
  .m0-start{text-align:center;padding:28px 24px}
  .m0-start .m0-big{font-size:52px;line-height:1}
  .m0-start p{max-width:720px;margin:12px auto 0;font-size:16.5px;line-height:1.7}
  /* surveys */
  .m0-sv{background:var(--surface,var(--panel));border:2px solid var(--lime);border-radius:22px;padding:22px}
  .m0-svhead{display:flex;gap:18px;align-items:center;margin-bottom:6px}
  .m0-svhead img{flex:0 0 120px;width:120px;height:120px;border-radius:18px;object-fit:cover}
  .m0-svhead h3{margin:0 0 6px;font-size:20px}
  .m0-svhead p{margin:0;font-size:14.5px;line-height:1.6;color:var(--muted)}
  .m0-id{display:grid;grid-template-columns:1.4fr 1fr;gap:12px;margin:16px 0 6px}
  .m0-id label{display:block;font-size:13px;font-weight:800;margin-bottom:6px}
  .m0-id input,.m0-id select{width:100%;font:inherit;font-size:15px;padding:11px 13px;border-radius:12px;border:2px solid var(--line);background:var(--soft,var(--bg2));color:inherit}
  .m0-id input:focus,.m0-id select:focus{outline:none;border-color:var(--lime)}
  .m0-grp{margin:18px 0 4px;font-size:12px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:var(--muted)}
  .m0-sq{border-top:1px solid var(--line);padding:14px 0 6px}
  .m0-sq.miss .m0-sqt{color:#ff6b7a}
  .m0-sqt{margin:0 0 10px;font-weight:700;font-size:15.5px}
  .m0-sqt::before{content:"★ ";color:var(--lime)}
  .m0-opts{display:flex;flex-wrap:wrap;gap:8px;align-items:center}
  .m0-opt{font:inherit;font-size:14.5px;font-weight:700;padding:9px 15px;border-radius:999px;border:2px solid var(--line);background:var(--soft,var(--bg2));color:inherit;cursor:pointer;transition:transform .15s,border-color .15s}
  .m0-opt:hover{border-color:var(--lime)}
  .m0-opt.on{background:var(--lime);border-color:var(--lime);color:#1f2433;transform:translateY(-1px)}
  .m0-scale .m0-opt{width:46px;height:46px;padding:0;border-radius:14px;font-size:16px}
  .m0-scale small{font-size:12px;color:var(--muted);font-weight:700}
  .m0-svfoot{display:flex;gap:14px;align-items:center;flex-wrap:wrap;margin-top:18px}
  .m0-svmsg{font-size:14.5px;font-weight:600}
  .m0-svmsg.err{color:#ff6b7a}
  .m0-svdone{margin-bottom:12px;border-radius:14px;padding:12px 16px;background:rgba(196,240,70,.16);border:1px solid var(--lime);font-size:15px}
  .m0-sv .m0-sendbtn{font:inherit;font-weight:800;font-size:15px;border:0;border-radius:12px;padding:12px 20px;background:var(--yellow,#ffd34d);color:#2a2205;cursor:pointer}
  .m0-sv .m0-sendbtn:disabled{opacity:.6;cursor:default}
  /* final module */
  .m0-refl{display:grid;gap:12px;margin-top:10px}
  .m0-refl .card b{display:block;margin-bottom:8px}
  .m0-refl textarea{width:100%;min-height:74px;font:inherit;font-size:15px;padding:11px 13px;border-radius:12px;border:2px solid var(--line);background:var(--soft,var(--bg2));color:inherit;resize:vertical}
  .m0-refl small{display:block;color:var(--muted);font-size:13px;margin-bottom:8px}
  .m0-res{display:flex;flex-wrap:wrap;gap:8px}
  @keyframes m0in{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}
  @media (max-width:700px){.m0-whyrow,.m0-t,.m0-id{grid-template-columns:1fr}.m0-svhead{flex-direction:column;align-items:flex-start}}`;
  const st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);

  /* ---------- helpers ---------- */
  const pick = (v, track) => (v && typeof v === 'object' && !Array.isArray(v) && ('em' in v || 'pl' in v)) ? v[track] : v;
  const callout = (type, icon, html) => `<div class="callout ${type}"><span class="ci">${icon}</span><div>${html}</div></div>`;
  const initials = n => n.split(/\s+/).slice(0, 2).map(w => w[0]).join('').toUpperCase();
  // memory + localStorage + sessionStorage: keeps working inside the LMS iframe even when storage is blocked
  const memStore = {};
  const areas = () => { const a = []; try { a.push(window.localStorage); } catch(e){} try { a.push(window.sessionStorage); } catch(e){} return a; };
  const store = { get(k){ for (const st of areas()){ try { const v = st.getItem(k); if (v !== null) return JSON.parse(v); } catch(e){} } return k in memStore ? memStore[k] : null; },
                  set(k, v){ memStore[k] = v; for (const st of areas()){ try { st.setItem(k, JSON.stringify(v)); } catch(e){} } } };

  let CTX = null;   // { track, lang, opts } of the training that built the module

  /* ---------- "Why we are changing" scenes (emojis + animation only, nothing to translate) ----------
     EM: a kid building, with the ideas around them and the loop try → fail → fix → show.
     PL: one tutor in the middle, students around, each one getting a one-on-one moment in turn. */
  const SCENES = {
    em: `<div class="m0-scene em" aria-hidden="true">
      <span class="orb" style="animation-delay:0s">🛠️</span><span class="orb" style="animation-delay:-2s">💡</span>
      <span class="orb" style="animation-delay:-4s">🚀</span><span class="orb" style="animation-delay:-6s">🤖</span>
      <span class="av">🧒</span>
      <div class="m0-loop"><span>🔨</span><i>→</i><span>❌</span><i>→</i><span>🔧</span><i>→</i><span>🏆</span></div></div>`,
    pl: `<div class="m0-scene pl" aria-hidden="true">
      <span class="clk">⏱️</span>
      <span class="st" style="left:14%;top:16%;animation-delay:0s">👧</span><span class="st" style="right:14%;top:16%;animation-delay:1s">🧒</span>
      <span class="st" style="right:14%;bottom:14%;animation-delay:2s">👦</span><span class="st" style="left:14%;bottom:14%;animation-delay:3s">🧑</span>
      <span class="av">🧑‍🏫</span></div>`
  };

  /* ---------- a survey form ---------- */
  function surveyHTML(key, def, flagName, gif){
    const SV = X.survey, id = store.get(IDKEY) || {}, track = CTX.track;
    const region = id.region || REGION_BY_LANG[CTX.lang] || '';
    const head = `<div class="m0-svhead">${gif ? `<img src="${gif}" alt="${def.gifAlt || ''}">` : ''}<div><h3>${def.title}</h3><p>${def.intro}</p></div></div>`;
    // Sent once = done: the survey isn’t shown again (retaking the check doesn’t ask for it again)
    if (CTX.opts.flag(flagName)) return `<div class="m0-sv sent">${head}<div class="m0-svdone">${SV.thanks}</div></div>`;
    const q = x => {
      const opts = x.type === 'choice' ? X.feelings : x.type === 'length' ? X.lengths : null;
      const body = x.type === 'open'
        ? `<textarea class="m0-open" placeholder="${SV.openPlaceholder}"></textarea>`
        : opts
        ? `<div class="m0-opts">${opts.map(o => `<button type="button" class="m0-opt" data-v="${o[0]}">${o[1]}</button>`).join('')}</div>`
        : `<div class="m0-opts m0-scale"><small>${SV.low}</small>${[1,2,3,4,5].map(n => `<button type="button" class="m0-opt" data-v="${n}">${n}</button>`).join('')}<small>${SV.high}</small></div>`;
      return `<div class="m0-sq ${x.optional ? 'opt-q' : ''}" data-q="${x.id}" data-type="${x.type}"><p class="m0-sqt">${pick(x.q, track)}${x.optional ? ` <em>(${SV.optional})</em>` : ''}</p>${body}</div>`;
    };
    const groups = def.groups || [{ questions:def.questions }];
    return `<div class="m0-sv" data-sv="${key}" data-flag="${flagName}">
      ${head}
      <div class="m0-id">
        <div><label>${SV.emailLabel}</label><input type="email" class="m0-email" placeholder="${SV.emailPlaceholder}" value="${id.email || ''}" autocomplete="email"></div>
        <div><label>${SV.regionLabel}</label><select class="m0-region"><option value="">${SV.regionPlaceholder}</option>${X.regions.map(r => `<option value="${r[0]}" ${r[0] === region ? 'selected' : ''}>${r[1]}</option>`).join('')}</select></div>
      </div>
      ${groups.map(g => `${g.title ? `<div class="m0-grp">${g.title}</div>` : ''}${g.questions.map(q).join('')}`).join('')}
      <div class="m0-svfoot"><button type="button" class="m0-sendbtn" data-svsend>${SV.send}</button><span class="m0-svmsg"></span></div>
    </div>`;
  }

  function sendSurvey(box){
    const SV = X.survey, msg = box.querySelector('.m0-svmsg'), btn = box.querySelector('[data-svsend]');
    const email = box.querySelector('.m0-email').value.trim(), region = box.querySelector('.m0-region').value;
    msg.className = 'm0-svmsg';
    if (!/^[^@\s]+@kodland\.[a-z.]+$/i.test(email)){ msg.className = 'm0-svmsg err'; msg.textContent = SV.emailError; box.querySelector('.m0-email').focus(); return; }
    if (!region){ msg.className = 'm0-svmsg err'; msg.textContent = SV.regionError; box.querySelector('.m0-region').focus(); return; }
    const answers = {}; let missing = false;
    box.querySelectorAll('.m0-sq').forEach(s => {
      if (s.dataset.type === 'open'){ answers[s.dataset.q] = s.querySelector('textarea').value.trim(); return; }   // open questions are optional
      const on = s.querySelector('.m0-opt.on'); s.classList.toggle('miss', !on); if (on) answers[s.dataset.q] = on.dataset.v; else missing = true; });
    if (missing){ msg.className = 'm0-svmsg err'; msg.textContent = SV.missing; return; }
    store.set(IDKEY, { email, region });
    const payload = Object.assign({ survey:box.dataset.sv, training:CTX.track.toUpperCase(), lang:CTX.lang, email, region, sent_at:new Date().toISOString() }, answers);
    store.set('kl-m0-last-' + CTX.track + '-' + box.dataset.sv, payload);   // a copy in the browser, just in case
    btn.disabled = true; msg.textContent = SV.sending;
    const finish = () => {
      CTX.opts.setFlag(box.dataset.flag);
      // The form is replaced by the thank-you message: one answer per tutor
      const head = box.querySelector('.m0-svhead').outerHTML;
      box.classList.add('sent'); box.innerHTML = `${head}<div class="m0-svdone">${SV.thanks}</div>`;
      CTX.opts.refresh();
    };
    const url = SURVEY_URL[CTX.track];   // each training has its own Google Sheet
    if (!url){ console.warn('[Module 0] SURVEY_URL.' + CTX.track + ' is empty: answers not sent', payload); finish(); return; }
    // text/plain avoids the CORS preflight that Apps Script doesn’t answer; no-cors = fire and forget
    fetch(url, { method:'POST', mode:'no-cors', headers:{ 'Content-Type':'text/plain;charset=utf-8' }, body:JSON.stringify(payload) })
      .then(finish, finish);
  }

  /* ---------- clicks ---------- */
  document.addEventListener('click', e => {
    const t = e.target.closest('[data-m0t]'); if (t) t.classList.toggle('on');
    if (e.target.closest('.m0-ck')){
      const box = e.target.closest('.m0-ck'), all = box.querySelectorAll('.ck'), on = box.querySelectorAll('.ck.on');
      const msg = document.getElementById('m0All'); if (msg) msg.classList.toggle('show', all.length === on.length);
    }
    const o = e.target.closest('.m0-sq .m0-opt');
    if (o){ const q = o.closest('.m0-sq'); q.querySelectorAll('.m0-opt').forEach(b => b.classList.toggle('on', b === o)); q.classList.remove('miss'); }
    const r = e.target.closest('[data-m0res]'); if (r){ r.classList.toggle('on'); saveNotes(); }
    const s = e.target.closest('[data-svsend]'); if (s) sendSurvey(s.closest('.m0-sv'));
  });
  // Final module notes: saved only in this browser
  const notesKey = () => 'kl-m0-notes-' + (CTX ? CTX.track : '');
  function saveNotes(){
    const n = { q1:(document.getElementById('m0n1') || {}).value || '', q2:(document.getElementById('m0n2') || {}).value || '',
      res:[...document.querySelectorAll('[data-m0res].on')].map(b => b.dataset.m0res) };
    store.set(notesKey(), n);
  }
  document.addEventListener('input', e => { if (e.target.closest('.m0-refl')) saveNotes(); });

  function build(track, lang, opts){
    CTX = { track, lang, opts };
    const M = X.module, W = X.welcome, R = X.ready, A = X.alone, V = X.voice, S = X.start, F = X.final;
    const prep = pick(W.prep, track);
    const mentors = A.mentors[lang] || A.mentors.en;
    const body = {
      m0welcome: () => `
        <p class="p">${W.intro}</p>
        ${callout('good', '🧭', `<b>${W.howTitle}.</b> ${W.how}`)}
        <h3 class="subh">${W.prepTitle}</h3>
        <p class="p">${prep.intro}</p>
        <div class="m0-road">${prep.items.map((x, i) => `<div class="m0-step"><span class="m0-n">${i + 1}</span><span class="m0-i">${x[0]}</span><b>${x[1]}</b><p>${x[2]}</p></div>`).join('')}</div>
        ${callout('warn', '🎮', `<b>${W.simsTitle}.</b> ${W.sims}`)}
        <h3 class="subh">${W.whyTitle}</h3>
        <div class="m0-whyrow">${SCENES[track]}<div class="card m0-why"><p>${pick(W.why, track)}</p></div></div>
        ${callout('tip', '💪', `<b>${W.meansTitle}.</b> ${W.means}`)}`,

      m0ready: () => `
        <p class="p">${R.intro}</p>
        <p class="p">${R.listIntro}</p>
        <div class="m0-ck">${R.items.map((t, i) => `<button class="ck" data-ck="m0r${i}"><span class="ckb"></span><span>${t}</span></button>`).join('')}</div>
        <div class="m0-all" id="m0All">${R.allTicked}</div>
        ${callout('good', '🌱', `<b>${R.beginnerTitle}.</b> ${R.beginner}`)}`,

      m0alone: () => `
        <p class="p">${A.intro}</p>
        <h3 class="subh">${A.mentorTitle}</h3>
        <div class="m0-mentors">${mentors.map(r => `<div class="m0-mentor"><span class="m0-reg">${A.regionLabel} · ${r[0]}</span>${r[1].map(n => `<div class="m0-person"><i>${initials(n)}</i>${n}</div>`).join('')}</div>`).join('')}</div>
        <h3 class="subh">${A.forTitle}</h3>
        <div class="m0-for">${A.forItems.map(x => `<div><span>${x[0]}</span>${x[1]}</div>`).join('')}</div>
        ${callout('tip', '👥', A.tl)}
        <div class="card" style="margin-top:16px"><b>📅 ${A.sessionTitle}</b>
          <div class="m0-steps">${A.sessionSteps.map((s, i) => `<div><b class="m0-k">${i + 1}</b><span>${s}</span></div>`).join('')}</div></div>
        ${callout('good', '💬', A.dm)}`,

      m0voice: () => `
        <p class="p">${V.intro}</p>
        <div class="m0-told">${pick(V.told, track).map(r => `<button class="m0-t" data-m0t>
          <span><small>${V.toldLabel}</small>${r[0]}</span>
          <span class="m0-so"><small>${pick(V.soLabel, track)}</small><span class="m0-tx">${r[1]}</span><span class="m0-hint">${V.tapHint}</span></span></button>`).join('')}</div>
        ${callout('warn', '🌟', V.firsts)}`,

      m0start: () => `
        <div class="card m0-start"><div class="m0-big">🚀</div><p>${S.text}</p></div>
        ${callout('good', '💬', S.dm)}`,

      m0survey: () => surveyHTML('module0', X.startSurvey, 'm0survey', GIF),

      /* ----- final module ----- */
      mfmind: () => { const x = F.mind, n = store.get(notesKey()) || {}; return `
        <p class="p">${x.intro}</p>
        <div class="m0-refl">
          <div class="card"><b>${x.q1}</b><textarea id="m0n1" placeholder="${x.placeholder}">${n.q1 || ''}</textarea></div>
          <div class="card"><b>${x.q2}</b><textarea id="m0n2" placeholder="${x.placeholder}">${n.q2 || ''}</textarea></div>
          <div class="card"><b>${x.q3}</b><small>${x.resourcesHint}</small>
            <div class="m0-res">${x.resources.map(r => `<button type="button" class="m0-opt ${(n.res || []).includes(r[1]) ? 'on' : ''}" data-m0res="${r[1]}">${r[0]} ${r[1]}</button>`).join('')}</div></div>
        </div>
        ${callout('tip', '🧩', `<b>${x.answerTitle}.</b> ${x.answer}`)}
        ${callout('warn', '🌱', `<b>${x.afterTitle}:</b> ${x.after}`)}
        <div class="card m0-start" style="margin-top:16px"><div class="m0-big">💪</div><p>${x.ready}</p></div>`; },

      mfsurvey: () => surveyHTML('final', F.survey, 'mfsurvey', GIF_FINAL)
    };
    const T = M.sections;
    return {
      id: 'm0', e: M.e, title: M.title, desc: M.desc, obj: M.obj, offer: M.offer,
      sections: [['m0welcome', '👋', T.welcome], ['m0ready', '✅', T.ready], ['m0alone', '🤝', T.alone], ['m0voice', '💬', T.voice], ['m0start', '🚀', T.start], ['m0survey', '📝', T.survey]],
      body, quiz: X.quiz,
      surveyFlag: 'm0survey', lockMsg: X.survey.lockMsg, lockWhat: X.survey.lockWhat,
      final: {
        id: 'mf', e: F.e, title: F.title, desc: F.desc, obj: F.obj, offer: F.offer,
        sections: [['mfmind', '✨', F.sections.mind], ['mfsurvey', '💬', F.sections.survey]],
        surveyFlag: 'mfsurvey', ctaTitle: F.ctaTitle, ctaText: F.ctaText, ctaBtn: F.ctaBtn, done: F.done
      }
    };
  }
  return { build };
})();
