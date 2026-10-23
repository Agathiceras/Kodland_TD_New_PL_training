/* =====================================================================
   MODULE 0 · MINDSET — CONTENT FILE (English)
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

  lang: "en",

  /* ---------- The module card and header ---------- */
  module: {
    e: "🌱",
    title: "A confident start",
    desc: "Before any method or tool: why we are changing, what being ready really means, and who is there for you.",
    obj: "Start the launch in a confident, positive mindset. This module takes about 20 minutes: 4 short sections, a closing and a 5-question check.",
    offer: [
      ["👋", "Understand why we are changing — and why your experience matters."],
      ["✅", "Know what “ready” means when the lessons aren’t available yet."],
      ["🤝", "Know exactly who to ask, and how."],
      ["💬", "See how the new courses answer what tutors and students told us."]
    ],
    sections: {
      welcome: "Welcome, and why we are changing",
      ready: "What “ready” means now",
      alone: "You’re never alone",
      voice: "Built with your voice, loved by students",
      start: "You’re ready to start",
      survey: "How do you feel?"
    }
  },

  /* ---------- Section 1 ---------- */
  welcome: {
    intro: "<b>Welcome!</b> You are part of this launch because you already know how to teach and how to connect with kids. This training builds on what you already do well. It doesn’t start from zero — and neither do you.",
    howTitle: "How to take this training",
    how: "Go at your own pace, with curiosity rather than pressure. You don’t need to memorise anything or be perfect: the goal is to feel at ease with the method and to know where to find what you need. A mix of excitement and a little uncertainty is completely natural with anything new. It simply means you care about doing it well.",
    prepTitle: "What this training prepares you for",
    prep: {
      em: {
        intro: "After this mindset module, the training walks you through everything you need for your first lessons:",
        items: [
          ["🧩", "The new model", "How lessons are built, how feedback works, and how to guide students when they use AI."],
          ["🛠️", "Technical preparation", "Back Office and teacher notes, the Classroom with Follow mode, and Kodland Sparks — with three practice simulations you can repeat as often as you like."],
          ["⭐", "Lesson quality", "How a lesson is structured and the habits that keep it on track: a proper opening, reasoning questions and a clear closing."],
          ["🤖", "Prompts for tutors", "How to write a good prompt and help students write their own."],
          ["📚", "Your course", "A short, informative training on the specific course you will teach."],
          ["📝", "A final test", "It unlocks once you complete the material."]
        ]
      },
      pl: {
        intro: "After this mindset module, the training focuses on the Parallel Lessons format:",
        items: [
          ["⚡", "How Parallel Lessons work", "Several students in one slot, each on their own path."],
          ["🧭", "Running the slot", "Welcoming students, keeping each one moving, and giving everyone dedicated one-on-one moments."],
          ["🎮", "Practice", "Back Office and Classroom simulators to rehearse a real PL lesson before your first live one."],
          ["📝", "A final test", "It unlocks once you complete the material."]
        ]
      }
    },
    simsTitle: "Don’t skip the simulators: they are where your confidence is built",
    sims: "Reading about a new lesson is useful, but doing it is what makes it feel familiar. The simulators let you practise every real step of a lesson — from opening it in Back Office to running it in the Classroom — in a safe space where nothing can go wrong. Repeat them as many times as you need, and come back to them before your first live lesson: by then, every click will already feel like second nature.",
    whyTitle: "Why we are changing",
    why: {
      em: "Kids today learn differently: they want to build real things fast, try, fail, fix and show what they made. Our new Educational Model is built around that. Every lesson starts from a finished result, mistakes are part of the process, and AI is used in a way that fits each age. Some courses are brand new; others are courses you already know, refreshed with the new method.",
      pl: "Families often wait a long time to start a 1-on-1 or premium course, because schedules don’t line up. Parallel Lessons fix that: you support 2–5 students at the same time, each on their own path. Students start faster, and you get more flexibility in your schedule. It feels like a regular lesson, with dedicated one-on-one moments for each student."
    },
    meansTitle: "What this means for you",
    means: "The skills that make you a good tutor today — explaining clearly, keeping kids engaged, noticing who needs help — are exactly the skills the new courses need. What’s new is the method and the structure, and that is what this training gives you."
  },

  /* ---------- Section 2 ---------- */
  ready: {
    intro: "During your training you may not see the course lessons yet: content is finalised close to launch. <b>Every lesson will be in Back Office before your course starts.</b> Your training prepares you for everything else, so you are ready the moment the lessons arrive.",
    listIntro: "Being ready doesn’t depend on having seen every lesson during the training. It means you can say these five things. Tap each one you already feel is true — the training will help you with the rest:",
    items: [
      "<b>I understand the method:</b> how a lesson flows and why.",
      "<b>I know the structure:</b> modules, lesson format, where each piece lives in Back Office.",
      "<b>I’m confident with the technical side:</b> Back Office, the Classroom and the tools I use in class, practised in the simulators until they feel natural.",
      "<b>I know my routine:</b> lesson content is now shown directly in Back Office, all in one place, with no need for the Wiki. Reading the teacher notes there before every lesson is my responsibility.",
      "<b>I know who to ask:</b> my regional mentor first, and my TL for groups and schedule."
    ],
    allTicked: "🌟 That’s what “ready” looks like — and you’ll feel it more with every module.",
    beginnerTitle: "Give yourself permission to be a beginner again",
    beginner: "Even the most experienced tutor teaches a new course for the first time once. We ask kids to say <i>“it’s not working yet, let’s find a strategy”</i>, and the same applies to us: your first lessons are your prototype. Each one will feel easier than the one before, and we will support you at every step."
  },

  /* ---------- Section 3 ---------- */
  alone: {
    intro: "Your regional mentor knows the new courses and is there to support you with every launch. Asking for help is what professionals do: it is how good tutors become great ones. <b>You don’t need a problem or a flag to reach out.</b>",
    mentorTitle: "Your mentor",
    regionLabel: "Region",
    /* Only the line of the training’s language is shown */
    mentors: {
      en: [["UK", ["Gülay", "Syfa Nurafni Siregar"]], ["USA", ["Gülay"]], ["GCC", ["Syfa Nurafni Siregar"]]],
      es: [["LATAM (incl. Spain)", ["Priscila Aabye", "Laura Orozco", "Camilo Mahecha"]]],
      pt: [["Brazil", ["Lucas Correia Souza da Silva"]]],
      tr: [["MENA", ["Betül Topkan", "Saner Aykanat"]]],
      ar: [["MENA", ["Betül Topkan", "Saner Aykanat"]], ["GCC", ["Syfa Nurafni Siregar"]]],
      id: [["Indonesia", ["Syfa Nurafni Siregar"]]],
      ru: [["CIS", ["Raisa Pabiarzhyna"]]],
      it: [["Italy", ["Gianfranco Barba"]]],
      pl: [["Poland", ["Daria Kalicka"]]]
    },
    forTitle: "Your mentor is your first contact, always. Go to your mentor for:",
    forItems: [
      ["🧑‍🏫", "Class management issues"],
      ["📚", "Questions about a new course or format"],
      ["⚙️", "Support on how to run your lessons smoothly"],
      ["🤝", "Preparing a lesson together, or a quick confidence check before your first class"]
    ],
    tl: "<b>For groups and schedule</b>, contact your TL.",
    sessionTitle: "Prefer a longer session?",
    sessionSteps: [
      "Log in to the <b>LMS</b> with your Back Office account.",
      "Go to <b>Coaching</b> and choose a slot.",
      "Write in one line what you’d like help with — for example, <i>“First lesson of [course]”</i>."
    ],
    dm: "<b>Not feeling confident, for whatever reason?</b> Send your mentor a DM. That’s enough: no form, no flag, no explanation needed."
  },

  /* ---------- Section 4 ---------- */
  voice: {
    intro: "New courses don’t come from nowhere: they answer things tutors, students and families told us. Here is some of what we heard — tap each one to see what changed because of it.",
    toldLabel: "You told us",
    soLabel: { em: "So the new courses…", pl: "So Parallel Lessons…" },
    tapHint: "Tap to see what changed →",
    told: {
      em: [
        ["Preparing a lesson takes too long, jumping between the slides and a separate Wiki guide.", "Put everything in one place: teacher notes on every slide, a lesson plan with timings and a short video briefing on slide 1."],
        ["Keeping the whole group on the same slide is hard.", "Use Follow mode: students see exactly your slide, and your notes stay hidden."],
        ["The difficulty doesn’t always match the age of the group.", "Are built by age track (8–9, 10–12, 13+), and in Math tasks go from simple to complex on clearly labelled levels."],
        ["Kids lose motivation when they can’t see what they are building.", "Start every lesson from the finished result, and students publish their project in Kodland Sparks, where others can see and react to it."],
        ["It’s hard to know who really understood the lesson.", "End each lesson with an outcome check, and every submitted task is tracked so you can see who needs help."]
      ],
      pl: [
        ["Students wait too long before a 1-on-1 or premium group can start.", "Let students start much faster: you support 2–5 students at once, each on their own path."],
        ["Fixed schedules make it hard to fill your week.", "Give you more flexibility: students join the same slot even if they are on different lessons."],
        ["Managing several students at once sounds stressful.", "Come with a training on the format and a simulator, so you practise before your first live lesson."],
        ["Students in a group move at different speeds.", "Let each student progress at their own pace, with dedicated one-on-one moments with you."]
      ]
    },
    firsts: "Some courses are completely new, and you are among the first to teach them. That makes your voice even more important: after your first lessons, <b>tell your mentor what worked and what didn’t</b>. Your feedback will shape the next version."
  },

  /* ---------- Closing ---------- */
  start: {
    text: "You know why we are changing, what “ready” means, and who is there for you. Now dive into the training with curiosity: practise in the simulators as often as you like, and enjoy being one of the first to bring something new to our students.",
    dm: "If at any moment you don’t feel confident, <b>a DM to your mentor is all it takes.</b>"
  },

  /* =====================================================================
     SURVEYS (Module 0, before the check · Final module)
     Keys in [key, "label"] pairs (excited, too_short…) and question ids are NOT translated:
     they are what arrives in the Google Sheet. Translate only the labels.
     ===================================================================== */
  survey: {
    emailLabel: "Your Kodland corporate e-mail",
    emailPlaceholder: "name.surname@kodland.org",
    emailError: "Please write your Kodland corporate e-mail (it ends in @kodland…).",
    regionLabel: "Your region",
    regionPlaceholder: "Choose your region…",
    regionError: "Please choose your region.",
    missing: "Please answer every question marked with ★.",
    send: "Send my answers",
    sending: "Sending…",
    thanks: "✅ <b>Thank you!</b> Your answers have been sent.",
    again: "Send again",
    low: "Not at all",
    high: "Completely",
    optional: "optional",
    openPlaceholder: "Write anything you like…",
    lockMsg: "Send the satisfaction survey above to unlock the check.",
    lockWhat: "the satisfaction survey"
  },
  /* Regions for the survey: [key, "label"]. Keys are not translated. */
  regions: [
    ["brazil", "Brazil"], ["latam", "LATAM (incl. Spain)"], ["mena", "MENA"], ["italy", "Italy"], ["poland", "Poland"],
    ["uk", "UK"], ["usa", "USA"], ["indonesia", "Indonesia"], ["gcc", "GCC"], ["cis", "CIS"]
  ],
  /* Feelings and training length: [key, "label"] */
  feelings: [["excited", "🤩 Excited"], ["curious", "🤔 Curious"], ["calm", "😌 Calm"], ["unsure", "😕 Unsure"], ["worried", "😟 Worried"], ["overwhelmed", "😵 Overwhelmed"]],
  lengths: [["too_short", "Too short"], ["just_right", "Just right"], ["too_long", "Too long"]],

  /* ---------- Module 0 survey (section before the check) ---------- */
  startSurvey: {
    title: "Before the check: how do you feel?",
    intro: "A short check-in — there are no right or wrong answers. It helps your mentor and the team support you better. Send it to unlock the module check.",
    gifAlt: "How do you feel?",
    questions: [
      { id: "feeling", type: "choice", q: "How do you feel about this new launch right now?" },
      { id: "confidence", type: "scale", q: "How confident do you feel about teaching this new course or format?" },
      { id: "understand_why", type: "scale", q: "I understand why we are making this change." },
      { id: "know_where", type: "scale", q: "I know where to find what I need and who to ask for help." },
      { id: "worries", type: "open", optional: true, q: "What worries you most about this launch?" }
    ]
  },

  /* ---------- FINAL MODULE: your first-lesson mindset ---------- */
  final: {
    e: "🌟",
    title: "Your first-lesson mindset",
    desc: "Picture your first lesson going well, match every worry with a resource, and tell us how you feel now.",
    obj: "Picture your first lesson going well: you open with the finished result, the kids are curious, you follow the notes with ease, and you end with something they are proud of. That picture is realistic, and this module helps you get there.",
    offer: [
      ["✨", "Picture your first lesson going well."],
      ["🧩", "Match every worry with a resource."],
      ["💬", "Share how you feel now."]
    ],
    sections: { mind: "Picture your first lesson", survey: "How you feel now" },
    mind: {
      intro: "Take two minutes and answer for yourself. <b>Only you see these notes</b> — they stay in this browser and are not sent anywhere.",
      q1: "1. What excites me most about this new course or format?",
      q2: "2. What worries me most?",
      q3: "3. For each worry: which resource helps?",
      placeholder: "Write a few words…",
      resources: [["📒", "Teacher notes"], ["🎮", "Simulators"], ["💬", "Mentor DM or session"], ["👥", "TL"]],
      resourcesHint: "Tap the resources that answer your worries:",
      answerTitle: "Every worry has an answer",
      answer: "Unexpected moments are part of any new lesson: a question you’re unsure about, a task that behaves differently, a group that moves faster or slower than planned. You’ve practised them in the simulators, and you can go back to them as many times as you need. For anything else, your mentor is one message away.",
      afterTitle: "After your first lessons",
      after: "Notice <b>what went well</b> before what to improve, then tell your mentor about both. Your feedback goes to the Product team and shapes the next version of the course.",
      ready: "<b>You’re ready.</b> You know the why, the method, your routine and who to call. And if at any moment you don’t feel ready, a DM to your mentor is all it takes."
    },
    survey: {
      title: "A last reflection: how do you feel now?",
      intro: "This isn’t a test — there are no right or wrong answers. Your answers help the team improve the training and the courses. Send them to complete the training.",
      groups: [
        { title: "How you feel", questions: [
          { id: "feeling", type: "choice", q: "How do you feel about this new launch now?" },
          { id: "confidence", type: "scale", q: "How confident do you feel about teaching this new course or format?" },
          { id: "understand_why", type: "scale", q: "I understand why we are making this change." },
          { id: "know_where", type: "scale", q: "I know where to find what I need and who to ask for help." }
        ] },
        { title: "Your confidence to teach", questions: [
          { id: "ready_first_lesson", type: "scale", q: "I feel ready to run my first lesson from start to finish." },
          { id: "manage_format", type: "scale", q: { em: "I feel confident managing the group with the new format (Follow mode).", pl: "I feel confident managing my students with the new format (Parallel Lessons)." } },
          { id: "ready_tools", type: "scale", q: "I feel ready to use Back Office, the Classroom and the tools in class." }
        ] },
        { title: "The training materials", questions: [
          { id: "training_clear", type: "scale", q: "The training was clear and easy to follow." },
          { id: "simulators_helped", type: "scale", q: "The simulators helped me feel more confident." },
          { id: "training_length", type: "length", q: "The length of the training was:" }
        ] }
      ]
    },
    ctaTitle: "Complete the training",
    ctaText: "Send your reflection above to complete this last module.",
    ctaBtn: "Complete the training →",
    done: "Thank you for sharing how you feel — you’ve completed the training."
  },

  /* ---------- Knowledge check: 5 scenario questions. "a" = index of the right answer (0 = first). Keep it. ---------- */
  quiz: [
    { q: "You’re doing your training and the course lessons aren’t available yet. What do you do?",
      o: ["Wait for the lessons before starting the training.",
          "Complete the training on method and structure: the lessons will be in Back Office before the course starts.",
          "Search the Wiki for similar material."],
      a: 1, e: "Being ready doesn’t depend on seeing every lesson: the training prepares you for everything else, and every lesson will be in Back Office before your course starts." },
    { q: "A few days before your first lesson you don’t feel confident. What do you do?",
      o: ["Keep it to yourself and hope it goes well.",
          "Send your mentor a DM.",
          "Ask to be removed from the course."],
      a: 1, e: "A DM to your mentor is enough: no form, no flag, no explanation needed." },
    { q: "You’d like help preparing your first lesson. What’s the fastest way?",
      o: ["Send your regional mentor a DM, or book a session in the LMS.",
          "Wait until you receive a flag.",
          "Ask a student’s parent for feedback."],
      a: 0, e: "You don’t need a problem or a flag to reach out: message your mentor, or book a Coaching slot in the LMS." },
    { q: "A step in the training still feels unclear. What’s the best move?",
      o: ["Stop the training until someone contacts you.",
          "Repeat the simulator and, if it’s still unclear, message your mentor.",
          "Skip it: you’ll figure it out in class."],
      a: 1, e: "The simulators are where confidence is built — repeat them as often as you need, and your mentor is always there for what’s still unclear." },
    { q: "Your first lesson didn’t go as planned. Which mindset fits best?",
      o: ["“This course isn’t for me.”",
          "“It’s not working yet: I’ll note one improvement and talk to my mentor.”",
          "“I’ll wait for someone else to fix it.”"],
      a: 1, e: "Your first lessons are your prototype: each one feels easier than the one before, and your feedback shapes the next version." }
  ]
};
