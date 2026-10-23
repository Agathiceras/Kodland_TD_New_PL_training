/* =====================================================================
   PARALLEL LESSONS TRAINING — CONTENT FILE (Polski)
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

  lang: "pl",

  /* ---------- Videos (Google Drive "preview" links). A region can replace them with its own video. ---------- */
  videos: {
    opening: "https://drive.google.com/file/d/12DWDkaSE8c4OsHWtWDAc5iNd8jc6C60v/preview",
    closing: "https://drive.google.com/file/d/1R7gMdFGfdFtv1FRKGRn65-BJN13IYnmW/preview",
    checkin: "https://drive.google.com/file/d/1_4Opmv0hsAgKPbuEd6Y1HTP9ZJqGAXDA/preview",
    content: "https://drive.google.com/file/d/14gOeQ7jc_vXp9OSmE7P-tsJu53BChcqd/preview"
  },

  /* ---------- General interface ---------- */
  ui: {
    brand: "Szkolenie: Lekcje równoległe",
    footer: "kodland · Szkolenie: Lekcje równoległe",
    devLink: "🛠 Deweloper",
    language: "🌐 Język",

    navModulesPill: "{done}/{total} modułów",
    navHome: "← Strona główna",
    navModules: "← Moduły",
    navBackModule: "← Wróć do modułu",

    homeKicker: "Szkolenie dla tutorów · Nowa wersja",
    homeTitle1: "Lekcje",
    homeTitle2: "równoległe",
    homeLead: "Nowy format Premium: jeden tutor, kilku uczniów, a każdy na swojej własnej ścieżce w tym samym czasie. To szkolenie przygotuje Cię krok po kroku do poprowadzenia pierwszych lekcji równoległych.",
    homeFact1: "<b>100% samodzielnej nauki.</b> Pracuj we własnym tempie — Twój postęp zapisuje się w tej przeglądarce.",
    homeFact2: "<b>Ćwicz tyle, ile potrzebujesz.</b> Symulacje możesz powtarzać dowolną liczbę razy, aż poczujesz się pewnie.",
    coreLabel: "Moduł główny",
    coreTitle: "Format PL",
    coreDesc: "Czym są Lekcje równoległe, jak wygląda struktura lekcji, jaka jest Twoja rola, aspekty techniczne, Twoje pytania i pełna symulacja praktyczna. Liczba krótkich modułów: {total}.",
    btnStart: "Zacznij →",
    btnReview: "Powtórz →",
    btnContinue: "Kontynuuj →",

    listKicker: "Moduł główny",
    listTitle1: "Format",
    listTitle2: "PL",
    listLead: "Liczba krótkich modułów: {total}, w tej kolejności. Każdy kończy się krótkim sprawdzianem lub zadaniem, które odblokowuje następny.",
    listAllDone: "Wszystkie moduły ukończone 🎉",
    listModulesComplete: "ukończonych modułów",
    listModuleN: "Moduł {n}",
    badgeDone: "✓ Ukończono · {score}%",
    badgeDoneSim: "✓ Ukończono",
    badgeLocked: "🔒 Ukończ moduł {prev}",
    badgeEnterSim: "▶ Wejdź do symulacji",
    badgeStart: "Zacznij →",
    listDoneTitle: "Wszystkie moduły ukończone!",
    listDoneText: "Ostatni krok: sprawdź, co robić dalej.",
    listDoneBtn: "Zobacz kolejne kroki",

    moduleEyebrow: "Moduł {n} z {total}",
    simEyebrow: "Moduł {n} z {total} · Część praktyczna",

    ctaQuizH: "Sprawdzian modułu",
    ctaQuizP: "Liczba krótkich pytań: {n}. Zdobądź co najmniej 70%, aby zaliczyć.",
    ctaTfH: "Sprawdzian modułu: prawda czy fałsz?",
    ctaTfP: "Liczba stwierdzeń: {n}. Zdobądź co najmniej 70%, aby zaliczyć.",
    ctaChatH: "Sprawdzian modułu: rozmowa z kolegą",
    ctaChatP: "Tutor, który nie zna tego formatu, jest go ciekaw. Pomóż mu, udzielając 4 odpowiedzi. Zdobądź co najmniej 70%, aby zaliczyć.",
    ctaQaH: "Przeczytane?",
    ctaQaP: "Otwórz wszystkie pytania, aby ukończyć ten moduł.",
    ctaQaBtn: "✅ Mam odpowiedzi — kontynuuj",
    ctaQaBtnDone: "✓ Ukończono — następny moduł →",
    ctaStart: "Zacznij sprawdzian →",
    ctaRetake: "🔁 Powtórz sprawdzian",

    codeLabel: "<b>🔑 Kod ukończenia</b> — znajdziesz go na ostatnim ekranie symulacji.",
    codePlaceholder: "np. PL-XX-0000",
    codeUnlock: "Odblokuj",
    codeError: "Ten kod jest nieprawidłowy. Sprawdź go na ostatnim ekranie symulacji.",
    codeOk: "✅ <b>{label} — ukończono.</b> Kod został zaakceptowany.",
    codeLabelBO: "Symulacja BO",
    codeLabelSim: "Symulacja zajęć w Classroom",

    subsRemember: "Pamiętaj, aby w razie potrzeby włączyć napisy w swoim języku.",
    subsCan: "W razie potrzeby możesz włączyć napisy w swoim języku.",

    carouselOf: "{i} z {n}",
    carouselDone: "<b>Poznajesz już wszystkich 4 uczniów!</b> Sprawdzian modułu jest teraz odblokowany na dole strony.",
    flipHint: "Kliknij, aby odwrócić",
    replay: "↻ Powtórz",
    stageLabel: "Etap {abs} · {i} z {n}",
    stageNext: "Następny etap →",
    stageFirst: "Wróć do pierwszego",
    mythTag: "Mit",
    realityTag: "Rzeczywistość ✓",
    mythHint: "Kliknij, aby zobaczyć, jak jest naprawdę →",
    sorterDo: "✅ Rób",
    sorterDont: "🚫 Nie rób",
    sorterNotQuite: "Niezupełnie.",
    qaProgress: "<b>{n} / {total}</b> otwartych pytań",

    sliderYou: "Ty",
    sliderStudent: "Uczeń {n}",
    sliderMin: "{m} min",
    sliderJoins: "dołącza w {m}. minucie · 60 min",

    scrubYou: "🧑‍🏫 Ty",
    scrubPlay: "▶ Odtwórz",
    scrubPause: "⏸ Pauza",
    scrubReplay: "▶ Jeszcze raz",
    scrubNotJoined: "Jeszcze nie dołączył",
    scrubOpening: "Otwarcie",
    scrubWorking: "Pracuje samodzielnie",
    scrubClosing: "Zakończenie",
    scrubFinished: "Skończył",
    scrubFree: "Wolna chwila — czy ktoś podniósł rękę?",
    scrubOpeningX: "Otwarcie: {name}",
    scrubClosingX: "Zakończenie: {name}",
    scrubHelping: "✋ Pomoc dla Leo",
    scrubOver: "Sesja zakończona",
    scrubNotesTitle: "📝 Moje notatki",
    scrubNotesEmpty: "Twoje notatki pojawią się tutaj, gdy uczniowie będą dołączać…",
    legendOpening: "Otwarcie (z Tobą)",
    legendIndep: "Praca samodzielna",
    legendClosing: "Zakończenie (z Tobą)",
    legendSession: "Twoja sesja",

    quizMeta: "Sprawdzian modułu {n} · {kind} {i} z {total}",
    quizKindQ: "Pytanie",
    quizKindTF: "Stwierdzenie",
    quizTrue: "✅ Prawda",
    quizFalse: "❌ Fałsz",
    quizCorrect: "✅ <b>Dobrze!</b> ",
    quizWrong: "❌ <b>Niezupełnie.</b> ",
    quizNext: "Następne pytanie →",
    quizResult: "Zobacz mój wynik →",

    resultPassed: "Zaliczone!",
    resultComplete: "Moduł ukończony!",
    resultAlmost: "Prawie się udało",
    resultAnswered: "Poprawnych odpowiedzi: <b>{s} z {n}</b>.",
    resultUnlocked: "<b>Moduł {n} · {title}</b> jest już odblokowany.",
    resultNeed: "Potrzebujesz co najmniej 70%. Powtórz moduł i spróbuj jeszcze raz — możesz podchodzić do sprawdzianu tyle razy, ile potrzebujesz.",
    resultGoModule: "Przejdź do modułu {n} →",
    resultNextSteps: "Zobacz kolejne kroki →",
    resultReview: "📖 Powtórz moduł",
    resultQaRead: "Przeczytałeś wszystkie odpowiedzi.",
    resultSimAccepted: "Kod zaakceptowany: ukończyłeś symulację zajęć w Classroom.",

    lockTitle: "Jeszcze zablokowane",
    lockPrev: "Najpierw ukończ moduł {prev}.",
    lockGeneric: "Ukończ poprzedni moduł, aby odblokować ten.",
    ok: "OK"
  },

  /* ---------- Final screen (after the last module) ---------- */
  done: {
    title: "Moduły ukończone!",
    body: "<p>Prawie koniec! Wróć na stronę szkolenia w LMS, z której otworzyłeś to szkolenie. Test DST znajdziesz tuż pod szkoleniem.</p><p>👉 Aby szkolenie zostało uznane za ukończone, musisz wykonać test DST i go zaliczyć. Jeśli nie ukończysz testu DST, szkolenie pozostanie nieukończone i może wygasnąć.</p><p>Minimalny wynik zaliczający to <b>80%</b>.</p><p>Powodzenia! ❤️</p>",
    btnHome: "Wróć na stronę główną",
    btnPractice: "🎮 Ćwicz jeszcze raz",
    btnReview: "Powtórz moduły"
  },

  /* ---------- Modules: titles, descriptions and section titles ---------- */
  modules: {
    m1: { title: "Witamy w Lekcjach równoległych",
          desc: "Czym jest Lekcja równoległa, jak działa, jak wygląda rozliczenie czasu i dla jakich uczniów powstał ten format.",
          obj: "Po tym module będziesz wiedzieć, czym jest Lekcja równoległa, jak przebiega jedna lekcja, jak działa Twój czas przy kilku uczniach i dla jakich uczniów stworzono ten format.",
          needs: "Poznaj wszystkich 4 uczniów w karuzeli powyżej, aby odblokować sprawdzian.",
          sections: { what: "Czym jest Lekcja równoległa?", runs: "Jak naprawdę przebiega lekcja", time: "Jak działa czas", why: "Po co ten format", students: "Poznaj uczniów" } },
    m2: { title: "Struktura lekcji",
          desc: "Struktura zwykłej lekcji i lekcji równoległej oraz dlaczego otwarcie i zakończenie mają tak duże znaczenie.",
          obj: "Porównaj strukturę, którą już znasz, ze strukturą lekcji równoległej i zobacz, co dzieje się podczas otwarcia i zakończenia — dwóch momentów, które prowadzisz Ty.",
          sections: { structure: "Dwie struktury lekcji", matter: "Otwarcie i zakończenie nadal mają znaczenie", opening: "Otwarcie", closing: "Zakończenie" } },
    m3: { title: "Twoja rola jako tutora PL",
          desc: "Twoja rola i sposób myślenia, feedback, notatki i Twoja pierwsza lekcja PL.",
          obj: "Zrozum swoją rolę na lekcji równoległej, dowiedz się, jak udzielać feedbacku, jak śledzić uczniów dzięki notatkom i jak poprowadzić swoją pierwszą lekcję PL.",
          sections: { role: "Jaka jest więc moja rola?", mindset: "Umiejętności i nastawienie na każdej lekcji", feedback: "Feedback, który pomaga", notes: "Jak uczniowie dołączają — i Twoje notatki", first: "Twoja pierwsza lekcja PL" } },
    m4: { title: "Aspekty techniczne",
          desc: "Grupy równoległe i Teacher Notes w BO oraz zasady komunikacji i śledzenia postępów.",
          obj: "Znajdź swoje Grupy równoległe i Teacher Notes w BackOffice, otwórz konsolę i poznaj zasady komunikacji oraz śledzenia postępów.",
          needs: "Wpisz kod z końca symulatora BO, aby odblokować sprawdzian.",
          sections: { bo: "Grupy równoległe w BO", tnotes: "Teacher Notes, a nie wiki", rules: "Zasady komunikacji i śledzenia postępów" } },
    m5: { title: "Q&A: Twoje pytania",
          desc: "Konkretne odpowiedzi na pytania, które tutorzy zadają najczęściej — bez testu, wystarczy je przeczytać.",
          obj: "Prawdziwe pytania tutorów o Lekcje równoległe i konkretne odpowiedzi. Nie ma testu: otwórz wszystkie pytania, aby ukończyć moduł.",
          sections: { qa: "Pytania i odpowiedzi" } },
    m6: { title: "Symulacja zajęć w Classroom",
          desc: "Aby ukończyć szkolenie, przećwicz prawdziwą lekcję: wejdź do symulacji.",
          obj: "Przećwicz prawdziwą lekcję równoległą, zanim poprowadzisz pierwszą. To ostatni krok szkolenia." }
  },

  /* ---------- Section texts ---------- */
  s: {
    /* Module 1 */
    what: {
      intro: "Wyobraź sobie swoją następną lekcję: czworo uczniów, każdy dołącza w innym momencie, każdy tworzy własny projekt — a każdy dostaje Ciebie tylko dla siebie w najważniejszych chwilach. Tak wygląda Lekcja równoległa.",
      definition: "<b>Lekcje równoległe (PL)</b> to nowy format <b>Premium</b> dla uczniów, którzy lubią pracować samodzielnie i indywidualnie. Jeden tutor wspiera <b>od 2 do 5 uczniów jednocześnie</b>, a każdy z nich idzie własną ścieżką w tym samym przedziale czasowym. Każdy uczeń nadal ma pełne, nieprzerwane <b>60 minut</b> — wydłuża się natomiast łączny czas sesji tutora, aby objąć wszystkich.",
      how: "Jak to możliwe? Classroom ma nową wersję platformy. Zamiast jednego pokoju dla wszystkich uczniów masz <b>osobny pokój dla każdego ucznia</b> — jak pokoje podgrup, tyle że domyślnie już przygotowane. Przechodzisz z pokoju do pokoju; uczniowie nigdy się nie widzą ani nie słyszą.",
      imgAlt: "Konsola Classroom z osobnym pokojem dla każdego z czworga uczniów",
      imgCaption: "Poczekalnia w konsoli: każdy uczeń ma własny panel, choć wszyscy mają jednego tutora."
    },
    runs: {
      intro: "Jak więc wygląda lekcja jednego ucznia? Format lekcji: <b>równoległy</b>. Lekcja każdego ucznia jest zaprojektowana na pełne 60 minut — i nie ma żadnych zajęć grupowych. Wspierasz każdego ucznia na początku i na końcu jego lekcji; podczas pracy samodzielnej pomagasz, gdy uczeń podniesie rękę.",
      cards: [
        ["🎙️", "Rola tutora", "W częściach na żywo nadajesz ton, wyjaśniasz cel i sprawdzasz, czy wszystko jest gotowe od strony technicznej. Podczas pracy samodzielnej nie prowadzisz lekcji — udzielasz celowej pomocy, gdy uczeń o nią poprosi. Karty przypominają uczniom, by przywołali Cię przed zapisaniem pracy i na kluczowych etapach."],
        ["🔁", "Podejście dedukcyjne", "Uczeń najpierw widzi gotowy projekt, potem sprawdza, jak powstał, i stosuje ten sam pomysł w swoim projekcie: najpierw wynik, potem sposób działania, na końcu własna wersja."],
        ["💬", "Feedback: tutor + samoocena", "W tym formacie nie ma feedbacku od rówieśników. AI nie jest używane na pierwszych lekcjach; na dalszych lekcjach modułu AI dochodzi jako trzeci kanał feedbacku tam, gdzie ma to sens."]
      ]
    },
    time: {
      intro: "Oto klucz do rozkładu czasu. Uczniowie nie zaczynają razem: <b>co 10 minut dołącza nowy uczeń</b>. Każdy ma pełne 60 minut, więc Twoja sesja wydłuża się o 10 minut za każdego dodatkowego ucznia.",
      example: "<b>Przykład:</b> jeśli masz 3 uczniów, Twoja sesja trwa 80 minut, ale każdy uczeń nadal ma 60 minut, ponieważ co 10 minut dołącza kolejny.",
      formula: "Twoja sesja = <b>60 min</b> + <b>10 min</b> za każdego dodatkowego ucznia",
      chipStudents: "Uczniowie: {n}",
      chipMin: "{m} min",
      tryIt: "👇 Teraz spróbuj: przesuń suwak (lub kliknij kafelek powyżej)",
      tryTag: "Wypróbuj",
      students: "uczniów",
      minYou: "minut dla Ciebie",
      minEach: "minut dla każdego ucznia"
    },
    why: {
      intro: "Kursy Premium często zaczynają się bardzo późno, bo dostępność ucznia rzadko pokrywa się z grafikiem tutora. Lekcje równoległe rozwiązują ten problem. Odwróć karty:",
      cards: [
        ["⚡", "Dla uczniów", "<b>Zaczynają dużo szybciej.</b><br>Nie czekają tygodniami na pasujący termin Premium: mogą od razu zacząć kurs i uczyć się we własnym tempie."],
        ["🗓️", "Dla tutorów", "<b>Większa elastyczność.</b><br>W jednym terminie Twojego grafiku mieści się kilka lekcji indywidualnych, a Ty odkrywasz nowy sposób nauczania."],
        ["🎯", "Dla nauki", "<b>Prawdziwa autonomia.</b><br>Uczniowie budują poczucie: <i>„Sam potrafię stworzyć działający projekt cyfrowy”.</i> Błędy są częścią procesu."]
      ],
      scope: "<b>Ważny zakres:</b> Lekcje równoległe nie zastępują sposobu, w jaki naucza Kodland. Zastępują <b>format Premium</b> w wybranych kursach."
    },
    students: {
      intro: "Możesz się zastanawiać: <i>„Czy uczniom spodoba się praca na własną rękę?”</i> Krótka odpowiedź: <b>oni sami to wybrali.</b> Poznaj ich:",
      howTo: "<b>Jak przejść przez tę część:</b> użyj strzałki <b>›</b>, aby poznawać uczniów po kolei. Są <b>4 slajdy</b> — sprawdzian modułu odblokuje się, gdy zobaczysz je wszystkie.",
      bubble: "Potrzebujesz pomocy? ✋ Zapytaj eksperta",
      slides: [
        { who: "Uczeń 1 · Niezależny", title: "Uwielbia skupiać się w samotności", text: "Chce uczyć się i stosować to, czego uczy kurs, ale duże grupy pełne dzieci po prostu mu nie służą: za dużo hałasu, za dużo czekania.", quote: "„Lepiej się uczę, gdy mogę skupić się na własnym projekcie”." },
        { who: "Uczeń 2 · Samouk", title: "Uczy się sam", text: "Już teraz uwielbia samodzielnie eksplorować i dochodzić do rozwiązań. Dla niego ten format to bonus: swoboda uczenia się samemu <b>oraz</b> ekspert, którego można zapytać, gdy tylko jest potrzebny.", quote: "„Lubię sam odkrywać rzeczy — i wiedzieć, że ktoś pomoże, gdy utknę”." },
        { who: "Uczeń 3 · Weteran nauki asynchronicznej", title: "Uczył się już online", text: "Niektórzy uczniowie mają za sobą kursy w pełni asynchroniczne, bez żadnego tutora. Na Lekcji równoległej dostają tę samą niezależność — plus prawdziwą osobę, która ich wita i daje im feedback.", quote: "„To jak moje kursy online, tylko że teraz ktoś patrzy na moją pracę!”" },
        { who: "Dlaczego to działa · Wiek 10+", title: "Gotowi na niezależność", text: "Około 10.–12. roku życia umiejętność trzymania się celu i zarządzania własnym skupieniem robi duży krok naprzód. Na tym opiera się praca samodzielna — a poczucie, że ktoś nam ufa i pozwala pracować samemu, to silna motywacja.", quote: "„Sam potrafię stworzyć działający projekt cyfrowy”." }
      ],
      reassure: "<b>Nie bój się, że im się nie spodoba.</b> Ci uczniowie znają format, zanim dołączą, a wielu z nich go woli. Twoim zadaniem jest sprawić, by ich start i zakończenie były świetne."
    },

    /* Module 2 */
    structure: {
      intro: "Zacznijmy od czegoś, co już znasz. Oto struktura <b>zwykłej lekcji Kodland</b> — tej, którą prowadzisz w innych formatach, <b>także w Premium</b>. Prowadzisz każdą jej część, od otwarcia po zakończenie, łącznie z teorią i praktyką:",
      regularTitle: "👩‍🏫 Zwykła lekcja Kodland",
      plTitle: "⚡ Lekcja równoległa",
      bridge: "Lekcja równoległa jest <b>bardziej samodzielna</b>. Nie prowadzisz teorii ani praktyki — <b>uczeń robi to sam</b>, korzystając z kart. To działa, ponieważ treści są <b>zaprojektowane tak, by uczniowie mogli pracować niezależnie</b>: karty wyjaśniają, pokazują przykłady i zawierają pomoc na wypadek, gdy coś nie działa.",
      theory: "Teoria i praktyka",
      indep: "Praca samodzielna",
      tagIndep: "Zastępuje teorię i praktykę",
      tagFeedback: "Tu jest feedback",
      phOpening: "Otwarcie",
      phMain: "Część główna",
      phSelf: "Praca samodzielna",
      phClosing: "Zakończenie",
      diff1: "<b>Teoria i praktyka → praca samodzielna.</b> Tutor nie prowadzi teorii ani modelowania: uczeń pracuje z kartami.",
      diff2: "<b>Feedback przenosi się na zakończenie.</b> Podczas lekcji jesteś zajęty witaniem, kończeniem lekcji i pomaganiem uczniom z podniesioną ręką — dlatego feedback do projektu przekazujesz na etapie Podsumowanie."
    },
    matter: {
      intro: "Format samodzielny nie oznacza, że otwarcie i zakończenie zasługują na mniej uwagi niż w innych formatach. Tak jak na każdej lekcji, są kluczowe, aby uczniowie <b>zrozumieli kurs i go polubili</b> — oraz aby zbudowali z Tobą <b>relację</b>.",
      card1Title: "🎬 Dlaczego początki i zakończenia nadal mają znaczenie",
      card1Text: "Łatwo pomyśleć, że gdy uczeń pracuje samodzielnie, „prawdziwe” nauczanie jest wstrzymane — a otwarcie i zakończenie to tylko formalności wokół właściwej pracy. <b>Jest dokładnie odwrotnie.</b>",
      card2Title: "⭐ Dlaczego to nadal ważne",
      card2Text: "Nic z tego nie zmienia się tylko dlatego, że środek lekcji jest teraz samodzielny. Jeśli już, to mocne otwarcie i zakończenie liczą się w PL <b>jeszcze bardziej</b>, bo to jedyne dwa momenty, które każdy uczeń przeżywa z Twoją pełną, niepodzieloną uwagą.",
      outro: "Przypomnijmy sobie, do czego służy każda część otwarcia i zakończenia."
    },
    opening: {
      intro: "Otwarcie składa się z <b>4 etapów</b>. Przejdź przez każdy z nich za pomocą strzałek:",
      video: "W tym filmie zobaczysz, jak tutorka prowadzi otwarcie z pierwszymi dwoma uczniami, którzy dołączają do zajęć. Zauważysz, że kończy otwarcie z pierwszym uczniem w 4:52. Ponieważ jednak zostało jej jeszcze 10 minut czasu na otwarcie z pierwszym uczniem, pracuje z nim nieco dłużej, aż dołączy drugi uczeń.",
      videoTitle: "Otwarcie lekcji równoległej"
    },
    closing: {
      intro: "Zakończenie to moment, w którym wszystko się łączy. Uczeń pokazuje swój końcowy projekt, słyszy od Ciebie konkretny feedback, zastanawia się nad tym, czego się nauczył, i wychodzi, wiedząc, co będzie dalej. W PL to także <b>moment, w którym przekazujesz feedback</b> — nie ma osobnego etapu feedbacku w środku lekcji. Zakończenie ma <b>3 etapy</b>:",
      video: "W tym filmie zobaczysz, jak tutorka kończy otwarcie z ostatnim uczniem. W tym momencie musi wrócić do pierwszego ucznia, aby zamknąć jego sesję.",
      videoTitle: "Zakończenie lekcji równoległej"
    },

    /* Module 3 */
    role: {
      intro: "Skoro praca jest samodzielna… <b>jaka jest moja rola na lekcji?</b> Duża — tylko inna. Na lekcji równoległej nie jesteś osobą, która wszystko tłumaczy. Jesteś osobą, która <b>otwiera drzwi do nauki</b> i dba o to, by każdy uczeń przez nie przeszedł.",
      cards: [
        ["🧭", "Przewodnik po platformie", "Oprowadzasz każdego ucznia po platformie Kodland, żeby wiedział, gdzie co jest i jak samodzielnie się poruszać."],
        ["🚀", "Inicjator nauki", "Swoim otwarciem nadajesz ton, wyjaśniasz cel i wprowadzasz każdego ucznia w jego lekcję."],
        ["💬", "Trener feedbacku", "Konstruktywnym feedbackiem prowadzisz każdego ucznia — równolegle — przez jego własny proces uczenia się."]
      ]
    },
    mindset: {
      intro: "To nie są przypadkowe wskazówki: to <b>umiejętności, które tutor PL wnosi na każdą lekcję</b>. Miej je na uwadze — i przypominaj je sobie przed każdymi zajęciami — bo to dzięki nim kilka lekcji naraz może być dobrymi lekcjami dla każdego ucznia. Otwórz każdą z nich:",
      skills: [
        ["🎭", "Zrozumienie swojej roli", "Twoje zadanie przestaje polegać na „przekazywaniu treści”, a staje się „prowadzeniem kilku procesów uczenia się jednocześnie”. Treści nadal są — w kartach — ale nie są już głównym punktem programu. Uwaga skupia się na tym, czego każdy uczeń potrzebuje, by iść do przodu: dobrego startu, pomocy, gdy Cię zawoła, i prawdziwego zakończenia."],
        ["🤲", "Akceptacja samodzielnej pracy uczniów", "Praca samodzielna nie jest luką w Twoim nauczaniu — to zaplanowany czas. Uczeń pracujący sam, gdy Ty jesteś w innym pokoju, robi dokładnie to, czego wymaga od niego ten format. Traktuj to jako postęp, a nie problem czekający na Twój powrót."],
        ["🧭", "Od „nauczyciela” do „facylitatora nauki”", "Facylitator zadaje pytanie, zanim udzieli odpowiedzi, i ufa, że uczeń sam domknie część luki. Twoje wsparcie jest tymczasowe i regulowane: tylko tyle, by odblokować ucznia, tak żeby stopniowo potrzebował Cię coraz mniej."],
        ["💡", "Wskazówki, a nie rozwiązania", "Gdy uczeń podniesie rękę, zacznij od pytania: „Co już próbowałeś?”. Wskazówka podtrzymuje myślenie; rozwiązanie je kończy. Dawaj wskazówkę tak dużą, jak potrzeba — a nie tak dużą, jak czas, który chciałbyś zaoszczędzić."],
        ["⚖️", "Równowaga między prowadzeniem a autonomią", "Dawanie uczniom prawdziwego wyboru i wyjaśnianie, dlaczego o coś prosisz, motywuje ich bardziej niż ścisła kontrola każdego kroku. Format PL daje wiele naturalnych okazji, by to robić — korzystaj z nich."],
        ["🌱", "Cierpliwość wobec różnego tempa nauki", "Twoi uczniowie nigdy nie będą pracować w tym samym tempie, a traktowanie tego jak problemu tworzy dokładnie tę presję, która przeszkadza w nauce. Cierpliwość nie jest bierna: to decyzja, by pozwolić tempu się różnić, nie sprawiając, że ktokolwiek czuje się popędzany."],
        ["👀", "Sprawianie, by każdy uczeń czuł się zauważony", "Konkretny, osobisty szczegół — coś z poprzedniej lekcji, detal jego projektu — daje więcej niż długa, ogólna rozmowa. Jeśli Twoje otwarcie i zakończenie są za każdym razem rzetelne, relacja rośnie nawet w krótkich momentach."],
        ["🛡️", "Tworzenie bezpiecznej przestrzeni do pytań", "Uczniowie muszą czuć, że można bezpiecznie zadać pytanie, przyznać, że czegoś nie rozumieją, albo spróbować i się pomylić. W formacie, w którym się rotujesz, to poczucie bezpieczeństwa trzeba zbudować szybko — powiedz o tym w otwarciu i okazuj to za każdym razem, gdy Cię wołają."]
      ],
      mythsTitle: "🌱 Nowe spojrzenie na format",
      mythsIntro: "Lekcje równoległe to nowy typ grupy w Kodland. Znajomość tego formatu <b>dodaje</b> do tego, co potrafisz — niczego nie odbiera. Kliknij każde przekonanie, aby zobaczyć, jak jest naprawdę:",
      myths: [
        ["„Od teraz wszystkie moje kursy staną się równoległe”.", "<b>Absolutnie nie.</b> Poznanie tego formatu nie oznacza, że Twoje grupy się zmienią. Lekcje równoległe dotyczą tylko wybranych kursów."],
        ["„Moja rola tutora zmieni się w każdej grupie”.", "<b>Nie.</b> Uczysz w sposób równoległy tylko w swoich grupach równoległych. Wszędzie indziej nadal robisz to, co już robisz dobrze."],
        ["„To po prostu kolejna rzecz do nauczenia się”.", "<b>To szansa.</b> Poszerzasz swoje doświadczenie z formatami edukacyjnymi, a znajomość większej liczby formatów może otworzyć drzwi do większej liczby grup."]
      ]
    },
    feedback: {
      intro: "Feedback to miejsce, w którym robisz największą różnicę na lekcji równoległej — i pojawia się on w zakończeniu, gdy uczeń pokazuje swój projekt. Dobry feedback odpowiada uczniowi na trzy pytania:",
      q3: [
        ["🎯", "Dokąd zmierzam?", "Jaki był cel dzisiejszego projektu?"],
        ["📍", "Jak mi idzie?", "Co dokładnie zrobił dobrze?"],
        ["➡️", "Co dalej?", "Jeden jasny krok do poprawy."]
      ],
      compareTitle: "Ogólnikowy czy konkretny? Przełącz i porównaj",
      tryTag: "Wypróbuj",
      vague: "😐 Ogólnikowy",
      specific: "🌟 Konkretny",
      vagueEx: ["„Dobra robota!”", "„Ładny rysunek.”", "„To źle, spróbuj jeszcze raz.”"],
      specificEx: ["„Każda litera pojawia się w osobnej klatce — dokładnie tak działa animacja. Następnie spróbuj dodać jeszcze jedną klatkę między literami, żeby było płynniej.”", "„Kolory Twojego imienia świetnie pasują do motywu. Co mógłbyś dodać, żeby ostatnia litera się wyróżniała?”", "„Litera V wypełnia wszystko, bo w jej obrysie jest mała przerwa. Zamknij ją i wypełnij jeszcze raz.”"],
      vagueNote: "Miłe, ale uczeń nie dowiaduje się, co się sprawdziło ani co zrobić dalej.",
      specificNote: "Każdy z nich nazywa to, co się udało (lub co poszło nie tak), i wskazuje kolejny krok.",
      mistakes: "<b>Błędy to informacja, a nie wyrok.</b> „To nie zadziałało, bo litera nie jest zamknięta — sprawdźmy obrys” pomaga o wiele bardziej niż „to jest źle”."
    },
    notes: {
      intro: "Pamiętaj, jak uczniowie dołączają: <b>jeden co 10 minut</b>, a każdy kończy 60 minut po dołączeniu. Oznacza to, że żegnasz się z nimi w tej samej kolejności, w jakiej przyszli. Przy kilku uczniach najłatwiej się nie pogubić, <b>robiąc krótkie notatki</b>, gdy dołączają.",
      hands: "<b>Nie musisz odwiedzać każdego ucznia co kilka minut.</b> Uczniowie wołają Cię, podnosząc rękę. Gdy kilka rzeczy dzieje się naraz: onboarding ma pierwszeństwo przed podniesioną ręką, zakończenie ma pierwszeństwo przed podniesioną ręką, a onboarding ma pierwszeństwo przed zakończeniem.",
      example: "Oto przykład z <b>3 uczniami</b> (Ana, Leo i Mia), od godziny 16:00. Naciśnij odtwarzanie lub przeciągnij czas i obserwuj, jak wypełniają się notatki tutora:",
      names: "Ana,Leo,Mia",
      lines: [
        "<b>Ana</b> dołączyła o 16:00 → pożegnanie o <span class='hl2'>16:50</span>",
        "<b>Leo</b> dołączył o 16:10 → pożegnanie o <span class='hl2'>17:00</span>",
        "<b>Mia</b> dołączyła o 16:20 → pożegnanie o <span class='hl2'>17:10</span>"
      ],
      writeDown: "<b>Zapisuj, kiedy każdy uczeń zaczął.</b> Dzięki temu w każdej chwili wiesz, kto żegna się pierwszy i o której godzinie.",
      checkin: "Choć z powodu ograniczeń czasowych możemy wykorzystać całe 10 minut otwarcia z każdym uczniem, czasem zostaje trochę wolnego czasu, zwłaszcza gdy nie jest to pierwsza lekcja. W tym czasie, gdy nie musimy prowadzić otwarć ani zakończeń, możemy pomagać uczniom, którzy podnieśli rękę, lub po prostu sprawdzać, jak im idzie. Obejrzyj ten film, aby zobaczyć, jak robi to tutorka.",
      videoTitle: "Pomaganie uczniom i sprawdzanie, jak im idzie"
    },
    first: {
      intro: "Twoi uczniowie już wiedzą, że wybrali format równoległy — ale pierwsza lekcja to ich <b>pierwsze prawdziwe doświadczenie</b> z nim. Dlatego na lekcji 1 wyjaśniasz <b>szczegółowo</b>, jak działa lekcja, i upewniasz się, że uczniowie potrafią samodzielnie się poruszać. Oto, o czym warto pamiętać.",
      beforeTitle: "📚 Przed lekcją",
      before: [
        "Przestudiuj lekcję z wyprzedzeniem.",
        "Wszystkie materiały „podręcznikowe” są teraz w <b>BO, w każdej aktywności</b>: to <b>Teacher Notes</b>. W wiki nie ma już podręczników.",
        "Przeczytaj notatki do każdej karty, którą poprowadzisz — zwłaszcza do otwarcia i ostatniej karty synchronicznej."
      ],
      adaptTitle: "🔄 Dostosuj otwarcie na lekcji 1",
      adapt: [
        "<b>Sprawdzenie nastroju →</b> poznaj uczniów: ich zainteresowania i to, czy wcześniej uczyli się online lub samodzielnie.",
        "<b>Sprawdzenie pracy domowej →</b> nie ma jeszcze pracy domowej. Wykorzystaj ten czas, aby <b>wyjaśnić format</b>."
      ],
      checklistTitle: "✅ W trakcie lekcji: Twoja lista kontrolna pierwszej lekcji",
      checklistTag: "Odhaczaj",
      checklist: [
        "Wyjaśnij format PL: czym jest lekcja równoległa i jak działa.",
        "Powiedz, <b>jak długo</b> będą pracować samodzielnie.",
        "Pokaż — i w razie potrzeby wskaż — gdzie w kartach znajdą <b>pomoc</b> (rozwiązania i alternatywy na wypadek problemów technicznych).",
        "Sprawdź, czy wszystko działa na platformie: dźwięk, kamera, lekcja.",
        "Sprawdź, czy potrafią samodzielnie przejść <b>od jednej aktywności do następnej</b>.",
        "Jasno pokaż, <b>gdzie podnieść rękę</b> ✋ i <b>gdzie wysyłać wiadomości</b>."
      ],
      questionsTitle: "🗣️ Sprawdzaj pytaniami otwartymi, a nie „Czy jasne?”",
      questionsIntro: "Odpowiedź „tak” niewiele Ci mówi. Zadawaj pytania, w których uczeń pokazuje, że wie, jak działa lekcja. Kliknij każde z nich, aby zobaczyć, jakiej odpowiedzi oczekujesz:",
      questionsHint: "Kliknij, aby zobaczyć odpowiedź, którą chcesz usłyszeć →",
      questions: [
        ["„Jak dasz mi znać, że mnie potrzebujesz?”", "Podnosi rękę ✋ (i wie, gdzie jest przycisk) albo wysyła wiadomość."],
        ["„Jeśli strona się nie otworzy, co możesz zrobić?”", "Zajrzeć do pomocy na karcie: są tam rozwiązania i alternatywy."],
        ["„Pokaż mi, jak przechodzisz do następnej aktywności.”", "Sam przechodzi do następnej karty."],
        ["„Jak długo dzisiaj będziesz pracować samodzielnie?”", "Wie mniej więcej, kiedy wrócisz na zakończenie."]
      ],
      repeat: "Niektórzy uczniowie mogą czuć się w tym formacie pozostawieni sami sobie, nawet po wyjaśnieniu. Poproszenie ich, aby <b>powtórzyli własnymi słowami</b>, jak będzie działać lekcja, to sposób, by upewnić się, że naprawdę zrozumieli."
    },

    /* Module 4 */
    bo: {
      intro: "<b>Grupa równoległa</b> to kontener, który łączy kilka indywidualnych grup uczniów pod jednym tutorem. Każdy uczeń nadal ma własną grupę indywidualną, tak jak w formacie Premium — link do dołączenia jako nauczyciel jest po prostu taki sam dla wszystkich.",
      imgAlt: "Karta Grupy równoległej w BO z grupami indywidualnymi w środku",
      imgCaption: "Grupa równoległa w BO: grupy w jej wnętrzu i konsola uruchamiająca sesję Classroom.",
      consoleTitle: "🔑 Otwieranie konsoli",
      console60: "Z poziomu <b>Grupy równoległej</b> na Twojej liście grup: do 60 minut przed lekcją aż do jej zakończenia.",
      console30: "Z poziomu Twojego <b>grafiku</b>: do 30 minut przed lekcją.",
      simTitle: "Symulator BO dla Lekcji równoległych",
      simText: "Klikalna replika BO: znajdź Grupę równoległą, otwórz konsolę na oba sposoby, zobacz kurs PL i znajdź jego Teacher Notes.",
      simSteps: ["Otwórz symulator BO w nowej karcie.", "Wykonuj wszystkie kroki, aż zobaczysz „Symulacja ukończona” i swój kod.", "Wróć tutaj i wpisz kod poniżej."],
      simButton: "🖥️ Otwórz symulator BO"
    },
    tnotes: {
      intro: "<b>W tych kursach nie używamy wiki.</b> Wszystko, czego potrzebujesz do przygotowania lekcji, znajduje się w <b>Teacher Notes</b>, w każdej aktywności w BO. Oczekujemy, że <b>przeczytasz notatki przed każdą lekcją</b>.",
      cards: [
        ["🔍", "Gdzie", "BO → Kursy → Twój kurs → Zadania → każda aktywność. Notatki są na górze karty — widzisz je tylko Ty."],
        ["⏰", "Kiedy", "Przed każdą lekcją. Nie w trakcie: przy kilku uczniach nie ma czasu na czytanie podczas prowadzenia zajęć."],
        ["🎯", "Na co zwracać uwagę", "Format każdej karty (na żywo czy samodzielna), ile trwa, co powinieneś zrobić i na co uważać."]
      ],
      simReminder: "Symulator BO powyżej prowadzi do Teacher Notes prawdziwej lekcji PL. Jeśli pominąłeś ten krok, otwórz go jeszcze raz.",
      video: "W tym filmie zobaczysz, jak nowe treści zostały dostosowane, aby uczniowie mogli pracować samodzielnie.",
      videoTitle: "Jak działają nowe treści"
    },
    rules: {
      intro: "Lekcje równoległe mają własne zasady komunikacji, ale śledzenie postępów działa dokładnie tak jak wcześniej. Robić czy nie robić? Zdecyduj w każdym przypadku:",
      items: [
        ["💬", "Utworzyć grupę WhatsApp ze wszystkimi uczniami z terminu równoległego.", "no", "<b>Nie rób tego.</b> Nigdy nie twórz grup WhatsApp dla terminu równoległego: Lekcje równoległe to nauka zindywidualizowana."],
        ["📱", "Pisać do każdego ucznia (lub jego rodzica) indywidualnie.", "yes", "<b>Rób to.</b> Cała komunikacja jest indywidualna, w wiadomościach bezpośrednich."],
        ["📊", "Oznaczać obecność i sprawdzać projekty w indywidualnej grupie każdego ucznia.", "yes", "<b>Rób to.</b> Obecność, przesłane projekty i inne wskaźniki są śledzone w każdej grupie indywidualnej — nic się tu nie zmienia."],
        ["🗂️", "Śledzić cały termin jako jeden wspólny rekord w Grupie równoległej.", "no", "<b>Nie rób tego.</b> Grupa równoległa jest tylko kontenerem. Dane każdego ucznia pozostają w jego własnej grupie."]
      ]
    },

    /* Module 5 */
    qa: {
      intro: "To prawdziwe pytania, które tutorzy zadawali podczas wdrażania Lekcji równoległych. Kliknij każde pytanie, aby zobaczyć odpowiedź."
    },

    /* Module 6 */
    sim: {
      title: "🎮 Symulacja zajęć w Classroom",
      cards: [
        ["🎮", "Co to jest", "Prawdziwa lekcja równoległa w Classroom z 4 uczniami, którzy dołączają co 10 minut. Jesteś tutorem: te same ekrany, te same materiały lekcyjne, te same sytuacje, jakie spotkasz na własnych lekcjach."],
        ["💡", "Dlaczego jest Ci potrzebna", "To <b>jedyna część praktyczna</b> tego szkolenia — i ta, która naprawdę pomoże Ci zrozumieć, jak działa PL. Wszystko z modułów 1–5 łączy się tutaj."],
        ["🧭", "Jak to działa", "Najpierw <b>wycieczka z przewodnikiem</b> z pierwszym uczniem, potem <b>gra decyzyjna</b> z 10 sytuacjami i 3 życiami. Powtarzaj ją tyle razy, ile potrzebujesz. Na końcu dostaniesz <b>kod ukończenia</b>."]
      ],
      example: "<b>To jest przykład.</b> Symulacja korzysta z kursu medialnego dostosowanego do formatu PL — niekoniecznie jest to kurs, który będziesz prowadzić. Nie musisz uczyć się treści tej lekcji: skup się na tym, <b>jak</b> przebiega lekcja. Włącz <b>dźwięk</b>: uczniowie i tutor mówią.",
      launchTitle: "Symulator Classroom",
      launchText: "Otwiera się w nowej karcie, na pełnym ekranie, dzięki czemu zobaczysz Classroom dokładnie tak, jak będzie wyglądał na Twoich lekcjach.",
      steps: ["Otwórz symulator w nowej karcie.", "Ukończ wycieczkę z przewodnikiem i grę decyzyjną, aż zobaczysz „Symulacja ukończona” i swój kod.", "Wróć do tej karty i wpisz kod poniżej."],
      button: "🚀 Otwórz symulator"
    }
  },

  /* ---------- Lesson stages (Module 2 carousels). Opening = first 4, closing = last 3 ---------- */
  stages: [
    { t: "Sprawdzenie połączenia", ph: "Otwarcie", goal: "Upewnij się, że wzajemnie się widzicie i słyszycie, zanim zrobicie cokolwiek innego.",
      d: ["Sprawdź kamerę, mikrofon i dźwięk — swoje i ucznia.", "Upewnij się, że uczeń jest w swoim pokoju i widzi lekcję.", "Poważny problem techniczny? Karty zawierają pomoc, a możesz też skontaktować się z pomocą techniczną."] },
    { t: "Sprawdzenie nastroju", ph: "Otwarcie", goal: "Szybkie rozeznanie, jak uczeń czuje się dzisiaj.",
      d: ["Przywitaj się po imieniu i zapytaj, jak mija mu dzień.", "Zwróć uwagę na jego energię: uczeń, który czuje się zauważony, lepiej pracuje samodzielnie.", "Niech to będzie krótkie i serdeczne."] },
    { t: "Sprawdzenie pracy domowej", ph: "Otwarcie", goal: "Przejrzyj to, nad czym uczeń pracował od ostatniego razu.",
      d: ["Poproś, aby pokazał, co zrobił.", "Wskaż jedną konkretną rzecz, która się udała.", "Na pierwszej lekcji nie ma jeszcze pracy domowej — wykorzystaj ten czas, aby wyjaśnić format (zobacz moduł 3)."] },
    { t: "Cel lekcji", ph: "Otwarcie → praca samodzielna", goal: "Ustal, do czego zmierza dzisiejsza lekcja. To ostatni etap przed rozpoczęciem pracy samodzielnej.",
      d: ["Wyjaśnij cel dzisiejszego projektu w jednym lub dwóch zdaniach.", "Poproś ucznia, aby powtórzył plan własnymi słowami.", "Przypomnij, jak podnieść rękę ✋, jeśli będzie Cię potrzebował."] },
    { t: "Podsumowanie", ph: "Zakończenie", goal: "Uczeń pokazuje swój końcowy projekt, Ty dajesz mu feedback i domykasz dzisiejszą pracę.",
      d: ["Poproś, aby udostępnił ekran i zaprezentował projekt.", "Wskaż jedną konkretną mocną stronę — nie tylko „dobra robota” — i jeden jasny kolejny krok.", "Jeśli coś jest niedokończone, jasno ustal, co się z tym stanie: lekcja nadal potrzebuje prawdziwego zakończenia."] },
    { t: "Refleksja", ph: "Zakończenie", goal: "Chwila, w której uczeń zastanawia się nad tym, czego się nauczył.",
      d: ["Zadaj krótkie pytanie: „Co zrobiłbyś inaczej następnym razem?”", "Pozwól mu odpowiedzieć — nie odpowiadaj za niego.", "To buduje samoocenę, z której korzysta, gdy pracuje sam."] },
    { t: "Zadanie domowe", ph: "Zakończenie", goal: "Przygotuj to, co będzie dalej.",
      d: ["Jasno wyjaśnij zadanie domowe lub kolejny krok.", "Zapowiedz następną lekcję, aby uczeń przyszedł z ciekawością.", "Pożegnaj się w pozytywnym tonie."] }
  ],

  /* ---------- Module checks. "a:" = index of the correct answer (0 = first option). Do NOT change it. ---------- */
  quiz: {
    m1: [
      { q: "Czym jest Lekcja równoległa?",
        o: ["Jeden tutor uczy tej samej lekcji grupę uczniów, którzy wszyscy razem pracują nad jednym wspólnym projektem.",
            "Jeden tutor wspiera 2–5 uczniów w tym samym przedziale czasowym, każdego na jego własnej ścieżce i z pełną 60-minutową lekcją.",
            "Nagrany kurs, który uczniowie przechodzą samodzielnie, bez tutora na żadnym etapie."],
        a: 1, e: "Każdy uczeń ma własną, indywidualną 60-minutową lekcję. Wydłuża się natomiast sesja tutora, aby objąć wszystkich." },
      { q: "Jak Classroom umożliwia Lekcje równoległe?",
        o: ["Wszyscy uczniowie dzielą jeden pokój i na zmianę rozmawiają z tutorem.",
            "Każdy uczeń ma własny pokój, tworzony domyślnie — jak pokoje podgrup, które są już przygotowane.",
            "Tutor tworzy nowe połączenie wideo dla każdego ucznia."],
        a: 1, e: "W konsoli każdy uczeń ma własny pokój. Przechodzisz z pokoju do pokoju; uczniowie nigdy się nie widzą." },
      { q: "Masz 4 uczniów w grupie równoległej. Jak długo trwa Twoja sesja?",
        o: ["60 minut", "90 minut", "240 minut"],
        a: 1, e: "Twoja sesja = 60 min + 10 min za każdego dodatkowego ucznia. Przy 4 uczniach: 60 + 30 = 90 minut. Każdy uczeń nadal ma 60." },
      { q: "Dla jakiego ucznia zaprojektowano ten format?",
        o: ["Dla uczniów w wieku 10+, którzy potrafią pracować samodzielnie, cenią autonomię i lubią wiedzieć, że w razie potrzeby jest obok ekspert.",
            "Dla małych dzieci, które przez całą lekcję potrzebują dorosłego obok siebie.",
            "Dla uczniów, którzy najlepiej uczą się, pracując w zespołach z kolegami z klasy."],
        a: 0, e: "Mniej więcej od 10. roku życia uczniowie potrafią przez dłuższy czas zarządzać własnym skupieniem. Wielu z nich już lubi uczyć się samodzielnie." }
    ],
    /* True / false: a: 0 = True, 1 = False */
    m2: [
      { q: "Na lekcji równoległej tutor tłumaczy teorię i modeluje praktykę dla każdego ucznia.", a: 1,
        e: "Fałsz. Na lekcji równoległej uczeń robi teorię i praktykę samodzielnie, z kartami. Treści są do tego zaprojektowane." },
      { q: "Feedback do projektu ucznia jest udzielany w Podsumowaniu, na końcu lekcji.", a: 0,
        e: "Prawda. Nie ma osobnego etapu feedbacku w środku lekcji: uczeń pokazuje projekt, a Ty dajesz feedback, gdy kończysz lekcję." },
      { q: "Ponieważ środek lekcji jest samodzielny, otwarcie i zakończenie mają mniejsze znaczenie niż w innych formatach.", a: 1,
        e: "Fałsz. Mają jeszcze większe znaczenie: to jedyne momenty, w których każdy uczeń ma Twoją pełną, niepodzieloną uwagę." },
      { q: "Cel lekcji to ostatni etap przed rozpoczęciem przez ucznia pracy samodzielnej.", a: 0,
        e: "Prawda. Po celu lekcji uczeń zaczyna pracę samodzielną z kartami." }
    ],
    m4: [
      { q: "Czym jest „Grupa równoległa” w BackOffice?",
        o: ["Kontenerem, który łączy kilka indywidualnych grup uczniów pod jednym tutorem.",
            "Nowym typem kursu z innym programem.",
            "Wspólną grupą, w której wszyscy uczniowie dołączają do tego samego pokoju."],
        a: 0, e: "To tylko kontener: każdy uczeń nadal zachowuje w nim swoją własną grupę indywidualną, a link dla nauczyciela jest taki sam dla wszystkich." },
      { q: "Gdzie w grupie równoległej śledzi się obecność i przesłane projekty?",
        o: ["W Grupie równoległej, jako jeden wspólny rekord dla całego terminu.",
            "W indywidualnej grupie każdego ucznia — dokładnie tak jak wcześniej.",
            "Nigdzie: lekcje równoległe nie śledzą obecności."],
        a: 1, e: "Nic się tu nie zmienia: obecność, projekty i inne wskaźniki są śledzone w każdej grupie indywidualnej." },
      { q: "Jak powinieneś komunikować się z uczniami grupy równoległej?",
        o: ["Utworzyć jedną grupę WhatsApp ze wszystkimi uczniami z terminu.",
            "Tylko w Classroom, nigdy wiadomościami.",
            "Indywidualnie, wiadomościami bezpośrednimi do każdego ucznia."],
        a: 2, e: "Lekcje równoległe to nauka zindywidualizowana: nigdy nie twórz grup WhatsApp dla terminu. Z każdym uczniem kontaktujesz się indywidualnie." },
      { q: "Jak wcześnie możesz otworzyć konsolę Classroom?",
        o: ["Z listy grup — 60 minut przed lekcją. Z grafiku — 30 minut przed.",
            "Dopiero dokładnie o czasie rozpoczęcia, z dowolnej strony.",
            "Z grafiku — 60 minut przed lekcją. Z listy grup — 10 minut przed."],
        a: 0, e: "Z Grupy równoległej na Twojej liście grup możesz ją otworzyć 60 minut przed lekcją (aż do jej zakończenia). Z grafiku — 30 minut przed." }
    ]
  },

  /* ---------- Module 3 check: the phone conversation with Alex ---------- */
  chat: {
    name: "Alex",
    online: "online",
    typing: "pisze…",
    today: "Dzisiaj",
    waiting: "Czekam na Alexa…",
    alexTyping: "Alex pisze…",
    chooseReply: "Wybierz odpowiedź ↑",
    message: "Wiadomość",
    tapReply: "Kliknij swoją odpowiedź",
    meta: "Sprawdzian modułu {n} · Rozmowa",
    title: "Pomóż ciekawemu koledze",
    intro: "Twój kolega <b>Alex</b> uczy w zwykłych grupach i nie zna jeszcze formatu PL. Ty go przestudiowałeś i nie możesz się doczekać pierwszych lekcji równoległych — odpowiedz na pytania Alexa na telefonie.",
    questionN: "💬 <b>Pytanie {i} z {n}.</b> Przeczytaj wiadomość Alexa i wybierz odpowiedź na telefonie.",
    great: "✅ <b>Świetna odpowiedź!</b> ",
    notBest: "❌ <b>To nie najlepsza odpowiedź.</b> ",
    better: "<b>Lepsza odpowiedź:</b>",
    last: "🏁 <b>To było ostatnie pytanie.</b> Poprawnych odpowiedzi: <b>{s} z {n}</b>.",
    continue: "Kontynuuj rozmowę →",
    result: "Zobacz mój wynik →",
    hi1: "Cześć! 👋",
    hi2: "Słyszałem, że zaczynasz Lekcje równoległe. Mogę zadać Ci kilka pytań na ich temat?",
    hiReply: "Cześć, Alex! Jasne, pytaj, o co chcesz 😊",
    byeGood: "Wielkie dzięki! 🙌 Teraz naprawdę chcę spróbować Lekcji równoległych.",
    byeBad: "Dzięki! Nadal mam wątpliwości, ale doczytam o tym więcej. 🙂",
    /* "a:" = index of the correct reply (0 = first). Do NOT change it. */
    items: [
      { them: "Ten nowy format brzmi ciekawie, ale się gubię. Czy uczenie tego samego pięciorga dzieci osobno nie oznacza dużo więcej pracy?",
        o: ["Tak, to więcej pracy: powtarzasz całą lekcję, razem z teorią, pięć razy z rzędu.",
            "Niekoniecznie, bo uczniowie po prostu oglądają film, a Ty tylko sprawdzasz obecność.",
            "Wcale nie! Ja tylko wprowadzam każdego ucznia w jego naukę i zamykam jego lekcję. Nie modeluję ani nie przedstawiam teorii — robią to karty. To bardziej dojrzały sposób uczenia się."],
        a: 2, ok: "Dokładnie: prowadzisz otwarcie i zakończenie dla każdego ucznia. Teoria, wyjaśnienia dotyczące oprogramowania i modelowanie są w kartach.",
        ko: "Niezupełnie. Na lekcji równoległej nie powtarzasz lekcji dla każdego ucznia: otwierasz i zamykasz każdą lekcję, a teorię i modelowanie przejmują karty." },
      { them: "A czy Twoi uczniowie się nie obrażają, że zostawiasz ich samych?",
        o: ["Hmm, oni już przed zakupem kursu wiedzą, jak to działa, a na pierwszej lekcji wyjaśniam format i to, jak długo będą pracować samodzielnie. To dzieci, które wiedzą, że praca jest niezależna.",
            "Czasem tak, ale po prostu mówię im, że tak to wygląda, i idę do następnego ucznia.",
            "Nie zauważają tego, bo mam włączoną kamerę w każdym pokoju jednocześnie."],
        a: 0, ok: "Właśnie. Ta dynamika jest jasna przed zakupem, a Ty tłumaczysz ją jeszcze raz na pierwszej lekcji, więc uczeń wie, czego się spodziewać.",
        ko: "Niezupełnie. Uczniowie znają tę dynamikę już przed zakupem, a Ty wyjaśniasz format i czas pracy samodzielnej od samej pierwszej lekcji." },
      { them: "Ale co, jeśli się pogubią? Wielu potrzebuje pomocy, a co z problemami technicznymi?",
        o: ["Wtedy czekają do końca lekcji, kiedy w końcu możesz z nimi porozmawiać.",
            "Są krótkie momenty na pomoc temu, kto podniesie rękę. Poza tym lekcja na platformie już to przewiduje: są tam opcje pomocy i kroki na wypadek problemów technicznych. Dlatego tak ważne jest wyjaśnienie formatu.",
            "Zostajesz w pokoju ucznia z problemem, dopóki go nie rozwiążesz, nawet jeśli dołączają inni uczniowie."],
        a: 1, ok: "Dokładnie. Pomagasz uczniom z podniesioną ręką w przerwach, a karty zawierają już pomoc i wskazówki na wypadek problemów technicznych — dlatego jasne wyjaśnienie formatu na początku jest tak ważne.",
        ko: "Niezupełnie. Możesz pomagać uczniom z podniesioną ręką w krótkich przerwach, a lekcja na platformie zawiera już opcje pomocy i wskazówki dotyczące problemów technicznych." },
      { them: "Brzmi ciekawie, jestem teraz spokojniejszy. Czyli treści zostały zmienione na potrzeby tego formatu?",
        o: ["Nie, to dokładnie te same lekcje co w zwykłym kursie — po prostu uczysz ich szybciej.",
            "Tak, wszystko się zmieniło: nowe narzędzia, nowe umiejętności i nowe cele.",
            "Narzędzia, umiejętności i cele, których uczą się uczniowie, są te same, ale lekcje są inne: zaprojektowano je tak, aby uczniowie mogli iść do przodu samodzielnie, z kartami."],
        a: 2, ok: "Tak! Cele nauczania pozostają te same, ale lekcje zostały przeprojektowane pod ten format. Dobra wiadomość: nie musisz uczyć tych samych lekcji w nowym formacie.",
        ko: "Niezupełnie. Uczniowie poznają te same narzędzia, umiejętności i cele, ale same lekcje są inne: zaprojektowano je pod pracę samodzielną." }
    ]
  },

  /* ---------- Module 5: questions & answers ---------- */
  qaLadder: { beats: "ma pierwszeństwo przed", rows: [["Onboarding", "Podniesiona ręka"], ["Zakończenie lekcji (offboarding)", "Podniesiona ręka"], ["Onboarding", "Zakończenie lekcji"], ["Podniesiona ręka", "Szybkie sprawdzenie, jak idzie"]] },
  qaAnna: [
    ["16:10", "Anna powinna dołączyć (16:10–16:20)."],
    ["16:15", "Nie połączyła się: wysyłasz jej wiadomość na WhatsApp i witasz kolejnego ucznia — Mario."],
    ["16:21", "Anna pojawia się w poczekalni, ale jesteś z Mario. Piszesz do niej na WhatsApp, że będziesz z nią za kilka minut."],
    ["16:25", "Kończysz z Mario i witasz Annę."]
  ],
  /* In the answers: {LADDER} = priority list, {ANNA} = Anna's timeline, {VIDEO} = the content video. Keep them as they are. */
  qa: [
    { ic: "⏱️", q: "Jak mam witać nowego ucznia co 10 minut i jednocześnie pomagać wszystkim pozostałym, gdy mam 5 uczniów?",
      a: "<p>Nie odwiedzasz każdego ucznia co kilka minut — idziesz tylko do tego, kto <b>podniesie rękę</b>. Gdy kilka rzeczy dzieje się naraz, obowiązuje taka kolejność:</p>{LADDER}<p>Szybkie sprawdzenie, jak idzie, odbywa się tylko wtedy, gdy nie ma nikogo do powitania, nikogo do pożegnania i nikt nie podniósł ręki.</p>" },
    { ic: "🚦", q: "Jeśli problem techniczny pochłonie 10 minut onboardingu i w tym momencie przychodzi kolejny uczeń, kto jest pierwszy?",
      a: "<p>Priorytet ma uczeń, który przyszedł punktualnie. Uczniowi z problemem technicznym pomagasz <b>dopiero po</b> zakończeniu pracy z tym, kto przyszedł na czas, zgodnie z tą samą kolejnością priorytetów:</p>{LADDER}" },
    { ic: "🌍", q: "Jaki jest zakres PL — czy to test?",
      a: "<p>PL w pełni zastępuje <b>format Premium</b> w wybranych kursach. Dlatego tutorzy tych kursów są w nim szkoleni. Format został już przetestowany w innych dużych regionach, w tym w Brazylii i Ameryce Łacińskiej, z bardzo pozytywnymi wynikami.</p>" },
    { ic: "🎬", q: "Czy treści są takie same jak w zwykłym kursie?",
      a: "<p><b>Narzędzia, umiejętności i cele</b>, których uczą się uczniowie, są te same. <b>Lekcje są inne</b>: napisano je dla bardziej dojrzałego, bardziej samodzielnego ucznia i zaprojektowano tak, by uczeń nie zależał w 100% od Ciebie w ukończeniu lekcji. Dobra wiadomość: nie będziesz uczyć tych samych lekcji co dotąd w nowym formacie.</p><h4>Na czym opiera się ten format</h4><p>Lekcja opiera się na <b>podejściu dedukcyjnym</b>: uczeń najpierw widzi gotowy projekt, potem sprawdza, jak powstał, i stosuje tę zasadę w swoim projekcie.</p><p><b>Feedback: tutor + samoocena.</b> Nie ma feedbacku od rówieśników. AI nie jest używane na pierwszych lekcjach; na dalszych lekcjach modułu AI dochodzi jako trzeci kanał feedbacku tam, gdzie to właściwe.</p><p>Głównym celem jest poczucie: <i>„Sam potrafię stworzyć działający projekt cyfrowy”.</i> Błędy są normalną częścią procesu twórczego.</p><p>Obejrzyj ten film, aby zrozumieć, jak zmieniają się treści — dla Ciebie i dla ucznia:</p>{VIDEO}" },
    { ic: "👥", q: "Jaka jest maksymalna liczba uczniów w grupie Lekcji równoległej?",
      a: "<p>Maksymalnie <b>5 uczniów / 100 minut</b>.</p>" },
    { ic: "💙", q: "Jak prowadzić lekcję PL z uczniami z niepełnosprawnościami lub takimi, którzy potrzebują więcej uwagi i wsparcia?",
      a: "<p>CS zostawi notatkę zawsze, gdy uczeń ma znaną niepełnosprawność, jak zwykle. Jeśli zauważysz, że format PL nie jest odpowiedni dla danego ucznia, <b>omów ten przypadek ze swoim TL</b>, a wspólnie znajdziemy najlepsze rozwiązanie.</p><p>W wielu przypadkach ten format może działać <i>lepiej</i> niż tradycyjna lekcja grupowa, ponieważ uczeń nadal otrzymuje indywidualną uwagę. Pytania o samodzielność, pracę indywidualną i wcześniejsze doświadczenie z kursami we własnym tempie padają już na lekcji próbnej — jeśli uczeń nie czułby się komfortowo w PL, po prostu nie jest mu proponowany ten format.</p>" },
    { ic: "⏰", q: "Jaki jest protokół wobec uczniów, którzy się spóźniają?",
      a: "<p>Każdy uczeń dołącza w odstępie 10 minut (np. 16:00, 16:10, 16:20…). Onboarding i zakończenie jednego ucznia zajmuje w praktyce około 6–7 minut, więc zawsze masz pewien zapas.</p><h4>Jeśli uczeń nie dołączy w ciągu pierwszych 5 minut</h4><ul><li>Napisz do niego lub do jego opiekuna bezpośrednio na WhatsApp.</li><li>Jeśli jego czas minie, a on nadal nie dołączył, witaj kolejnego ucznia — nie czekasz w nieskończoność.</li><li>Jeśli uczeń dołączy z opóźnieniem, wpuść go, ale najpierw skończ z uczniem, który jest już w trakcie.</li><li>Spóźniony uczeń <b>nie</b> dostaje pełnej 60-minutowej lekcji — kończy się ona wraz z końcem pierwotnie zaplanowanego dla niego czasu.</li></ul><h4>Przykład: Anna</h4>{ANNA}<p>Zaplanowany czas Anny: <b>16:10–17:10</b> → jej faktyczny czas po spóźnieniu: <b>16:25–17:10</b>.</p>" },
    { ic: "👤", q: "Co robić, jeśli na lekcję przyjdzie tylko jeden uczeń?",
      a: "<p>Przeprowadź lekcję PL zgodnie z planem, <b>bez jej przekładania</b>. Trzymaj się zwykłej struktury lekcji i zachowaj ten sam przebieg, jaki miałbyś z pełną grupą.</p><p>Dzięki temu lekcje pozostają spójne, a uczeń nie zaczyna oczekiwać, że poświęcisz mu całą lekcję na indywidualną uwagę.</p>" },
    { ic: "📅", q: "Co się dzieje, jeśli uczniowie powiedzą, że nie przyjdą na lekcję?",
      a: "<p>Zwykła <b>zasada 12 godzin</b> się nie zmienia:</p><ul><li><b>Ponad 12 godzin przed lekcją:</b> stosuj standardowy proces przekładania/zmiany terminu.</li><li><b>Mniej niż 12 godzin przed lekcją:</b> lekcja jest odliczana z salda klienta.</li></ul><p>Kolejne lekcje przebiegają zgodnie z planem: <b>nie pomijaj żadnej lekcji ani nie zmieniaj kolejności</b>. Na przykład, jeśli opuszczona lekcja to M3L4, następna lekcja to nadal M3L4.</p>" },
    { ic: "💬", q: "Czy potrzebuję grupy WhatsApp ze wszystkimi uczniami z grupy równoległej?",
      a: "<p>Nie. PL to nauka zindywidualizowana: tutorzy <b>nie</b> mogą tworzyć grup WhatsApp dla uczniów z terminu. Każdy uczeń jest traktowany indywidualnie, a cała komunikacja odbywa się w wiadomościach bezpośrednich.</p>" },
    { ic: "🔄", q: "Czy wszystkie kursy przejdą na ten format? Czy to nowy standard w Kodland?",
      a: "<p>Nie — PL zastępuje tylko format Premium, w wybranych kursach.</p>" },
    { ic: "👪", q: "Czy rodzice wiedzą o tym formacie podczas zapisu?",
      a: "<p>Tak. Rodzice są informowani o formacie PL podczas zapisu, w ramach procesu komunikacji dla wybranych kursów.</p>" },
    { ic: "💰", q: "Jak działa wynagrodzenie w PL?",
      a: "<p>W sprawie wynagrodzenia w PL i szczegółowych wyliczeń <b>skontaktuj się ze swoim TL</b>.</p>" }
  ]
};
