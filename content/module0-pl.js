/* =====================================================================
   MODULE 0 · MINDSET — CONTENT FILE (Polish)
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

  lang: "pl",

  /* ---------- The module card and header ---------- */
  module: {
    e: "🌱",
    title: "Pewny start",
    desc: "Zanim przejdziemy do metod i narzędzi: dlaczego się zmieniamy, co naprawdę znaczy być gotowym i kto jest tu dla ciebie.",
    obj: "Zacznij start nowego formatu z pewnością siebie i pozytywnym nastawieniem. Ten moduł zajmie ci około 20 minut: 4 krótkie sekcje, podsumowanie i sprawdzian z 5 pytań.",
    offer: [
      ["👋", "Zrozumiesz, dlaczego się zmieniamy — i dlaczego twoje doświadczenie ma znaczenie."],
      ["✅", "Dowiesz się, co znaczy „być gotowym”, gdy lekcje nie są jeszcze dostępne."],
      ["🤝", "Będziesz wiedzieć dokładnie, kogo i jak pytać."],
      ["💬", "Zobaczysz, jak nowe kursy odpowiadają na to, co powiedzieli nam trenerzy i uczniowie."]
    ],
    sections: {
      welcome: "Witaj — i dlaczego się zmieniamy",
      ready: "Co teraz znaczy „być gotowym”",
      alone: "Nigdy nie jesteś sam/a",
      voice: "Stworzone z twoim głosem, lubiane przez uczniów",
      start: "Możesz zaczynać",
      survey: "Jak się czujesz?"
    }
  },

  /* ---------- Section 1 ---------- */
  welcome: {
    intro: "<b>Witaj!</b> Bierzesz udział w tym starcie, bo już umiesz uczyć i nawiązywać kontakt z dziećmi. To szkolenie opiera się na tym, co już robisz dobrze. Nie zaczyna od zera — i ty też nie.",
    howTitle: "Jak przejść to szkolenie",
    how: "Idź we własnym tempie, z ciekawością, a nie pod presją. Nie musisz niczego zapamiętywać ani być idealny/a: chodzi o to, żebyś czuł/a się swobodnie z metodą i wiedział/a, gdzie znaleźć to, czego potrzebujesz. Mieszanka ekscytacji i odrobiny niepewności to coś zupełnie naturalnego przy każdej nowości. To po prostu znaczy, że zależy ci na tym, żeby zrobić to dobrze.",
    prepTitle: "Do czego przygotowuje cię to szkolenie",
    prep: {
      em: {
        intro: "Po tym module o nastawieniu szkolenie przeprowadzi cię przez wszystko, czego potrzebujesz na pierwsze lekcje:",
        items: [
          ["🧩", "Nowy model", "Jak zbudowane są lekcje, jak działa feedback i jak prowadzić uczniów, gdy korzystają z AI."],
          ["🛠️", "Przygotowanie techniczne", "Back Office i Notatki dla trenera, Classroom z Follow mode oraz Kodland Sparks — z trzema symulacjami do ćwiczeń, które możesz powtarzać, ile chcesz."],
          ["⭐", "Jakość lekcji", "Jak zbudowana jest lekcja i jakie nawyki pomagają utrzymać ją na właściwym torze: dobre otwarcie, pytania pobudzające do myślenia i jasne zakończenie."],
          ["🤖", "Prompty dla trenerów", "Jak napisać dobry prompt i pomóc uczniom pisać własne."],
          ["📚", "Twój kurs", "Krótkie, konkretne szkolenie z kursu, który będziesz prowadzić."],
          ["📝", "Test końcowy", "Odblokuje się, gdy przerobisz cały materiał."]
        ]
      },
      pl: {
        intro: "Po tym module o nastawieniu szkolenie skupia się na formacie Lekcji równoległych:",
        items: [
          ["⚡", "Jak działają Lekcje równoległe", "Kilku uczniów w jednym slocie, każdy na własnej ścieżce."],
          ["🧭", "Prowadzenie slotu", "Witanie uczniów, pilnowanie, żeby każdy szedł do przodu, i dawanie każdemu chwil tylko jeden na jeden."],
          ["🎮", "Ćwiczenia", "Symulatory Back Office i Classroom, na których przećwiczysz prawdziwą lekcję LR przed pierwszą lekcją na żywo."],
          ["📝", "Test końcowy", "Odblokuje się, gdy przerobisz cały materiał."]
        ]
      }
    },
    simsTitle: "Nie pomijaj symulatorów: to tam buduje się twoja pewność siebie",
    sims: "Czytanie o nowej lekcji jest przydatne, ale to działanie sprawia, że staje się ona znajoma. Symulatory pozwalają ci przećwiczyć każdy prawdziwy krok lekcji — od otwarcia jej w Back Office po prowadzenie jej w Classroom — w bezpiecznym miejscu, gdzie nic nie może pójść źle. Powtarzaj je tyle razy, ile potrzebujesz, i wróć do nich przed pierwszą lekcją na żywo: wtedy każde kliknięcie będzie już dla ciebie czymś naturalnym.",
    whyTitle: "Dlaczego się zmieniamy",
    why: {
      em: "Dzisiejsze dzieci uczą się inaczej: chcą szybko budować prawdziwe rzeczy, próbować, mylić się, poprawiać i pokazywać, co zrobiły. Na tym opiera się nasz nowy Model Edukacyjny. Każda lekcja zaczyna się od gotowego rezultatu, błędy są częścią procesu, a AI jest używane w sposób dopasowany do wieku. Niektóre kursy są zupełnie nowe; inne to kursy, które już znasz, odświeżone nową metodą.",
      pl: "Rodziny często długo czekają na rozpoczęcie kursu 1 na 1 lub premium, bo nie udaje się dopasować harmonogramów. Lekcje równoległe to rozwiązują: wspierasz 2–5 uczniów jednocześnie, każdego na jego własnej ścieżce. Uczniowie zaczynają szybciej, a ty zyskujesz większą elastyczność w grafiku. To wygląda jak zwykła lekcja, z chwilami tylko jeden na jeden dla każdego ucznia."
    },
    meansTitle: "Co to oznacza dla ciebie",
    means: "Umiejętności, dzięki którym już dziś jesteś dobrym trenerem — jasne tłumaczenie, angażowanie dzieci, zauważanie, kto potrzebuje pomocy — to dokładnie te umiejętności, których potrzebują nowe kursy. Nowa jest metoda i struktura, i właśnie to daje ci to szkolenie."
  },

  /* ---------- Section 2 ---------- */
  ready: {
    intro: "Podczas szkolenia możesz jeszcze nie widzieć lekcji kursu: treści są dopracowywane tuż przed startem. <b>Każda lekcja będzie w Back Office, zanim zacznie się twój kurs.</b> Szkolenie przygotowuje cię do wszystkiego innego, więc będziesz gotowy/a w chwili, gdy lekcje się pojawią.",
    listIntro: "Bycie gotowym nie zależy od tego, czy w trakcie szkolenia zobaczysz każdą lekcję. Oznacza, że możesz powiedzieć te pięć rzeczy. Kliknij każdą, która już jest prawdą dla ciebie — w pozostałych pomoże ci szkolenie:",
    items: [
      "<b>Rozumiem metodę:</b> jak przebiega lekcja i dlaczego.",
      "<b>Znam strukturę:</b> moduły, format lekcji, gdzie w Back Office znajduje się każdy element.",
      "<b>Czuję się pewnie od strony technicznej:</b> Back Office, Classroom i narzędzia, których używam na zajęciach, przećwiczone w symulatorach, aż stały się naturalne.",
      "<b>Znam swoją rutynę:</b> treść lekcji jest teraz widoczna bezpośrednio w Back Office, wszystko w jednym miejscu, bez potrzeby korzystania z Wiki. Przeczytanie tam Notatek dla trenera przed każdą lekcją to moje zadanie.",
      "<b>Wiem, kogo pytać:</b> najpierw mojego mentora regionalnego, a w sprawie grup i harmonogramu — mojego TL."
    ],
    allTicked: "🌟 Tak właśnie wygląda „bycie gotowym” — i z każdym modułem będziesz to czuć coraz bardziej.",
    beginnerTitle: "Pozwól sobie znowu być początkującym",
    beginner: "Nawet najbardziej doświadczony trener kiedyś prowadzi nowy kurs po raz pierwszy. Prosimy dzieci, żeby mówiły <i>„to jeszcze nie działa, poszukajmy sposobu”</i>, i to samo dotyczy nas: twoje pierwsze lekcje to twój prototyp. Każda kolejna będzie łatwiejsza od poprzedniej, a my będziemy cię wspierać na każdym kroku."
  },

  /* ---------- Section 3 ---------- */
  alone: {
    intro: "Twój mentor regionalny zna nowe kursy i jest tu, żeby wspierać cię przy każdym starcie. Proszenie o pomoc to coś, co robią profesjonaliści: tak dobrzy trenerzy stają się świetnymi. <b>Nie potrzebujesz problemu ani flagi, żeby się odezwać.</b>",
    mentorTitle: "Twój mentor",
    regionLabel: "Region",
    /* Only the line of the training’s language is shown */
    mentors: {
      en: [["UK", ["Gülay", "Syfa Nurafni Siregar"]], ["USA", ["Gülay"]], ["GCC", ["Syfa Nurafni Siregar"]]],
      es: [["LATAM (z Hiszpanią)", ["Priscila Aabye", "Laura Orozco", "Camilo Mahecha"]]],
      pt: [["Brazylia", ["Lucas Correia Souza da Silva"]]],
      tr: [["MENA", ["Betül Topkan", "Saner Aykanat"]]],
      ar: [["MENA", ["Betül Topkan", "Saner Aykanat"]], ["GCC", ["Syfa Nurafni Siregar"]]],
      id: [["Indonezja", ["Syfa Nurafni Siregar"]]],
      ru: [["CIS", ["Raisa Pabiarzhyna"]]],
      it: [["Włochy", ["Gianfranco Barba"]]],
      pl: [["Polska", ["Daria Kalicka"]]]
    },
    forTitle: "Twój mentor jest zawsze twoim pierwszym kontaktem. Zwracaj się do mentora w sprawie:",
    forItems: [
      ["🧑‍🏫", "Problemów z prowadzeniem zajęć"],
      ["📚", "Pytań o nowy kurs lub format"],
      ["⚙️", "Wsparcia w tym, jak płynnie prowadzić lekcje"],
      ["🤝", "Wspólnego przygotowania lekcji albo szybkiego „sprawdzenia pewności” przed pierwszymi zajęciami"]
    ],
    tl: "<b>W sprawie grup i harmonogramu</b> skontaktuj się ze swoim TL.",
    sessionTitle: "Wolisz dłuższą sesję?",
    sessionSteps: [
      "Zaloguj się do <b>LMS</b> swoim kontem Back Office.",
      "Przejdź do <b>Coaching</b> i wybierz slot.",
      "Napisz w jednym zdaniu, w czym potrzebujesz pomocy — na przykład <i>„Pierwsza lekcja kursu [kurs]”</i>."
    ],
    dm: "<b>Nie czujesz się pewnie, z jakiegokolwiek powodu?</b> Napisz wiadomość prywatną do swojego mentora. To wystarczy: bez formularza, bez flagi, bez tłumaczenia się."
  },

  /* ---------- Section 4 ---------- */
  voice: {
    intro: "Nowe kursy nie biorą się znikąd: odpowiadają na to, co powiedzieli nam trenerzy, uczniowie i rodziny. Oto część tego, co usłyszeliśmy — kliknij każdy punkt, żeby zobaczyć, co dzięki temu się zmieniło.",
    toldLabel: "Powiedzieliście nam",
    soLabel: { em: "Dlatego nowe kursy…", pl: "Dlatego Lekcje równoległe…" },
    tapHint: "Kliknij, żeby zobaczyć, co się zmieniło →",
    told: {
      em: [
        ["Przygotowanie lekcji trwa za długo, trzeba skakać między slajdami a osobnym przewodnikiem w Wiki.", "Zbierają wszystko w jednym miejscu: Notatki dla trenera na każdym slajdzie, plan lekcji z czasami i krótkie wideo-wprowadzenie na slajdzie 1."],
        ["Trudno utrzymać całą grupę na tym samym slajdzie.", "Korzystają z Follow mode: uczniowie widzą dokładnie twój slajd, a twoje notatki pozostają ukryte."],
        ["Poziom trudności nie zawsze pasuje do wieku grupy.", "Są budowane według ścieżek wiekowych (8–9, 10–12, 13+), a w Matematyce zadania idą od prostych do złożonych, na wyraźnie oznaczonych poziomach."],
        ["Dzieci tracą motywację, gdy nie widzą, co budują.", "Zaczynają każdą lekcję od gotowego rezultatu, a uczniowie publikują swój projekt w Kodland Sparks, gdzie inni mogą go zobaczyć i na niego zareagować."],
        ["Trudno wiedzieć, kto naprawdę zrozumiał lekcję.", "Kończą każdą lekcję sprawdzeniem efektów, a każde oddane zadanie jest śledzone, więc widzisz, kto potrzebuje pomocy."]
      ],
      pl: [
        ["Uczniowie czekają za długo, zanim może wystartować kurs 1 na 1 lub grupa premium.", "Pozwalają uczniom zacząć dużo szybciej: wspierasz 2–5 uczniów jednocześnie, każdego na jego własnej ścieżce."],
        ["Sztywne harmonogramy utrudniają zapełnienie tygodnia.", "Dają ci większą elastyczność: uczniowie dołączają do tego samego slotu, nawet jeśli są na różnych lekcjach."],
        ["Prowadzenie kilku uczniów naraz brzmi stresująco.", "Mają szkolenie z formatu i symulator, więc ćwiczysz przed pierwszą lekcją na żywo."],
        ["Uczniowie w grupie idą w różnym tempie.", "Pozwalają każdemu uczniowi postępować we własnym tempie, z chwilami tylko jeden na jeden z tobą."]
      ]
    },
    firsts: "Niektóre kursy są zupełnie nowe, a ty jesteś wśród pierwszych, którzy je poprowadzą. Dlatego twój głos jest jeszcze ważniejszy: po pierwszych lekcjach <b>powiedz swojemu mentorowi, co zadziałało, a co nie</b>. Twój feedback ukształtuje kolejną wersję."
  },

  /* ---------- Closing ---------- */
  start: {
    text: "Wiesz już, dlaczego się zmieniamy, co znaczy „być gotowym” i kto jest tu dla ciebie. Teraz zanurz się w szkolenie z ciekawością: ćwicz w symulatorach, ile tylko chcesz, i ciesz się tym, że jesteś jedną z pierwszych osób, które przynoszą naszym uczniom coś nowego.",
    dm: "Jeśli w którymkolwiek momencie nie czujesz się pewnie, <b>wystarczy wiadomość do twojego mentora.</b>"
  },

  /* =====================================================================
     SURVEYS (Module 0, before the check · Final module)
     Keys in [key, "label"] pairs (excited, too_short…) and question ids are NOT translated:
     they are what arrives in the Google Sheet. Translate only the labels.
     ===================================================================== */
  survey: {
    emailLabel: "Twój służbowy e-mail Kodland",
    emailPlaceholder: "imie.nazwisko@kodland.org",
    emailError: "Wpisz swój służbowy e-mail Kodland (kończy się na @kodland…).",
    regionLabel: "Twój region",
    regionPlaceholder: "Wybierz swój region…",
    regionError: "Wybierz swój region.",
    missing: "Odpowiedz na każde pytanie oznaczone ★.",
    send: "Wyślij moje odpowiedzi",
    sending: "Wysyłanie…",
    thanks: "✅ <b>Dziękujemy!</b> Twoje odpowiedzi zostały wysłane.",
    again: "Wyślij ponownie",
    low: "Wcale",
    high: "Całkowicie",
    optional: "opcjonalnie",
    openPlaceholder: "Napisz, co chcesz…",
    lockMsg: "Wyślij powyższą ankietę satysfakcji, żeby odblokować sprawdzian.",
    lockWhat: "ankietę satysfakcji"
  },
  /* Regions for the survey: [key, "label"]. Keys are not translated. */
  regions: [
    ["brazil", "Brazylia"], ["latam", "LATAM (z Hiszpanią)"], ["mena", "MENA"], ["italy", "Włochy"], ["poland", "Polska"],
    ["uk", "UK"], ["usa", "USA"], ["indonesia", "Indonezja"], ["gcc", "GCC"], ["cis", "CIS"]
  ],
  /* Feelings and training length: [key, "label"] */
  feelings: [["excited", "🤩 Podekscytowany/a"], ["curious", "🤔 Zaciekawiony/a"], ["calm", "😌 Spokojny/a"], ["unsure", "😕 Niepewny/a"], ["worried", "😟 Zaniepokojony/a"], ["overwhelmed", "😵 Przytłoczony/a"]],
  lengths: [["too_short", "Za krótkie"], ["just_right", "W sam raz"], ["too_long", "Za długie"]],

  /* ---------- Module 0 survey (section before the check) ---------- */
  startSurvey: {
    title: "Przed sprawdzianem: jak się czujesz?",
    intro: "Krótkie „jak się masz” — nie ma tu dobrych ani złych odpowiedzi. Pomaga to twojemu mentorowi i zespołowi lepiej cię wspierać. Wyślij ankietę, żeby odblokować sprawdzian modułu.",
    gifAlt: "Jak się czujesz?",
    questions: [
      { id: "feeling", type: "choice", q: "Jak się teraz czujesz w związku z tym nowym startem?" },
      { id: "confidence", type: "scale", q: "Jak pewnie czujesz się z prowadzeniem tego nowego kursu lub formatu?" },
      { id: "understand_why", type: "scale", q: "Rozumiem, dlaczego wprowadzamy tę zmianę." },
      { id: "know_where", type: "scale", q: "Wiem, gdzie znaleźć to, czego potrzebuję, i kogo poprosić o pomoc." },
      { id: "worries", type: "open", optional: true, q: "Co najbardziej niepokoi cię w związku z tym startem?" }
    ]
  },

  /* ---------- FINAL MODULE: your first-lesson mindset ---------- */
  final: {
    e: "🌟",
    title: "Twoje nastawienie na pierwszą lekcję",
    desc: "Wyobraź sobie, że twoja pierwsza lekcja idzie dobrze, dopasuj do każdej obawy jakieś wsparcie i powiedz nam, jak się teraz czujesz.",
    obj: "Wyobraź sobie, że twoja pierwsza lekcja idzie dobrze: zaczynasz od gotowego rezultatu, dzieci są ciekawe, swobodnie korzystasz z notatek i kończysz czymś, z czego są dumne. Ten obraz jest realny, a ten moduł pomoże ci do niego dojść.",
    offer: [
      ["✨", "Wyobraź sobie, że twoja pierwsza lekcja idzie dobrze."],
      ["🧩", "Dopasuj do każdej obawy jakieś wsparcie."],
      ["💬", "Podziel się tym, jak się teraz czujesz."]
    ],
    sections: { mind: "Wyobraź sobie swoją pierwszą lekcję", survey: "Jak się teraz czujesz" },
    mind: {
      intro: "Poświęć dwie minuty i odpowiedz sam/a przed sobą. <b>Tylko ty widzisz te notatki</b> — zostają w tej przeglądarce i nie są nigdzie wysyłane.",
      q1: "1. Co najbardziej cieszy mnie w tym nowym kursie lub formacie?",
      q2: "2. Co najbardziej mnie niepokoi?",
      q3: "3. Przy każdej obawie: co mi pomoże?",
      placeholder: "Napisz kilka słów…",
      resources: [["📒", "Notatki dla trenera"], ["🎮", "Symulatory"], ["💬", "Wiadomość lub sesja z mentorem"], ["👥", "TL"]],
      resourcesHint: "Kliknij wsparcie, które odpowiada na twoje obawy:",
      answerTitle: "Na każdą obawę jest odpowiedź",
      answer: "Nieoczekiwane momenty są częścią każdej nowej lekcji: pytanie, co do którego nie masz pewności, zadanie, które działa inaczej, grupa, która idzie szybciej lub wolniej niż w planie. Przećwiczyłeś/aś je w symulatorach i możesz do nich wracać tyle razy, ile potrzebujesz. Na wszystko inne twój mentor jest o jedną wiadomość od ciebie.",
      afterTitle: "Po twoich pierwszych lekcjach",
      after: "Zauważ najpierw <b>to, co poszło dobrze</b>, a potem to, co poprawić, i opowiedz o obu rzeczach swojemu mentorowi. Twój feedback trafia do zespołu Produktu i kształtuje kolejną wersję kursu.",
      ready: "<b>Jesteś gotowy/a.</b> Znasz powód zmian, metodę, swoją rutynę i wiesz, do kogo się zwrócić. A jeśli w którymkolwiek momencie nie czujesz się gotowy/a, wystarczy wiadomość do twojego mentora."
    },
    survey: {
      title: "Ostatnia refleksja: jak się teraz czujesz?",
      intro: "To nie jest test — nie ma dobrych ani złych odpowiedzi. Twoje odpowiedzi pomagają zespołowi ulepszać szkolenie i kursy. Wyślij je, żeby ukończyć szkolenie.",
      groups: [
        { title: "Jak się czujesz", questions: [
          { id: "feeling", type: "choice", q: "Jak się teraz czujesz w związku z tym nowym startem?" },
          { id: "confidence", type: "scale", q: "Jak pewnie czujesz się z prowadzeniem tego nowego kursu lub formatu?" },
          { id: "understand_why", type: "scale", q: "Rozumiem, dlaczego wprowadzamy tę zmianę." },
          { id: "know_where", type: "scale", q: "Wiem, gdzie znaleźć to, czego potrzebuję, i kogo poprosić o pomoc." }
        ] },
        { title: "Twoja pewność w prowadzeniu zajęć", questions: [
          { id: "ready_first_lesson", type: "scale", q: "Czuję się gotowy/a, żeby poprowadzić moją pierwszą lekcję od początku do końca." },
          { id: "manage_format", type: "scale", q: { em: "Czuję się pewnie, prowadząc grupę w nowym formacie (Follow mode).", pl: "Czuję się pewnie, prowadząc moich uczniów w nowym formacie (Lekcje równoległe)." } },
          { id: "ready_tools", type: "scale", q: "Czuję się gotowy/a, żeby korzystać z Back Office, Classroom i narzędzi na zajęciach." }
        ] },
        { title: "Materiały szkoleniowe", questions: [
          { id: "training_clear", type: "scale", q: "Szkolenie było jasne i łatwe do przejścia." },
          { id: "simulators_helped", type: "scale", q: "Symulatory pomogły mi poczuć się pewniej." },
          { id: "training_length", type: "length", q: "Długość szkolenia była:" }
        ] }
      ]
    },
    ctaTitle: "Ukończ szkolenie",
    ctaText: "Wyślij powyższą refleksję, żeby ukończyć ten ostatni moduł.",
    ctaBtn: "Ukończ szkolenie →",
    done: "Dziękujemy, że podzieliłeś/aś się tym, jak się czujesz — szkolenie zostało ukończone."
  },

  /* ---------- Knowledge check: 5 scenario questions. "a" = index of the right answer (0 = first). Keep it. ---------- */
  quiz: [
    { q: "Przechodzisz szkolenie, a lekcje kursu nie są jeszcze dostępne. Co robisz?",
      o: ["Czekam na lekcje, zanim zacznę szkolenie.",
          "Kończę szkolenie z metody i struktury: lekcje będą w Back Office, zanim zacznie się kurs.",
          "Szukam podobnych materiałów w Wiki."],
      a: 1, e: "Bycie gotowym nie zależy od zobaczenia każdej lekcji: szkolenie przygotowuje cię do wszystkiego innego, a każda lekcja będzie w Back Office, zanim zacznie się twój kurs." },
    { q: "Kilka dni przed pierwszą lekcją nie czujesz się pewnie. Co robisz?",
      o: ["Zachowuję to dla siebie i mam nadzieję, że pójdzie dobrze.",
          "Piszę wiadomość prywatną do mojego mentora.",
          "Proszę o wypisanie mnie z kursu."],
      a: 1, e: "Wystarczy wiadomość do mentora: bez formularza, bez flagi, bez tłumaczenia się." },
    { q: "Chcesz pomocy w przygotowaniu pierwszej lekcji. Jaki jest najszybszy sposób?",
      o: ["Napisać wiadomość do mentora regionalnego albo zarezerwować sesję w LMS.",
          "Poczekać, aż dostanę flagę.",
          "Poprosić rodzica ucznia o feedback."],
      a: 0, e: "Nie potrzebujesz problemu ani flagi, żeby się odezwać: napisz do mentora albo zarezerwuj slot Coaching w LMS." },
    { q: "Jakiś krok w szkoleniu nadal wydaje ci się niejasny. Co najlepiej zrobić?",
      o: ["Przerwać szkolenie, dopóki ktoś się ze mną nie skontaktuje.",
          "Powtórzyć symulator, a jeśli nadal jest niejasno, napisać do mentora.",
          "Pominąć go: zorientuję się na zajęciach."],
      a: 1, e: "Symulatory to miejsce, gdzie buduje się pewność siebie — powtarzaj je tyle razy, ile potrzebujesz, a mentor jest zawsze do dyspozycji w tym, co nadal niejasne." },
    { q: "Twoja pierwsza lekcja nie poszła zgodnie z planem. Które nastawienie pasuje najlepiej?",
      o: ["„Ten kurs nie jest dla mnie.”",
          "„To jeszcze nie działa: zapiszę jedną rzecz do poprawy i porozmawiam z mentorem.”",
          "„Poczekam, aż ktoś inny to naprawi.”"],
      a: 1, e: "Twoje pierwsze lekcje to twój prototyp: każda kolejna jest łatwiejsza od poprzedniej, a twój feedback kształtuje kolejną wersję." }
  ]
};
