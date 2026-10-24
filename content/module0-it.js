/* =====================================================================
   MODULE 0 · MINDSET — CONTENT FILE (Italian)
   The SAME file is used by the EM training and the PL training.
   Blocks with  em: … / pl: …  change per training; everything else is shared.
   ---------------------------------------------------------------------
   TRANSLATORS:
   - Translate ONLY the text inside quotes (both the em and the pl blocks).
   - Change  lang: "en"  to your language code and save as module0-<code>.js
     (PL training: NEW PL/content/ · EM training: New training EM/assets/).
   - Do not change key names, HTML tags, emojis or the numbers after  a:
     (index of the right answer, 0 = first).
   - Inside the texts, never use straight quotes or apostrophes: use ’ « » „ ” instead.
   - mentors: only the line of YOUR language is shown. Translate the region names; keep people’s names as they are.
   ===================================================================== */
window.M0_CONTENT = {

  lang: "it",

  /* ---------- The module card and header ---------- */
  module: {
    e: "🌱",
    title: "Un inizio sicuro",
    desc: "Prima di qualsiasi metodo o strumento: perché stiamo cambiando, che cosa significa davvero essere pronti e chi c’è per te.",
    obj: "Affronta il lancio con un atteggiamento sicuro e positivo. Questo modulo richiede circa 20 minuti: 4 brevi sezioni, una chiusura e una verifica di 5 domande.",
    offer: [
      ["👋", "Capire perché stiamo cambiando, e perché la tua esperienza conta."],
      ["✅", "Sapere che cosa significa «pronto» quando le lezioni non sono ancora disponibili."],
      ["🤝", "Sapere esattamente a chi chiedere, e come."],
      ["💬", "Vedere come i nuovi corsi rispondono a ciò che tutor e studenti ci hanno detto."]
    ],
    sections: {
      welcome: "Benvenuto! Ecco perché stiamo cambiando",
      ready: "Che cosa significa «pronto» adesso",
      alone: "Non sei mai solo",
      voice: "Creati con il tuo contributo, amati dagli studenti",
      start: "Sei pronto per iniziare",
      survey: "Come ti senti?"
    }
  },

  /* ---------- Section 1 ---------- */
  welcome: {
    intro: "<b>Benvenuto!</b> Fai parte di questo lancio perché sai già insegnare e creare un legame con i ragazzi. Questa formazione si basa su ciò che fai già bene. Non parte da zero, e nemmeno tu.",
    howTitle: "Come seguire questa formazione",
    how: "Procedi al tuo ritmo, con curiosità e senza pressione. Non devi memorizzare nulla né essere perfetto: l’obiettivo è sentirti a tuo agio con il metodo e sapere dove trovare ciò che ti serve. Un po’ di entusiasmo e un pizzico di incertezza sono del tutto naturali davanti a qualcosa di nuovo. Significa semplicemente che ci tieni a farlo bene.",
    prepTitle: "A che cosa ti prepara questa formazione",
    prep: {
      em: {
        intro: "Dopo questo modulo sull’atteggiamento, la formazione ti accompagna in tutto ciò che ti serve per le tue prime lezioni:",
        items: [
          ["🧩", "Il nuovo modello", "Come sono costruite le lezioni, come funziona il feedback e come guidare gli studenti quando usano l’IA."],
          ["🛠️", "Preparazione tecnica", "Backoffice e note per il tutor, Classroom con Follow Mode e Kodland Sparks, con tre simulazioni pratiche da ripetere tutte le volte che vuoi."],
          ["⭐", "Qualità della lezione", "Come è strutturata una lezione e le abitudini che la mantengono sulla giusta strada: un’apertura curata, domande che fanno ragionare e una chiusura chiara."],
          ["🤖", "Prompt per i tutor", "Come scrivere un buon prompt e aiutare gli studenti a scrivere i propri."],
          ["📚", "Il tuo corso", "Una formazione breve e informativa sul corso specifico che insegnerai."],
          ["📝", "Un test finale", "Si sblocca quando completi il materiale."]
        ]
      },
      pl: {
        intro: "Dopo questo modulo sull’atteggiamento, la formazione si concentra sul formato delle lezioni parallele:",
        items: [
          ["⚡", "Come funzionano le lezioni parallele", "Più studenti nella stessa fascia oraria, ognuno con il proprio percorso."],
          ["🧭", "Gestire la fascia oraria", "Accogliere gli studenti, far avanzare ciascuno e dedicare a tutti momenti individuali."],
          ["🎮", "Pratica", "Simulatori di Backoffice e Classroom per provare una vera lezione PL prima della tua prima lezione dal vivo."],
          ["📝", "Un test finale", "Si sblocca quando completi il materiale."]
        ]
      }
    },
    simsTitle: "Non saltare i simulatori: è lì che si costruisce la tua sicurezza",
    sims: "Leggere di una nuova lezione è utile, ma è farla che la rende familiare. I simulatori ti permettono di esercitarti su ogni passaggio reale di una lezione, da quando la apri in Backoffice a quando la conduci in Classroom, in uno spazio sicuro dove nulla può andare storto. Ripetili tutte le volte che ti serve e tornaci prima della tua prima lezione dal vivo: a quel punto ogni clic ti verrà già naturale.",
    whyTitle: "Perché stiamo cambiando",
    why: {
      em: "Oggi i ragazzi imparano in modo diverso: vogliono costruire cose vere in fretta, provare, sbagliare, correggere e mostrare ciò che hanno creato. Il nostro nuovo modello educativo è costruito proprio su questo. Ogni lezione parte da un risultato finito, gli errori fanno parte del percorso e l’IA viene usata in modo adatto a ogni età. Alcuni corsi sono completamente nuovi; altri sono corsi che conosci già, rinnovati con il nuovo metodo.",
      pl: "Spesso le famiglie aspettano a lungo prima di iniziare un corso individuale o Premium, perché gli orari non coincidono. Le lezioni parallele risolvono questo problema: segui 2–5 studenti contemporaneamente, ognuno con il proprio percorso. Gli studenti iniziano prima e tu hai più flessibilità nei tuoi orari. Sembra una lezione normale, con momenti individuali dedicati a ciascuno studente."
    },
    meansTitle: "Che cosa significa per te",
    means: "Le competenze che oggi fanno di te un buon tutor (spiegare con chiarezza, coinvolgere i ragazzi, accorgerti di chi ha bisogno di aiuto) sono esattamente quelle di cui hanno bisogno i nuovi corsi. Le novità sono il metodo e la struttura, ed è proprio questo che ti dà questa formazione."
  },

  /* ---------- Section 2 ---------- */
  ready: {
    intro: "Durante la formazione potresti non vedere ancora le lezioni del corso: i contenuti vengono finalizzati a ridosso del lancio. <b>Ogni lezione sarà in Backoffice prima dell’inizio del tuo corso.</b> La formazione ti prepara a tutto il resto, così sarai pronto nel momento in cui arriveranno le lezioni.",
    listIntro: "Essere pronti non dipende dall’aver visto ogni lezione durante la formazione. Significa poter dire queste cinque cose. Tocca ciascuna di quelle che senti già vere: la formazione ti aiuterà con le altre.",
    items: [
      "<b>Capisco il metodo:</b> come si sviluppa una lezione e perché.",
      "<b>Conosco la struttura:</b> moduli, formato della lezione, dove si trova ogni elemento in Backoffice.",
      "<b>Mi sento sicuro con gli strumenti:</b> ho fatto pratica con Backoffice, Classroom e gli strumenti che uso in classe grazie ai simulatori, fino a imparare a usarli con naturalezza.",
      "<b>Conosco la mia routine:</b> i contenuti della lezione ora sono mostrati direttamente in Backoffice, tutti in un unico posto, senza bisogno della Wiki. Leggere lì le note per il tutor prima di ogni lezione è una mia responsabilità.",
      "<b>So a chi chiedere:</b> prima al mio mentor regionale, e al mio TL per gruppi e orari."
    ],
    allTicked: "🌟 Ecco che cosa significa essere «pronto»: ti sentirai sempre più preparato a ogni modulo.",
    beginnerTitle: "Concediti di essere di nuovo un principiante",
    beginner: "Anche il tutor più esperto affronta una prima lezione quando inizia a insegnare un nuovo corso. Ai ragazzi chiediamo di dire <i>«non funziona ancora, troviamo una strategia»</i>, e lo stesso vale per noi: le tue prime lezioni sono il tuo prototipo. Ognuna ti sembrerà più facile della precedente, e ti sosterremo a ogni passo."
  },

  /* ---------- Section 3 ---------- */
  alone: {
    intro: "Il tuo mentor regionale conosce i nuovi corsi ed è lì per sostenerti a ogni lancio. Chiedere aiuto è ciò che fanno i professionisti: è così che i buoni tutor diventano ottimi tutor. <b>Non serve un problema o una segnalazione per contattarlo.</b>",
    mentorTitle: "Il tuo mentor",
    regionLabel: "Regione",
    /* Only the line of the training’s language is shown */
    mentors: {
      en: [["UK", ["Gülay", "Syfa Nurafni Siregar"]], ["USA", ["Gülay"]], ["GCC", ["Syfa Nurafni Siregar"]]],
      es: [["LATAM (Spagna inclusa)", ["Priscila Aabye", "Laura Orozco", "Camilo Mahecha"]]],
      pt: [["Brasile", ["Lucas Correia Souza da Silva"]]],
      tr: [["MENA", ["Betül Topkan", "Saner Aykanat"]]],
      ar: [["MENA", ["Betül Topkan", "Saner Aykanat"]], ["GCC", ["Syfa Nurafni Siregar"]]],
      id: [["Indonesia", ["Syfa Nurafni Siregar"]]],
      ru: [["CIS", ["Raisa Pabiarzhyna"]]],
      it: [["Italia", ["Gianfranco Barba"]]],
      pl: [["Polonia", ["Daria Kalicka"]]]
    },
    forTitle: "Il tuo mentor è sempre il tuo primo contatto. Rivolgiti al tuo mentor per:",
    forItems: [
      ["🧑‍🏫", "Problemi di gestione della classe"],
      ["📚", "Domande su un nuovo corso o formato"],
      ["⚙️", "Supporto per condurre le tue lezioni senza intoppi"],
      ["🤝", "Preparare insieme una lezione o fare un rapido confronto per sentirti sicuro prima della tua prima lezione"]
    ],
    tl: "<b>Per gruppi e orari</b>, contatta il tuo TL.",
    sessionTitle: "Preferisci una sessione più lunga?",
    sessionSteps: [
      "Accedi all’<b>LMS</b> con il tuo account Backoffice.",
      "Vai su <b>Coaching</b> e scegli una fascia oraria.",
      "Descrivi in una riga per che cosa vorresti ricevere aiuto, per esempio <i>«Prima lezione di [corso]»</i>."
    ],
    dm: "<b>Non ti senti sicuro, per qualsiasi motivo?</b> Manda un messaggio privato al tuo mentor. Basta questo: nessun modulo, nessuna segnalazione, nessuna spiegazione necessaria."
  },

  /* ---------- Section 4 ---------- */
  voice: {
    intro: "I nuovi corsi non nascono dal nulla: rispondono a ciò che tutor, studenti e famiglie ci hanno detto. Ecco una parte di ciò che abbiamo ascoltato: tocca ogni scheda per vedere che cosa è cambiato di conseguenza.",
    toldLabel: "Ci hai detto",
    soLabel: { em: "Così i nuovi corsi…", pl: "Così le lezioni parallele…" },
    tapHint: "Tocca per vedere che cosa è cambiato →",
    told: {
      em: [
        ["Preparare una lezione richiede troppo tempo, passando dalle slide a una guida separata nella Wiki.", "Mettono tutto in un unico posto: note per il tutor su ogni scheda, un piano della lezione con i tempi e un breve video di briefing nella scheda 1."],
        ["Tenere tutto il gruppo sulla stessa scheda è difficile.", "Usano Follow Mode: gli studenti vedono esattamente la tua scheda e le tue note restano nascoste."],
        ["La difficoltà non corrisponde sempre all’età del gruppo.", "Sono costruiti per fasce d’età (8–9, 10–12, 13+), e in Matematica le attività vanno dal semplice al complesso su livelli chiaramente indicati."],
        ["I ragazzi perdono motivazione quando non vedono che cosa stanno costruendo.", "Iniziano ogni lezione dal risultato finito, e gli studenti pubblicano il proprio progetto su Kodland Sparks, dove gli altri possono vederlo e reagire."],
        ["È difficile capire chi ha davvero compreso la lezione.", "Chiudono ogni lezione con una verifica dei risultati, e ogni attività consegnata viene registrata, così puoi vedere chi ha bisogno di aiuto."]
      ],
      pl: [
        ["Gli studenti aspettano troppo prima che possa partire un corso individuale o un gruppo Premium.", "Permettono agli studenti di iniziare molto prima: segui 2–5 studenti contemporaneamente, ognuno con il proprio percorso."],
        ["Gli orari fissi rendono difficile riempire la settimana.", "Ti danno più flessibilità: gli studenti seguono le lezioni nella stessa fascia oraria anche se sono a punti diversi del percorso."],
        ["Gestire più studenti insieme sembra stressante.", "Prevedono una formazione sul formato e un simulatore, così ti eserciti prima della tua prima lezione dal vivo."],
        ["In un gruppo gli studenti procedono a velocità diverse.", "Permettono a ogni studente di avanzare al proprio ritmo, con momenti di lavoro individuale insieme a te."]
      ]
    },
    firsts: "Alcuni corsi sono completamente nuovi e sei tra i primi a insegnarli. Per questo la tua voce è ancora più importante: dopo le tue prime lezioni, <b>racconta al tuo mentor che cosa ha funzionato e che cosa no</b>. Il tuo feedback darà forma alla prossima versione."
  },

  /* ---------- Closing ---------- */
  start: {
    text: "Sai perché stiamo cambiando, che cosa significa «pronto» e chi c’è per te. Ora immergiti nella formazione con curiosità: esercitati nei simulatori tutte le volte che vuoi e goditi questa opportunità di essere tra i primi a portare qualcosa di nuovo ai nostri studenti.",
    dm: "Se in qualsiasi momento non ti senti sicuro, <b>basta un messaggio privato al tuo mentor.</b>"
  },

  /* =====================================================================
     SURVEYS (Module 0, before the check · Final module)
     Keys in [key, "label"] pairs (excited, too_short…) and question ids are NOT translated:
     they are what arrives in the Google Sheet. Translate only the labels.
     ===================================================================== */
  survey: {
    emailLabel: "La tua e-mail aziendale Kodland",
    emailPlaceholder: "nome.cognome@kodland.org",
    emailError: "Inserisci il tuo indirizzo e-mail aziendale Kodland (ad esempio nome.cognome@kodland.org).",
    regionLabel: "La tua regione",
    regionPlaceholder: "Scegli la tua regione…",
    regionError: "Scegli la tua regione.",
    missing: "Rispondi a tutte le domande contrassegnate con ★.",
    send: "Invia le mie risposte",
    sending: "Invio in corso…",
    thanks: "✅ <b>Grazie!</b> Le tue risposte sono state inviate.",
    again: "Invia di nuovo",
    low: "Per niente",
    high: "Completamente",
    optional: "facoltativa",
    openPlaceholder: "Scrivi quello che vuoi…",
    lockMsg: "Invia il questionario qui sopra per sbloccare la verifica.",
    lockWhat: "il questionario"
  },
  /* Regions for the survey: [key, "label"]. Keys are not translated. */
  regions: [
    ["brazil", "Brasile"], ["latam", "LATAM (Spagna inclusa)"], ["mena", "MENA"], ["italy", "Italia"], ["poland", "Polonia"],
    ["uk", "UK"], ["usa", "USA"], ["indonesia", "Indonesia"], ["gcc", "GCC"], ["cis", "CIS"]
  ],
  /* Feelings and training length: [key, "label"] */
  feelings: [["excited", "🤩 Entusiasta"], ["curious", "🤔 Curioso"], ["calm", "😌 Tranquillo"], ["unsure", "😕 Incerto"], ["worried", "😟 Preoccupato"], ["overwhelmed", "😵 Sopraffatto"]],
  lengths: [["too_short", "Troppo breve"], ["just_right", "Giusta"], ["too_long", "Troppo lunga"]],

  /* ---------- Module 0 survey (section before the check) ---------- */
  startSurvey: {
    title: "Prima della verifica: come ti senti?",
    intro: "Un breve questionario per fare il punto: non ci sono risposte giuste o sbagliate. Le tue risposte aiutano il tuo mentor e il team a sostenerti meglio. Invia il questionario per sbloccare la verifica del modulo.",
    gifAlt: "Come ti senti?",
    questions: [
      { id: "feeling", type: "choice", q: "Come ti senti in questo momento rispetto a questo nuovo lancio?" },
      { id: "confidence", type: "scale", q: "Quanto ti senti sicuro nell’insegnare questo nuovo corso o formato?" },
      { id: "understand_why", type: "scale", q: "Capisco perché stiamo facendo questo cambiamento." },
      { id: "know_where", type: "scale", q: "So dove trovare ciò che mi serve e a chi chiedere aiuto." },
      { id: "worries", type: "open", optional: true, q: "Che cosa ti preoccupa di più di questo lancio?" }
    ]
  },

  /* ---------- FINAL MODULE: your first-lesson mindset ---------- */
  final: {
    e: "🌟",
    title: "Il tuo atteggiamento per la prima lezione",
    desc: "Immagina che la tua prima lezione vada bene, abbina ogni preoccupazione a una risorsa e raccontaci come ti senti ora.",
    obj: "Immagina che la tua prima lezione vada bene: inizi mostrando il risultato finale, i ragazzi sono curiosi, segui le note con facilità e concludi con qualcosa di cui sono orgogliosi. È un’immagine realistica, e questo modulo ti aiuta ad arrivarci.",
    offer: [
      ["✨", "Immagina che la tua prima lezione vada bene."],
      ["🧩", "Abbina ogni preoccupazione a una risorsa."],
      ["💬", "Racconta come ti senti ora."]
    ],
    sections: { mind: "Immagina la tua prima lezione", survey: "Come ti senti ora" },
    mind: {
      intro: "Prenditi due minuti e rispondi per te stesso. <b>Solo tu vedi questi appunti</b>: restano in questo browser e non vengono inviati da nessuna parte.",
      q1: "1. Che cosa mi entusiasma di più di questo nuovo corso o formato?",
      q2: "2. Che cosa mi preoccupa di più?",
      q3: "3. Per ogni preoccupazione: quale risorsa mi aiuta?",
      placeholder: "Scrivi qualche parola…",
      resources: [["📒", "Note per il tutor"], ["🎮", "Simulatori"], ["💬", "Messaggio o sessione con il mentor"], ["👥", "TL"]],
      resourcesHint: "Tocca le risorse che rispondono alle tue preoccupazioni:",
      answerTitle: "Ogni preoccupazione ha una risposta",
      answer: "Gli imprevisti fanno parte di qualsiasi nuova lezione: una domanda a cui non sai bene come rispondere, un’attività che funziona in modo diverso dal previsto, un gruppo che procede più velocemente o più lentamente del previsto. Hai già fatto pratica nei simulatori e puoi tornarci tutte le volte che ti serve. Per tutto il resto, basta un messaggio al tuo mentor.",
      afterTitle: "Dopo le tue prime lezioni",
      after: "Individua prima <b>che cosa è andato bene</b>, poi che cosa puoi migliorare, e parla di entrambi gli aspetti con il tuo mentor. Il tuo feedback arriva al team Product e dà forma alla prossima versione del corso.",
      ready: "<b>Sei pronto.</b> Conosci il perché, il metodo, la tua routine e chi contattare. E se in qualsiasi momento non ti senti pronto, basta un messaggio privato al tuo mentor."
    },
    survey: {
      title: "Un’ultima riflessione: come ti senti ora?",
      intro: "Non è un test: non ci sono risposte giuste o sbagliate. Le tue risposte aiutano il team a migliorare la formazione e i corsi. Inviale per completare la formazione.",
      groups: [
        { title: "Come ti senti", questions: [
          { id: "feeling", type: "choice", q: "Come ti senti ora rispetto a questo nuovo lancio?" },
          { id: "confidence", type: "scale", q: "Quanto ti senti sicuro nell’insegnare questo nuovo corso o formato?" },
          { id: "understand_why", type: "scale", q: "Capisco perché stiamo facendo questo cambiamento." },
          { id: "know_where", type: "scale", q: "So dove trovare ciò che mi serve e a chi chiedere aiuto." }
        ] },
        { title: "La tua sicurezza nell’insegnare", questions: [
          { id: "ready_first_lesson", type: "scale", q: "Mi sento pronto a condurre la mia prima lezione dall’inizio alla fine." },
          { id: "manage_format", type: "scale", q: { em: "Mi sento sicuro nel gestire il gruppo con il nuovo formato (Follow Mode).", pl: "Mi sento sicuro nel gestire i miei studenti con il nuovo formato (lezioni parallele)." } },
          { id: "ready_tools", type: "scale", q: "Mi sento pronto a usare Backoffice, Classroom e gli strumenti in classe." }
        ] },
        { title: "I materiali della formazione", questions: [
          { id: "training_clear", type: "scale", q: "La formazione è stata chiara e facile da seguire." },
          { id: "simulators_helped", type: "scale", q: "I simulatori mi hanno aiutato a sentirmi più sicuro." },
          { id: "training_length", type: "length", q: "La durata della formazione è stata:" }
        ] }
      ]
    },
    ctaTitle: "Completa la formazione",
    ctaText: "Invia la tua riflessione qui sopra per completare quest’ultimo modulo.",
    ctaBtn: "Completa la formazione →",
    done: "Grazie per aver condiviso come ti senti: hai completato la formazione."
  },

  /* ---------- Knowledge check: 5 scenario questions. "a" = index of the right answer (0 = first). Keep it. ---------- */
  quiz: [
    { q: "Stai seguendo la formazione e le lezioni del corso non sono ancora disponibili. Che cosa fai?",
      o: ["Aspetto le lezioni prima di iniziare la formazione.",
          "Completo la formazione su metodo e struttura: le lezioni saranno in Backoffice prima dell’inizio del corso.",
          "Cerco materiale simile nella Wiki."],
      a: 1, e: "Essere pronti non dipende dall’aver visto ogni lezione: la formazione ti prepara a tutto il resto, e ogni lezione sarà in Backoffice prima dell’inizio del tuo corso." },
    { q: "Qualche giorno prima della tua prima lezione non ti senti sicuro. Che cosa fai?",
      o: ["Lo tengo per me e spero che vada bene.",
          "Mando un messaggio privato al mio mentor.",
          "Chiedo di essere tolto dal corso."],
      a: 1, e: "Basta un messaggio privato al tuo mentor: nessun modulo, nessuna segnalazione, nessuna spiegazione necessaria." },
    { q: "Vorresti aiuto per preparare la tua prima lezione. Qual è il modo più rapido?",
      o: ["Mando un messaggio privato al mio mentor regionale, oppure prenoto una sessione nell’LMS.",
          "Aspetto di ricevere una segnalazione.",
          "Chiedo un feedback al genitore di uno studente."],
      a: 0, e: "Non serve un problema o una segnalazione per chiedere aiuto: scrivi al tuo mentor oppure prenota una sessione di Coaching nell’LMS." },
    { q: "Un passaggio della formazione non ti è ancora chiaro. Qual è la scelta migliore?",
      o: ["Interrompo la formazione finché qualcuno non mi contatta.",
          "Ripeto il simulatore e, se non è ancora chiaro, scrivo al mio mentor.",
          "Lo salto: lo capirò in classe."],
      a: 1, e: "È nei simulatori che si costruisce la sicurezza: ripetili tutte le volte che ti serve, e il tuo mentor c’è sempre per ciò che non è ancora chiaro." },
    { q: "La tua prima lezione non è andata come previsto. Quale atteggiamento è più adatto?",
      o: ["«Questo corso non fa per me.»",
          "«Non funziona ancora: annoto un aspetto da migliorare e ne parlo con il mio mentor.»",
          "«Aspetto che qualcun altro sistemi le cose.»"],
      a: 1, e: "Le tue prime lezioni sono il tuo prototipo: ognuna ti sembra più facile della precedente, e il tuo feedback dà forma alla prossima versione." }
  ]
};
