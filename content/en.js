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

  lang: "en",

  /* ---------- Videos (Google Drive "preview" links). A region can replace them with its own video. ---------- */
  videos: {
    opening: "https://drive.google.com/file/d/12DWDkaSE8c4OsHWtWDAc5iNd8jc6C60v/preview",
    closing: "https://drive.google.com/file/d/1R7gMdFGfdFtv1FRKGRn65-BJN13IYnmW/preview",
    checkin: "https://drive.google.com/file/d/1_4Opmv0hsAgKPbuEd6Y1HTP9ZJqGAXDA/preview",
    content: "https://drive.google.com/file/d/14gOeQ7jc_vXp9OSmE7P-tsJu53BChcqd/preview"
  },

  /* ---------- General interface ---------- */
  ui: {
    brand: "Parallel Lessons Training",
    footer: "kodland · Parallel Lessons Training",
    devLink: "🛠 Developer",
    language: "🌐 Language",

    navModulesPill: "{done}/{total} modules",
    navHome: "← Home",
    navModules: "← Modules",
    navBackModule: "← Back to the module",

    homeKicker: "Tutor training · New version",
    homeTitle1: "Parallel",
    homeTitle2: "Lessons",
    homeLead: "A new Premium format: one tutor, several students, each on their own path in the same time slot. This training gets you ready to teach your first parallel lessons — step by step.",
    homeFact1: "<b>100% self-study.</b> Go at your own pace — your progress is saved in this browser.",
    homeFact2: "<b>Practice as much as you need.</b> The simulations can be repeated as many times as you like, until you feel confident.",
    coreLabel: "Core module",
    coreTitle: "The PL format",
    coreDesc: "What Parallel Lessons are, the lesson structure, your role, the technical side, your questions and a full practice simulation. {total} short modules.",
    btnStart: "Start →",
    btnReview: "Review →",
    btnContinue: "Continue →",

    listKicker: "Core module",
    listTitle1: "The PL",
    listTitle2: "format",
    listLead: "{total} short modules, in order. Each one ends with a short check or activity that unlocks the next one.",
    listAllDone: "All modules complete 🎉",
    listModulesComplete: "modules complete",
    listModuleN: "Module {n}",
    badgeDone: "✓ Completed · {score}%",
    badgeDoneSim: "✓ Completed",
    badgeLocked: "🔒 Complete Module {prev}",
    badgeEnterSim: "▶ Enter the simulation",
    badgeStart: "Start →",
    listDoneTitle: "All modules complete!",
    listDoneText: "One last step: see what to do next.",
    listDoneBtn: "See your next steps",

    moduleEyebrow: "Module {n} of {total}",
    simEyebrow: "Module {n} of {total} · The practical part",

    ctaQuizH: "Module check",
    ctaQuizP: "{n} short questions. Score 70% or more to pass.",
    ctaTfH: "Module check: true or false?",
    ctaTfP: "{n} statements. Score 70% or more to pass.",
    ctaChatH: "Module check: a conversation with a colleague",
    ctaChatP: "A tutor who doesn’t know the format is curious about it. Help them with 4 answers. Score 70% or more to pass.",
    ctaQaH: "Done reading?",
    ctaQaP: "Open every question to complete this module.",
    ctaQaBtn: "✅ Got my answers — continue",
    ctaQaBtnDone: "✓ Completed — next module →",
    ctaStart: "Start the check →",
    ctaRetake: "🔁 Retake the check",

    codeLabel: "<b>🔑 Completion code</b> — you’ll find it on the last screen of the simulation.",
    codePlaceholder: "e.g. PL-XX-0000",
    codeUnlock: "Unlock",
    codeError: "That code isn’t right. Check it on the last screen of the simulation.",
    codeOk: "✅ <b>{label} completed.</b> Code accepted.",
    codeLabelBO: "BO simulation",
    codeLabelSim: "Classroom simulation",

    subsRemember: "Remember to turn on subtitles in your native language, if necessary.",
    subsCan: "You can turn on subtitles in your native language if needed.",

    carouselOf: "{i} of {n}",
    carouselDone: "<b>You’ve met all 4 students!</b> The module check is now unlocked at the bottom of the page.",
    flipHint: "Tap to flip",
    replay: "↻ Replay",
    stageLabel: "Stage {abs} · {i} of {n}",
    stageNext: "Next stage →",
    stageFirst: "Back to the first",
    mythTag: "Myth",
    realityTag: "Reality ✓",
    mythHint: "Tap to see the reality →",
    sorterDo: "✅ Do",
    sorterDont: "🚫 Don’t",
    sorterNotQuite: "Not quite.",
    qaProgress: "<b>{n} / {total}</b> questions opened",

    sliderYou: "You",
    sliderStudent: "Student {n}",
    sliderMin: "{m} min",
    sliderJoins: "joins at min {m} · 60 min",

    scrubYou: "🧑‍🏫 You",
    scrubPlay: "▶ Play",
    scrubPause: "⏸ Pause",
    scrubReplay: "▶ Replay",
    scrubNotJoined: "Not joined yet",
    scrubOpening: "Opening",
    scrubWorking: "Working alone",
    scrubClosing: "Closing",
    scrubFinished: "Finished",
    scrubFree: "Free — hands raised?",
    scrubOpeningX: "Opening {name}",
    scrubClosingX: "Closing {name}",
    scrubHelping: "✋ Helping Leo",
    scrubOver: "Session over",
    scrubNotesTitle: "📝 My notes",
    scrubNotesEmpty: "Your notes will appear here as students join…",
    legendOpening: "Opening (with you)",
    legendIndep: "Independent work",
    legendClosing: "Closing (with you)",
    legendSession: "Your session",

    quizMeta: "Module {n} check · {kind} {i} of {total}",
    quizKindQ: "Question",
    quizKindTF: "True or false",
    quizTrue: "✅ True",
    quizFalse: "❌ False",
    quizCorrect: "✅ <b>Correct!</b> ",
    quizWrong: "❌ <b>Not quite.</b> ",
    quizNext: "Next question →",
    quizResult: "See my result →",

    resultPassed: "You passed!",
    resultComplete: "Module complete!",
    resultAlmost: "Almost there",
    resultAnswered: "You answered <b>{s} of {n}</b> correctly.",
    resultUnlocked: "<b>Module {n} · {title}</b> is now unlocked.",
    resultNeed: "You need 70% or more. Review the module and try again — you can retake it as many times as you need.",
    resultGoModule: "Go to Module {n} →",
    resultNextSteps: "See your next steps →",
    resultReview: "📖 Review the module",
    resultQaRead: "You’ve read all the answers.",
    resultSimAccepted: "Code accepted: you’ve completed the Classroom simulation.",

    lockTitle: "Still locked",
    lockPrev: "Complete Module {prev} first.",
    lockGeneric: "Complete the previous module to unlock this one.",
    ok: "OK"
  },

  /* ---------- Final screen (after the last module) ---------- */
  done: {
    title: "Modules completed!",
    body: "<p>You’re almost done! Return to the LMS training page where you accessed this training. The DST test is available right below the training.</p><p>👉 You must complete and pass the DST test for the training to be considered successfully completed. If you do not complete the DST test, the training will remain incomplete and may expire.</p><p>The minimum passing score is <b>80%</b>.</p><p>Good luck! ❤️</p>",
    btnHome: "Back to home",
    btnPractice: "🎮 Practice again",
    btnReview: "Review the modules"
  },

  /* ---------- Modules: titles, descriptions and section titles ---------- */
  modules: {
    m1: { title: "Welcome to Parallel Lessons",
          desc: "What a Parallel Lesson is, how it works, how the time works, and who the students are.",
          obj: "By the end of this module you’ll know what a Parallel Lesson is, how one lesson runs, how your time works with several students, and which students this format is made for.",
          needs: "Meet all 4 students in the carousel above to unlock the check.",
          sections: { what: "What is a Parallel Lesson?", runs: "How a lesson actually runs", time: "How the time works", why: "Why the format exists", students: "Meet the students" } },
    m2: { title: "The Lesson Structure",
          desc: "The structure of a regular lesson and of a parallel lesson, and why the opening and the closing matter so much.",
          obj: "Compare the structure you already know with the structure of a parallel lesson, and see what happens in the opening and in the closing — the two moments you lead.",
          sections: { structure: "Two lesson structures", matter: "The opening and the closing still matter", opening: "The opening", closing: "The closing" } },
    m3: { title: "Your Role as a PL Tutor",
          desc: "Your role and mindset, feedback, taking notes, and your first PL lesson.",
          obj: "Understand your role in a parallel lesson, how to give feedback, how to keep track of your students with notes, and how to run your very first PL lesson.",
          sections: { role: "So… what’s my role?", mindset: "Skills and mindset for every lesson", feedback: "Feedback that helps", notes: "How students join — and your notes", first: "Your first PL lesson" } },
    m4: { title: "Technical Aspects",
          desc: "Parallel Groups and Teacher Notes in BO, and the communication and tracking rules.",
          obj: "Find your Parallel Groups and Teacher Notes in the Back Office, open the console, and know the communication and tracking rules.",
          needs: "Enter the code from the end of the BO simulator to unlock the check.",
          sections: { bo: "Parallel Groups in BO", tnotes: "Teacher Notes, not the wiki", rules: "Communication & tracking rules" } },
    m5: { title: "Q&A: Your Questions",
          desc: "Straight answers to the questions tutors ask most — no test, just read through them.",
          obj: "Real questions from tutors about Parallel Lessons, with straight answers. There’s no test: open every question to complete the module.",
          sections: { qa: "Questions & answers" } },
    m6: { title: "Classroom Simulation",
          desc: "To complete the training, practice a real lesson: enter the simulation.",
          obj: "Practice a real parallel lesson before your first one. This is the last step of the training." }
  },

  /* ---------- Section texts ---------- */
  s: {
    /* Module 1 */
    what: {
      intro: "Imagine your next lesson: four students, each one arriving at a different time, each one building their own project — and each one getting you all to themselves at the moments that matter most. That’s a Parallel Lesson.",
      definition: "<b>Parallel Lessons (PL)</b> is a new <b>Premium</b> format for students who enjoy independent, individual work. One tutor supports <b>2–5 students at the same time</b>, each on their own individual path, within the same time slot. Every student still gets a full, uninterrupted <b>60 minutes</b> — it’s the tutor’s total session time that stretches to fit everyone.",
      how: "How is that possible? Classroom has a new version of the platform. Instead of one room for all your students, you get <b>one room for each student</b> — like breakout rooms, but already set up for you by default. You move from room to room; students never see or hear each other.",
      imgAlt: "The Classroom console with a separate room for each of four students",
      imgCaption: "The console lobby: each student has their own panel, even though they share one tutor."
    },
    runs: {
      intro: "So what does one student’s lesson look like? Lesson format: <b>parallel</b>. Every student’s lesson is designed for a full 60 minutes — and there are no group activities. You support each student at the beginning and at the end of their lesson; during self-study, you help whenever the student raises their hand.",
      cards: [
        ["🎙️", "The tutor’s role", "In the live parts, you set the tone, explain the goal and check that the technical setup is ready. During self-study, you don’t lead the lesson — you give targeted help when the student asks. The cards remind students to call you before saving and at key steps."],
        ["🔁", "A deductive approach", "The student first sees a finished project, then explores how it was made, and applies the same idea to their own project: result first, how it works second, their own version third."],
        ["💬", "Feedback: Tutor + Self", "There’s no peer feedback in this format. AI isn’t used in the first lessons; in later lessons of the module, AI is added as a third feedback channel where it makes sense."]
      ]
    },
    time: {
      intro: "Here’s the key to the timing. Students don’t all start together: <b>a new student joins every 10 minutes</b>. Each one gets their full 60 minutes, so your session grows by 10 minutes for each extra student.",
      example: "<b>Example:</b> if you have 3 students, your session lasts 80 minutes, but each student still gets 60 minutes, because a new student joins every 10 minutes.",
      formula: "Your session = <b>60 min</b> + <b>10 min</b> for each additional student",
      chipStudents: "{n} students",
      chipMin: "{m} min",
      tryIt: "👇 Now try it: move the slider (or tap a box above)",
      tryTag: "Try it",
      students: "students",
      minYou: "minutes for you",
      minEach: "minutes for each student"
    },
    why: {
      intro: "Premium courses often take a long time to start, because the student’s availability and the tutor’s schedule rarely match. Parallel Lessons solve that. Flip the cards:",
      cards: [
        ["⚡", "For students", "<b>They start much faster.</b><br>No waiting weeks for a Premium slot that fits: they can begin their course and learn at their own pace."],
        ["🗓️", "For tutors", "<b>More flexibility.</b><br>Several individual lessons fit in one slot of your schedule, and you discover a new way of teaching."],
        ["🎯", "For learning", "<b>Real autonomy.</b><br>Students build the feeling: <i>“I can create a working digital project on my own.”</i> Mistakes are part of the process."]
      ],
      scope: "<b>Important scope:</b> Parallel Lessons don’t replace how Kodland teaches. They replace the <b>Premium format</b>, for selected courses."
    },
    students: {
      intro: "You might wonder: <i>“Will students like working on their own?”</i> The short answer: <b>these students chose it.</b> Meet them:",
      howTo: "<b>How to go through it:</b> use the <b>›</b> arrow to meet each student, one by one. There are <b>4 slides</b> — the module check unlocks once you’ve seen them all.",
      bubble: "Need help? ✋ Ask the expert",
      slides: [
        { who: "Student 1 · The independent one", title: "Loves to focus alone", text: "Wants to learn and apply what the course teaches, but big classes full of kids just don’t work for them: too much noise, too much waiting.", quote: "“I learn better when I can concentrate on my own project.”" },
        { who: "Student 2 · The self-taught one", title: "Learns on their own", text: "Already loves exploring and figuring things out alone. For them, this format is a bonus: the freedom to learn by themselves <b>and</b> an expert to ask whenever they need one.", quote: "“I like discovering things myself — and knowing someone can help if I get stuck.”" },
        { who: "Student 3 · The async veteran", title: "Has learned online before", text: "Some students have already taken fully asynchronous courses, with no tutor at all. In a Parallel Lesson they get the same independence — plus a real person who welcomes them and gives them feedback.", quote: "“It’s like my online courses, but now someone looks at my work!”" },
        { who: "Why it works · Ages 10+", title: "Ready for independence", text: "Around ages 10–12, the skills to keep a goal in mind and manage your own focus take a big step forward. That’s what independent work runs on — and feeling trusted to work alone is a strong motivator.", quote: "“I can create a working digital project on my own.”" }
      ],
      reassure: "<b>Don’t be afraid they won’t like it.</b> These students know the format before they join, and many prefer it. Your job is to make their start and their finish great."
    },

    /* Module 2 */
    structure: {
      intro: "Let’s start with something you already know. This is the structure of a <b>regular Kodland lesson</b> — the one you follow in your other formats, <b>Premium included</b>. You lead every part of it, from the opening to the closing, including the theory and the practice:",
      regularTitle: "👩‍🏫 Regular Kodland lesson",
      plTitle: "⚡ Parallel lesson",
      bridge: "A parallel lesson is <b>more independent</b>. You don’t do the theory and the practice — <b>the student does it on their own</b>, with the cards. This works because the content is <b>designed for students to work independently</b>: the cards explain, show examples and include help when something doesn’t work.",
      theory: "Theory & practice",
      indep: "Independent work",
      tagIndep: "Replaces theory & practice",
      tagFeedback: "Feedback is here",
      phOpening: "Opening",
      phMain: "Main part",
      phSelf: "Self-study",
      phClosing: "Closing",
      diff1: "<b>Theory & practice → independent work.</b> No theory or modeling by the tutor: the student works with the cards.",
      diff2: "<b>Feedback moves to the closing.</b> During the lesson you’re busy welcoming, closing and helping raised hands — so feedback on the project happens in Wrapping up."
    },
    matter: {
      intro: "An independent format doesn’t mean the opening and the closing deserve less attention than in other formats. Just like in any lesson, they’re key for students to <b>understand and enjoy the course</b> — and to build a <b>relationship</b> with you.",
      card1Title: "🎬 Why beginnings and endings still matter",
      card1Text: "It’s tempting to think that once a student is working independently, the “real” teaching has paused — that the opening and closing are just formalities around the actual work. <b>The opposite is true.</b>",
      card2Title: "⭐ Why this still matters",
      card2Text: "None of this changes just because the middle of the lesson is now independent. If anything, a strong opening and closing matter <b>more</b> in PL, because they’re the only two moments every student experiences with your full, undivided attention.",
      outro: "Let’s remember what each part of the opening and the closing is for."
    },
    opening: {
      intro: "The opening has <b>4 stages</b>. Go through each one with the arrows:",
      video: "In this video, you'll see how a tutor conducts the opening session with the first two students to arrive in class. You'll notice that she finishes the opening session with the first student at 4:52. However, since she still has 10 minutes of opening time left with her first student, she continues working with her a little longer until the second student arrives.",
      videoTitle: "Opening of a parallel lesson"
    },
    closing: {
      intro: "The closing is where everything comes together. The student shows their final project, hears specific feedback from you, thinks about what they learned and leaves knowing what comes next. In a PL, it’s also <b>the moment you give feedback</b> — there’s no separate feedback stage in the middle. The closing has <b>3 stages</b>:",
      video: "In this video, you’ll see how the tutor wraps up the opening with her last student. At this point, she must return to her first student to conclude the session.",
      videoTitle: "Closing of a parallel lesson"
    },

    /* Module 3 */
    role: {
      intro: "If the work is independent… <b>what’s my role in the lesson?</b> A big one — just a different one. In a parallel lesson you’re not the person who explains everything. You’re the person who <b>opens the door to learning</b> and makes sure each student walks through it.",
      cards: [
        ["🧭", "Platform guide", "You show each student around the Kodland platform, so they know where everything is and how to move on their own."],
        ["🚀", "Learning starter", "With your opening, you set the tone, explain the goal and launch each student into their lesson."],
        ["💬", "Feedback coach", "With constructive feedback, you guide every student — in parallel — through their own learning process."]
      ]
    },
    mindset: {
      intro: "These aren’t random tips: they’re the <b>skills a PL tutor brings to every lesson</b>. Keep them in mind — and remind yourself of them before each class — because they’re what makes several lessons at once feel like good lessons for every student. Open each one:",
      skills: [
        ["🎭", "Understanding your role", "Your job stops being “deliver the content” and becomes “guide several learning processes at the same time”. The content is still there — in the cards — but it’s no longer the main event. Your attention goes to what each student needs to keep moving: a good start, help when they call you, and a real ending."],
        ["🤲", "Accepting that students work independently", "Independent work isn’t a gap in your teaching — it’s planned time. A student working alone while you’re in another room is doing exactly what the format asks of them. Treat it as progress, not as a problem waiting for you to come back."],
        ["🧭", "From “teacher” to “learning facilitator”", "A facilitator asks a question before giving an answer, and trusts the student to close part of the gap on their own. Your support is temporary and adjustable: just enough to get them unstuck, so that little by little they need you less."],
        ["💡", "Hints, not solutions", "When a student raises their hand, start with “What have you tried so far?”. A hint keeps them thinking; a solution ends the thinking. Give a hint as big as they need — not as big as the time you’d like to save."],
        ["⚖️", "Balancing guidance with autonomy", "Giving students real choices and explaining the reason behind what you ask motivates them more than tightly controlling every step. The PL format gives you many natural chances to do this — use them."],
        ["🌱", "Patience with different learning speeds", "Your students will never move at the same pace, and treating that as a problem creates exactly the pressure that gets in the way of learning. Patience isn’t passive: it’s deciding to let the pace vary without making anyone feel rushed."],
        ["👀", "Making every student feel seen", "A specific, personal detail — something from last time, a detail of their project — does more than a long, generic chat. If your opening and closing are reliable every time, the relationship grows even in short moments."],
        ["🛡️", "Creating a safe space to ask", "Students need to feel it’s safe to ask a question, admit they’re confused or try something and fail. In a rotating format that safety has to be built quickly — say it in the opening, and show it every time they call you."]
      ],
      mythsTitle: "🌱 A new mindset about the format",
      mythsIntro: "Parallel Lessons are a new type of group at Kodland. Knowing the format <b>adds</b> to what you can do — it doesn’t take anything away. Tap each belief to see the reality:",
      myths: [
        ["“All my courses will become parallel from now on.”", "<b>Not at all.</b> Learning the format doesn’t mean your groups change. Parallel Lessons are only for selected courses."],
        ["“My role as a tutor will change in every group.”", "<b>No.</b> You teach the parallel way only in your parallel groups. Everywhere else, you keep doing what you already do well."],
        ["“It’s just one more thing to learn.”", "<b>It’s an opportunity.</b> You broaden your experience with educational formats, and knowing more formats can open the door to more groups."]
      ]
    },
    feedback: {
      intro: "Feedback is where you make the biggest difference in a parallel lesson — and it happens in the closing, when the student shows their project. Good feedback answers three questions for the student:",
      q3: [
        ["🎯", "Where am I going?", "What was the goal of today’s project?"],
        ["📍", "How am I doing?", "What exactly did they do well?"],
        ["➡️", "Where to next?", "One clear next step to improve."]
      ],
      compareTitle: "Vague or specific? Switch and compare",
      tryTag: "Try it",
      vague: "😐 Vague",
      specific: "🌟 Specific",
      vagueEx: ["“Good job!”", "“Nice drawing.”", "“That’s wrong, try again.”"],
      specificEx: ["“You made each letter appear in its own frame — that’s exactly how the animation works. Next, try adding one more frame between letters to make it smoother.”", "“The colours of your name really match your theme. What could you add so the last letter stands out?”", "“The V fills everything because there’s a small gap in its outline. Close it and fill it again.”"],
      vagueNote: "Kind, but the student doesn’t learn what worked or what to do next.",
      specificNote: "Each one names what worked (or what went wrong) and points to a next step.",
      mistakes: "<b>Mistakes are information, not a verdict.</b> “This didn’t work because the letter isn’t closed — let’s check the outline” helps far more than “this is wrong”."
    },
    notes: {
      intro: "Remember how students join: <b>one every 10 minutes</b>, and each one leaves 60 minutes after joining. That means you also say goodbye in the same order they arrived. With several students, the easiest way not to get lost is to <b>take short notes</b> as they join.",
      hands: "<b>You don’t have to visit every student every few minutes.</b> Students call you by raising their hand. When several things happen at once: onboarding beats a raised hand, closing beats a raised hand, and onboarding beats closing.",
      example: "Here’s an example with <b>3 students</b> (Ana, Leo and Mia), from 16:00. Press play or drag the time, and watch the tutor’s notes fill in:",
      names: "Ana,Leo,Mia",
      lines: [
        "<b>Ana</b> joined at 16:00 → goodbye at <span class='hl2'>16:50</span>",
        "<b>Leo</b> joined at 16:10 → goodbye at <span class='hl2'>17:00</span>",
        "<b>Mia</b> joined at 16:20 → goodbye at <span class='hl2'>17:10</span>"
      ],
      writeDown: "<b>Write down when each student started.</b> That’s how you know, at any moment, who says goodbye first and at what time.",
      checkin: "Although, due to time constraints, we might use up all 10 minutes of the opening with each student, we might have some time left over, especially if it’s not the first lesson. During that time, when we don’t need to do openings or closings, we can help students who have their hands raised or simply check in with them. Watch this video to see how a tutor does it.",
      videoTitle: "Helping and checking in with students"
    },
    first: {
      intro: "Your students already know they’ve chosen a parallel format — but the first lesson is their <b>first real experience</b> of it. That’s why, in lesson 1, you explain <b>in detail</b> how the lesson works and make sure they can move around on their own. Here’s what to keep in mind.",
      beforeTitle: "📚 Before the lesson",
      before: [
        "Study the lesson in advance.",
        "All the “manual” materials are now in <b>BO, inside each activity</b>: the <b>Teacher Notes</b>. There are no manuals in the wiki anymore.",
        "Read the notes of every card you’ll lead — especially the opening and the last synchronous card."
      ],
      adaptTitle: "🔄 Adapt the opening for lesson 1",
      adapt: [
        "<b>Mood check →</b> get to know them: interests, and whether they’ve learned online or on their own before.",
        "<b>Homework check →</b> there’s no homework yet. Use this time to <b>explain the format</b>."
      ],
      checklistTitle: "✅ During the lesson: your first-lesson checklist",
      checklistTag: "Tick them off",
      checklist: [
        "Explain the PL format: what a parallel lesson is and how it works.",
        "Tell them <b>how long</b> they’ll work on their own.",
        "Show them — and point to it if needed — where to find <b>help in the cards</b> (solutions and alternatives for technical problems).",
        "Check that everything works on the platform: sound, camera, the lesson.",
        "Check that they can move <b>from one activity to the next</b> on their own.",
        "Make clear <b>where to raise their hand</b> ✋ and <b>where to send messages</b>."
      ],
      questionsTitle: "🗣️ Check with open questions, not “Is it clear?”",
      questionsIntro: "A “yes” doesn’t tell you much. Ask questions where the student shows you they know how the lesson works. Tap each one to see what you want to hear:",
      questionsHint: "Tap to see the answer you want to hear →",
      questions: [
        ["“How will you let me know if you need me?”", "They raise their hand ✋ (and know where the button is) or send a message."],
        ["“If the website doesn’t open, what can you do?”", "Look at the help in the card: it has solutions and alternatives."],
        ["“Show me how you go to the next activity.”", "They move to the next card by themselves."],
        ["“How long will you work on your own today?”", "They know roughly when you’ll be back for the closing."]
      ],
      repeat: "Some students can feel left alone in this format even after the explanation. Asking them to <b>repeat, in their own words</b>, how the lesson will work is how you make sure they really got it."
    },

    /* Module 4 */
    bo: {
      intro: "A <b>Parallel Group</b> is a container that groups several individual student groups under one tutor. Each student still has their own individual group, just like in the Premium format — the link to join as teacher is simply the same for all of them.",
      imgAlt: "A Parallel Group card in BO with the individual groups inside",
      imgCaption: "The Parallel Group in BO: the groups inside it, and the console that launches the Classroom session.",
      consoleTitle: "🔑 Opening the console",
      console60: "From the <b>Parallel Group</b> in your Groups list: up to 60 minutes before the lesson, until it ends.",
      console30: "From your <b>Schedule</b>: up to 30 minutes before the lesson.",
      simTitle: "Parallel Lessons BO Simulator",
      simText: "A click-through replica of BO: find the Parallel Group, open the console in both ways, see a PL course and find its Teacher Notes.",
      simSteps: ["Open the BO simulator in a new tab.", "Follow every step until you see “Simulation complete” and your code.", "Come back here and enter the code below."],
      simButton: "🖥️ Open the BO simulator"
    },
    tnotes: {
      intro: "<b>We don’t use the wiki for these courses.</b> Everything you need to prepare a lesson is in the <b>Teacher Notes</b>, inside each activity in BO. You’re expected to <b>read the notes before every lesson</b>.",
      cards: [
        ["🔍", "Where", "BO → Courses → your course → Assignments → each activity. The notes are at the top of the card — only you see them."],
        ["⏰", "When", "Before every lesson. Not during it: with several students, there’s no time to read while you teach."],
        ["🎯", "What to look for", "The format of each card (live or self-study), how long it takes, what you should do and what to watch out for."]
      ],
      simReminder: "The BO simulator above walks you to the Teacher Notes of a real PL lesson. If you skipped that step, open it again.",
      video: "In this video, you'll see how the new content has been adapted so that students can work independently.",
      videoTitle: "How the new content works"
    },
    rules: {
      intro: "Parallel Lessons have their own communication rules, but tracking works exactly as before. Do or don’t? Decide for each one:",
      items: [
        ["💬", "Create a WhatsApp group with all the students of the parallel slot.", "no", "<b>Don’t.</b> Never create WhatsApp groups for a parallel slot: Parallel Lessons are individualized learning."],
        ["📱", "Message each student (or their parent) individually.", "yes", "<b>Do.</b> All communication is individual, through direct messages."],
        ["📊", "Mark attendance and check projects in each student’s individual group.", "yes", "<b>Do.</b> Attendance, submitted projects and other metrics are tracked per individual group — nothing changes there."],
        ["🗂️", "Track the whole slot as one shared record in the Parallel Group.", "no", "<b>Don’t.</b> The Parallel Group is only a container. Each student’s data stays in their own group."]
      ]
    },

    /* Module 5 */
    qa: {
      intro: "These are real questions tutors asked during the Parallel Lessons rollout. Click each question to see the answer."
    },

    /* Module 6 */
    sim: {
      title: "🎮 Classroom Simulation",
      cards: [
        ["🎮", "What it is", "A real parallel lesson in Classroom, with 4 students who join every 10 minutes. You’re the tutor: same screens, same lesson materials, same situations you’ll find in your own lessons."],
        ["💡", "Why you need it", "It’s the <b>only practical part</b> of this training — and the one that will really help you understand how a PL works. Everything from Modules 1–5 comes together here."],
        ["🧭", "How it works", "First a <b>guided tour</b> with your first student, then a <b>decision game</b> with 10 situations and 3 lives. Repeat it as many times as you need. At the end you’ll get a <b>completion code</b>."]
      ],
      example: "<b>This is an example.</b> The simulation uses a media course adapted to the PL format — it isn’t necessarily the course you’ll teach. You don’t need to study that lesson’s content: focus on <b>how</b> the lesson runs. Turn your <b>sound on</b>: students and the tutor speak.",
      launchTitle: "Classroom Simulator",
      launchText: "It opens in a new tab, full screen, so you can see Classroom exactly as you will in your lessons.",
      steps: ["Open the simulator in a new tab.", "Complete the guided tour and the decision game until you see “Simulation complete” and your code.", "Come back to this tab and enter the code below."],
      button: "🚀 Open the simulator"
    }
  },

  /* ---------- Lesson stages (Module 2 carousels). Opening = first 4, closing = last 3 ---------- */
  stages: [
    { t: "Connection check", ph: "Opening", goal: "Make sure you can both see and hear each other before anything else.",
      d: ["Check camera, microphone and sound — yours and the student’s.", "Make sure the student is in their room and sees the lesson.", "Serious technical issue? The cards include help, and you can contact technical support."] },
    { t: "Mood check", ph: "Opening", goal: "A quick read on how the student is doing today.",
      d: ["Greet them by name and ask how their day is going.", "Notice their energy: a student who feels seen works better on their own.", "Keep it short and warm."] },
    { t: "Homework check", ph: "Opening", goal: "Review what they worked on since last time.",
      d: ["Ask them to show what they did.", "Name one specific thing that went well.", "In the first lesson there’s no homework yet — use this time to explain the format (see Module 3)."] },
    { t: "Lesson goal", ph: "Opening → self-study", goal: "Set what today’s lesson is aiming for. This is the last stage before independent work begins.",
      d: ["Explain the goal of today’s project in one or two sentences.", "Ask the student to repeat the plan in their own words.", "Remind them how to raise their hand ✋ if they need you."] },
    { t: "Wrapping up", ph: "Closing", goal: "The student shows their final project, you give feedback on it and close the loop on today’s work.",
      d: ["Ask them to share their screen and present their project.", "Name one specific strength — not just “good job” — and point to one clear next step.", "If something is unfinished, agree clearly what happens with it: the lesson still needs a real ending."] },
    { t: "Reflection", ph: "Closing", goal: "A moment for the student to think about what they learned.",
      d: ["Ask a short question: “What would you do differently next time?”", "Let them answer — don’t answer for them.", "This builds the self-assessment they use when they work alone."] },
    { t: "Homework announced", ph: "Closing", goal: "Set up what comes next.",
      d: ["Explain the homework or the next step clearly.", "Preview the next lesson so they arrive curious.", "Say goodbye on a positive note."] }
  ],

  /* ---------- Module checks. "a:" = index of the correct answer (0 = first option). Do NOT change it. ---------- */
  quiz: {
    m1: [
      { q: "What is a Parallel Lesson?",
        o: ["One tutor teaches the same lesson to a group of students who all work together on one shared project.",
            "One tutor supports 2–5 students in the same time slot, each on their own path and each with a full 60-minute lesson.",
            "A recorded course that students follow on their own, with no tutor at any point."],
        a: 1, e: "Each student has their own individual 60-minute lesson. What stretches to fit everyone is the tutor’s session." },
      { q: "How does Classroom make Parallel Lessons possible?",
        o: ["All students share one room and take turns to talk to the tutor.",
            "Each student has their own room, created by default — like breakout rooms that are already set up.",
            "The tutor creates a new video call for every student."],
        a: 1, e: "In the console, each student has their own room. You move from room to room; students never see each other." },
      { q: "You have 4 students in your parallel group. How long is your session?",
        o: ["60 minutes", "90 minutes", "240 minutes"],
        a: 1, e: "Your session = 60 min + 10 min for each additional student. With 4 students: 60 + 30 = 90 minutes. Each student still gets 60." },
      { q: "Which student is this format designed for?",
        o: ["Students aged 10+ who can work independently, enjoy autonomy and like knowing an expert is there when they need help.",
            "Young children who still need an adult beside them during the whole lesson.",
            "Students who learn best by working in teams with their classmates."],
        a: 0, e: "From around age 10, students can manage their own focus for stretches of time. Many already enjoy learning on their own." }
    ],
    /* True / false: a: 0 = True, 1 = False */
    m2: [
      { q: "In a parallel lesson, the tutor explains the theory and models the practice for each student.", a: 1,
        e: "False. In a parallel lesson the student does the theory and practice on their own with the cards. The content is designed for it." },
      { q: "Feedback on the student’s project is given in Wrapping up, at the end of the lesson.", a: 0,
        e: "True. There’s no separate feedback stage in the middle: the student shows their project and you give feedback when you close the lesson." },
      { q: "Because the middle of the lesson is independent, the opening and the closing matter less than in other formats.", a: 1,
        e: "False. They matter even more: they’re the only moments each student has your full, undivided attention." },
      { q: "Lesson goal is the last stage before the student starts working on their own.", a: 0,
        e: "True. After the lesson goal, the student starts their independent work with the cards." }
    ],
    m4: [
      { q: "What is a “Parallel Group” in the Back Office?",
        o: ["A container that groups several individual student groups under one tutor.",
            "A new course type with a different curriculum.",
            "A shared group where all students join the same room."],
        a: 0, e: "It’s just a container: each student still keeps their own individual group inside it, and the teacher link is the same for all of them." },
      { q: "Where are attendance and submitted projects tracked in a parallel group?",
        o: ["In the Parallel Group, as one shared record for the whole slot.",
            "In each student’s individual group — exactly as before.",
            "Nowhere: parallel lessons don’t track attendance."],
        a: 1, e: "Nothing changes here: attendance, projects and other metrics are tracked per individual group." },
      { q: "How should you communicate with the students of a parallel group?",
        o: ["Create one WhatsApp group with all the students of the slot.",
            "Only inside Classroom, never by message.",
            "Individually, with direct messages to each student."],
        a: 2, e: "Parallel Lessons are individualized learning: never create WhatsApp groups for the slot. Every student is contacted individually." },
      { q: "How early can you open the Classroom console?",
        o: ["From your Groups list, 60 minutes before the lesson. From your Schedule, 30 minutes before.",
            "Only at the exact start time, from any page.",
            "From your Schedule, 60 minutes before. From your Groups list, 10 minutes before."],
        a: 0, e: "From the Parallel Group in your Groups list you can open it 60 minutes before (until the lesson ends). From your Schedule, 30 minutes before." }
    ]
  },

  /* ---------- Module 3 check: the phone conversation with Alex ---------- */
  chat: {
    name: "Alex",
    online: "online",
    typing: "typing…",
    today: "Today",
    waiting: "Waiting for Alex…",
    alexTyping: "Alex is typing…",
    chooseReply: "Choose your reply ↑",
    message: "Message",
    tapReply: "Tap your reply",
    meta: "Module {n} check · A conversation",
    title: "Help a curious colleague",
    intro: "Your colleague <b>Alex</b> teaches regular groups and doesn’t know the PL format yet. You’ve studied it and you’re excited to start your parallel lessons — answer Alex’s questions on the phone.",
    questionN: "💬 <b>Question {i} of {n}.</b> Read Alex’s message and choose your reply on the phone.",
    great: "✅ <b>Great answer!</b> ",
    notBest: "❌ <b>Not the best answer.</b> ",
    better: "<b>A better reply:</b>",
    last: "🏁 <b>That was the last question.</b> You got <b>{s} of {n}</b> right.",
    continue: "Continue the conversation →",
    result: "See my result →",
    hi1: "Hi! 👋",
    hi2: "I heard you’re starting Parallel Lessons. Can I ask you a few questions about it?",
    hiReply: "Hi Alex! Sure, ask me anything 😊",
    byeGood: "Thanks a lot! 🙌 Now I really want to try Parallel Lessons too.",
    byeBad: "Thanks! I still have some doubts, but I’ll read more about it. 🙂",
    /* "a:" = index of the correct reply (0 = first). Do NOT change it. */
    items: [
      { them: "This new format sounds interesting, but I’m confused. Wouldn’t it be a lot more work to teach the same thing to 5 kids separately?",
        o: ["Yes, it’s more work: you repeat the whole lesson, theory included, five times in a row.",
            "Not really, because the students just watch a video and you only take attendance.",
            "Not really! I only introduce each student to their learning and close their lesson. I don’t model or present theory — the cards do that. It’s a more mature way of learning."],
        a: 2, ok: "Exactly: you lead the opening and closing for each student. The theory, the software explanations and the modeling are in the cards.",
        ko: "Not quite. In a parallel lesson you don’t repeat the lesson for each student: you open and close each lesson, and the cards carry the theory and the modeling." },
      { them: "And don’t your students get upset that you leave them on their own?",
        o: ["Hmm, they already know how it works before they buy the course, and in the first lesson I explain the format and how long they’ll work on their own. They’re kids who know the work is independent.",
            "Sometimes, but I just tell them that’s the way it is and go to the next student.",
            "They don’t notice, because I keep my camera on in every room at the same time."],
        a: 0, ok: "Right. The dynamic is clear before the purchase, and you explain it again in the first lesson, so the student knows what to expect.",
        ko: "Not quite. Students already know the dynamic before they buy, and you explain the format and the independent-work time from the very first lesson." },
      { them: "But what if they get lost? Many need help, and what about technical problems?",
        o: ["Then they wait until the end of the lesson, when you can finally talk to them.",
            "There are short moments to help whoever raises their hand. Also, the lesson on the platform already plans for this: there are help options and steps for technical problems right there. That’s why explaining the format matters.",
            "You stay in the room of whoever has a problem until it’s solved, even if other students arrive."],
        a: 1, ok: "Exactly. You help raised hands in the gaps, and the cards already include help and what to do with technical issues — that’s why a clear explanation of the format at the start is so important.",
        ko: "Not quite. You can help raised hands in the short gaps, and the lesson on the platform already includes help options and guidance for technical problems." },
      { them: "Sounds interesting, that makes me feel calmer. So the content changed for this format?",
        o: ["No, they’re exactly the same lessons as the regular course — you just teach them faster.",
            "Yes, everything changed: new tools, new skills and new goals.",
            "The tools, skills and goals students learn are the same, but the lessons are different: they’re designed so students can move forward on their own with the cards."],
        a: 2, ok: "Yes! The learning goals stay the same, but the lessons were redesigned for this format. Good news: you don’t have to teach the same lessons in a new format.",
        ko: "Not quite. Students learn the same tools, skills and goals, but the lessons themselves are different: they’re designed for independent work." }
    ]
  },

  /* ---------- Module 5: questions & answers ---------- */
  qaLadder: { beats: "beats", rows: [["Onboarding", "Raised hand"], ["Closing (offboarding)", "Raised hand"], ["Onboarding", "Closing"], ["Raised hand", "A quick check-in"]] },
  qaAnna: [
    ["16:10", "Anna is expected (16:10–16:20)."],
    ["16:15", "She hasn’t connected: you message her on WhatsApp and welcome the next student, Mario."],
    ["16:21", "Anna appears in the waiting room, but you’re with Mario. You tell her on WhatsApp you’ll be with her in a few minutes."],
    ["16:25", "You finish with Mario and welcome Anna."]
  ],
  /* In the answers: {LADDER} = priority list, {ANNA} = Anna's timeline, {VIDEO} = the content video. Keep them as they are. */
  qa: [
    { ic: "⏱️", q: "With 5 students, how can I welcome a new one every 10 minutes and also help everyone else?",
      a: "<p>You don’t visit every student every few minutes — you only go to whoever <b>raises their hand</b>. When several things happen at once, follow this order:</p>{LADDER}<p>Quick check-ins only happen when there’s no one to welcome, no one to close and no hand raised.</p>" },
    { ic: "🚦", q: "If a technical problem uses up the 10-minute onboarding and the next student arrives at that moment, who comes first?",
      a: "<p>The student who arrived on time is the priority. The student with the technical problem is helped <b>after</b> you finish with the one who arrived punctually, following the same priority order:</p>{LADDER}" },
    { ic: "🌍", q: "What’s the scope of PL — is this a test?",
      a: "<p>PL fully replaces the <b>Premium format</b> in selected courses. That’s why the tutors of those courses are being trained on it. The format has already been tested in other large regions, including Brazil and LatAm, with very positive results.</p>" },
    { ic: "🎬", q: "Is the content the same as in the regular course?",
      a: "<p>The <b>tools, skills and goals</b> students learn are the same. The <b>lessons are different</b>: they’re written for a more mature, more independent student, and designed so the student doesn’t depend 100% on you to complete the lesson. Good news: you won’t teach the same lessons as before in a new format.</p><h4>What this format is built on</h4><p>The lesson follows a <b>deductive approach</b>: the student first sees a finished project, then explores how it was made, and applies the principle to their own project.</p><p><b>Feedback: Tutor + Self.</b> There’s no peer feedback. AI isn’t used in the first lessons; in later lessons in the module, AI is added as a third feedback channel where appropriate.</p><p>The main focus is the feeling: <i>“I can create a working digital project on my own.”</i> Mistakes are a normal part of the creative process.</p><p>Watch this video to understand how the content changes, for you and for the student:</p>{VIDEO}" },
    { ic: "👥", q: "What’s the maximum number of students in a Parallel Lesson group?",
      a: "<p>Maximum <b>5 students / 100 minutes</b>.</p>" },
    { ic: "💙", q: "How do I manage a PL lesson with students who have disabilities or need more attention and support?",
      a: "<p>CS will leave a note whenever a student has a known disability, as usual. If you realize the PL format isn’t suitable for a particular student, <b>discuss the case with your TL</b> and we’ll find the best solution together.</p><p>In many cases the format can work <i>better</i> than a traditional group lesson, because the student still receives individual attention. Questions about independence, individual work and past experience with self-paced courses are already asked during the trial class — if a student wouldn’t be comfortable in PL, they simply aren’t offered this format.</p>" },
    { ic: "⏰", q: "What’s the protocol for students who arrive late?",
      a: "<p>Each student joins 10 minutes apart (e.g. 16:00, 16:10, 16:20…). Onboarding and closing one student takes about 6–7 minutes in practice, so you always have some margin.</p><h4>If a student doesn’t join within their first 5 minutes</h4><ul><li>Message them or their guardian directly on WhatsApp.</li><li>If their window ends and they still haven’t joined, welcome the next student — you don’t wait indefinitely.</li><li>If the student joins late, invite them in, but finish with the student already in progress first.</li><li>A late student does <b>not</b> get a full 60-minute lesson — it ends when their originally planned window ends.</li></ul><h4>Example: Anna</h4>{ANNA}<p>Anna’s planned window: <b>16:10–17:10</b> → her actual time after the late arrival: <b>16:25–17:10</b>.</p>" },
    { ic: "👤", q: "What should I do if only one student attends the lesson?",
      a: "<p>Conduct the PL lesson as scheduled, <b>without postponing it</b>. Follow the usual lesson structure and keep the same lesson flow as you would with a full group.</p><p>This keeps the lessons consistent and stops the student from expecting you to spend the whole lesson giving them individual attention.</p>" },
    { ic: "📅", q: "What happens if students tell us they won’t attend the lesson?",
      a: "<p>The usual <b>12-hour rule</b> doesn’t change:</p><ul><li><b>More than 12 hours before the lesson:</b> follow the standard postponing/rescheduling process.</li><li><b>Less than 12 hours before the lesson:</b> the lesson is deducted from the client’s balance.</li></ul><p>The following lessons continue as planned: <b>don’t skip any lesson or change the order</b>. For example, if the missed lesson was M3L4, the next lesson is still M3L4.</p>" },
    { ic: "💬", q: "Do I need a WhatsApp group with all the students in the parallel group?",
      a: "<p>No. PL is individualized learning: tutors must <b>not</b> create WhatsApp groups for the students of a slot. Every student is treated individually, and all communication goes through direct messages.</p>" },
    { ic: "🔄", q: "Will all courses move to this format? Is this the new default at Kodland?",
      a: "<p>No — PL only replaces the Premium format, for selected courses.</p>" },
    { ic: "👪", q: "Are parents aware of this format when enrolling?",
      a: "<p>Yes. Parents are informed about the PL format when they enroll, as part of the communication process for the selected courses.</p>" },
    { ic: "💰", q: "How does compensation work in PL?",
      a: "<p>For PL compensation and specific calculations, <b>contact your TL</b>.</p>" }
  ]
};
