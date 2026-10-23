/* =====================================================================
   MODULE 0 · MINDSET — CONTENT FILE (Turkish)
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

  lang: "tr",

  /* ---------- The module card and header ---------- */
  module: {
    e: "🌱",
    title: "Güvenli bir başlangıç",
    desc: "Herhangi bir yöntem ya da araçtan önce: neden değişiyoruz, hazır olmak gerçekte ne anlama geliyor ve yanınızda kimler var.",
    obj: "Lansmana kendinize güvenen, olumlu bir bakış açısıyla başlayın. Bu modül yaklaşık 20 dakika sürer: 4 kısa bölüm, bir kapanış ve 5 soruluk bir kontrol.",
    offer: [
      ["👋", "Neden değiştiğimizi — ve deneyiminizin neden önemli olduğunu anlayın."],
      ["✅", "Dersler henüz hazır değilken “hazır olmanın” ne anlama geldiğini bilin."],
      ["🤝", "Kime ve nasıl soracağınızı tam olarak bilin."],
      ["💬", "Yeni kursların eğitmenlerin ve öğrencilerin bize söylediklerine nasıl yanıt verdiğini görün."]
    ],
    sections: {
      welcome: "Hoş geldiniz: neden değişiyoruz",
      ready: "Şu anda “hazır olmak” ne demek",
      alone: "Asla yalnız değilsiniz",
      voice: "Sizin sesinizle oluşturuldu, öğrenciler tarafından sevildi",
      start: "Başlamaya hazırsınız",
      survey: "Nasıl hissediyorsunuz?"
    }
  },

  /* ---------- Section 1 ---------- */
  welcome: {
    intro: "<b>Hoş geldiniz!</b> Bu lansmanın bir parçasısınız, çünkü nasıl ders anlatacağınızı ve çocuklarla nasıl bağ kuracağınızı zaten biliyorsunuz. Bu eğitim, zaten iyi yaptığınız şeylerin üzerine inşa edilir. Sıfırdan başlamaz — siz de sıfırdan başlamıyorsunuz.",
    howTitle: "Bu eğitimi nasıl almalısınız",
    how: "Kendi hızınızda, baskı yerine merakla ilerleyin. Hiçbir şeyi ezberlemeniz ya da kusursuz olmanız gerekmiyor: amaç yöntemle rahat hissetmeniz ve ihtiyacınız olanı nerede bulacağınızı bilmenizdir. Yeni bir şeyle karşılaşınca biraz heyecan ve biraz belirsizlik hissetmek tamamen doğaldır. Bu sadece işinizi iyi yapmayı önemsediğiniz anlamına gelir.",
    prepTitle: "Bu eğitim sizi neye hazırlıyor",
    prep: {
      em: {
        intro: "Bu bakış açısı modülünden sonra eğitim, ilk dersleriniz için ihtiyacınız olan her şeyi adım adım gösterir:",
        items: [
          ["🧩", "Yeni model", "Derslerin nasıl kurgulandığı, geri bildirimin nasıl işlediği ve öğrenciler yapay zekayı kullanırken onlara nasıl rehberlik edeceğiniz."],
          ["🛠️", "Teknik hazırlık", "Back Office ve Öğretmen Notları, Follow mode ile Classroom ve Kodland Sparks — istediğiniz kadar tekrarlayabileceğiniz üç pratik simülasyonla birlikte."],
          ["⭐", "Ders kalitesi", "Bir dersin nasıl yapılandırıldığı ve onu yolunda tutan alışkanlıklar: iyi bir açılış, düşündüren sorular ve net bir kapanış."],
          ["🤖", "Eğitmenler için prompt’lar", "İyi bir prompt nasıl yazılır ve öğrencilerin kendi prompt’larını yazmalarına nasıl yardımcı olunur."],
          ["📚", "Kursunuz", "Anlatacağınız kursa özel, kısa ve bilgilendirici bir eğitim."],
          ["📝", "Final testi", "Materyali tamamladığınızda açılır."]
        ]
      },
      pl: {
        intro: "Bu bakış açısı modülünden sonra eğitim, Parallel Lessons formatına odaklanır:",
        items: [
          ["⚡", "Parallel Lessons nasıl işler", "Tek bir zaman diliminde birden fazla öğrenci, her biri kendi yolunda."],
          ["🧭", "Dersi yürütmek", "Öğrencileri karşılamak, her birinin ilerlemesini sağlamak ve herkese birebir özel anlar ayırmak."],
          ["🎮", "Pratik", "İlk canlı dersinizden önce gerçek bir PL dersini prova etmeniz için Back Office ve Classroom simülatörleri."],
          ["📝", "Final testi", "Materyali tamamladığınızda açılır."]
        ]
      }
    },
    simsTitle: "Simülatörleri atlamayın: özgüveniniz orada oluşur",
    sims: "Yeni bir ders hakkında okumak faydalıdır, ama onu tanıdık hale getiren şey yapmaktır. Simülatörler, bir dersin her gerçek adımını — Back Office’te açmaktan Classroom’da yürütmeye kadar — hiçbir şeyin ters gidemeyeceği güvenli bir ortamda pratik etmenizi sağlar. İhtiyacınız olduğu kadar tekrarlayın ve ilk canlı dersinizden önce onlara geri dönün: o zamana kadar her tıklama size çoktan doğal gelecek.",
    whyTitle: "Neden değişiyoruz",
    why: {
      em: "Bugünün çocukları farklı öğreniyor: gerçek şeyleri hızlıca üretmek, denemek, hata yapmak, düzeltmek ve yaptıklarını göstermek istiyorlar. Yeni Eğitim Modelimiz bunun etrafında kuruldu. Her ders bitmiş bir sonuçla başlar, hatalar sürecin bir parçasıdır ve yapay zeka her yaşa uygun bir şekilde kullanılır. Bazı kurslar tamamen yeni; diğerleri ise zaten bildiğiniz, yeni yöntemle yenilenmiş kurslar.",
      pl: "Aileler, programlar uyuşmadığı için birebir ya da premium bir kursa başlamak için genellikle uzun süre bekler. Parallel Lessons bunu çözer: aynı anda 2–5 öğrenciye, her biri kendi yolunda olacak şekilde destek olursunuz. Öğrenciler daha hızlı başlar, siz de programınızda daha fazla esneklik kazanırsınız. Normal bir ders gibi hissettirir ve her öğrenciye özel birebir anlar içerir."
    },
    meansTitle: "Bu sizin için ne anlama geliyor",
    means: "Bugün sizi iyi bir eğitmen yapan beceriler — net açıklamak, çocukların ilgisini canlı tutmak, kimin yardıma ihtiyacı olduğunu fark etmek — yeni kursların tam olarak ihtiyaç duyduğu becerilerdir. Yeni olan yöntem ve yapıdır; bu eğitim de size tam olarak bunu verir."
  },

  /* ---------- Section 2 ---------- */
  ready: {
    intro: "Eğitiminiz sırasında kurs derslerini henüz göremeyebilirsiniz: içerik lansmana yakın bir zamanda son halini alır. <b>Kursunuz başlamadan önce her ders Back Office’te olacak.</b> Eğitiminiz sizi geri kalan her şeye hazırlar; böylece dersler geldiği anda hazır olursunuz.",
    listIntro: "Hazır olmak, eğitim sırasında her dersi görmüş olmaya bağlı değildir. Bu beş şeyi söyleyebilmek demektir. Zaten doğru olduğunu hissettiğiniz her birine dokunun — geri kalanında eğitim size yardımcı olacak:",
    items: [
      "<b>Yöntemi anlıyorum:</b> bir dersin nasıl aktığını ve nedenini.",
      "<b>Yapıyı biliyorum:</b> modüller, ders formatı ve her parçanın Back Office’te nerede bulunduğu.",
      "<b>Teknik tarafta kendime güveniyorum:</b> Back Office, Classroom ve derste kullandığım araçlar; doğal gelene kadar simülatörlerde pratik yaptım.",
      "<b>Rutinimi biliyorum:</b> ders içeriği artık doğrudan Back Office’te, hepsi tek bir yerde gösteriliyor; Wiki’ye gerek yok. Her dersten önce oradaki Öğretmen Notlarını okumak benim sorumluluğum.",
      "<b>Kime soracağımı biliyorum:</b> önce bölge mentörüme, gruplar ve program için de TL’ime."
    ],
    allTicked: "🌟 “Hazır olmak” işte böyle görünür — ve bunu her modülde daha fazla hissedeceksiniz.",
    beginnerTitle: "Kendinize yeniden acemi olma izni verin",
    beginner: "En deneyimli eğitmen bile yeni bir kursu bir kez ilk defa anlatır. Çocuklardan <i>“henüz çalışmıyor, bir strateji bulalım”</i> demelerini isteriz; aynısı bizim için de geçerli: ilk dersleriniz sizin prototipinizdir. Her biri bir öncekinden daha kolay gelecek ve her adımda yanınızda olacağız."
  },

  /* ---------- Section 3 ---------- */
  alone: {
    intro: "Bölge mentörünüz yeni kursları tanır ve her lansmanda size destek olmak için oradadır. Yardım istemek profesyonellerin yaptığı bir şeydir: iyi eğitmenler böyle harika eğitmenlere dönüşür. <b>İletişime geçmek için bir sorununuzun ya da bir uyarı (flag) almanızın gerekmesi yok.</b>",
    mentorTitle: "Mentörünüz",
    regionLabel: "Bölge",
    /* Only the line of the training’s language is shown */
    mentors: {
      en: [["UK", ["Gülay", "Syfa Nurafni Siregar"]], ["USA", ["Gülay"]], ["GCC", ["Syfa Nurafni Siregar"]]],
      es: [["LATAM (İspanya dahil)", ["Priscila Aabye", "Laura Orozco", "Camilo Mahecha"]]],
      pt: [["Brezilya", ["Lucas Correia Souza da Silva"]]],
      tr: [["MENA", ["Betül Topkan", "Saner Aykanat"]]],
      ar: [["MENA", ["Betül Topkan", "Saner Aykanat"]], ["GCC", ["Syfa Nurafni Siregar"]]],
      id: [["Endonezya", ["Syfa Nurafni Siregar"]]],
      ru: [["CIS", ["Raisa Pabiarzhyna"]]],
      it: [["İtalya", ["Gianfranco Barba"]]],
      pl: [["Polonya", ["Daria Kalicka"]]]
    },
    forTitle: "Mentörünüz her zaman ilk iletişim noktanızdır. Şu konular için mentörünüze başvurun:",
    forItems: [
      ["🧑‍🏫", "Sınıf yönetimi sorunları"],
      ["📚", "Yeni bir kurs ya da format hakkındaki sorular"],
      ["⚙️", "Derslerinizi sorunsuz yürütme konusunda destek"],
      ["🤝", "Bir dersi birlikte hazırlamak ya da ilk dersinizden önce kısa bir özgüven kontrolü"]
    ],
    tl: "<b>Gruplar ve program için</b> TL’inizle iletişime geçin.",
    sessionTitle: "Daha uzun bir oturum mu tercih edersiniz?",
    sessionSteps: [
      "Back Office hesabınızla <b>LMS</b>’e giriş yapın.",
      "<b>Coaching</b> bölümüne gidin ve bir zaman dilimi seçin.",
      "Neyle ilgili yardım istediğinizi tek satırda yazın — örneğin, <i>“[kurs adı] kursunun ilk dersi”</i>."
    ],
    dm: "<b>Herhangi bir nedenle kendinizi güvende hissetmiyor musunuz?</b> Mentörünüze bir DM gönderin. Bu kadarı yeterli: form yok, uyarı yok, açıklama gerekmez."
  },

  /* ---------- Section 4 ---------- */
  voice: {
    intro: "Yeni kurslar bir anda ortaya çıkmaz: eğitmenlerin, öğrencilerin ve ailelerin bize söylediklerine yanıt verir. İşte duyduklarımızdan bazıları — bu sayede neyin değiştiğini görmek için her birine dokunun.",
    toldLabel: "Bize söylediniz",
    soLabel: { em: "Bu yüzden yeni kurslar…", pl: "Bu yüzden Parallel Lessons…" },
    tapHint: "Neyin değiştiğini görmek için dokunun →",
    told: {
      em: [
        ["Slaytlar ile ayrı bir Wiki rehberi arasında gidip gelerek ders hazırlamak çok uzun sürüyor.", "Her şeyi tek bir yerde topluyor: her slaytta Öğretmen Notları, süreleriyle birlikte bir ders planı ve 1. slaytta kısa bir video brifingi."],
        ["Tüm grubu aynı slaytta tutmak zor.", "Follow mode kullanıyor: öğrenciler tam olarak sizin slaytınızı görür, notlarınız ise gizli kalır."],
        ["Zorluk seviyesi her zaman grubun yaşına uymuyor.", "Yaş gruplarına göre (8–9, 10–12, 13+) oluşturuluyor; Matematik’te ise görevler açıkça etiketlenmiş seviyelerde basitten karmaşığa ilerliyor."],
        ["Çocuklar ne inşa ettiklerini göremeyince motivasyonlarını kaybediyor.", "Her derse bitmiş sonuçla başlıyor; öğrenciler de projelerini, başkalarının görüp tepki verebileceği Kodland Sparks’ta yayınlıyor."],
        ["Dersi kimin gerçekten anladığını bilmek zor.", "Her dersi bir kazanım kontrolüyle bitiriyor ve teslim edilen her görev takip ediliyor; böylece kimin yardıma ihtiyacı olduğunu görebiliyorsunuz."]
      ],
      pl: [
        ["Öğrenciler birebir ya da premium bir grubun başlaması için çok uzun süre bekliyor.", "Öğrencilerin çok daha hızlı başlamasını sağlıyor: aynı anda 2–5 öğrenciye, her biri kendi yolunda olacak şekilde destek oluyorsunuz."],
        ["Sabit programlar haftanızı doldurmayı zorlaştırıyor.", "Size daha fazla esneklik veriyor: öğrenciler farklı derslerde olsalar bile aynı zaman dilimine katılıyor."],
        ["Aynı anda birkaç öğrenciyi yönetmek stresli görünüyor.", "Format üzerine bir eğitim ve bir simülatörle geliyor; böylece ilk canlı dersinizden önce pratik yapıyorsunuz."],
        ["Bir gruptaki öğrenciler farklı hızlarda ilerliyor.", "Her öğrencinin kendi hızında ilerlemesine olanak tanıyor ve sizinle özel birebir anlar sunuyor."]
      ]
    },
    firsts: "Bazı kurslar tamamen yeni ve siz onları anlatan ilk kişiler arasındasınız. Bu, sesinizi daha da önemli kılıyor: ilk derslerinizden sonra <b>mentörünüze neyin işe yarayıp neyin yaramadığını anlatın</b>. Geri bildiriminiz bir sonraki versiyonu şekillendirecek."
  },

  /* ---------- Closing ---------- */
  start: {
    text: "Neden değiştiğimizi, “hazır olmanın” ne anlama geldiğini ve yanınızda kimlerin olduğunu biliyorsunuz. Şimdi eğitime merakla dalın: simülatörlerde istediğiniz kadar pratik yapın ve öğrencilerimize yeni bir şey sunan ilk kişilerden biri olmanın tadını çıkarın.",
    dm: "Herhangi bir anda kendinize güvenmediğinizi hissederseniz, <b>mentörünüze bir DM göndermeniz yeterli.</b>"
  },

  /* =====================================================================
     SURVEYS (Module 0, before the check · Final module)
     Keys in [key, "label"] pairs (excited, too_short…) and question ids are NOT translated:
     they are what arrives in the Google Sheet. Translate only the labels.
     ===================================================================== */
  survey: {
    emailLabel: "Kodland kurumsal e-posta adresiniz",
    emailPlaceholder: "ad.soyad@kodland.org",
    emailError: "Lütfen Kodland kurumsal e-posta adresinizi yazın (@kodland… ile biter).",
    regionLabel: "Bölgeniz",
    regionPlaceholder: "Bölgenizi seçin…",
    regionError: "Lütfen bölgenizi seçin.",
    missing: "Lütfen ★ ile işaretlenmiş tüm soruları yanıtlayın.",
    send: "Yanıtlarımı gönder",
    sending: "Gönderiliyor…",
    thanks: "✅ <b>Teşekkürler!</b> Yanıtlarınız gönderildi.",
    again: "Tekrar gönder",
    low: "Hiç",
    high: "Tamamen",
    optional: "isteğe bağlı",
    openPlaceholder: "İstediğinizi yazın…",
    lockMsg: "Kontrolün kilidini açmak için yukarıdaki memnuniyet anketini gönderin.",
    lockWhat: "memnuniyet anketi"
  },
  /* Regions for the survey: [key, "label"]. Keys are not translated. */
  regions: [
    ["brazil", "Brezilya"], ["latam", "LATAM (İspanya dahil)"], ["mena", "MENA"], ["italy", "İtalya"], ["poland", "Polonya"],
    ["uk", "UK"], ["usa", "USA"], ["indonesia", "Endonezya"], ["gcc", "GCC"], ["cis", "CIS"]
  ],
  /* Feelings and training length: [key, "label"] */
  feelings: [["excited", "🤩 Heyecanlı"], ["curious", "🤔 Meraklı"], ["calm", "😌 Sakin"], ["unsure", "😕 Emin değilim"], ["worried", "😟 Endişeli"], ["overwhelmed", "😵 Bunalmış"]],
  lengths: [["too_short", "Çok kısa"], ["just_right", "Tam kararında"], ["too_long", "Çok uzun"]],

  /* ---------- Module 0 survey (section before the check) ---------- */
  startSurvey: {
    title: "Kontrolden önce: nasıl hissediyorsunuz?",
    intro: "Kısa bir durum değerlendirmesi — doğru ya da yanlış cevap yok. Mentörünüzün ve ekibin size daha iyi destek olmasına yardımcı olur. Modül kontrolünün kilidini açmak için gönderin.",
    gifAlt: "Nasıl hissediyorsunuz?",
    questions: [
      { id: "feeling", type: "choice", q: "Şu anda bu yeni lansman hakkında nasıl hissediyorsunuz?" },
      { id: "confidence", type: "scale", q: "Bu yeni kursu ya da formatı anlatma konusunda kendinize ne kadar güveniyorsunuz?" },
      { id: "understand_why", type: "scale", q: "Bu değişikliği neden yaptığımızı anlıyorum." },
      { id: "know_where", type: "scale", q: "İhtiyacım olanı nerede bulacağımı ve kimden yardım isteyeceğimi biliyorum." },
      { id: "worries", type: "open", optional: true, q: "Bu lansmanla ilgili sizi en çok endişelendiren şey nedir?" }
    ]
  },

  /* ---------- FINAL MODULE: your first-lesson mindset ---------- */
  final: {
    e: "🌟",
    title: "İlk dersinize yönelik bakış açınız",
    desc: "İlk dersinizin iyi geçtiğini hayal edin, her endişeyi bir kaynakla eşleştirin ve şimdi nasıl hissettiğinizi bize anlatın.",
    obj: "İlk dersinizin iyi geçtiğini hayal edin: derse bitmiş sonuçla başlıyorsunuz, çocuklar meraklı, notları rahatça takip ediyorsunuz ve dersi onların gurur duyduğu bir şeyle bitiriyorsunuz. Bu tablo gerçekçi ve bu modül oraya ulaşmanıza yardımcı olur.",
    offer: [
      ["✨", "İlk dersinizin iyi geçtiğini hayal edin."],
      ["🧩", "Her endişeyi bir kaynakla eşleştirin."],
      ["💬", "Şimdi nasıl hissettiğinizi paylaşın."]
    ],
    sections: { mind: "İlk dersinizi hayal edin", survey: "Şimdi nasıl hissediyorsunuz" },
    mind: {
      intro: "İki dakikanızı ayırın ve kendiniz için yanıtlayın. <b>Bu notları yalnızca siz görürsünüz</b> — bu tarayıcıda kalırlar ve hiçbir yere gönderilmezler.",
      q1: "1. Bu yeni kurs ya da format hakkında beni en çok ne heyecanlandırıyor?",
      q2: "2. Beni en çok ne endişelendiriyor?",
      q3: "3. Her endişe için: hangi kaynak yardımcı olur?",
      placeholder: "Birkaç kelime yazın…",
      resources: [["📒", "Öğretmen Notları"], ["🎮", "Simülatörler"], ["💬", "Mentöre DM ya da oturum"], ["👥", "TL"]],
      resourcesHint: "Endişelerinize yanıt veren kaynaklara dokunun:",
      answerTitle: "Her endişenin bir yanıtı var",
      answer: "Beklenmedik anlar her yeni dersin bir parçasıdır: emin olmadığınız bir soru, farklı davranan bir görev, planlanandan daha hızlı ya da daha yavaş ilerleyen bir grup. Bunları simülatörlerde pratik ettiniz ve ihtiyacınız olduğu kadar onlara geri dönebilirsiniz. Diğer her şey için mentörünüz bir mesaj uzağınızda.",
      afterTitle: "İlk derslerinizden sonra",
      after: "Neyi geliştireceğinizden önce <b>neyin iyi gittiğini</b> fark edin, sonra ikisini de mentörünüze anlatın. Geri bildiriminiz Ürün ekibine ulaşır ve kursun bir sonraki versiyonunu şekillendirir.",
      ready: "<b>Hazırsınız.</b> Nedenini, yöntemi, rutininizi ve kime ulaşacağınızı biliyorsunuz. Herhangi bir anda kendinizi hazır hissetmezseniz, mentörünüze bir DM göndermeniz yeterli."
    },
    survey: {
      title: "Son bir değerlendirme: şimdi nasıl hissediyorsunuz?",
      intro: "Bu bir test değil — doğru ya da yanlış cevap yok. Yanıtlarınız ekibin eğitimi ve kursları geliştirmesine yardımcı olur. Eğitimi tamamlamak için gönderin.",
      groups: [
        { title: "Nasıl hissediyorsunuz", questions: [
          { id: "feeling", type: "choice", q: "Şimdi bu yeni lansman hakkında nasıl hissediyorsunuz?" },
          { id: "confidence", type: "scale", q: "Bu yeni kursu ya da formatı anlatma konusunda kendinize ne kadar güveniyorsunuz?" },
          { id: "understand_why", type: "scale", q: "Bu değişikliği neden yaptığımızı anlıyorum." },
          { id: "know_where", type: "scale", q: "İhtiyacım olanı nerede bulacağımı ve kimden yardım isteyeceğimi biliyorum." }
        ] },
        { title: "Ders anlatma özgüveniniz", questions: [
          { id: "ready_first_lesson", type: "scale", q: "İlk dersimi baştan sona yürütmeye hazır hissediyorum." },
          { id: "manage_format", type: "scale", q: { em: "Yeni formatla (Follow mode) grubu yönetme konusunda kendime güveniyorum.", pl: "Yeni formatla (Parallel Lessons) öğrencilerimi yönetme konusunda kendime güveniyorum." } },
          { id: "ready_tools", type: "scale", q: "Back Office’i, Classroom’u ve derste kullanılan araçları kullanmaya hazır hissediyorum." }
        ] },
        { title: "Eğitim materyalleri", questions: [
          { id: "training_clear", type: "scale", q: "Eğitim açık ve takip etmesi kolaydı." },
          { id: "simulators_helped", type: "scale", q: "Simülatörler kendime daha fazla güvenmeme yardımcı oldu." },
          { id: "training_length", type: "length", q: "Eğitimin uzunluğu:" }
        ] }
      ]
    },
    ctaTitle: "Eğitimi tamamlayın",
    ctaText: "Bu son modülü tamamlamak için yukarıdaki değerlendirmenizi gönderin.",
    ctaBtn: "Eğitimi tamamla →",
    done: "Nasıl hissettiğinizi paylaştığınız için teşekkürler — eğitimi tamamladınız."
  },

  /* ---------- Knowledge check: 5 scenario questions. "a" = index of the right answer (0 = first). Keep it. ---------- */
  quiz: [
    { q: "Eğitiminizi alıyorsunuz ve kurs dersleri henüz hazır değil. Ne yaparsınız?",
      o: ["Eğitime başlamadan önce derslerin gelmesini beklerim.",
          "Yöntem ve yapı ile ilgili eğitimi tamamlarım: dersler kurs başlamadan önce Back Office’te olacak.",
          "Wiki’de benzer materyaller ararım."],
      a: 1, e: "Hazır olmak her dersi görmeye bağlı değildir: eğitim sizi geri kalan her şeye hazırlar ve kursunuz başlamadan önce her ders Back Office’te olacak." },
    { q: "İlk dersinizden birkaç gün önce kendinize güvenmiyorsunuz. Ne yaparsınız?",
      o: ["Kendime saklarım ve iyi geçmesini umarım.",
          "Mentörüme bir DM gönderirim.",
          "Kurstan çıkarılmayı talep ederim."],
      a: 1, e: "Mentörünüze bir DM yeterlidir: form yok, uyarı yok, açıklama gerekmez." },
    { q: "İlk dersinizi hazırlarken yardım almak istiyorsunuz. En hızlı yol hangisi?",
      o: ["Bölge mentörüme bir DM göndermek ya da LMS’te bir oturum ayırtmak.",
          "Bir uyarı (flag) almayı beklemek.",
          "Bir öğrencinin velisinden geri bildirim istemek."],
      a: 0, e: "İletişime geçmek için bir sorununuzun ya da uyarı almanızın gerekmesi yok: mentörünüze mesaj atın ya da LMS’te bir Coaching zaman dilimi ayırtın." },
    { q: "Eğitimdeki bir adım hâlâ net değil. En iyi hamle nedir?",
      o: ["Biri benimle iletişime geçene kadar eğitimi durdurmak.",
          "Simülatörü tekrarlamak ve hâlâ net değilse mentörüme mesaj atmak.",
          "Atlamak: derste nasılsa çözerim."],
      a: 1, e: "Özgüven simülatörlerde oluşur — ihtiyacınız olduğu kadar tekrarlayın; hâlâ net olmayan şeyler için mentörünüz her zaman yanınızda." },
    { q: "İlk dersiniz planladığınız gibi geçmedi. Hangi bakış açısı en uygun?",
      o: ["“Bu kurs bana göre değil.”",
          "“Henüz işe yaramıyor: bir iyileştirme not edip mentörümle konuşacağım.”",
          "“Başka birinin düzeltmesini bekleyeceğim.”"],
      a: 1, e: "İlk dersleriniz sizin prototipinizdir: her biri bir öncekinden daha kolay gelir ve geri bildiriminiz bir sonraki versiyonu şekillendirir." }
  ]
};
