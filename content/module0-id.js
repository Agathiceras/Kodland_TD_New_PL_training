/* =====================================================================
   MODULE 0 · MINDSET — CONTENT FILE (Indonesian)
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

  lang: "id",

  /* ---------- The module card and header ---------- */
  module: {
    e: "🌱",
    title: "Awal yang penuh percaya diri",
    desc: "Sebelum masuk ke metode atau tool apa pun: mengapa kita berubah, apa arti siap yang sebenarnya, dan siapa yang selalu ada untuk Anda.",
    obj: "Memulai peluncuran dengan pola pikir yang percaya diri dan positif. Modul ini memakan waktu sekitar 20 menit: 4 bagian singkat, penutup, dan evaluasi berisi 5 pertanyaan.",
    offer: [
      ["👋", "Memahami mengapa kita berubah — dan mengapa pengalaman Anda penting."],
      ["✅", "Mengetahui arti “siap” saat pelajarannya belum tersedia."],
      ["🤝", "Mengetahui dengan jelas kepada siapa harus bertanya, dan caranya."],
      ["💬", "Melihat bagaimana kursus baru menjawab masukan dari para tutor dan siswa."]
    ],
    sections: {
      welcome: "Selamat datang, dan mengapa kita berubah",
      ready: "Arti “siap” saat ini",
      alone: "Anda tidak pernah sendirian",
      voice: "Dibangun dari suara Anda, disukai siswa",
      start: "Anda siap untuk memulai",
      survey: "Bagaimana perasaan Anda?"
    }
  },

  /* ---------- Section 1 ---------- */
  welcome: {
    intro: "<b>Selamat datang!</b> Anda menjadi bagian dari peluncuran ini karena Anda sudah tahu cara mengajar dan cara terhubung dengan anak-anak. Pelatihan ini dibangun di atas hal-hal yang sudah Anda kuasai dengan baik. Pelatihan ini tidak dimulai dari nol — begitu juga Anda.",
    howTitle: "Cara mengikuti pelatihan ini",
    how: "Ikuti sesuai kecepatan Anda, dengan rasa ingin tahu, bukan tekanan. Anda tidak perlu menghafal apa pun atau menjadi sempurna: tujuannya adalah merasa nyaman dengan metodenya dan tahu di mana menemukan apa yang Anda butuhkan. Campuran antara semangat dan sedikit rasa ragu sangatlah wajar saat menghadapi sesuatu yang baru. Itu hanya berarti Anda peduli untuk melakukannya dengan baik.",
    prepTitle: "Apa yang disiapkan pelatihan ini untuk Anda",
    prep: {
      em: {
        intro: "Setelah modul pola pikir ini, pelatihan akan memandu Anda melalui semua yang Anda butuhkan untuk pelajaran pertama Anda:",
        items: [
          ["🧩", "Model baru", "Bagaimana pelajaran disusun, bagaimana umpan balik bekerja, dan bagaimana membimbing siswa saat mereka menggunakan AI."],
          ["🛠️", "Persiapan teknis", "Backoffice dan Teacher Notes, Classroom dengan Follow Mode, serta Kodland Sparks — dilengkapi tiga simulasi latihan yang bisa Anda ulangi sesering yang Anda mau."],
          ["⭐", "Kualitas pelajaran", "Bagaimana sebuah pelajaran disusun dan kebiasaan yang menjaganya tetap terarah: pembukaan yang baik, pertanyaan yang mengajak berpikir, dan penutup yang jelas."],
          ["🤖", "Prompt untuk tutor", "Cara menulis prompt yang baik dan membantu siswa menulis prompt mereka sendiri."],
          ["📚", "Kursus Anda", "Pelatihan singkat dan informatif tentang kursus yang akan Anda ajarkan."],
          ["📝", "Tes akhir", "Tes ini terbuka setelah Anda menyelesaikan seluruh materi."]
        ]
      },
      pl: {
        intro: "Setelah modul pola pikir ini, pelatihan berfokus pada format Parallel Lessons:",
        items: [
          ["⚡", "Cara kerja Parallel Lessons", "Beberapa siswa dalam satu slot, masing-masing di jalurnya sendiri."],
          ["🧭", "Menjalankan slot", "Menyambut siswa, menjaga setiap siswa tetap bergerak maju, dan memberi setiap siswa momen satu lawan satu yang khusus."],
          ["🎮", "Latihan", "Simulator Backoffice dan Classroom untuk berlatih pelajaran PL sungguhan sebelum pelajaran live pertama Anda."],
          ["📝", "Tes akhir", "Tes ini terbuka setelah Anda menyelesaikan seluruh materi."]
        ]
      }
    },
    simsTitle: "Jangan lewatkan simulatornya: di sanalah rasa percaya diri Anda dibangun",
    sims: "Membaca tentang pelajaran baru memang berguna, tetapi melakukannya langsunglah yang membuatnya terasa akrab. Simulator memungkinkan Anda berlatih setiap langkah nyata dari sebuah pelajaran — mulai dari membukanya di Backoffice sampai menjalankannya di Classroom — di ruang yang aman, tempat tidak ada yang bisa salah. Ulangi sebanyak yang Anda perlukan, dan kembalilah ke simulator sebelum pelajaran live pertama Anda: saat itu, setiap klik sudah terasa seperti kebiasaan.",
    whyTitle: "Mengapa kita berubah",
    why: {
      em: "Anak-anak zaman sekarang belajar dengan cara yang berbeda: mereka ingin membangun hal nyata dengan cepat, mencoba, gagal, memperbaiki, dan menunjukkan apa yang mereka buat. Model Pendidikan baru kami dibangun di sekitar hal itu. Setiap pelajaran dimulai dari hasil akhir, kesalahan adalah bagian dari proses, dan AI digunakan dengan cara yang sesuai untuk setiap usia. Beberapa kursus benar-benar baru; yang lain adalah kursus yang sudah Anda kenal, diperbarui dengan metode baru.",
      pl: "Keluarga sering kali harus menunggu lama untuk memulai kursus 1-on-1 atau premium, karena jadwalnya tidak cocok. Parallel Lessons menyelesaikan masalah itu: Anda mendampingi 2–5 siswa sekaligus, masing-masing di jalurnya sendiri. Siswa bisa mulai lebih cepat, dan Anda mendapatkan jadwal yang lebih fleksibel. Rasanya seperti pelajaran biasa, dengan momen satu lawan satu yang khusus untuk setiap siswa."
    },
    meansTitle: "Apa artinya bagi Anda",
    means: "Keterampilan yang membuat Anda menjadi tutor yang baik saat ini — menjelaskan dengan jelas, menjaga anak-anak tetap terlibat, menyadari siapa yang butuh bantuan — adalah keterampilan yang justru dibutuhkan oleh kursus baru. Yang baru adalah metode dan strukturnya, dan itulah yang diberikan pelatihan ini kepada Anda."
  },

  /* ---------- Section 2 ---------- */
  ready: {
    intro: "Selama pelatihan, mungkin Anda belum bisa melihat pelajaran kursusnya: konten difinalisasi menjelang peluncuran. <b>Setiap pelajaran akan tersedia di Backoffice sebelum kursus Anda dimulai.</b> Pelatihan Anda menyiapkan Anda untuk semua hal lainnya, sehingga Anda siap begitu pelajarannya tiba.",
    listIntro: "Menjadi siap tidak bergantung pada sudah melihat setiap pelajaran selama pelatihan. Artinya, Anda bisa mengatakan lima hal ini. Ketuk setiap hal yang menurut Anda sudah benar — pelatihan akan membantu Anda dengan sisanya:",
    items: [
      "<b>Saya memahami metodenya:</b> bagaimana alur sebuah pelajaran dan mengapa.",
      "<b>Saya mengenal strukturnya:</b> modul, format pelajaran, dan letak setiap bagian di Backoffice.",
      "<b>Saya percaya diri dengan sisi teknisnya:</b> Backoffice, Classroom, dan tool yang saya gunakan di kelas, yang sudah saya latih di simulator sampai terasa alami.",
      "<b>Saya tahu rutinitas saya:</b> konten pelajaran kini ditampilkan langsung di Backoffice, semuanya di satu tempat, tanpa perlu Wiki. Membaca Teacher Notes di sana sebelum setiap pelajaran adalah tanggung jawab saya.",
      "<b>Saya tahu kepada siapa harus bertanya:</b> pertama kepada mentor regional saya, dan kepada TL saya untuk urusan grup dan jadwal."
    ],
    allTicked: "🌟 Seperti itulah rasanya “siap” — dan Anda akan semakin merasakannya di setiap modul.",
    beginnerTitle: "Izinkan diri Anda menjadi pemula lagi",
    beginner: "Tutor yang paling berpengalaman pun pernah mengajar sebuah kursus baru untuk pertama kalinya. Kita meminta anak-anak untuk berkata <i>“belum berhasil, ayo cari strateginya”</i>, dan hal yang sama berlaku untuk kita: pelajaran-pelajaran pertama Anda adalah prototipe Anda. Setiap pelajaran akan terasa lebih mudah daripada sebelumnya, dan kami akan mendampingi Anda di setiap langkah."
  },

  /* ---------- Section 3 ---------- */
  alone: {
    intro: "Mentor regional Anda mengenal kursus-kursus baru dan siap mendampingi Anda di setiap peluncuran. Meminta bantuan adalah hal yang dilakukan para profesional: begitulah tutor yang baik menjadi tutor yang hebat. <b>Anda tidak perlu menunggu ada masalah atau flag untuk menghubungi mentor.</b>",
    mentorTitle: "Mentor Anda",
    regionLabel: "Wilayah",
    /* Only the line of the training’s language is shown */
    mentors: {
      en: [["UK", ["Gülay", "Syfa Nurafni Siregar"]], ["USA", ["Gülay"]], ["GCC", ["Syfa Nurafni Siregar"]]],
      es: [["LATAM (termasuk Spanyol)", ["Priscila Aabye", "Laura Orozco", "Camilo Mahecha"]]],
      pt: [["Brasil", ["Lucas Correia Souza da Silva"]]],
      tr: [["MENA", ["Betül Topkan", "Saner Aykanat"]]],
      ar: [["MENA", ["Betül Topkan", "Saner Aykanat"]], ["GCC", ["Syfa Nurafni Siregar"]]],
      id: [["Indonesia", ["Syfa Nurafni Siregar"]]],
      ru: [["CIS", ["Raisa Pabiarzhyna"]]],
      it: [["Italia", ["Gianfranco Barba"]]],
      pl: [["Polandia", ["Daria Kalicka"]]]
    },
    forTitle: "Mentor Anda selalu menjadi kontak pertama Anda. Hubungi mentor Anda untuk:",
    forItems: [
      ["🧑‍🏫", "Masalah pengelolaan kelas"],
      ["📚", "Pertanyaan tentang kursus atau format baru"],
      ["⚙️", "Dukungan agar pelajaran Anda berjalan lancar"],
      ["🤝", "Mempersiapkan pelajaran bersama, atau cek kepercayaan diri singkat sebelum kelas pertama Anda"]
    ],
    tl: "<b>Untuk urusan grup dan jadwal</b>, hubungi TL Anda.",
    sessionTitle: "Ingin sesi yang lebih panjang?",
    sessionSteps: [
      "Masuk ke <b>LMS</b> dengan akun Backoffice Anda.",
      "Buka <b>Coaching</b> dan pilih slot.",
      "Tulis dalam satu kalimat apa yang ingin Anda bahas — misalnya, <i>“Pelajaran pertama [nama kursus]”</i>."
    ],
    dm: "<b>Merasa kurang percaya diri, apa pun alasannya?</b> Kirim DM ke mentor Anda. Itu sudah cukup: tanpa formulir, tanpa flag, tanpa perlu penjelasan."
  },

  /* ---------- Section 4 ---------- */
  voice: {
    intro: "Kursus baru tidak muncul begitu saja: kursus-kursus ini menjawab hal-hal yang disampaikan para tutor, siswa, dan keluarga kepada kami. Berikut sebagian dari yang kami dengar — ketuk setiap kartu untuk melihat apa yang berubah karenanya.",
    toldLabel: "Anda mengatakan",
    soLabel: { em: "Maka kursus baru…", pl: "Maka Parallel Lessons…" },
    tapHint: "Ketuk untuk melihat apa yang berubah →",
    told: {
      em: [
        ["Menyiapkan pelajaran terlalu lama, harus bolak-balik antara slide dan panduan Wiki yang terpisah.", "Menyatukan semuanya di satu tempat: Teacher Notes di setiap slide, rencana pelajaran lengkap dengan durasinya, dan video briefing singkat di slide 1."],
        ["Menjaga seluruh grup tetap di slide yang sama itu sulit.", "Menggunakan Follow Mode: siswa melihat persis slide Anda, sementara catatan Anda tetap tersembunyi."],
        ["Tingkat kesulitan tidak selalu sesuai dengan usia grup.", "Disusun berdasarkan jalur usia (8–9, 10–12, 13+), dan di Matematika, tugas bergerak dari yang sederhana ke yang kompleks dengan level yang diberi label jelas."],
        ["Anak-anak kehilangan motivasi saat tidak bisa melihat apa yang sedang mereka bangun.", "Memulai setiap pelajaran dari hasil akhir, dan siswa memublikasikan proyeknya di Kodland Sparks, tempat orang lain bisa melihat dan memberi reaksi."],
        ["Sulit mengetahui siapa yang benar-benar memahami pelajaran.", "Mengakhiri setiap pelajaran dengan pengecekan hasil belajar, dan setiap tugas yang dikirim tercatat sehingga Anda bisa melihat siapa yang butuh bantuan."]
      ],
      pl: [
        ["Siswa menunggu terlalu lama sebelum grup 1-on-1 atau premium bisa dimulai.", "Memungkinkan siswa mulai jauh lebih cepat: Anda mendampingi 2–5 siswa sekaligus, masing-masing di jalurnya sendiri."],
        ["Jadwal yang kaku membuat minggu Anda sulit terisi.", "Memberi Anda fleksibilitas lebih: siswa bergabung di slot yang sama meskipun mereka berada di pelajaran yang berbeda."],
        ["Mengelola beberapa siswa sekaligus terdengar menegangkan.", "Dilengkapi pelatihan tentang formatnya dan simulator, sehingga Anda bisa berlatih sebelum pelajaran live pertama Anda."],
        ["Siswa dalam satu grup bergerak dengan kecepatan yang berbeda.", "Memungkinkan setiap siswa maju sesuai kecepatannya sendiri, dengan momen satu lawan satu yang khusus bersama Anda."]
      ]
    },
    firsts: "Beberapa kursus benar-benar baru, dan Anda termasuk yang pertama mengajarkannya. Karena itu suara Anda menjadi semakin penting: setelah pelajaran-pelajaran pertama Anda, <b>ceritakan kepada mentor Anda apa yang berhasil dan apa yang tidak</b>. Umpan balik Anda akan membentuk versi berikutnya."
  },

  /* ---------- Closing ---------- */
  start: {
    text: "Anda sudah tahu mengapa kita berubah, apa arti “siap”, dan siapa yang selalu ada untuk Anda. Sekarang selami pelatihan ini dengan rasa ingin tahu: berlatihlah di simulator sesering yang Anda mau, dan nikmati menjadi salah satu yang pertama membawa sesuatu yang baru bagi siswa kita.",
    dm: "Jika kapan pun Anda merasa kurang percaya diri, <b>cukup kirim DM ke mentor Anda.</b>"
  },

  /* =====================================================================
     SURVEYS (Module 0, before the check · Final module)
     Keys in [key, "label"] pairs (excited, too_short…) and question ids are NOT translated:
     they are what arrives in the Google Sheet. Translate only the labels.
     ===================================================================== */
  survey: {
    emailLabel: "E-mail korporat Kodland Anda",
    emailPlaceholder: "nama.belakang@kodland.org",
    emailError: "Silakan tulis e-mail korporat Kodland Anda (berakhiran @kodland…).",
    regionLabel: "Wilayah Anda",
    regionPlaceholder: "Pilih wilayah Anda…",
    regionError: "Silakan pilih wilayah Anda.",
    missing: "Silakan jawab setiap pertanyaan yang bertanda ★.",
    send: "Kirim jawaban saya",
    sending: "Mengirim…",
    thanks: "✅ <b>Terima kasih!</b> Jawaban Anda sudah terkirim.",
    again: "Kirim lagi",
    low: "Sama sekali tidak",
    high: "Sepenuhnya",
    optional: "opsional",
    openPlaceholder: "Tulis apa saja…",
    lockMsg: "Kirim survei kepuasan di atas untuk membuka evaluasi.",
    lockWhat: "survei kepuasan"
  },
  /* Regions for the survey: [key, "label"]. Keys are not translated. */
  regions: [
    ["brazil", "Brasil"], ["latam", "LATAM (termasuk Spanyol)"], ["mena", "MENA"], ["italy", "Italia"], ["poland", "Polandia"],
    ["uk", "UK"], ["usa", "USA"], ["indonesia", "Indonesia"], ["gcc", "GCC"], ["cis", "CIS"]
  ],
  /* Feelings and training length: [key, "label"] */
  feelings: [["excited", "🤩 Bersemangat"], ["curious", "🤔 Penasaran"], ["calm", "😌 Tenang"], ["unsure", "😕 Ragu"], ["worried", "😟 Khawatir"], ["overwhelmed", "😵 Kewalahan"]],
  lengths: [["too_short", "Terlalu singkat"], ["just_right", "Pas"], ["too_long", "Terlalu panjang"]],

  /* ---------- Module 0 survey (section before the check) ---------- */
  startSurvey: {
    title: "Sebelum evaluasi: bagaimana perasaan Anda?",
    intro: "Check-in singkat — tidak ada jawaban yang benar atau salah. Ini membantu mentor Anda dan tim untuk mendukung Anda dengan lebih baik. Kirimkan untuk membuka evaluasi modul.",
    gifAlt: "Bagaimana perasaan Anda?",
    questions: [
      { id: "feeling", type: "choice", q: "Bagaimana perasaan Anda tentang peluncuran baru ini saat ini?" },
      { id: "confidence", type: "scale", q: "Seberapa percaya diri Anda untuk mengajar kursus atau format baru ini?" },
      { id: "understand_why", type: "scale", q: "Saya memahami mengapa kita melakukan perubahan ini." },
      { id: "know_where", type: "scale", q: "Saya tahu di mana menemukan apa yang saya butuhkan dan kepada siapa meminta bantuan." },
      { id: "worries", type: "open", optional: true, q: "Apa yang paling Anda khawatirkan tentang peluncuran ini?" }
    ]
  },

  /* ---------- FINAL MODULE: your first-lesson mindset ---------- */
  final: {
    e: "🌟",
    title: "Pola pikir untuk pelajaran pertama Anda",
    desc: "Bayangkan pelajaran pertama Anda berjalan dengan baik, pasangkan setiap kekhawatiran dengan sumber bantuan, dan ceritakan bagaimana perasaan Anda sekarang.",
    obj: "Bayangkan pelajaran pertama Anda berjalan dengan baik: Anda membuka dengan hasil akhir, anak-anak penasaran, Anda mengikuti catatan dengan mudah, dan Anda menutup dengan sesuatu yang membuat mereka bangga. Gambaran itu realistis, dan modul ini membantu Anda mewujudkannya.",
    offer: [
      ["✨", "Membayangkan pelajaran pertama Anda berjalan dengan baik."],
      ["🧩", "Memasangkan setiap kekhawatiran dengan sumber bantuan."],
      ["💬", "Menceritakan bagaimana perasaan Anda sekarang."]
    ],
    sections: { mind: "Bayangkan pelajaran pertama Anda", survey: "Bagaimana perasaan Anda sekarang" },
    mind: {
      intro: "Luangkan dua menit dan jawablah untuk diri Anda sendiri. <b>Hanya Anda yang bisa melihat catatan ini</b> — catatan ini tersimpan di browser ini dan tidak dikirim ke mana pun.",
      q1: "1. Apa yang paling membuat saya bersemangat tentang kursus atau format baru ini?",
      q2: "2. Apa yang paling membuat saya khawatir?",
      q3: "3. Untuk setiap kekhawatiran: sumber bantuan mana yang bisa membantu?",
      placeholder: "Tulis beberapa kata…",
      resources: [["📒", "Teacher Notes"], ["🎮", "Simulator"], ["💬", "DM atau sesi dengan mentor"], ["👥", "TL"]],
      resourcesHint: "Ketuk sumber bantuan yang menjawab kekhawatiran Anda:",
      answerTitle: "Setiap kekhawatiran punya jawabannya",
      answer: "Momen tak terduga adalah bagian dari setiap pelajaran baru: pertanyaan yang jawabannya belum Anda yakini, tugas yang berjalan berbeda dari biasanya, atau grup yang bergerak lebih cepat atau lebih lambat dari rencana. Anda sudah melatihnya di simulator, dan Anda bisa kembali ke sana sebanyak yang Anda perlukan. Untuk hal lainnya, mentor Anda hanya berjarak satu pesan.",
      afterTitle: "Setelah pelajaran-pelajaran pertama Anda",
      after: "Perhatikan <b>apa yang berjalan dengan baik</b> sebelum apa yang perlu diperbaiki, lalu ceritakan keduanya kepada mentor Anda. Umpan balik Anda akan sampai ke tim Product dan membentuk versi kursus berikutnya.",
      ready: "<b>Anda siap.</b> Anda tahu alasannya, metodenya, rutinitas Anda, dan siapa yang bisa dihubungi. Dan jika kapan pun Anda merasa belum siap, cukup kirim DM ke mentor Anda."
    },
    survey: {
      title: "Refleksi terakhir: bagaimana perasaan Anda sekarang?",
      intro: "Ini bukan tes — tidak ada jawaban yang benar atau salah. Jawaban Anda membantu tim meningkatkan pelatihan dan kursus. Kirimkan untuk menyelesaikan pelatihan.",
      groups: [
        { title: "Bagaimana perasaan Anda", questions: [
          { id: "feeling", type: "choice", q: "Bagaimana perasaan Anda tentang peluncuran baru ini sekarang?" },
          { id: "confidence", type: "scale", q: "Seberapa percaya diri Anda untuk mengajar kursus atau format baru ini?" },
          { id: "understand_why", type: "scale", q: "Saya memahami mengapa kita melakukan perubahan ini." },
          { id: "know_where", type: "scale", q: "Saya tahu di mana menemukan apa yang saya butuhkan dan kepada siapa meminta bantuan." }
        ] },
        { title: "Kepercayaan diri Anda untuk mengajar", questions: [
          { id: "ready_first_lesson", type: "scale", q: "Saya merasa siap menjalankan pelajaran pertama saya dari awal sampai akhir." },
          { id: "manage_format", type: "scale", q: { em: "Saya merasa percaya diri mengelola grup dengan format baru (Follow Mode).", pl: "Saya merasa percaya diri mengelola siswa saya dengan format baru (Parallel Lessons)." } },
          { id: "ready_tools", type: "scale", q: "Saya merasa siap menggunakan Backoffice, Classroom, dan tool di kelas." }
        ] },
        { title: "Materi pelatihan", questions: [
          { id: "training_clear", type: "scale", q: "Pelatihannya jelas dan mudah diikuti." },
          { id: "simulators_helped", type: "scale", q: "Simulator membantu saya merasa lebih percaya diri." },
          { id: "training_length", type: "length", q: "Durasi pelatihannya:" }
        ] }
      ]
    },
    ctaTitle: "Selesaikan pelatihan",
    ctaText: "Kirim refleksi Anda di atas untuk menyelesaikan modul terakhir ini.",
    ctaBtn: "Selesaikan pelatihan →",
    done: "Terima kasih sudah menceritakan perasaan Anda — Anda telah menyelesaikan pelatihan."
  },

  /* ---------- Knowledge check: 5 scenario questions. "a" = index of the right answer (0 = first). Keep it. ---------- */
  quiz: [
    { q: "Anda sedang mengikuti pelatihan dan pelajaran kursusnya belum tersedia. Apa yang Anda lakukan?",
      o: ["Menunggu pelajarannya tersedia sebelum memulai pelatihan.",
          "Menyelesaikan pelatihan tentang metode dan struktur: pelajarannya akan tersedia di Backoffice sebelum kursus dimulai.",
          "Mencari materi serupa di Wiki."],
      a: 1, e: "Menjadi siap tidak bergantung pada sudah melihat setiap pelajaran: pelatihan menyiapkan Anda untuk semua hal lainnya, dan setiap pelajaran akan tersedia di Backoffice sebelum kursus Anda dimulai." },
    { q: "Beberapa hari sebelum pelajaran pertama, Anda merasa kurang percaya diri. Apa yang Anda lakukan?",
      o: ["Memendamnya sendiri dan berharap semuanya berjalan lancar.",
          "Mengirim DM ke mentor Anda.",
          "Meminta untuk dikeluarkan dari kursus."],
      a: 1, e: "DM ke mentor Anda sudah cukup: tanpa formulir, tanpa flag, tanpa perlu penjelasan." },
    { q: "Anda ingin dibantu mempersiapkan pelajaran pertama Anda. Apa cara tercepatnya?",
      o: ["Mengirim DM ke mentor regional Anda, atau memesan sesi di LMS.",
          "Menunggu sampai Anda menerima flag.",
          "Meminta umpan balik dari orang tua siswa."],
      a: 0, e: "Anda tidak perlu menunggu ada masalah atau flag untuk menghubungi mentor: kirim pesan ke mentor Anda, atau pesan slot Coaching di LMS." },
    { q: "Ada satu langkah dalam pelatihan yang masih terasa kurang jelas. Apa langkah terbaik?",
      o: ["Menghentikan pelatihan sampai ada yang menghubungi Anda.",
          "Mengulangi simulatornya dan, jika masih kurang jelas, mengirim pesan ke mentor Anda.",
          "Melewatinya: nanti juga paham sendiri di kelas."],
      a: 1, e: "Simulator adalah tempat rasa percaya diri dibangun — ulangi sesering yang Anda perlukan, dan mentor Anda selalu ada untuk hal yang masih kurang jelas." },
    { q: "Pelajaran pertama Anda tidak berjalan sesuai rencana. Pola pikir mana yang paling tepat?",
      o: ["“Kursus ini bukan untuk saya.”",
          "“Belum berhasil: saya akan mencatat satu hal yang bisa diperbaiki dan membicarakannya dengan mentor saya.”",
          "“Saya akan menunggu orang lain yang memperbaikinya.”"],
      a: 1, e: "Pelajaran-pelajaran pertama Anda adalah prototipe Anda: setiap pelajaran terasa lebih mudah daripada sebelumnya, dan umpan balik Anda membentuk versi berikutnya." }
  ]
};
