/* =====================================================================
   MODULE 0 · MINDSET — CONTENT FILE (Spanish)
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

  lang: "es",

  /* ---------- The module card and header ---------- */
  module: {
    e: "🌱",
    title: "Un comienzo con confianza",
    desc: "Antes de cualquier método o herramienta: por qué estamos cambiando, qué significa realmente estar listo y quién está ahí para ti.",
    obj: "Empezar el lanzamiento con una actitud segura y positiva. Este módulo dura unos 20 minutos: 4 secciones cortas, un cierre y una comprobación de 5 preguntas.",
    offer: [
      ["👋", "Entender por qué estamos cambiando y por qué tu experiencia importa."],
      ["✅", "Saber qué significa «estar listo» cuando las clases todavía no están disponibles."],
      ["🤝", "Saber exactamente a quién preguntar y cómo."],
      ["💬", "Ver cómo los nuevos cursos responden a lo que nos dijeron tutores y estudiantes."]
    ],
    sections: {
      welcome: "Bienvenida: por qué estamos cambiando",
      ready: "Qué significa «estar listo» ahora",
      alone: "Nunca estás solo",
      voice: "Creados con tu voz, queridos por los estudiantes",
      start: "Ya estás listo para empezar",
      survey: "¿Cómo te sientes?"
    }
  },

  /* ---------- Section 1 ---------- */
  welcome: {
    intro: "<b>¡Bienvenido!</b> Formas parte de este lanzamiento porque ya sabes enseñar y conectar con los niños. Esta capacitación se apoya en lo que ya haces bien. No empieza desde cero, y tú tampoco.",
    howTitle: "Cómo hacer esta capacitación",
    how: "Avanza a tu propio ritmo, con curiosidad y sin presión. No necesitas memorizar nada ni ser perfecto: el objetivo es que te sientas cómodo con el método y sepas dónde encontrar lo que necesitas. Sentir una mezcla de entusiasmo y un poco de incertidumbre es completamente natural ante algo nuevo. Simplemente significa que te importa hacerlo bien.",
    prepTitle: "Para qué te prepara esta capacitación",
    prep: {
      em: {
        intro: "Después de este módulo de actitud, la capacitación te guía por todo lo que necesitas para tus primeras clases:",
        items: [
          ["🧩", "El nuevo modelo", "Cómo se construyen las clases, cómo funciona la retroalimentación y cómo guiar a los estudiantes cuando usan la IA."],
          ["🛠️", "Preparación técnica", "Backoffice y las notas del tutor, Classroom con Follow Mode y Kodland Sparks, con tres simulaciones para practicar que puedes repetir todas las veces que quieras."],
          ["⭐", "Calidad de la clase", "Cómo se estructura una clase y los hábitos que la mantienen en marcha: una buena apertura, preguntas que hacen razonar y un cierre claro."],
          ["🤖", "Prompts para tutores", "Cómo escribir un buen prompt y ayudar a los estudiantes a escribir los suyos."],
          ["📚", "Tu curso", "Una capacitación corta e informativa sobre el curso específico que vas a dar."],
          ["📝", "Un test final", "Se desbloquea cuando completas el material."]
        ]
      },
      pl: {
        intro: "Después de este módulo de actitud, la capacitación se centra en el formato de Parallel Lessons:",
        items: [
          ["⚡", "Cómo funcionan las Parallel Lessons", "Varios estudiantes en un mismo horario, cada uno con su propio recorrido."],
          ["🧭", "Cómo llevar el horario", "Recibir a los estudiantes, mantener a cada uno avanzando y dar a todos momentos individuales dedicados."],
          ["🎮", "Práctica", "Simuladores de Backoffice y Classroom para ensayar una clase PL real antes de tu primera clase en vivo."],
          ["📝", "Un test final", "Se desbloquea cuando completas el material."]
        ]
      }
    },
    simsTitle: "No te saltes los simuladores: ahí es donde se construye tu confianza",
    sims: "Leer sobre una clase nueva es útil, pero hacerla es lo que la vuelve familiar. Los simuladores te permiten practicar cada paso real de una clase, desde abrirla en Backoffice hasta darla en Classroom, en un espacio seguro donde nada puede salir mal. Repítelos todas las veces que necesites y vuelve a ellos antes de tu primera clase en vivo: para entonces, cada clic ya te saldrá de forma natural.",
    whyTitle: "Por qué estamos cambiando",
    why: {
      em: "Los niños de hoy aprenden de otra manera: quieren construir cosas reales rápido, probar, equivocarse, corregir y mostrar lo que hicieron. Nuestro nuevo Modelo Educativo está construido en torno a eso. Cada clase parte de un resultado terminado, los errores son parte del proceso y la IA se usa de una forma adecuada para cada edad. Algunos cursos son completamente nuevos; otros son cursos que ya conoces, renovados con el nuevo método.",
      pl: "Muchas familias esperan bastante tiempo para empezar un curso individual o premium, porque los horarios no coinciden. Las Parallel Lessons lo resuelven: acompañas a 2–5 estudiantes al mismo tiempo, cada uno con su propio recorrido. Los estudiantes empiezan antes y tú ganas más flexibilidad en tu horario. Se siente como una clase normal, con momentos individuales dedicados a cada estudiante."
    },
    meansTitle: "Qué significa esto para ti",
    means: "Las habilidades que hoy te hacen un buen tutor —explicar con claridad, mantener a los niños motivados, darte cuenta de quién necesita ayuda— son exactamente las que necesitan los nuevos cursos. Lo nuevo es el método y la estructura, y eso es lo que te da esta capacitación."
  },

  /* ---------- Section 2 ---------- */
  ready: {
    intro: "Durante tu capacitación puede que todavía no veas las clases del curso: el contenido se termina poco antes del lanzamiento. <b>Todas las clases estarán en Backoffice antes de que empiece tu curso.</b> Tu capacitación te prepara para todo lo demás, para que estés listo en el momento en que lleguen las clases.",
    listIntro: "Estar listo no depende de haber visto todas las clases durante la capacitación. Significa que puedes decir estas cinco cosas. Toca cada una que ya sientas que es verdad; la capacitación te ayudará con el resto:",
    items: [
      "<b>Entiendo el método:</b> cómo fluye una clase y por qué.",
      "<b>Conozco la estructura:</b> los módulos, el formato de las clases y dónde está cada parte en Backoffice.",
      "<b>Me siento seguro con la parte técnica:</b> Backoffice, Classroom y las herramientas que uso en clase, practicadas en los simuladores hasta que me resulten naturales.",
      "<b>Conozco mi rutina:</b> el contenido de las clases ahora se muestra directamente en Backoffice, todo en un solo lugar, sin necesidad de la Wiki. Leer allí las notas del tutor antes de cada clase es mi responsabilidad.",
      "<b>Sé a quién preguntar:</b> primero a mi mentor regional, y a mi TL para grupos y horarios."
    ],
    allTicked: "🌟 Así se ve «estar listo», y lo sentirás más con cada módulo.",
    beginnerTitle: "Date permiso para volver a ser principiante",
    beginner: "Hasta el tutor con más experiencia da un curso nuevo por primera vez alguna vez. A los niños les pedimos que digan <i>«todavía no funciona, busquemos una estrategia»</i>, y lo mismo vale para nosotros: tus primeras clases son tu prototipo. Cada una te resultará más fácil que la anterior, y te acompañaremos en cada paso."
  },

  /* ---------- Section 3 ---------- */
  alone: {
    intro: "Tu mentor regional conoce los nuevos cursos y está ahí para apoyarte en cada lanzamiento. Pedir ayuda es lo que hacen los profesionales: así es como los buenos tutores se vuelven excelentes. <b>No necesitas tener un problema ni una alerta para escribirle.</b>",
    mentorTitle: "Tu mentor",
    regionLabel: "Región",
    /* Only the line of the training’s language is shown */
    mentors: {
      en: [["UK", ["Gülay", "Syfa Nurafni Siregar"]], ["USA", ["Gülay"]], ["GCC", ["Syfa Nurafni Siregar"]]],
      es: [["LATAM (incl. España)", ["Priscila Aabye", "Laura Orozco", "Camilo Mahecha"]]],
      pt: [["Brasil", ["Lucas Correia Souza da Silva"]]],
      tr: [["MENA", ["Betül Topkan", "Saner Aykanat"]]],
      ar: [["MENA", ["Betül Topkan", "Saner Aykanat"]], ["GCC", ["Syfa Nurafni Siregar"]]],
      id: [["Indonesia", ["Syfa Nurafni Siregar"]]],
      ru: [["CIS", ["Raisa Pabiarzhyna"]]],
      it: [["Italia", ["Gianfranco Barba"]]],
      pl: [["Polonia", ["Daria Kalicka"]]]
    },
    forTitle: "Tu mentor es tu primer contacto, siempre. Acude a tu mentor para:",
    forItems: [
      ["🧑‍🏫", "Problemas de manejo de la clase"],
      ["📚", "Preguntas sobre un curso o formato nuevo"],
      ["⚙️", "Apoyo para que tus clases fluyan sin problemas"],
      ["🤝", "Preparar una clase juntos, o un repaso rápido para ganar confianza antes de tu primera clase"]
    ],
    tl: "<b>Para grupos y horarios</b>, contacta a tu TL.",
    sessionTitle: "¿Prefieres una sesión más larga?",
    sessionSteps: [
      "Inicia sesión en el <b>LMS</b> con tu cuenta de Backoffice.",
      "Ve a <b>Coaching</b> y elige un horario.",
      "Escribe en una línea en qué te gustaría recibir ayuda; por ejemplo, <i>«Primera clase de [curso]»</i>."
    ],
    dm: "<b>¿No te sientes seguro, por la razón que sea?</b> Envíale un mensaje directo a tu mentor. Con eso basta: sin formularios, sin alertas, sin necesidad de explicaciones."
  },

  /* ---------- Section 4 ---------- */
  voice: {
    intro: "Los nuevos cursos no salen de la nada: responden a lo que nos dijeron tutores, estudiantes y familias. Aquí tienes algo de lo que escuchamos; toca cada uno para ver qué cambió gracias a eso.",
    toldLabel: "Nos dijiste",
    soLabel: { em: "Por eso los nuevos cursos…", pl: "Por eso las Parallel Lessons…" },
    tapHint: "Toca para ver qué cambió →",
    told: {
      em: [
        ["Preparar una clase lleva demasiado tiempo, saltando entre las diapositivas y una guía aparte en la Wiki.", "Reúnen todo en un solo lugar: notas del tutor en cada diapositiva, un plan de clase con tiempos y un video corto de presentación en la diapositiva 1."],
        ["Es difícil mantener a todo el grupo en la misma diapositiva.", "Usan Follow Mode: los estudiantes ven exactamente tu diapositiva, y tus notas siguen ocultas."],
        ["La dificultad no siempre corresponde a la edad del grupo.", "Están organizados por tramos de edad (8–9, 10–12, 13+), y en Matemáticas las tareas van de lo simple a lo complejo en niveles claramente señalados."],
        ["Los niños pierden la motivación cuando no ven lo que están construyendo.", "Empiezan cada clase desde el resultado terminado, y los estudiantes publican su proyecto en Kodland Sparks, donde otros pueden verlo y reaccionar."],
        ["Es difícil saber quién entendió realmente la clase.", "Terminan cada clase con una comprobación de resultados, y cada tarea entregada queda registrada para que veas quién necesita ayuda."]
      ],
      pl: [
        ["Los estudiantes esperan demasiado antes de que pueda empezar un grupo individual o premium.", "Permiten que los estudiantes empiecen mucho antes: acompañas a 2–5 estudiantes a la vez, cada uno con su propio recorrido."],
        ["Los horarios fijos hacen difícil llenar tu semana.", "Te dan más flexibilidad: los estudiantes se unen al mismo horario aunque estén en clases diferentes."],
        ["Manejar a varios estudiantes a la vez suena estresante.", "Vienen con una capacitación sobre el formato y un simulador, para que practiques antes de tu primera clase en vivo."],
        ["En un grupo, los estudiantes avanzan a ritmos diferentes.", "Permiten que cada estudiante avance a su propio ritmo, con momentos individuales dedicados contigo."]
      ]
    },
    firsts: "Algunos cursos son completamente nuevos, y tú estás entre los primeros en darlos. Eso hace que tu voz sea aún más importante: después de tus primeras clases, <b>cuéntale a tu mentor qué funcionó y qué no</b>. Tu retroalimentación dará forma a la próxima versión."
  },

  /* ---------- Closing ---------- */
  start: {
    text: "Ya sabes por qué estamos cambiando, qué significa «estar listo» y quién está ahí para ti. Ahora sumérgete en la capacitación con curiosidad: practica en los simuladores todas las veces que quieras y disfruta ser de los primeros en llevar algo nuevo a nuestros estudiantes.",
    dm: "Si en algún momento no te sientes seguro, <b>basta con un mensaje directo a tu mentor.</b>"
  },

  /* =====================================================================
     SURVEYS (Module 0, before the check · Final module)
     Keys in [key, "label"] pairs (excited, too_short…) and question ids are NOT translated:
     they are what arrives in the Google Sheet. Translate only the labels.
     ===================================================================== */
  survey: {
    emailLabel: "Tu correo corporativo de Kodland",
    emailPlaceholder: "nombre.apellido@kodland.org",
    emailError: "Escribe tu correo corporativo de Kodland (termina en @kodland…).",
    regionLabel: "Tu región",
    regionPlaceholder: "Elige tu región…",
    regionError: "Elige tu región.",
    missing: "Responde todas las preguntas marcadas con ★.",
    send: "Enviar mis respuestas",
    sending: "Enviando…",
    thanks: "✅ <b>¡Gracias!</b> Tus respuestas se enviaron.",
    again: "Enviar de nuevo",
    low: "Nada",
    high: "Totalmente",
    optional: "opcional",
    openPlaceholder: "Escribe lo que quieras…",
    lockMsg: "Envía la encuesta de satisfacción de arriba para desbloquear la comprobación.",
    lockWhat: "la encuesta de satisfacción"
  },
  /* Regions for the survey: [key, "label"]. Keys are not translated. */
  regions: [
    ["brazil", "Brasil"], ["latam", "LATAM (incl. España)"], ["mena", "MENA"], ["italy", "Italia"], ["poland", "Polonia"],
    ["uk", "UK"], ["usa", "USA"], ["indonesia", "Indonesia"], ["gcc", "GCC"], ["cis", "CIS"]
  ],
  /* Feelings and training length: [key, "label"] */
  feelings: [["excited", "🤩 Entusiasmado"], ["curious", "🤔 Con curiosidad"], ["calm", "😌 Tranquilo"], ["unsure", "😕 Inseguro"], ["worried", "😟 Preocupado"], ["overwhelmed", "😵 Abrumado"]],
  lengths: [["too_short", "Demasiado corta"], ["just_right", "Adecuada"], ["too_long", "Demasiado larga"]],

  /* ---------- Module 0 survey (section before the check) ---------- */
  startSurvey: {
    title: "Antes de la comprobación: ¿cómo te sientes?",
    intro: "Un breve chequeo: no hay respuestas correctas ni incorrectas. Ayuda a tu mentor y al equipo a apoyarte mejor. Envíalo para desbloquear la comprobación del módulo.",
    gifAlt: "¿Cómo te sientes?",
    questions: [
      { id: "feeling", type: "choice", q: "¿Cómo te sientes ahora mismo con este nuevo lanzamiento?" },
      { id: "confidence", type: "scale", q: "¿Qué tan seguro te sientes para dar este nuevo curso o formato?" },
      { id: "understand_why", type: "scale", q: "Entiendo por qué estamos haciendo este cambio." },
      { id: "know_where", type: "scale", q: "Sé dónde encontrar lo que necesito y a quién pedir ayuda." },
      { id: "worries", type: "open", optional: true, q: "¿Qué es lo que más te preocupa de este lanzamiento?" }
    ]
  },

  /* ---------- FINAL MODULE: your first-lesson mindset ---------- */
  final: {
    e: "🌟",
    title: "Tu actitud para la primera clase",
    desc: "Imagina tu primera clase saliendo bien, asocia cada preocupación con un recurso y cuéntanos cómo te sientes ahora.",
    obj: "Imagina tu primera clase saliendo bien: abres con el resultado terminado, los niños tienen curiosidad, sigues las notas con facilidad y terminas con algo de lo que se sienten orgullosos. Esa imagen es realista, y este módulo te ayuda a llegar ahí.",
    offer: [
      ["✨", "Imagina tu primera clase saliendo bien."],
      ["🧩", "Asocia cada preocupación con un recurso."],
      ["💬", "Comparte cómo te sientes ahora."]
    ],
    sections: { mind: "Imagina tu primera clase", survey: "Cómo te sientes ahora" },
    mind: {
      intro: "Tómate dos minutos y responde para ti. <b>Solo tú ves estas notas</b>: se quedan en este navegador y no se envían a ningún lado.",
      q1: "1. ¿Qué es lo que más me entusiasma de este nuevo curso o formato?",
      q2: "2. ¿Qué es lo que más me preocupa?",
      q3: "3. Para cada preocupación: ¿qué recurso me ayuda?",
      placeholder: "Escribe unas palabras…",
      resources: [["📒", "Notas del tutor"], ["🎮", "Simuladores"], ["💬", "Mensaje o sesión con el mentor"], ["👥", "TL"]],
      resourcesHint: "Toca los recursos que responden a tus preocupaciones:",
      answerTitle: "Cada preocupación tiene una respuesta",
      answer: "Los momentos inesperados son parte de cualquier clase nueva: una pregunta de la que no estás seguro, una tarea que se comporta distinto, un grupo que avanza más rápido o más lento de lo previsto. Ya los practicaste en los simuladores, y puedes volver a ellos todas las veces que necesites. Para todo lo demás, tu mentor está a un mensaje de distancia.",
      afterTitle: "Después de tus primeras clases",
      after: "Fíjate en <b>lo que salió bien</b> antes que en lo que puedes mejorar, y luego cuéntale ambas cosas a tu mentor. Tu retroalimentación llega al equipo de Producto y da forma a la próxima versión del curso.",
      ready: "<b>Estás listo.</b> Conoces el porqué, el método, tu rutina y a quién llamar. Y si en algún momento no te sientes listo, basta con un mensaje directo a tu mentor."
    },
    survey: {
      title: "Una última reflexión: ¿cómo te sientes ahora?",
      intro: "Esto no es un test: no hay respuestas correctas ni incorrectas. Tus respuestas ayudan al equipo a mejorar la capacitación y los cursos. Envíalas para completar la capacitación.",
      groups: [
        { title: "Cómo te sientes", questions: [
          { id: "feeling", type: "choice", q: "¿Cómo te sientes ahora con este nuevo lanzamiento?" },
          { id: "confidence", type: "scale", q: "¿Qué tan seguro te sientes para dar este nuevo curso o formato?" },
          { id: "understand_why", type: "scale", q: "Entiendo por qué estamos haciendo este cambio." },
          { id: "know_where", type: "scale", q: "Sé dónde encontrar lo que necesito y a quién pedir ayuda." }
        ] },
        { title: "Tu confianza para enseñar", questions: [
          { id: "ready_first_lesson", type: "scale", q: "Me siento listo para dar mi primera clase de principio a fin." },
          { id: "manage_format", type: "scale", q: { em: "Me siento seguro manejando al grupo con el nuevo formato (Follow Mode).", pl: "Me siento seguro manejando a mis estudiantes con el nuevo formato (Parallel Lessons)." } },
          { id: "ready_tools", type: "scale", q: "Me siento listo para usar Backoffice, Classroom y las herramientas en clase." }
        ] },
        { title: "Los materiales de la capacitación", questions: [
          { id: "training_clear", type: "scale", q: "La capacitación fue clara y fácil de seguir." },
          { id: "simulators_helped", type: "scale", q: "Los simuladores me ayudaron a sentirme más seguro." },
          { id: "training_length", type: "length", q: "La duración de la capacitación fue:" }
        ] }
      ]
    },
    ctaTitle: "Completa la capacitación",
    ctaText: "Envía tu reflexión de arriba para completar este último módulo.",
    ctaBtn: "Completar la capacitación →",
    done: "Gracias por compartir cómo te sientes: completaste la capacitación."
  },

  /* ---------- Knowledge check: 5 scenario questions. "a" = index of the right answer (0 = first). Keep it. ---------- */
  quiz: [
    { q: "Estás haciendo tu capacitación y las clases del curso todavía no están disponibles. ¿Qué haces?",
      o: ["Esperas a que estén las clases antes de empezar la capacitación.",
          "Completas la capacitación sobre el método y la estructura: las clases estarán en Backoffice antes de que empiece el curso.",
          "Buscas material parecido en la Wiki."],
      a: 1, e: "Estar listo no depende de ver todas las clases: la capacitación te prepara para todo lo demás, y todas las clases estarán en Backoffice antes de que empiece tu curso." },
    { q: "Unos días antes de tu primera clase no te sientes seguro. ¿Qué haces?",
      o: ["Te lo guardas y esperas que salga bien.",
          "Le envías un mensaje directo a tu mentor.",
          "Pides que te saquen del curso."],
      a: 1, e: "Basta con un mensaje directo a tu mentor: sin formularios, sin alertas, sin necesidad de explicaciones." },
    { q: "Te gustaría recibir ayuda para preparar tu primera clase. ¿Cuál es la forma más rápida?",
      o: ["Enviarle un mensaje directo a tu mentor regional o reservar una sesión en el LMS.",
          "Esperar a recibir una alerta.",
          "Pedirle retroalimentación al padre o la madre de un estudiante."],
      a: 0, e: "No necesitas tener un problema ni una alerta para escribir: envíale un mensaje a tu mentor o reserva un horario de Coaching en el LMS." },
    { q: "Un paso de la capacitación todavía no te queda claro. ¿Qué es lo mejor que puedes hacer?",
      o: ["Detener la capacitación hasta que alguien se comunique contigo.",
          "Repetir el simulador y, si todavía no te queda claro, escribirle a tu mentor.",
          "Saltarlo: ya lo resolverás en clase."],
      a: 1, e: "Los simuladores son donde se construye la confianza: repítelos todas las veces que necesites, y tu mentor siempre está ahí para lo que todavía no esté claro." },
    { q: "Tu primera clase no salió como lo planeaste. ¿Qué actitud encaja mejor?",
      o: ["«Este curso no es para mí».",
          "«Todavía no funciona: anotaré una mejora y hablaré con mi mentor».",
          "«Esperaré a que alguien más lo arregle»."],
      a: 1, e: "Tus primeras clases son tu prototipo: cada una se siente más fácil que la anterior, y tu retroalimentación da forma a la próxima versión." }
  ]
};
