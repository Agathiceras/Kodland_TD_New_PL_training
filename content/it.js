/* =====================================================================
   PARALLEL LESSONS TRAINING — CONTENT FILE (English)
   ---------------------------------------------------------------------
   TRANSLATORS: this is the ONLY file you need to translate.
   1. Copy this file and rename it with your language code (e.g. it.js).
   2. Translate ONLY the text between quotes. Do not change:
      - the names before the colons (keys), e.g.  title:  desc:
      - anything inside {curly braces}, e.g. {n}, {total}, {name}
      - HTML tags such as <b>, </b>, <i>, <br>, <span class='hl2'>
      - emojis, numbers marked "a:" (correct answers) and video links
   3. Add the language to content/languages.js.
   See TRANSLATION_GUIDE.md for the full instructions.
   ===================================================================== */
window.PL_CONTENT = {

  lang: "it",

  /* ---------- Videos (Google Drive "preview" links). A region can replace them with its own video. ---------- */
  videos: {
    opening: "https://drive.google.com/file/d/12DWDkaSE8c4OsHWtWDAc5iNd8jc6C60v/preview",
    closing: "https://drive.google.com/file/d/1R7gMdFGfdFtv1FRKGRn65-BJN13IYnmW/preview",
    checkin: "https://drive.google.com/file/d/1_4Opmv0hsAgKPbuEd6Y1HTP9ZJqGAXDA/preview",
    content: "https://drive.google.com/file/d/14gOeQ7jc_vXp9OSmE7P-tsJu53BChcqd/preview"
  },

  /* ---------- General interface ---------- */
  ui: {
    brand: "Formazione sulle lezioni parallele",
    footer: "kodland · Formazione sulle lezioni parallele",
    devLink: "🛠 Sviluppatore",
    language: "🌐 Lingua",

    navModulesPill: "{done}/{total} moduli",
    navHome: "← Pagina iniziale",
    navModules: "← Moduli",
    navBackModule: "← Torna al modulo",

    homeKicker: "Formazione tutor · Nuova versione",
    homeTitle1: "Lezioni",
    homeTitle2: "parallele",
    homeLead: "Un nuovo formato Premium: un tutor, più studenti, ognuno con il proprio percorso nella stessa fascia oraria. Questa formazione ti prepara a tenere le tue prime lezioni parallele, passo dopo passo.",
    homeFact1: "<b>100% in autonomia.</b> Procedi al tuo ritmo: i progressi vengono salvati in questo browser.",
    homeFact2: "<b>Esercitati quanto vuoi.</b> Puoi ripetere le simulazioni tutte le volte che desideri, finché non ti senti a tuo agio.",
    coreLabel: "Percorso principale",
    coreTitle: "Il formato PL",
    coreDesc: "Che cosa sono le lezioni parallele, la struttura della lezione, il tuo ruolo, gli aspetti tecnici, le risposte alle tue domande e una simulazione pratica completa. {total} brevi moduli.",
    btnStart: "Inizia →",
    btnReview: "Ripassa →",
    btnContinue: "Continua →",

    listKicker: "Percorso principale",
    listTitle1: "Il formato",
    listTitle2: "PL",
    listLead: "{total} brevi moduli da seguire in ordine. Ciascuno termina con una breve verifica o attività che sblocca il successivo.",
    listAllDone: "Tutti i moduli completati 🎉",
    listModulesComplete: "moduli completati",
    listModuleN: "Modulo {n}",
    badgeDone: "✓ Completato · {score}%",
    badgeDoneSim: "✓ Completato",
    badgeLocked: "🔒 Completa il modulo {prev}",
    badgeEnterSim: "▶ Avvia la simulazione",
    badgeStart: "Inizia →",
    listDoneTitle: "Tutti i moduli completati!",
    listDoneText: "Manca un ultimo passaggio: scopri come proseguire.",
    listDoneBtn: "Scopri i prossimi passaggi",

    moduleEyebrow: "Modulo {n} di {total}",
    simEyebrow: "Modulo {n} di {total} · La parte pratica",

    ctaQuizH: "Verifica del modulo",
    ctaQuizP: "{n} brevi domande. Per superare la verifica devi ottenere almeno il 70%.",
    ctaTfH: "Verifica del modulo: vero o falso?",
    ctaTfP: "{n} affermazioni. Per superare la verifica devi ottenere almeno il 70%.",
    ctaChatH: "Verifica del modulo: una conversazione con un collega",
    ctaChatP: "Un tutor che non conosce il formato vuole saperne di più. Aiutalo con 4 risposte. Per superare la verifica devi ottenere almeno il 70%.",
    ctaQaH: "Hai finito di leggere?",
    ctaQaP: "Apri tutte le domande per completare questo modulo.",
    ctaQaBtn: "✅ Ho trovato le risposte — continua",
    ctaQaBtnDone: "✓ Completato — modulo successivo →",
    ctaStart: "Avvia la verifica →",
    ctaRetake: "🔁 Ripeti la verifica",

    codeLabel: "<b>🔑 Codice di completamento</b> — lo trovi nella schermata finale della simulazione.",
    codePlaceholder: "es. PL-XX-0000",
    codeUnlock: "Sblocca",
    codeError: "Il codice non è corretto. Controllalo nella schermata finale della simulazione.",
    codeOk: "✅ <b>{label}: completata.</b> Codice accettato.",
    codeLabelBO: "Simulazione BO",
    codeLabelSim: "Simulazione Classroom",

    subsRemember: "Ricorda di attivare i sottotitoli nella tua lingua, se necessario.",
    subsCan: "Se necessario, puoi attivare i sottotitoli nella tua lingua.",

    carouselOf: "{i} di {n}",
    carouselDone: "<b>Hai conosciuto tutti e 4 gli studenti!</b> La verifica del modulo è ora disponibile in fondo alla pagina.",
    flipHint: "Tocca per girare",
    replay: "↻ Ripeti",
    stageLabel: "Fase {abs} · {i} di {n}",
    stageNext: "Fase successiva →",
    stageFirst: "Torna alla prima",
    mythTag: "Falso mito",
    realityTag: "Realtà ✓",
    mythHint: "Tocca per scoprire la realtà →",
    sorterDo: "✅ Da fare",
    sorterDont: "🚫 Da evitare",
    sorterNotQuite: "Non proprio.",
    qaProgress: "<b>{n} / {total}</b> domande aperte",

    sliderYou: "Tu",
    sliderStudent: "Studente {n}",
    sliderMin: "{m} min",
    sliderJoins: "entra al min {m} · 60 min",

    scrubYou: "🧑‍🏫 Tu",
    scrubPlay: "▶ Avvia",
    scrubPause: "⏸ Pausa",
    scrubReplay: "▶ Riavvia",
    scrubNotJoined: "Non è ancora entrato",
    scrubOpening: "Apertura",
    scrubWorking: "Lavoro autonomo",
    scrubClosing: "Chiusura",
    scrubFinished: "Terminato",
    scrubFree: "Disponibile — ci sono mani alzate?",
    scrubOpeningX: "Apertura con {name}",
    scrubClosingX: "Chiusura con {name}",
    scrubHelping: "✋ Stai aiutando Leo",
    scrubOver: "Sessione terminata",
    scrubNotesTitle: "📝 I miei appunti",
    scrubNotesEmpty: "I tuoi appunti compariranno qui man mano che gli studenti entrano…",
    legendOpening: "Apertura (con te)",
    legendIndep: "Lavoro autonomo",
    legendClosing: "Chiusura (con te)",
    legendSession: "La tua sessione",

    quizMeta: "Verifica del modulo {n} · {kind} {i} di {total}",
    quizKindQ: "Domanda",
    quizKindTF: "Vero o falso",
    quizTrue: "✅ Vero",
    quizFalse: "❌ Falso",
    quizCorrect: "✅ <b>Corretto!</b> ",
    quizWrong: "❌ <b>Non proprio.</b> ",
    quizNext: "Domanda successiva →",
    quizResult: "Mostra il mio risultato →",

    resultPassed: "Verifica superata!",
    resultComplete: "Modulo completato!",
    resultAlmost: "Ci sei quasi",
    resultAnswered: "Hai risposto correttamente a <b>{s} domande su {n}</b>.",
    resultUnlocked: "<b>Modulo {n} · {title}</b> è ora sbloccato.",
    resultNeed: "Serve almeno il 70%. Ripassa il modulo e riprova: puoi ripetere la verifica tutte le volte che vuoi.",
    resultGoModule: "Vai al modulo {n} →",
    resultNextSteps: "Scopri i prossimi passaggi →",
    resultReview: "📖 Ripassa il modulo",
    resultQaRead: "Hai letto tutte le risposte.",
    resultSimAccepted: "Codice accettato: hai completato la simulazione Classroom.",

    lockTitle: "Ancora bloccato",
    lockPrev: "Completa prima il modulo {prev}.",
    lockGeneric: "Completa il modulo precedente per sbloccare questo.",
    ok: "OK"
  },

  /* ---------- Final screen (after the last module) ---------- */
  done: {
    title: "Moduli completati!",
    body: "<p>Ci sei quasi! Torna alla pagina della formazione su LMS da cui hai aperto questo percorso. Il test DST si trova subito sotto la formazione.</p><p>👉 Per completare con successo la formazione devi svolgere e superare il test DST. Se non lo svolgi, la formazione rimarrà incompleta e potrebbe scadere.</p><p>Il punteggio minimo per superarlo è <b>80%</b>.</p><p>In bocca al lupo! ❤️</p>",
    btnHome: "Torna alla pagina iniziale",
    btnPractice: "🎮 Esercitati di nuovo",
    btnReview: "Ripassa i moduli"
  },

  /* ---------- Modules: titles, descriptions and section titles ---------- */
  modules: {
    m1: { title: "Benvenuto nelle lezioni parallele",
          desc: "Che cos’è una lezione parallela, come funziona, come si gestiscono i tempi e a quali studenti si rivolge.",
          obj: "Al termine di questo modulo saprai che cos’è una lezione parallela, come si svolge, come gestire il tempo con più studenti e a chi è destinato questo formato.",
          needs: "Conosci tutti e 4 gli studenti nel carosello qui sopra per sbloccare la verifica.",
          sections: { what: "Che cos’è una lezione parallela?", runs: "Come si svolge una lezione", time: "Come si gestiscono i tempi", why: "Perché nasce questo formato", students: "Conosci gli studenti" } },
    m2: { title: "La struttura della lezione",
          desc: "La struttura di una lezione tradizionale e di una lezione parallela, e perché apertura e chiusura sono così importanti.",
          obj: "Confronta la struttura che già conosci con quella di una lezione parallela e scopri cosa accade in apertura e in chiusura: i due momenti che conduci tu.",
          sections: { structure: "Due strutture a confronto", matter: "Apertura e chiusura restano fondamentali", opening: "L’apertura", closing: "La chiusura" } },
    m3: { title: "Il tuo ruolo di tutor PL",
          desc: "Il tuo ruolo e il giusto approccio, il feedback, gli appunti e la tua prima lezione PL.",
          obj: "Comprendi il tuo ruolo in una lezione parallela, come dare feedback, come seguire gli studenti con gli appunti e come gestire la tua prima lezione PL.",
          sections: { role: "Quindi… qual è il mio ruolo?", mindset: "Competenze e approccio per ogni lezione", feedback: "Un feedback utile", notes: "L’ingresso degli studenti e i tuoi appunti", first: "La tua prima lezione PL" } },
    m4: { title: "Aspetti tecnici",
          desc: "Gruppi paralleli e note per il tutor in BO, e regole per la comunicazione e il monitoraggio.",
          obj: "Trova i gruppi paralleli e le note per il tutor in BackOffice, apri la console e scopri le regole per la comunicazione e il monitoraggio.",
          needs: "Inserisci il codice che trovi alla fine del simulatore BO per sbloccare la verifica.",
          sections: { bo: "I gruppi paralleli in BO", tnotes: "Le note per il tutor al posto della wiki", rules: "Regole per la comunicazione e il monitoraggio" } },
    m5: { title: "Domande e risposte",
          desc: "Risposte chiare alle domande più frequenti dei tutor: nessun test, basta leggerle.",
          obj: "Le vere domande dei tutor sulle lezioni parallele, con risposte chiare. Non c’è un test: apri ogni domanda per completare il modulo.",
          sections: { qa: "Domande e risposte" } },
    m6: { title: "Simulazione Classroom",
          desc: "Per completare la formazione, esercitati con una lezione reale: avvia la simulazione.",
          obj: "Esercitati con una vera lezione parallela prima di tenere la tua. È l’ultimo passaggio della formazione." }
  },

  /* ---------- Section texts ---------- */
  s: {
    /* Module 1 */
    what: {
      intro: "Immagina la tua prossima lezione: quattro studenti che arrivano in momenti diversi, ciascuno impegnato nel proprio progetto e ciascuno con la tua attenzione esclusiva nei momenti più importanti. Questa è una lezione parallela.",
      definition: "<b>Le lezioni parallele (PL)</b> sono un nuovo formato <b>Premium</b> per gli studenti che amano lavorare individualmente e in autonomia. Un tutor segue <b>2–5 studenti contemporaneamente</b>, ciascuno con il proprio percorso, nella stessa fascia oraria. Ogni studente ha comunque a disposizione <b>60 minuti</b> completi e senza interruzioni: è la durata complessiva della sessione del tutor ad aumentare per accoglierli tutti.",
      how: "Come è possibile? Classroom dispone di una nuova versione della piattaforma. Al posto di un’unica stanza per tutti gli studenti, hai <b>una stanza per ogni studente</b>: come le stanze separate, ma già predisposte automaticamente. Tu passi da una stanza all’altra; gli studenti non si vedono e non si sentono tra loro.",
      imgAlt: "La console Classroom con una stanza separata per ciascuno dei quattro studenti",
      imgCaption: "La schermata iniziale della console: ogni studente ha il proprio riquadro, anche se il tutor è lo stesso."
    },
    runs: {
      intro: "Come si svolge, quindi, la lezione di un singolo studente? Il formato è <b>parallelo</b>. Ogni lezione dura 60 minuti completi e non prevede attività di gruppo. Affianchi ciascuno studente all’inizio e alla fine della sua lezione; durante il lavoro autonomo, intervieni quando alza la mano.",
      cards: [
        ["🎙️", "Il ruolo del tutor", "Nei momenti in diretta crei il clima giusto, spieghi l’obiettivo e verifichi che tutto funzioni dal punto di vista tecnico. Durante il lavoro autonomo non conduci la lezione: offri un aiuto mirato quando lo studente lo richiede. Le schede ricordano agli studenti di chiamarti prima di salvare e nei passaggi fondamentali."],
        ["🔁", "Un approccio deduttivo", "Lo studente osserva prima un progetto finito, poi esplora come è stato realizzato e applica la stessa idea al proprio progetto: prima il risultato, poi il funzionamento, infine la propria versione."],
        ["💬", "Feedback: tutor + autovalutazione", "Questo formato non prevede feedback tra pari. L’IA non viene utilizzata nelle prime lezioni; nelle lezioni successive del modulo viene introdotta, dove utile, come terzo canale di feedback."]
      ]
    },
    time: {
      intro: "Il punto chiave è questo: gli studenti non iniziano tutti insieme. <b>Entra un nuovo studente ogni 10 minuti</b>. Ognuno ha a disposizione 60 minuti completi, quindi la tua sessione si allunga di 10 minuti per ogni studente in più.",
      example: "<b>Esempio:</b> con 3 studenti, la tua sessione dura 80 minuti, ma ogni studente ha comunque 60 minuti, perché entra un nuovo studente ogni 10 minuti.",
      formula: "La tua sessione = <b>60 min</b> + <b>10 min</b> per ogni studente in più",
      chipStudents: "{n} studenti",
      chipMin: "{m} min",
      tryIt: "👇 Ora prova: sposta il cursore o tocca uno dei riquadri qui sopra",
      tryTag: "Prova",
      students: "studenti",
      minYou: "minuti per te",
      minEach: "minuti per ogni studente"
    },
    why: {
      intro: "I corsi Premium spesso richiedono molto tempo per partire, perché è difficile far coincidere la disponibilità dello studente con quella del tutor. Le lezioni parallele risolvono questo problema. Gira le schede:",
      cards: [
        ["⚡", "Per gli studenti", "<b>Si comincia molto prima.</b><br>Niente settimane di attesa per trovare una fascia Premium compatibile: possono iniziare il corso e imparare al proprio ritmo."],
        ["🗓️", "Per i tutor", "<b>Più flessibilità.</b><br>Più lezioni individuali trovano spazio in un’unica fascia del tuo calendario e tu scopri un nuovo modo di insegnare."],
        ["🎯", "Per l’apprendimento", "<b>Vera autonomia.</b><br>Gli studenti maturano questa consapevolezza: <i>«Posso creare da solo un progetto digitale funzionante».</i> Gli errori fanno parte del percorso."]
      ],
      scope: "<b>Un chiarimento importante:</b> le lezioni parallele non sostituiscono il metodo didattico di Kodland. Sostituiscono il <b>formato Premium</b> in alcuni corsi selezionati."
    },
    students: {
      intro: "Forse ti chiedi: <i>«Agli studenti piacerà lavorare da soli?»</i> La risposta breve è: <b>sono stati loro a scegliere questo formato.</b> Conosciamoli:",
      howTo: "<b>Come procedere:</b> usa la freccia <b>›</b> per conoscere uno studente alla volta. Ci sono <b>4 slide</b>: la verifica del modulo si sblocca dopo che le hai viste tutte.",
      bubble: "Ti serve aiuto? ✋ Chiedi all’esperto",
      slides: [
        { who: "Studente 1 · L’indipendente", title: "Ama concentrarsi da solo", text: "Vuole imparare e mettere in pratica ciò che insegna il corso, ma le classi numerose non fanno per lui: troppo rumore e troppe attese.", quote: "«Imparo meglio quando posso concentrarmi sul mio progetto»." },
        { who: "Studente 2 · L’autodidatta", title: "Impara da solo", text: "Ama già esplorare e capire le cose in autonomia. Per lui questo formato offre un vantaggio in più: la libertà di imparare da solo <b>e</b> un esperto a cui rivolgersi quando serve.", quote: "«Mi piace scoprire le cose da solo e sapere che qualcuno può aiutarmi se mi blocco»." },
        { who: "Studente 3 · L’esperto di corsi asincroni", title: "Ha già studiato online", text: "Alcuni studenti hanno già seguito corsi completamente asincroni, senza alcun tutor. In una lezione parallela mantengono la stessa autonomia, con in più una persona che li accoglie e dà loro un feedback.", quote: "«È come nei miei corsi online, ma ora qualcuno guarda il mio lavoro!»" },
        { who: "Perché funziona · Dai 10 anni", title: "Pronti per l’autonomia", text: "Intorno ai 10–12 anni, la capacità di tenere a mente un obiettivo e gestire la propria attenzione fa un grande passo avanti. Sono le basi del lavoro autonomo, e sentire che qualcuno si fida della propria capacità di lavorare da soli è una forte motivazione.", quote: "«Posso creare da solo un progetto digitale funzionante»." }
      ],
      reassure: "<b>Non temere che il formato non piaccia.</b> Questi studenti lo conoscono prima di iscriversi e molti lo preferiscono. Il tuo compito è rendere efficaci e piacevoli l’inizio e la fine della loro lezione."
    },

    /* Module 2 */
    structure: {
      intro: "Partiamo da qualcosa che conosci già. Questa è la struttura di una <b>lezione Kodland tradizionale</b>, quella che segui negli altri formati, <b>Premium compreso</b>. Conduci ogni sua parte, dall’apertura alla chiusura, incluse teoria e pratica:",
      regularTitle: "👩‍🏫 Lezione Kodland tradizionale",
      plTitle: "⚡ Lezione parallela",
      bridge: "Una lezione parallela prevede <b>più autonomia</b>. Non sei tu a spiegare la teoria e guidare la pratica: <b>lo studente le affronta da solo</b>, con le schede. Funziona perché i contenuti sono <b>progettati per il lavoro autonomo</b>: le schede spiegano, mostrano esempi e offrono aiuto quando qualcosa non funziona.",
      theory: "Teoria e pratica",
      indep: "Lavoro autonomo",
      tagIndep: "Sostituisce teoria e pratica",
      tagFeedback: "Il feedback si dà qui",
      phOpening: "Apertura",
      phMain: "Parte centrale",
      phSelf: "Studio autonomo",
      phClosing: "Chiusura",
      diff1: "<b>Teoria e pratica → lavoro autonomo.</b> Il tutor non spiega la teoria e non mostra i passaggi pratici: lo studente lavora con le schede.",
      diff2: "<b>Il feedback si sposta alla chiusura.</b> Durante la lezione sei impegnato ad accogliere gli studenti, concludere le loro lezioni e rispondere alle mani alzate: il feedback sul progetto si dà quindi nella fase di riepilogo finale."
    },
    matter: {
      intro: "Un formato autonomo non significa dedicare meno attenzione all’apertura e alla chiusura rispetto agli altri formati. Come in ogni lezione, sono fondamentali perché gli studenti <b>comprendano e apprezzino il corso</b> e costruiscano una <b>relazione</b> con te.",
      card1Title: "🎬 Perché inizio e fine restano importanti",
      card1Text: "È facile pensare che, quando lo studente lavora in autonomia, il «vero» insegnamento sia in pausa e che apertura e chiusura siano semplici formalità ai margini del lavoro effettivo. <b>È vero il contrario.</b>",
      card2Title: "⭐ Perché è ancora importante",
      card2Text: "Il fatto che la parte centrale della lezione sia autonoma non cambia nulla di tutto questo. Anzi, nelle PL un’apertura e una chiusura ben gestite contano <b>ancora di più</b>, perché sono gli unici due momenti in cui ogni studente ha la tua attenzione completa ed esclusiva.",
      outro: "Ripassiamo a cosa serve ciascuna fase dell’apertura e della chiusura."
    },
    opening: {
      intro: "L’apertura comprende <b>4 fasi</b>. Scorrile con le frecce:",
      video: "In questo video vedrai come una tutor gestisce l’apertura con i primi due studenti che entrano in classe. Noterai che termina l’apertura con la prima studentessa al minuto 4:52. Poiché non sono ancora trascorsi tutti i 10 minuti previsti per l’apertura, continua a lavorare con lei ancora un po’, fino all’arrivo del secondo studente.",
      videoTitle: "L’apertura di una lezione parallela"
    },
    closing: {
      intro: "La chiusura è il momento in cui tutto si ricompone. Lo studente mostra il progetto finale, riceve un tuo feedback specifico, riflette su ciò che ha imparato e conclude sapendo cosa lo aspetta. Nelle PL è anche <b>il momento in cui dai il feedback</b>: non c’è una fase separata a metà lezione. La chiusura comprende <b>3 fasi</b>:",
      video: "In questo video vedrai come la tutor termina l’apertura con l’ultima studentessa. A questo punto deve tornare dalla prima studentessa per concludere la sua lezione.",
      videoTitle: "La chiusura di una lezione parallela"
    },

    /* Module 3 */
    role: {
      intro: "Se il lavoro è autonomo… <b>qual è il mio ruolo nella lezione?</b> Un ruolo importante, semplicemente diverso. In una lezione parallela non sei la persona che spiega tutto. Sei la persona che <b>apre la porta all’apprendimento</b> e si assicura che ogni studente la attraversi.",
      cards: [
        ["🧭", "Guida alla piattaforma", "Mostri a ogni studente come orientarsi nella piattaforma Kodland, così sa dove trovare ciò che serve e come muoversi da solo."],
        ["🚀", "Avvio dell’apprendimento", "Durante l’apertura crei il clima giusto, spieghi l’obiettivo e aiuti ogni studente a iniziare la propria lezione."],
        ["💬", "Guida attraverso il feedback", "Con un feedback costruttivo accompagni ogni studente, in parallelo, nel proprio percorso di apprendimento."]
      ]
    },
    mindset: {
      intro: "Non sono consigli casuali: sono le <b>competenze che un tutor PL mette in campo in ogni lezione</b>. Tienile a mente e richiamale prima di ogni incontro: sono ciò che ti permette di seguire più lezioni contemporaneamente offrendo a ciascuno una buona esperienza. Aprile tutte:",
      skills: [
        ["🎭", "Comprendere il proprio ruolo", "Il tuo compito passa da «trasmettere i contenuti» a «guidare più percorsi di apprendimento contemporaneamente». I contenuti ci sono ancora, nelle schede, ma non sono più il centro del tuo intervento. Ti concentri su ciò che serve a ogni studente per proseguire: un buon inizio, aiuto quando ti chiama e una conclusione vera e propria."],
        ["🤲", "Accettare il lavoro autonomo degli studenti", "Il lavoro autonomo non è un vuoto nel tuo insegnamento: è un momento previsto. Uno studente che lavora da solo mentre sei in un’altra stanza sta facendo esattamente ciò che richiede il formato. Consideralo un progresso, non un problema in attesa del tuo ritorno."],
        ["🧭", "Da «insegnante» a «facilitatore dell’apprendimento»", "Un facilitatore fa una domanda prima di dare una risposta e si fida della capacità dello studente di trovare da solo una parte della soluzione. Il tuo sostegno è temporaneo e si adatta alle necessità: quanto basta per sbloccarlo, così che abbia gradualmente meno bisogno di te."],
        ["💡", "Suggerimenti, non soluzioni", "Quando uno studente alza la mano, comincia da «Che cosa hai provato finora?». Un suggerimento lo fa continuare a ragionare; una soluzione interrompe il ragionamento. Offri l’aiuto di cui ha bisogno, senza anticipare la soluzione solo per risparmiare tempo."],
        ["⚖️", "Equilibrare guida e autonomia", "Dare agli studenti scelte reali e spiegare il motivo delle tue richieste li motiva più di un controllo rigido di ogni passaggio. Il formato PL offre molte occasioni naturali per farlo: sfruttale."],
        ["🌱", "Rispettare i diversi ritmi di apprendimento", "I tuoi studenti non procederanno mai tutti allo stesso ritmo. Trattarlo come un problema crea proprio quella pressione che ostacola l’apprendimento. La pazienza è una scelta attiva: accogliere ritmi diversi senza mettere fretta a nessuno."],
        ["👀", "Far sentire ogni studente considerato", "Un riferimento personale e concreto, a qualcosa della volta precedente o a un dettaglio del progetto, vale più di una lunga chiacchierata generica. Se apertura e chiusura sono curate con costanza, la relazione cresce anche in momenti brevi."],
        ["🛡️", "Creare uno spazio in cui chiedere senza timore", "Gli studenti devono sentirsi liberi di fare domande, ammettere di non aver capito o provare e sbagliare. Quando passi da uno studente all’altro, questa sicurezza va costruita rapidamente: dichiarala in apertura e dimostrala ogni volta che ti chiamano."]
      ],
      mythsTitle: "🌱 Un nuovo modo di guardare al formato",
      mythsIntro: "Le lezioni parallele sono una nuova tipologia di gruppo in Kodland. Conoscere il formato <b>amplia</b> ciò che sai fare, senza toglierti nulla. Tocca ogni convinzione per scoprire come stanno le cose:",
      myths: [
        ["«D’ora in poi tutti i miei corsi diventeranno paralleli».", "<b>Assolutamente no.</b> Imparare il formato non significa che i tuoi gruppi cambieranno. Le lezioni parallele riguardano solo alcuni corsi selezionati."],
        ["«Il mio ruolo di tutor cambierà in tutti i gruppi».", "<b>No.</b> Insegni con il formato parallelo solo nei tuoi gruppi paralleli. Negli altri continui a fare ciò che sai già fare bene."],
        ["«È solo un’altra cosa da imparare».", "<b>È un’opportunità.</b> Ampli la tua esperienza con i formati didattici e conoscerne di più può darti accesso a nuovi gruppi."]
      ]
    },
    feedback: {
      intro: "Il feedback è il momento in cui fai maggiormente la differenza in una lezione parallela. Lo dai in chiusura, quando lo studente mostra il proprio progetto. Un buon feedback risponde a tre domande dello studente:",
      q3: [
        ["🎯", "Qual è la mia meta?", "Qual era l’obiettivo del progetto di oggi?"],
        ["📍", "Come sto andando?", "Che cosa ha fatto bene, nello specifico?"],
        ["➡️", "Qual è il prossimo passo?", "Un passo concreto per migliorare."]
      ],
      compareTitle: "Generico o specifico? Alterna e confronta",
      tryTag: "Prova",
      vague: "😐 Generico",
      specific: "🌟 Specifico",
      vagueEx: ["«Ottimo lavoro!»", "«Bel disegno».", "«È sbagliato, riprova»."],
      specificEx: ["«Hai fatto comparire ogni lettera in un fotogramma diverso: è proprio così che funziona l’animazione. Ora prova ad aggiungere un fotogramma tra una lettera e l’altra per renderla più fluida».", "«I colori del tuo nome si abbinano molto bene al tema che hai scelto. Che cosa potresti aggiungere per far risaltare l’ultima lettera?»", "«Il colore riempie tutto perché il contorno della V ha una piccola apertura. Chiudila e prova di nuovo a riempirla»."],
      vagueNote: "È gentile, ma non aiuta lo studente a capire cosa ha funzionato o come proseguire.",
      specificNote: "Ogni esempio indica cosa ha funzionato o cosa è andato storto e suggerisce il passo successivo.",
      mistakes: "<b>Gli errori danno informazioni, non sono un giudizio.</b> «Non ha funzionato perché il contorno della lettera è aperto: controlliamolo» aiuta molto più di «è sbagliato»."
    },
    notes: {
      intro: "Ricorda come entrano gli studenti: <b>uno ogni 10 minuti</b>, e ciascuno termina 60 minuti dopo il proprio ingresso. Quindi li saluti nello stesso ordine in cui sono arrivati. Con più studenti, il modo più semplice per non confondersi è <b>prendere brevi appunti</b> man mano che entrano.",
      hands: "<b>Non devi passare da ogni studente a intervalli di pochi minuti.</b> Gli studenti ti chiamano alzando la mano. Quando più cose accadono insieme, l’accoglienza ha la precedenza su una mano alzata, la chiusura ha la precedenza su una mano alzata e l’accoglienza ha la precedenza sulla chiusura.",
      example: "Ecco un esempio con <b>3 studenti</b> (Ana, Leo e Mia), a partire dalle 16:00. Premi Avvia o sposta l’indicatore del tempo e osserva gli appunti del tutor che si compilano:",
      names: "Ana,Leo,Mia",
      lines: [
        "<b>Ana</b> è entrata alle 16:00 → saluto finale alle <span class='hl2'>16:50</span>",
        "<b>Leo</b> è entrato alle 16:10 → saluto finale alle <span class='hl2'>17:00</span>",
        "<b>Mia</b> è entrata alle 16:20 → saluto finale alle <span class='hl2'>17:10</span>"
      ],
      writeDown: "<b>Annota quando ogni studente ha iniziato.</b> Così sai sempre chi deve concludere per primo e a che ora.",
      checkin: "L’apertura con ogni studente può occupare tutti i 10 minuti disponibili, ma a volte rimane del tempo, soprattutto se non è la prima lezione. Quando non ci sono aperture o chiusure da gestire, puoi usarlo per aiutare chi ha la mano alzata o semplicemente verificare come sta procedendo il lavoro. Guarda il video per vedere come lo fa una tutor.",
      videoTitle: "Aiutare gli studenti e verificare come procedono"
    },
    first: {
      intro: "I tuoi studenti sanno già di aver scelto un formato parallelo, ma la prima lezione è la loro <b>prima esperienza concreta</b>. Per questo, nella lezione 1, spieghi <b>in dettaglio</b> come funziona e verifichi che sappiano muoversi da soli. Ecco cosa tenere a mente.",
      beforeTitle: "📚 Prima della lezione",
      before: [
        "Studia la lezione in anticipo.",
        "Tutti i materiali del «manuale» si trovano ora in <b>BO, all’interno di ogni attività</b>: sono le <b>Teacher Notes</b>, le note per il tutor. Non ci sono più manuali nella wiki.",
        "Leggi le note di ogni scheda che condurrai, soprattutto quelle dell’apertura e dell’ultima scheda sincrona."
      ],
      adaptTitle: "🔄 Adatta l’apertura alla lezione 1",
      adapt: [
        "<b>Come stai? →</b> conosci lo studente: i suoi interessi e le eventuali esperienze di apprendimento online o autonomo.",
        "<b>Controllo dei compiti →</b> non ci sono ancora compiti. Usa questo tempo per <b>spiegare il formato</b>."
      ],
      checklistTitle: "✅ Durante la lezione: la lista di controllo per il primo incontro",
      checklistTag: "Spunta ogni voce",
      checklist: [
        "Spiega il formato PL: che cos’è una lezione parallela e come funziona.",
        "Comunica <b>per quanto tempo</b> lavorerà in autonomia.",
        "Mostra dove trovare <b>l’aiuto nelle schede</b> e indica il punto preciso, se necessario: ci sono soluzioni e alternative per i problemi tecnici.",
        "Verifica che sulla piattaforma funzioni tutto: audio, videocamera e lezione.",
        "Verifica che sappia passare <b>da un’attività alla successiva</b> in autonomia.",
        "Chiarisci <b>dove alzare la mano</b> ✋ e <b>dove inviare messaggi</b>."
      ],
      questionsTitle: "🗣️ Verifica con domande aperte, non con «È chiaro?»",
      questionsIntro: "Un «sì» non ti dice molto. Fai domande che permettano allo studente di dimostrare di aver capito come funziona la lezione. Tocca ciascuna per scoprire quale risposta aspettarti:",
      questionsHint: "Tocca per vedere la risposta attesa →",
      questions: [
        ["«Come mi farai sapere che hai bisogno di me?»", "Alza la mano ✋ e sa dove si trova il pulsante, oppure invia un messaggio."],
        ["«Se il sito non si apre, cosa puoi fare?»", "Consulta l’aiuto nella scheda: contiene soluzioni e alternative."],
        ["«Fammi vedere come passi all’attività successiva».", "Passa autonomamente alla scheda successiva."],
        ["«Per quanto tempo lavorerai da solo oggi?»", "Sa indicativamente quando tornerai per la chiusura."]
      ],
      repeat: "In questo formato alcuni studenti possono sentirsi lasciati soli anche dopo la spiegazione. Chiedere loro di <b>ripetere con parole proprie</b> come si svolgerà la lezione ti permette di verificare che abbiano davvero capito."
    },

    /* Module 4 */
    bo: {
      intro: "Un <b>Parallel Group</b>, o gruppo parallelo, è un contenitore che riunisce sotto un unico tutor più gruppi individuali. Ogni studente mantiene il proprio gruppo individuale, proprio come nel formato Premium: semplicemente, il link di accesso del tutor è lo stesso per tutti.",
      imgAlt: "La scheda di un gruppo parallelo in BO con i gruppi individuali al suo interno",
      imgCaption: "Il gruppo parallelo in BO: i gruppi al suo interno e la console che avvia la sessione Classroom.",
      consoleTitle: "🔑 Aprire la console",
      console60: "Dal <b>Parallel Group</b> nell’elenco dei gruppi: a partire da 60 minuti prima della lezione e fino alla sua conclusione.",
      console30: "Dal tuo <b>calendario</b>: a partire da 30 minuti prima della lezione.",
      simTitle: "Simulatore BO delle lezioni parallele",
      simText: "Una replica interattiva di BO: trova il gruppo parallelo, apri la console in entrambi i modi, esplora un corso PL e individua le Teacher Notes.",
      simSteps: ["Apri il simulatore BO in una nuova scheda.", "Segui tutti i passaggi fino alla schermata «Simulazione completata» e al tuo codice.", "Torna qui e inserisci il codice qui sotto."],
      simButton: "🖥️ Apri il simulatore BO"
    },
    tnotes: {
      intro: "<b>Per questi corsi non usiamo la wiki.</b> Tutto ciò che serve per preparare una lezione si trova nelle <b>Teacher Notes</b>, all’interno di ogni attività in BO. Devi <b>leggere le note prima di ogni lezione</b>.",
      cards: [
        ["🔍", "Dove", "BO → Courses → il tuo corso → Assignments → ciascuna attività. Le note sono in cima alla scheda e sono visibili solo a te."],
        ["⏰", "Quando", "Prima di ogni lezione. Non durante: con più studenti non c’è tempo per leggere mentre insegni."],
        ["🎯", "A cosa prestare attenzione", "Il formato di ogni scheda, in diretta o in autonomia, la durata, ciò che devi fare e gli aspetti da tenere d’occhio."]
      ],
      simReminder: "Il simulatore BO qui sopra ti accompagna fino alle Teacher Notes di una vera lezione PL. Se hai saltato quel passaggio, riaprilo.",
      video: "In questo video vedrai come i nuovi contenuti sono stati adattati per consentire agli studenti di lavorare in autonomia.",
      videoTitle: "Come funzionano i nuovi contenuti"
    },
    rules: {
      intro: "Le lezioni parallele hanno regole specifiche per la comunicazione, ma il monitoraggio funziona esattamente come prima. Da fare o da evitare? Decidi per ogni azione:",
      items: [
        ["💬", "Creare un gruppo WhatsApp con tutti gli studenti della fascia parallela.", "no", "<b>Da evitare.</b> Non creare mai gruppi WhatsApp per una fascia parallela: le lezioni parallele prevedono un apprendimento individualizzato."],
        ["📱", "Scrivere a ogni studente o genitore individualmente.", "yes", "<b>Da fare.</b> Tutte le comunicazioni sono individuali e avvengono tramite messaggi diretti."],
        ["📊", "Registrare le presenze e controllare i progetti nel gruppo individuale di ogni studente.", "yes", "<b>Da fare.</b> Presenze, progetti consegnati e altri indicatori vengono registrati per ogni gruppo individuale: questo non cambia."],
        ["🗂️", "Registrare l’intera fascia oraria come un’unica voce condivisa nel gruppo parallelo.", "no", "<b>Da evitare.</b> Il gruppo parallelo è solo un contenitore. I dati di ogni studente rimangono nel suo gruppo."]
      ]
    },

    /* Module 5 */
    qa: {
      intro: "Queste sono vere domande poste dai tutor durante l’introduzione delle lezioni parallele. Fai clic su ogni domanda per leggere la risposta."
    },

    /* Module 6 */
    sim: {
      title: "🎮 Simulazione Classroom",
      cards: [
        ["🎮", "Che cos’è", "Una vera lezione parallela in Classroom, con 4 studenti che entrano a intervalli di 10 minuti. Il tutor sei tu: stesse schermate, stessi materiali e stesse situazioni che incontrerai nelle tue lezioni."],
        ["💡", "Perché è utile", "È <b>l’unica parte pratica</b> di questa formazione e quella che ti aiuterà davvero a capire come funziona una PL. Qui metti insieme tutto ciò che hai appreso nei moduli 1–5."],
        ["🧭", "Come funziona", "Prima un <b>percorso guidato</b> con il primo studente, poi un <b>gioco di scelte</b> con 10 situazioni e 3 vite. Ripetilo tutte le volte che vuoi. Alla fine riceverai un <b>codice di completamento</b>."]
      ],
      example: "<b>Questo è un esempio.</b> La simulazione utilizza un corso di contenuti multimediali adattato al formato PL: non è necessariamente quello che insegnerai. Non devi studiare i contenuti di quella lezione: concentrati su <b>come</b> si svolge. Attiva <b>l’audio</b>: sentirai parlare studenti e tutor.",
      launchTitle: "Simulatore Classroom",
      launchText: "Si apre a schermo intero in una nuova scheda, così puoi vedere Classroom esattamente come lo vedrai durante le tue lezioni.",
      steps: ["Apri il simulatore in una nuova scheda.", "Completa il percorso guidato e il gioco di scelte fino alla schermata «Simulazione completata» e al tuo codice.", "Torna a questa scheda e inserisci il codice qui sotto."],
      button: "🚀 Apri il simulatore"
    }
  },

  /* ---------- Lesson stages (Module 2 carousels). Opening = first 4, closing = last 3 ---------- */
  stages: [
    { t: "Controllo della connessione", ph: "Apertura", goal: "Prima di tutto, assicurati che tu e lo studente riusciate a vedervi e sentirvi.",
      d: ["Controlla videocamera, microfono e audio, sia tuoi sia dello studente.", "Assicurati che lo studente sia nella propria stanza e visualizzi la lezione.", "C’è un problema tecnico serio? Le schede offrono aiuto e puoi contattare l’assistenza tecnica."] },
    { t: "Come stai?", ph: "Apertura", goal: "Capire rapidamente come sta oggi lo studente.",
      d: ["Salutalo per nome e chiedigli come sta andando la giornata.", "Osserva il suo livello di energia: uno studente che si sente considerato lavora meglio in autonomia.", "Sii breve e accogliente."] },
    { t: "Controllo dei compiti", ph: "Apertura", goal: "Rivedere ciò su cui ha lavorato dall’ultima lezione.",
      d: ["Chiedigli di mostrarti ciò che ha fatto.", "Indica un aspetto concreto che è riuscito bene.", "Nella prima lezione non ci sono ancora compiti: usa questo tempo per spiegare il formato (vedi modulo 3)."] },
    { t: "Obiettivo della lezione", ph: "Apertura → studio autonomo", goal: "Chiarire l’obiettivo della lezione di oggi. È l’ultima fase prima del lavoro autonomo.",
      d: ["Spiega l’obiettivo del progetto di oggi in una o due frasi.", "Chiedi allo studente di ripetere il piano con parole proprie.", "Ricordagli come alzare la mano ✋ se ha bisogno di te."] },
    { t: "Riepilogo finale", ph: "Chiusura", goal: "Lo studente mostra il progetto finale, tu dai un feedback e porti a conclusione il lavoro di oggi.",
      d: ["Chiedigli di condividere lo schermo e presentare il progetto.", "Indica un punto di forza concreto, senza limitarti a «ottimo lavoro», e suggerisci un passo successivo preciso.", "Se qualcosa è incompleto, concordate chiaramente come proseguire: la lezione ha comunque bisogno di una vera conclusione."] },
    { t: "Riflessione", ph: "Chiusura", goal: "Un momento in cui lo studente riflette su ciò che ha imparato.",
      d: ["Fai una domanda breve: «Che cosa faresti diversamente la prossima volta?»", "Lascialo rispondere, senza farlo al posto suo.", "Così sviluppa la capacità di autovalutazione che gli serve quando lavora da solo."] },
    { t: "Assegnazione dei compiti", ph: "Chiusura", goal: "Preparare il passo successivo.",
      d: ["Spiega chiaramente i compiti o il prossimo passo.", "Anticipa la prossima lezione per suscitare curiosità.", "Saluta con un messaggio positivo."] }
  ],

  /* ---------- Module checks. "a:" = index of the correct answer (0 = first option). Do NOT change it. ---------- */
  quiz: {
    m1: [
      { q: "Che cos’è una lezione parallela?",
        o: ["Un tutor tiene la stessa lezione a un gruppo di studenti che lavorano tutti insieme a un unico progetto condiviso.",
            "Un tutor segue 2–5 studenti nella stessa fascia oraria, ciascuno con il proprio percorso e una lezione completa di 60 minuti.",
            "Un corso registrato che gli studenti seguono da soli, senza l’intervento di un tutor in nessun momento."],
        a: 1, e: "Ogni studente ha la propria lezione individuale di 60 minuti. È la sessione del tutor ad allungarsi per accoglierli tutti." },
      { q: "In che modo Classroom rende possibili le lezioni parallele?",
        o: ["Tutti gli studenti condividono una stanza e parlano a turno con il tutor.",
            "Ogni studente ha la propria stanza, creata automaticamente: come stanze separate già predisposte.",
            "Il tutor crea una nuova videochiamata per ogni studente."],
        a: 1, e: "Nella console ogni studente ha la propria stanza. Tu passi da una stanza all’altra; gli studenti non si vedono mai tra loro." },
      { q: "Hai 4 studenti nel tuo gruppo parallelo. Quanto dura la tua sessione?",
        o: ["60 minuti", "90 minuti", "240 minuti"],
        a: 1, e: "La tua sessione = 60 min + 10 min per ogni studente in più. Con 4 studenti: 60 + 30 = 90 minuti. Ciascuno studente ha comunque 60 minuti." },
      { q: "A quali studenti è destinato questo formato?",
        o: ["Studenti dai 10 anni in su che sanno lavorare in autonomia, apprezzano l’indipendenza e vogliono sapere che c’è un esperto disponibile quando serve aiuto.",
            "Bambini piccoli che hanno ancora bisogno di un adulto accanto per tutta la lezione.",
            "Studenti che imparano meglio lavorando in squadra con i compagni."],
        a: 0, e: "Intorno ai 10 anni, gli studenti riescono a gestire la propria attenzione per periodi di tempo prolungati. Molti apprezzano già l’apprendimento autonomo." }
    ],
    /* True / false: a: 0 = True, 1 = False */
    m2: [
      { q: "In una lezione parallela, il tutor spiega la teoria e mostra i passaggi pratici a ogni studente.", a: 1,
        e: "Falso. In una lezione parallela lo studente affronta teoria e pratica autonomamente con le schede. I contenuti sono progettati appositamente." },
      { q: "Il feedback sul progetto dello studente viene dato durante il riepilogo finale, alla fine della lezione.", a: 0,
        e: "Vero. Non c’è una fase separata per il feedback a metà lezione: lo studente mostra il progetto e tu dai il feedback in chiusura." },
      { q: "Poiché la parte centrale della lezione è autonoma, apertura e chiusura contano meno che negli altri formati.", a: 1,
        e: "Falso. Contano ancora di più: sono gli unici momenti in cui ciascuno studente ha la tua attenzione completa ed esclusiva." },
      { q: "La definizione dell’obiettivo della lezione è l’ultima fase prima che lo studente inizi a lavorare da solo.", a: 0,
        e: "Vero. Dopo aver chiarito l’obiettivo della lezione, lo studente inizia il lavoro autonomo con le schede." }
    ],
    m4: [
      { q: "Che cos’è un «Parallel Group» in BackOffice?",
        o: ["Un contenitore che riunisce più gruppi individuali sotto un unico tutor.",
            "Una nuova tipologia di corso con un programma diverso.",
            "Un gruppo condiviso in cui tutti gli studenti entrano nella stessa stanza."],
        a: 0, e: "È solo un contenitore: ogni studente mantiene al suo interno il proprio gruppo individuale e il link di accesso del tutor è lo stesso per tutti." },
      { q: "Dove vengono registrati presenze e progetti consegnati in un gruppo parallelo?",
        o: ["Nel gruppo parallelo, con un’unica registrazione condivisa per l’intera fascia oraria.",
            "Nel gruppo individuale di ogni studente, esattamente come prima.",
            "Da nessuna parte: nelle lezioni parallele non si registrano le presenze."],
        a: 1, e: "Qui non cambia nulla: presenze, progetti e altri indicatori vengono registrati per ogni gruppo individuale." },
      { q: "Come devi comunicare con gli studenti di un gruppo parallelo?",
        o: ["Creare un gruppo WhatsApp con tutti gli studenti della fascia oraria.",
            "Solo all’interno di Classroom, mai tramite messaggi.",
            "Individualmente, con messaggi diretti a ogni studente."],
        a: 2, e: "Le lezioni parallele prevedono un apprendimento individualizzato: non creare mai gruppi WhatsApp per la fascia oraria. Ogni studente va contattato individualmente." },
      { q: "Con quanto anticipo puoi aprire la console Classroom?",
        o: ["Dall’elenco dei gruppi, 60 minuti prima della lezione. Dal calendario, 30 minuti prima.",
            "Solo all’orario esatto di inizio, da qualsiasi pagina.",
            "Dal calendario, 60 minuti prima. Dall’elenco dei gruppi, 10 minuti prima."],
        a: 0, e: "Dal gruppo parallelo nell’elenco dei gruppi puoi aprirla da 60 minuti prima e fino alla fine della lezione. Dal calendario, da 30 minuti prima." }
    ]
  },

  /* ---------- Module 3 check: the phone conversation with Alex ---------- */
  chat: {
    name: "Alex",
    online: "online",
    typing: "sta scrivendo…",
    today: "Oggi",
    waiting: "In attesa di Alex…",
    alexTyping: "Alex sta scrivendo…",
    chooseReply: "Scegli la tua risposta ↑",
    message: "Messaggio",
    tapReply: "Tocca la tua risposta",
    meta: "Verifica del modulo {n} · Una conversazione",
    title: "Aiuta un collega curioso",
    intro: "Il tuo collega <b>Alex</b> insegna a gruppi tradizionali e non conosce ancora il formato PL. Tu lo hai studiato e non vedi l’ora di iniziare le lezioni parallele: rispondi alle domande di Alex sul telefono.",
    questionN: "💬 <b>Domanda {i} di {n}.</b> Leggi il messaggio di Alex e scegli la tua risposta sul telefono.",
    great: "✅ <b>Ottima risposta!</b> ",
    notBest: "❌ <b>Non è la risposta migliore.</b> ",
    better: "<b>Una risposta migliore:</b>",
    last: "🏁 <b>Era l’ultima domanda.</b> Hai risposto correttamente a <b>{s} domande su {n}</b>.",
    continue: "Continua la conversazione →",
    result: "Mostra il mio risultato →",
    hi1: "Ciao! 👋",
    hi2: "Ho saputo che stai per iniziare le lezioni parallele. Posso farti qualche domanda?",
    hiReply: "Ciao Alex! Certo, chiedimi pure 😊",
    byeGood: "Grazie mille! 🙌 Adesso ho proprio voglia di provare anch’io le lezioni parallele.",
    byeBad: "Grazie! Ho ancora qualche dubbio, ma approfondirò. 🙂",
    /* "a:" = index of the correct reply (0 = first). Do NOT change it. */
    items: [
      { them: "Questo nuovo formato sembra interessante, ma non mi è chiaro. Insegnare la stessa cosa separatamente a 5 ragazzi non richiede molto più lavoro?",
        o: ["Sì, richiede più lavoro: ripeti tutta la lezione, teoria compresa, cinque volte di seguito.",
            "Non proprio, perché gli studenti guardano soltanto un video e tu registri solo le presenze.",
            "In realtà no! Aiuto ogni studente ad avviare il lavoro e poi concludo la sua lezione. Non mostro i passaggi pratici e non spiego la teoria: lo fanno le schede. È un modo di imparare che richiede più maturità."],
        a: 2, ok: "Esatto: conduci apertura e chiusura per ogni studente. La teoria, le spiegazioni sul software e le dimostrazioni pratiche sono nelle schede.",
        ko: "Non proprio. In una lezione parallela non ripeti la lezione per ogni studente: gestisci apertura e chiusura, mentre le schede forniscono teoria e dimostrazioni pratiche." },
      { them: "E gli studenti non ci rimangono male quando li lasci da soli?",
        o: ["Conoscono già il funzionamento prima di acquistare il corso e nella prima lezione spiego il formato e per quanto tempo lavoreranno da soli. Sanno che il lavoro è autonomo.",
            "A volte sì, ma dico semplicemente che funziona così e passo allo studente successivo.",
            "Non se ne accorgono, perché tengo la videocamera accesa in tutte le stanze contemporaneamente."],
        a: 0, ok: "Giusto. Il funzionamento è chiaro prima dell’acquisto e lo spieghi di nuovo nella prima lezione, così lo studente sa cosa aspettarsi.",
        ko: "Non proprio. Gli studenti conoscono già il funzionamento prima dell’acquisto e tu spieghi il formato e i tempi del lavoro autonomo fin dalla prima lezione." },
      { them: "Ma se non sanno come andare avanti? Molti hanno bisogno di aiuto. E se ci sono problemi tecnici?",
        o: ["Aspettano fino alla fine della lezione, quando puoi finalmente parlare con loro.",
            "Ci sono brevi momenti per aiutare chi alza la mano. Inoltre, la lezione sulla piattaforma prevede già queste situazioni: include aiuti e indicazioni per i problemi tecnici. Ecco perché è importante spiegare il formato.",
            "Rimani nella stanza di chi ha un problema finché non è risolto, anche se arrivano altri studenti."],
        a: 1, ok: "Esatto. Aiuti chi alza la mano nei momenti liberi e le schede includono già aiuto e indicazioni per i problemi tecnici. Per questo è così importante spiegare chiaramente il formato all’inizio.",
        ko: "Non proprio. Puoi aiutare chi alza la mano nei brevi momenti liberi e la lezione sulla piattaforma include già aiuti e indicazioni per i problemi tecnici." },
      { them: "Interessante, adesso sono più tranquillo. Quindi i contenuti sono cambiati per questo formato?",
        o: ["No, sono esattamente le stesse lezioni del corso tradizionale: le insegni solo più velocemente.",
            "Sì, è cambiato tutto: nuovi strumenti, nuove competenze e nuovi obiettivi.",
            "Gli strumenti, le competenze e gli obiettivi di apprendimento sono gli stessi, ma le lezioni sono diverse: sono progettate perché gli studenti possano procedere autonomamente con le schede."],
        a: 2, ok: "Sì! Gli obiettivi di apprendimento restano gli stessi, ma le lezioni sono state riprogettate per questo formato. La buona notizia è che non devi insegnare le stesse lezioni in un nuovo formato.",
        ko: "Non proprio. Gli studenti imparano a usare gli stessi strumenti e sviluppano le stesse competenze, con gli stessi obiettivi, ma le lezioni sono diverse: sono progettate per il lavoro autonomo." }
    ]
  },

  /* ---------- Module 5: questions & answers ---------- */
  qaLadder: { beats: "ha la precedenza su", rows: [["Accoglienza", "Mano alzata"], ["Chiusura (saluto finale)", "Mano alzata"], ["Accoglienza", "Chiusura"], ["Mano alzata", "Un rapido controllo"]] },
  qaAnna: [
    ["16:10", "È previsto l’arrivo di Anna (16:10–16:20)."],
    ["16:15", "Non si è collegata: le scrivi su WhatsApp e accogli lo studente successivo, Mario."],
    ["16:21", "Anna compare nella sala d’attesa, ma sei con Mario. Le scrivi su WhatsApp che sarai da lei tra pochi minuti."],
    ["16:25", "Termini con Mario e accogli Anna."]
  ],
  /* In the answers: {LADDER} = priority list, {ANNA} = Anna's timeline, {VIDEO} = the content video. Keep them as they are. */
  qa: [
    { ic: "⏱️", q: "Con 5 studenti, come posso accoglierne uno nuovo ogni 10 minuti e aiutare anche tutti gli altri?",
      a: "<p>Non devi passare da ogni studente a intervalli di pochi minuti: vai solo da chi <b>alza la mano</b>. Quando più cose accadono contemporaneamente, segui questo ordine:</p>{LADDER}<p>I rapidi controlli su come procede il lavoro si fanno solo quando non c’è nessuno da accogliere, nessuna lezione da concludere e nessuna mano alzata.</p>" },
    { ic: "🚦", q: "Se un problema tecnico occupa tutti i 10 minuti dell’accoglienza e nel frattempo arriva lo studente successivo, chi ha la priorità?",
      a: "<p>Ha la priorità lo studente arrivato puntuale. Aiuti chi ha il problema tecnico <b>dopo</b> aver terminato con lo studente puntuale, seguendo lo stesso ordine di priorità:</p>{LADDER}" },
    { ic: "🌍", q: "Dove si applica il formato PL? È una sperimentazione?",
      a: "<p>Il formato PL sostituisce completamente il <b>formato Premium</b> in alcuni corsi selezionati. Per questo i tutor di quei corsi ricevono questa formazione. Il formato è già stato sperimentato in altre grandi regioni, tra cui Brasile e America Latina, con risultati molto positivi.</p>" },
    { ic: "🎬", q: "I contenuti sono gli stessi del corso tradizionale?",
      a: "<p>Gli <b>strumenti, le competenze e gli obiettivi</b> di apprendimento sono gli stessi. Le <b>lezioni sono diverse</b>: sono pensate per uno studente più maturo e autonomo, che non dipenda al 100% da te per completare la lezione. La buona notizia è che non insegnerai le stesse lezioni di prima in un nuovo formato.</p><h4>Su cosa si basa questo formato</h4><p>La lezione segue un <b>approccio deduttivo</b>: lo studente osserva prima un progetto finito, poi esplora come è stato realizzato e applica lo stesso principio al proprio progetto.</p><p><b>Feedback: tutor + autovalutazione.</b> Non è previsto feedback tra pari. L’IA non viene utilizzata nelle prime lezioni; nelle lezioni successive del modulo viene introdotta, dove opportuno, come terzo canale di feedback.</p><p>L’obiettivo centrale è maturare questa consapevolezza: <i>«Posso creare da solo un progetto digitale funzionante».</i> Gli errori sono una parte normale del processo creativo.</p><p>Guarda questo video per capire come cambiano i contenuti, per te e per lo studente:</p>{VIDEO}" },
    { ic: "👥", q: "Qual è il numero massimo di studenti in un gruppo di lezioni parallele?",
      a: "<p>Massimo <b>5 studenti / 100 minuti</b>.</p>" },
    { ic: "💙", q: "Come gestisco una lezione PL con studenti con disabilità o che hanno bisogno di più attenzione e supporto?",
      a: "<p>Come di consueto, CS lascia una nota quando è nota una disabilità dello studente. Se ti accorgi che il formato PL non è adatto a uno studente, <b>confrontati con il tuo TL</b>: troveremo insieme la soluzione migliore.</p><p>In molti casi il formato può funzionare <i>meglio</i> di una lezione di gruppo tradizionale, perché lo studente riceve comunque attenzione individuale. Già durante la lezione di prova vengono poste domande sull’autonomia, sul lavoro individuale e sulle precedenti esperienze con corsi da seguire al proprio ritmo: se uno studente non si troverebbe a suo agio nelle PL, questo formato non gli viene proposto.</p>" },
    { ic: "⏰", q: "Qual è la procedura per gli studenti che arrivano in ritardo?",
      a: "<p>Gli studenti entrano a intervalli di 10 minuti, per esempio alle 16:00, 16:10, 16:20… Nella pratica, l’accoglienza e la chiusura con ciascuno studente richiedono circa 6–7 minuti, quindi hai sempre un po’ di margine.</p><h4>Se uno studente non si collega entro i primi 5 minuti</h4><ul><li>Scrivi direttamente a lui o al suo genitore o tutore su WhatsApp.</li><li>Se termina il tempo previsto per l’accoglienza e non si è ancora collegato, accogli lo studente successivo: non aspettare a oltranza.</li><li>Se si collega in ritardo, fallo entrare, ma termina prima con lo studente che stai già seguendo.</li><li>Uno studente in ritardo <b>non</b> ha a disposizione 60 minuti completi: la lezione termina all’orario originariamente previsto.</li></ul><h4>Esempio: Anna</h4>{ANNA}<p>Fascia prevista per Anna: <b>16:10–17:10</b> → tempo effettivo dopo il ritardo: <b>16:25–17:10</b>.</p>" },
    { ic: "👤", q: "Cosa devo fare se si presenta un solo studente?",
      a: "<p>Tieni la lezione PL come previsto, <b>senza rimandarla</b>. Segui la struttura abituale e mantieni lo stesso svolgimento che adotteresti con il gruppo al completo.</p><p>Così mantieni la continuità del formato ed eviti che lo studente si aspetti la tua attenzione individuale per tutta la lezione.</p>" },
    { ic: "📅", q: "Cosa succede se gli studenti ci avvisano che non parteciperanno alla lezione?",
      a: "<p>La consueta <b>regola delle 12 ore</b> non cambia:</p><ul><li><b>Più di 12 ore prima della lezione:</b> segui la procedura standard per rinviare o riprogrammare la lezione.</li><li><b>Meno di 12 ore prima della lezione:</b> la lezione viene scalata dal saldo del cliente.</li></ul><p>Le lezioni successive proseguono come previsto: <b>non saltare lezioni e non cambiarne l’ordine</b>. Per esempio, se la lezione persa era M3L4, la successiva resta M3L4.</p>" },
    { ic: "💬", q: "Devo creare un gruppo WhatsApp con tutti gli studenti del gruppo parallelo?",
      a: "<p>No. Le PL prevedono un apprendimento individualizzato: i tutor <b>non devono</b> creare gruppi WhatsApp con gli studenti della stessa fascia oraria. Ogni studente viene seguito individualmente e tutte le comunicazioni avvengono tramite messaggi diretti.</p>" },
    { ic: "🔄", q: "Tutti i corsi passeranno a questo formato? Diventerà lo standard di Kodland?",
      a: "<p>No: il formato PL sostituisce solo il formato Premium, in alcuni corsi selezionati.</p>" },
    { ic: "👪", q: "I genitori conoscono questo formato al momento dell’iscrizione?",
      a: "<p>Sì. I genitori vengono informati sul formato PL al momento dell’iscrizione, nell’ambito delle comunicazioni previste per i corsi selezionati.</p>" },
    { ic: "💰", q: "Come funziona il compenso nelle PL?",
      a: "<p>Per il compenso delle PL e i calcoli specifici, <b>contatta il tuo TL</b>.</p>" }
  ]
};

/* >>> MODULE 0 START (generated block: edit texts here) */
PL_CONTENT.modules.m0 = {
  "title": "Inizia da qui: preparati al lancio",
  "desc": "Perché stiamo cambiando, cosa significa «essere pronti» quando le lezioni non ci sono ancora, chi ti supporta e che cosa ci hanno detto tutor e studenti. Circa 20 minuti.",
  "obj": "Affronta questo lancio con sicurezza e serenità: saprai perché il formato cambia, che cosa significa davvero essere pronti e a chi rivolgerti ogni volta che ti serve aiuto.",
  "eyebrow": "Modulo 0 · Inizia da qui · circa 20 minuti",
  "sections": {
    "welcome": "Benvenuto/a e perché cambiamo",
    "ready": "Che cosa significa «essere pronti» adesso",
    "never": "Non sei mai solo/a",
    "voices": "Costruito con la tua voce, amato dagli studenti",
    "closing": "Sei pronto/a per iniziare"
  }
};
PL_CONTENT.quiz.m0 = [
  {
    "q": "Stai seguendo la formazione e le lezioni del corso non sono ancora disponibili. Che cosa fai?",
    "o": [
      "Aspetto le lezioni prima di iniziare la formazione.",
      "Completo la formazione su metodo e struttura; le lezioni saranno nel BackOffice prima dell’inizio del corso.",
      "Cerco materiale simile sulla Wiki."
    ],
    "a": 1,
    "e": "Essere pronti non dipende dall’aver visto ogni lezione. La formazione copre metodo e struttura, e ogni lezione sarà nel BackOffice prima dell’inizio del corso."
  },
  {
    "q": "Pochi giorni prima della tua prima lezione non ti senti sicuro/a. Che cosa fai?",
    "o": [
      "Lo tengo per me e spero che vada bene.",
      "Scrivo un DM al mio mentor.",
      "Chiedo di essere tolto/a dal corso."
    ],
    "a": 1,
    "e": "Basta un DM al mentor: nessun modulo, nessuna segnalazione, nessuna spiegazione. Chiedere aiuto è ciò che fanno i professionisti."
  },
  {
    "q": "Vorresti aiuto per preparare la tua prima lezione. Qual è il modo più rapido?",
    "o": [
      "Scrivo un DM al mio mentor regionale o prenoto una sessione nell’LMS.",
      "Aspetto di ricevere una segnalazione.",
      "Chiedo un feedback al genitore di uno studente."
    ],
    "a": 0,
    "e": "Il mentor è sempre il tuo primo contatto. Non serve un problema né una segnalazione: scrivigli un DM o prenota uno slot di Coaching nell’LMS."
  },
  {
    "q": "Un passaggio della formazione non ti è ancora chiaro. Qual è la mossa migliore?",
    "o": [
      "Interrompo la formazione finché qualcuno non mi contatta.",
      "Ripeto il simulatore e, se resta poco chiaro, scrivo al mio mentor.",
      "Lo salto: lo capirò in classe."
    ],
    "a": 1,
    "e": "I simulatori sono uno spazio sicuro da ripetere quante volte serve. Se dopo non è ancora chiaro, il mentor è lì per aiutarti."
  },
  {
    "q": "La tua prima lezione non è andata come previsto. Quale mentalità è la più adatta?",
    "o": [
      "«Questo corso non fa per me.»",
      "«Non funziona ancora: annoto un miglioramento e ne parlo con il mio mentor.»",
      "«Aspetto che qualcun altro risolva.»"
    ],
    "a": 1,
    "e": "Le tue prime lezioni sono il tuo prototipo. Fai come chiediamo ai ragazzi: «non funziona ancora», annota un miglioramento e parlane con il mentor."
  }
];
PL_CONTENT.zero = {
  "welcome_lead": "<b>Benvenuto/a!</b> Fai parte di questo lancio perché sai già insegnare e creare un legame con i ragazzi. Questa formazione parte da ciò che già fai bene. Non parte da zero, e nemmeno tu.",
  "how_h": "Come seguire questa formazione",
  "how_p": "Vai al tuo ritmo, con curiosità e non sotto pressione. Non devi memorizzare nulla né essere perfetto/a: l’obiettivo è sentirti a tuo agio con il metodo e sapere dove trovare ciò che ti serve. Un misto di entusiasmo e un pizzico di incertezza è del tutto naturale davanti a qualcosa di nuovo. Significa semplicemente che ci tieni a farlo bene.",
  "prep_h": "Per che cosa ti prepara questa formazione",
  "prep_intro": "Dopo questo modulo sulla mentalità, la formazione si concentra sul formato delle lezioni parallele:",
  "prep": [
    "<b>Come funzionano le lezioni parallele:</b> più studenti nella stessa fascia oraria, ognuno con il proprio percorso.",
    "<b>Gestire la fascia oraria:</b> accogliere gli studenti, far avanzare ciascuno e dedicare a tutti momenti individuali.",
    "<b>Pratica:</b> simulatori di BackOffice e Classroom per provare una vera lezione PL prima della tua prima lezione dal vivo.",
    "<b>Un test finale</b> che si sblocca quando completi il materiale."
  ],
  "sim": "<b>Non saltare i simulatori: è lì che costruisci la tua sicurezza.</b> Leggere di una nuova lezione è utile, ma è farla che te la rende familiare. I simulatori ti permettono di esercitare ogni passaggio reale di una lezione, dall’apertura nel BackOffice allo svolgimento in Classroom, in uno spazio sicuro dove nulla può andare storto. Ripetili quante volte ti serve e torna a rivederli prima della tua prima lezione dal vivo: a quel punto ogni clic ti verrà naturale.",
  "why_h": "Perché stiamo cambiando",
  "why": "Spesso le famiglie aspettano a lungo per iniziare un corso 1-to-1 o premium, perché gli orari non coincidono. Le lezioni parallele risolvono il problema: segui da 2 a 5 studenti contemporaneamente, ciascuno con il proprio percorso. Gli studenti iniziano prima e tu hai più flessibilità nel tuo calendario. Sembra una lezione normale, con momenti individuali dedicati a ogni studente.",
  "means": "<b>Che cosa significa per te.</b> Le competenze che oggi fanno di te un buon tutor (spiegare con chiarezza, tenere i ragazzi coinvolti, accorgerti di chi ha bisogno di aiuto) sono esattamente quelle che servono ai nuovi corsi. Ciò che cambia è il metodo e la struttura, ed è ciò che ti dà questa formazione.",
  "ready_p1": "Durante la formazione potresti non vedere ancora le lezioni del corso: i contenuti vengono finalizzati a ridosso del lancio. <b>Ogni lezione sarà nel BackOffice prima dell’inizio del tuo corso.</b> La formazione ti prepara a tutto il resto, così sarai pronto/a nel momento in cui le lezioni arrivano.",
  "ready_p2": "Essere pronti non dipende dall’aver visto ogni lezione durante la formazione. Significa:",
  "ready_items": [
    "<b>Capisco il metodo:</b> come scorre una lezione e perché.",
    "<b>Conosco la struttura:</b> moduli, formato della lezione, dove si trova ogni elemento nel BackOffice.",
    "<b>Sono sicuro/a sull’aspetto tecnico:</b> BackOffice, Classroom e gli strumenti che uso in aula, esercitati nei simulatori finché risultano naturali.",
    "<b>Conosco la mia routine:</b> il contenuto della lezione ora si vede direttamente nel BackOffice, tutto in un unico posto, senza bisogno della Wiki. Leggere le note per il tutor prima di ogni lezione è una mia responsabilità.",
    "<b>So a chi chiedere:</b> prima il mio mentor regionale e il mio TL per gruppi e orari."
  ],
  "ready_perm": "<b>Concediti il permesso di essere di nuovo un/una principiante.</b> Anche il tutor più esperto insegna un corso nuovo per la prima volta una sola volta. Ai ragazzi chiediamo di dire «non funziona ancora, troviamo una strategia», e lo stesso vale per noi: le tue prime lezioni sono il tuo prototipo. Ognuna ti sembrerà più facile della precedente e ti sosterremo a ogni passo.",
  "ready_two": "<b>Due cose che la formazione spiega nel dettaglio.</b> Prima, e più importante: dove troverai da ora in poi i contenuti delle lezioni, le <b>Teacher Notes nel BackOffice, la tua nuova stella polare</b>. Seconda: come prepararti alla tua prima lezione. Entrambe sono spiegate chiaramente, passo dopo passo, più avanti nella formazione.",
  "never_p": "Il tuo mentor regionale conosce i nuovi corsi ed è lì per supportarti a ogni lancio. <b>Chiedere aiuto è ciò che fanno i professionisti:</b> è così che i bravi tutor diventano ottimi tutor. Non serve un problema né una segnalazione per scrivergli.",
  "mentor_h": "Il tuo mentor",
  "mentor_region": "Regione",
  "mentors": [
    [
      "Italia",
      "Gianfranco Barba"
    ]
  ],
  "coaching": "<b>Preferisci una sessione più lunga?</b> Accedi all’LMS con il tuo account BackOffice → <b>Coaching</b> → scegli uno slot e scrivi in una riga di cosa vorresti essere aiutato/a (per esempio: «Prima lezione di [corso]»).",
  "first_h": "Il tuo mentor è sempre il tuo primo contatto. Rivolgiti a lui per:",
  "first_items": [
    "Problemi di gestione della classe",
    "Domande su un nuovo corso o formato",
    "Supporto per condurre le lezioni con serenità",
    "Preparare insieme una lezione o un rapido controllo di sicurezza prima della tua prima classe"
  ],
  "tl": "Per gruppi e orari, contatta il tuo <b>TL</b>.",
  "notconf": "<b>Non ti senti sicuro/a, per qualsiasi motivo?</b> Scrivi un DM al tuo mentor. Basta così: nessun modulo, nessuna segnalazione, nessuna spiegazione.",
  "voices_p": "I nuovi corsi non nascono dal nulla: rispondono a ciò che tutor, studenti e famiglie ci hanno detto. Ecco una parte di ciò che abbiamo ascoltato e di ciò che è cambiato di conseguenza.",
  "tell_you": "Ci avete detto",
  "tell_so": "Quindi le lezioni parallele…",
  "rows": [
    [
      "Gli studenti aspettano troppo prima che un gruppo 1-to-1 o premium possa partire.",
      "Permettono agli studenti di iniziare molto prima: segui da 2 a 5 studenti insieme, ciascuno con il proprio percorso."
    ],
    [
      "Gli orari fissi rendono difficile riempire la settimana.",
      "Ti danno più flessibilità: gli studenti entrano nella stessa fascia oraria anche se sono su lezioni diverse."
    ],
    [
      "Gestire più studenti insieme sembra stressante.",
      "Arrivano con una formazione sul formato e un simulatore, così ti eserciti prima della tua prima lezione dal vivo."
    ],
    [
      "Gli studenti di un gruppo vanno a velocità diverse.",
      "Lasciano che ogni studente proceda al proprio ritmo, con momenti individuali dedicati con te."
    ]
  ],
  "new_courses": "<b>Alcuni corsi sono completamente nuovi e sei tra i primi a insegnarli.</b> Per questo la tua voce conta ancora di più: dopo le tue prime lezioni, racconta al tuo mentor che cosa ha funzionato e che cosa no. Il tuo feedback darà forma alla prossima versione.",
  "students_h": "Che cosa dicono gli studenti",
  "tutors_h": "Da tutor che l’hanno già insegnato",
  "voices": [ /* REAL student/parent messages go here: { text: "…", who: "Parent · 3D Modeling · LATAM", img: "images/xxx.png" (optional) } */ ],
  "tutors": [ /* OPTIONAL tutor quotes: { text: "…", who: "Tutor name" } */ ],
  "closing_h": "Sai perché stiamo cambiando, che cosa significa «essere pronti» e chi c’è per te.",
  "closing_p": "Ora tuffati nella formazione con curiosità: esercitati nei simulatori quante volte vuoi e goditi il fatto di essere tra i primi a portare qualcosa di nuovo ai nostri studenti.",
  "closing_dm": "Se in qualsiasi momento non ti senti sicuro/a, basta un DM al tuo mentor."
};
/* <<< MODULE 0 END */
