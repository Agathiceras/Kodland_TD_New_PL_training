/* =====================================================================
   MODULE 0 · MINDSET — CONTENT FILE (Brazilian Portuguese)
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

  lang: "pt",

  /* ---------- The module card and header ---------- */
  module: {
    e: "🌱",
    title: "Um começo com confiança",
    desc: "Antes de qualquer método ou ferramenta: por que estamos mudando, o que estar pronto realmente significa e quem está ao seu lado.",
    obj: "Comece o lançamento com uma mentalidade confiante e positiva. Este módulo leva cerca de 20 minutos: 4 seções curtas, um encerramento e uma verificação de 5 perguntas.",
    offer: [
      ["👋", "Entender por que estamos mudando — e por que a sua experiência importa."],
      ["✅", "Saber o que significa estar “pronto” quando as aulas ainda não estão disponíveis."],
      ["🤝", "Saber exatamente a quem pedir ajuda, e como."],
      ["💬", "Ver como os novos cursos respondem ao que tutores e alunos nos disseram."]
    ],
    sections: {
      welcome: "Boas-vindas, e por que estamos mudando",
      ready: "O que “estar pronto” significa agora",
      alone: "Você nunca está sozinho",
      voice: "Feitos com a sua voz, amados pelos alunos",
      start: "Você está pronto para começar",
      survey: "Como você se sente?"
    }
  },

  /* ---------- Section 1 ---------- */
  welcome: {
    intro: "<b>Boas-vindas!</b> Você faz parte deste lançamento porque já sabe ensinar e se conectar com as crianças. Este treinamento parte do que você já faz bem. Ele não começa do zero — e você também não.",
    howTitle: "Como fazer este treinamento",
    how: "Vá no seu ritmo, com curiosidade e sem pressão. Você não precisa decorar nada nem ser perfeito: o objetivo é se sentir à vontade com o método e saber onde encontrar o que precisa. Uma mistura de entusiasmo e um pouco de incerteza é completamente natural diante de algo novo. Isso só mostra que você se importa em fazer bem.",
    prepTitle: "Para o que este treinamento prepara você",
    prep: {
      em: {
        intro: "Depois deste módulo de mentalidade, o treinamento mostra tudo o que você precisa para as suas primeiras aulas:",
        items: [
          ["🧩", "O novo modelo", "Como as aulas são construídas, como funciona o feedback e como orientar os alunos quando eles usam IA."],
          ["🛠️", "Preparação técnica", "Backoffice e Teacher Notes, o Classroom com o Follow Mode e o Kodland Sparks — com três simulações práticas que você pode repetir quantas vezes quiser."],
          ["⭐", "Qualidade da aula", "Como uma aula é estruturada e os hábitos que a mantêm no rumo: uma boa abertura, perguntas que fazem pensar e um encerramento claro."],
          ["🤖", "Prompts para tutores", "Como escrever um bom prompt e ajudar os alunos a escrever os seus."],
          ["📚", "O seu curso", "Um treinamento curto e informativo sobre o curso específico que você vai dar."],
          ["📝", "Um teste final", "Ele é liberado quando você conclui o material."]
        ]
      },
      pl: {
        intro: "Depois deste módulo de mentalidade, o treinamento se concentra no formato Parallel Lessons:",
        items: [
          ["⚡", "Como funcionam as Parallel Lessons", "Vários alunos no mesmo horário, cada um no seu próprio caminho."],
          ["🧭", "Conduzindo o horário", "Receber os alunos, manter cada um avançando e dar a todos momentos individuais dedicados."],
          ["🎮", "Prática", "Simuladores do Backoffice e do Classroom para ensaiar uma aula PL real antes da sua primeira aula ao vivo."],
          ["📝", "Um teste final", "Ele é liberado quando você conclui o material."]
        ]
      }
    },
    simsTitle: "Não pule os simuladores: é neles que a sua confiança se constrói",
    sims: "Ler sobre uma nova aula é útil, mas é fazendo que ela se torna familiar. Os simuladores permitem praticar cada passo real de uma aula — desde abri-la no Backoffice até conduzi-la no Classroom — em um espaço seguro, onde nada pode dar errado. Repita quantas vezes precisar e volte a eles antes da sua primeira aula ao vivo: até lá, cada clique já vai parecer natural.",
    whyTitle: "Por que estamos mudando",
    why: {
      em: "As crianças de hoje aprendem de outro jeito: querem construir coisas reais rapidamente, testar, errar, corrigir e mostrar o que fizeram. O nosso novo Modelo Educacional foi pensado para isso. Cada aula parte de um resultado pronto, os erros fazem parte do processo e a IA é usada de um jeito adequado a cada idade. Alguns cursos são totalmente novos; outros são cursos que você já conhece, renovados com o novo método.",
      pl: "Muitas famílias esperam bastante tempo para começar um curso individual ou premium, porque os horários não batem. As Parallel Lessons resolvem isso: você acompanha de 2 a 5 alunos ao mesmo tempo, cada um no seu próprio caminho. Os alunos começam mais rápido, e você ganha mais flexibilidade na sua agenda. Parece uma aula normal, com momentos individuais dedicados a cada aluno."
    },
    meansTitle: "O que isso significa para você",
    means: "As habilidades que fazem de você um bom tutor hoje — explicar com clareza, manter as crianças engajadas, perceber quem precisa de ajuda — são exatamente as habilidades de que os novos cursos precisam. O que muda é o método e a estrutura, e é isso que este treinamento oferece a você."
  },

  /* ---------- Section 2 ---------- */
  ready: {
    intro: "Durante o seu treinamento, talvez você ainda não veja as aulas do curso: o conteúdo é finalizado perto do lançamento. <b>Todas as aulas estarão no Backoffice antes do início do seu curso.</b> O treinamento prepara você para todo o resto, para que esteja pronto assim que as aulas chegarem.",
    listIntro: "Estar pronto não depende de ter visto todas as aulas durante o treinamento. Significa que você consegue dizer estas cinco coisas. Toque em cada uma que você já sente que é verdade — o treinamento ajuda você com o resto:",
    items: [
      "<b>Eu entendo o método:</b> como uma aula flui e por quê.",
      "<b>Eu conheço a estrutura:</b> módulos, formato da aula e onde cada parte fica no Backoffice.",
      "<b>Eu me sinto seguro com a parte técnica:</b> o Backoffice, o Classroom e as ferramentas que uso em aula, praticados nos simuladores até parecerem naturais.",
      "<b>Eu conheço a minha rotina:</b> o conteúdo da aula agora aparece diretamente no Backoffice, tudo em um só lugar, sem precisar da Wiki. Ler as Teacher Notes ali antes de cada aula é responsabilidade minha.",
      "<b>Eu sei a quem pedir ajuda:</b> primeiro ao meu mentor regional, e ao meu TL para grupos e horários."
    ],
    allTicked: "🌟 É assim que “estar pronto” se parece — e você vai sentir isso cada vez mais a cada módulo.",
    beginnerTitle: "Permita-se ser iniciante de novo",
    beginner: "Até o tutor mais experiente dá um curso novo pela primeira vez. Pedimos às crianças que digam <i>“ainda não está funcionando, vamos encontrar uma estratégia”</i>, e o mesmo vale para nós: as suas primeiras aulas são o seu protótipo. Cada uma vai parecer mais fácil que a anterior, e vamos apoiar você em cada passo."
  },

  /* ---------- Section 3 ---------- */
  alone: {
    intro: "O seu mentor regional conhece os novos cursos e está ao seu lado para apoiar você em cada lançamento. Pedir ajuda é o que os profissionais fazem: é assim que bons tutores se tornam excelentes. <b>Você não precisa de um problema nem de um flag para entrar em contato.</b>",
    mentorTitle: "O seu mentor",
    regionLabel: "Região",
    /* Only the line of the training’s language is shown */
    mentors: {
      en: [["UK", ["Gülay", "Syfa Nurafni Siregar"]], ["USA", ["Gülay"]], ["GCC", ["Syfa Nurafni Siregar"]]],
      es: [["LATAM (incl. Espanha)", ["Priscila Aabye", "Laura Orozco", "Camilo Mahecha"]]],
      pt: [["Brasil", ["Lucas Correia Souza da Silva"]]],
      tr: [["MENA", ["Betül Topkan", "Saner Aykanat"]]],
      ar: [["MENA", ["Betül Topkan", "Saner Aykanat"]], ["GCC", ["Syfa Nurafni Siregar"]]],
      id: [["Indonésia", ["Syfa Nurafni Siregar"]]],
      ru: [["CIS", ["Raisa Pabiarzhyna"]]],
      it: [["Itália", ["Gianfranco Barba"]]],
      pl: [["Polônia", ["Daria Kalicka"]]]
    },
    forTitle: "O seu mentor é sempre o seu primeiro contato. Procure o seu mentor para:",
    forItems: [
      ["🧑‍🏫", "Questões de gestão da turma"],
      ["📚", "Dúvidas sobre um novo curso ou formato"],
      ["⚙️", "Apoio para conduzir as suas aulas com tranquilidade"],
      ["🤝", "Preparar uma aula juntos, ou uma conversa rápida para ganhar confiança antes da sua primeira aula"]
    ],
    tl: "<b>Para grupos e horários</b>, fale com o seu TL.",
    sessionTitle: "Prefere uma sessão mais longa?",
    sessionSteps: [
      "Entre no <b>LMS</b> com a sua conta do Backoffice.",
      "Vá até <b>Coaching</b> e escolha um horário.",
      "Escreva em uma linha com o que você gostaria de ajuda — por exemplo, <i>“Primeira aula de [curso]”</i>."
    ],
    dm: "<b>Não está se sentindo seguro, por qualquer motivo?</b> Mande uma DM para o seu mentor. Isso basta: sem formulário, sem flag, sem precisar explicar."
  },

  /* ---------- Section 4 ---------- */
  voice: {
    intro: "Os novos cursos não surgem do nada: eles respondem ao que tutores, alunos e famílias nos disseram. Aqui está um pouco do que ouvimos — toque em cada item para ver o que mudou por causa disso.",
    toldLabel: "Vocês nos disseram",
    soLabel: { em: "Então os novos cursos…", pl: "Então as Parallel Lessons…" },
    tapHint: "Toque para ver o que mudou →",
    told: {
      em: [
        ["Preparar uma aula leva tempo demais, pulando entre os slides e um guia separado na Wiki.", "Reúnem tudo em um só lugar: Teacher Notes em cada slide, um plano de aula com os tempos e um vídeo curto de briefing no slide 1."],
        ["Manter o grupo inteiro no mesmo slide é difícil.", "Usam o Follow Mode: os alunos veem exatamente o seu slide, e as suas notas continuam ocultas."],
        ["A dificuldade nem sempre corresponde à idade do grupo.", "São organizados por faixa etária (8–9, 10–12, 13+), e em Matemática as tarefas vão do simples ao complexo em níveis bem identificados."],
        ["As crianças perdem a motivação quando não conseguem ver o que estão construindo.", "Começam cada aula pelo resultado pronto, e os alunos publicam o projeto no Kodland Sparks, onde outros podem ver e reagir."],
        ["É difícil saber quem realmente entendeu a aula.", "Terminam cada aula com uma verificação do resultado, e cada tarefa entregue é acompanhada, para que você veja quem precisa de ajuda."]
      ],
      pl: [
        ["Os alunos esperam tempo demais até que um curso individual ou um grupo premium possa começar.", "Permitem que os alunos comecem muito mais rápido: você acompanha de 2 a 5 alunos ao mesmo tempo, cada um no seu próprio caminho."],
        ["Horários fixos dificultam preencher a sua semana.", "Dão a você mais flexibilidade: os alunos entram no mesmo horário mesmo estando em aulas diferentes."],
        ["Gerenciar vários alunos ao mesmo tempo parece estressante.", "Vêm com um treinamento sobre o formato e um simulador, para você praticar antes da sua primeira aula ao vivo."],
        ["Os alunos de um grupo avançam em ritmos diferentes.", "Deixam cada aluno avançar no seu próprio ritmo, com momentos individuais dedicados com você."]
      ]
    },
    firsts: "Alguns cursos são totalmente novos, e você está entre os primeiros a ensiná-los. Isso torna a sua voz ainda mais importante: depois das suas primeiras aulas, <b>conte ao seu mentor o que funcionou e o que não funcionou</b>. O seu feedback vai dar forma à próxima versão."
  },

  /* ---------- Closing ---------- */
  start: {
    text: "Você sabe por que estamos mudando, o que significa “estar pronto” e quem está ao seu lado. Agora mergulhe no treinamento com curiosidade: pratique nos simuladores quantas vezes quiser e aproveite ser um dos primeiros a levar algo novo aos nossos alunos.",
    dm: "Se em algum momento você não se sentir seguro, <b>basta mandar uma DM para o seu mentor.</b>"
  },

  /* =====================================================================
     SURVEYS (Module 0, before the check · Final module)
     Keys in [key, "label"] pairs (excited, too_short…) and question ids are NOT translated:
     they are what arrives in the Google Sheet. Translate only the labels.
     ===================================================================== */
  survey: {
    emailLabel: "O seu e-mail corporativo da Kodland",
    emailPlaceholder: "nome.sobrenome@kodland.org",
    emailError: "Escreva o seu e-mail corporativo da Kodland (ele termina em @kodland…).",
    regionLabel: "A sua região",
    regionPlaceholder: "Escolha a sua região…",
    regionError: "Escolha a sua região.",
    missing: "Responda a todas as perguntas marcadas com ★.",
    send: "Enviar minhas respostas",
    sending: "Enviando…",
    thanks: "✅ <b>Obrigado!</b> As suas respostas foram enviadas.",
    again: "Enviar novamente",
    low: "Nem um pouco",
    high: "Totalmente",
    optional: "opcional",
    openPlaceholder: "Escreva o que quiser…",
    lockMsg: "Envie a pesquisa de satisfação acima para liberar a verificação.",
    lockWhat: "a pesquisa de satisfação"
  },
  /* Regions for the survey: [key, "label"]. Keys are not translated. */
  regions: [
    ["brazil", "Brasil"], ["latam", "LATAM (incl. Espanha)"], ["mena", "MENA"], ["italy", "Itália"], ["poland", "Polônia"],
    ["uk", "UK"], ["usa", "USA"], ["indonesia", "Indonésia"], ["gcc", "GCC"], ["cis", "CIS"]
  ],
  /* Feelings and training length: [key, "label"] */
  feelings: [["excited", "🤩 Animado"], ["curious", "🤔 Curioso"], ["calm", "😌 Tranquilo"], ["unsure", "😕 Inseguro"], ["worried", "😟 Preocupado"], ["overwhelmed", "😵 Sobrecarregado"]],
  lengths: [["too_short", "Curto demais"], ["just_right", "Na medida certa"], ["too_long", "Longo demais"]],

  /* ---------- Module 0 survey (section before the check) ---------- */
  startSurvey: {
    title: "Antes da verificação: como você se sente?",
    intro: "Um check-in rápido — não há respostas certas ou erradas. Ele ajuda o seu mentor e a equipe a apoiar você melhor. Envie para liberar a verificação do módulo.",
    gifAlt: "Como você se sente?",
    questions: [
      { id: "feeling", type: "choice", q: "Como você se sente agora em relação a este novo lançamento?" },
      { id: "confidence", type: "scale", q: "Quão seguro você se sente para dar este novo curso ou formato?" },
      { id: "understand_why", type: "scale", q: "Eu entendo por que estamos fazendo esta mudança." },
      { id: "know_where", type: "scale", q: "Eu sei onde encontrar o que preciso e a quem pedir ajuda." },
      { id: "worries", type: "open", optional: true, q: "O que mais te preocupa neste lançamento?" }
    ]
  },

  /* ---------- FINAL MODULE: your first-lesson mindset ---------- */
  final: {
    e: "🌟",
    title: "A sua mentalidade para a primeira aula",
    desc: "Imagine a sua primeira aula dando certo, associe cada preocupação a um recurso e conte para nós como você se sente agora.",
    obj: "Imagine a sua primeira aula dando certo: você abre com o resultado pronto, as crianças ficam curiosas, você segue as notas com facilidade e termina com algo de que elas se orgulham. Essa imagem é realista, e este módulo ajuda você a chegar lá.",
    offer: [
      ["✨", "Imaginar a sua primeira aula dando certo."],
      ["🧩", "Associar cada preocupação a um recurso."],
      ["💬", "Contar como você se sente agora."]
    ],
    sections: { mind: "Imagine a sua primeira aula", survey: "Como você se sente agora" },
    mind: {
      intro: "Reserve dois minutos e responda para si mesmo. <b>Só você vê estas anotações</b> — elas ficam neste navegador e não são enviadas a lugar nenhum.",
      q1: "1. O que mais me entusiasma neste novo curso ou formato?",
      q2: "2. O que mais me preocupa?",
      q3: "3. Para cada preocupação: qual recurso ajuda?",
      placeholder: "Escreva algumas palavras…",
      resources: [["📒", "Teacher Notes"], ["🎮", "Simuladores"], ["💬", "DM ou sessão com o mentor"], ["👥", "TL"]],
      resourcesHint: "Toque nos recursos que respondem às suas preocupações:",
      answerTitle: "Toda preocupação tem uma resposta",
      answer: "Momentos inesperados fazem parte de qualquer aula nova: uma pergunta sobre a qual você não tem certeza, uma tarefa que se comporta de outro jeito, um grupo que avança mais rápido ou mais devagar que o previsto. Você já praticou esses momentos nos simuladores e pode voltar a eles quantas vezes precisar. Para todo o resto, o seu mentor está a uma mensagem de distância.",
      afterTitle: "Depois das suas primeiras aulas",
      after: "Observe <b>o que deu certo</b> antes do que melhorar, e depois conte as duas coisas ao seu mentor. O seu feedback vai para a equipe de Produto e dá forma à próxima versão do curso.",
      ready: "<b>Você está pronto.</b> Você conhece o porquê, o método, a sua rotina e a quem recorrer. E se em algum momento não se sentir pronto, basta mandar uma DM para o seu mentor."
    },
    survey: {
      title: "Uma última reflexão: como você se sente agora?",
      intro: "Isto não é um teste — não há respostas certas ou erradas. As suas respostas ajudam a equipe a melhorar o treinamento e os cursos. Envie-as para concluir o treinamento.",
      groups: [
        { title: "Como você se sente", questions: [
          { id: "feeling", type: "choice", q: "Como você se sente agora em relação a este novo lançamento?" },
          { id: "confidence", type: "scale", q: "Quão seguro você se sente para dar este novo curso ou formato?" },
          { id: "understand_why", type: "scale", q: "Eu entendo por que estamos fazendo esta mudança." },
          { id: "know_where", type: "scale", q: "Eu sei onde encontrar o que preciso e a quem pedir ajuda." }
        ] },
        { title: "A sua confiança para ensinar", questions: [
          { id: "ready_first_lesson", type: "scale", q: "Eu me sinto pronto para conduzir a minha primeira aula do começo ao fim." },
          { id: "manage_format", type: "scale", q: { em: "Eu me sinto seguro para conduzir o grupo com o novo formato (Follow Mode).", pl: "Eu me sinto seguro para acompanhar os meus alunos com o novo formato (Parallel Lessons)." } },
          { id: "ready_tools", type: "scale", q: "Eu me sinto pronto para usar o Backoffice, o Classroom e as ferramentas em aula." }
        ] },
        { title: "Os materiais do treinamento", questions: [
          { id: "training_clear", type: "scale", q: "O treinamento foi claro e fácil de acompanhar." },
          { id: "simulators_helped", type: "scale", q: "Os simuladores me ajudaram a me sentir mais seguro." },
          { id: "training_length", type: "length", q: "A duração do treinamento foi:" }
        ] }
      ]
    },
    ctaTitle: "Conclua o treinamento",
    ctaText: "Envie a sua reflexão acima para concluir este último módulo.",
    ctaBtn: "Concluir o treinamento →",
    done: "Obrigado por compartilhar como você se sente — você concluiu o treinamento."
  },

  /* ---------- Knowledge check: 5 scenario questions. "a" = index of the right answer (0 = first). Keep it. ---------- */
  quiz: [
    { q: "Você está fazendo o seu treinamento e as aulas do curso ainda não estão disponíveis. O que você faz?",
      o: ["Espera as aulas chegarem antes de começar o treinamento.",
          "Conclui o treinamento sobre o método e a estrutura: as aulas estarão no Backoffice antes do início do curso.",
          "Procura material parecido na Wiki."],
      a: 1, e: "Estar pronto não depende de ver todas as aulas: o treinamento prepara você para todo o resto, e todas as aulas estarão no Backoffice antes do início do seu curso." },
    { q: "Faltando poucos dias para a sua primeira aula, você não se sente seguro. O que você faz?",
      o: ["Guarda isso para si e torce para dar certo.",
          "Manda uma DM para o seu mentor.",
          "Pede para sair do curso."],
      a: 1, e: "Uma DM para o seu mentor basta: sem formulário, sem flag, sem precisar explicar." },
    { q: "Você gostaria de ajuda para preparar a sua primeira aula. Qual é o caminho mais rápido?",
      o: ["Mandar uma DM para o seu mentor regional ou agendar uma sessão no LMS.",
          "Esperar até receber um flag.",
          "Pedir feedback ao responsável de um aluno."],
      a: 0, e: "Você não precisa de um problema nem de um flag para entrar em contato: mande uma mensagem para o seu mentor ou agende um horário de Coaching no LMS." },
    { q: "Um passo do treinamento ainda não está claro para você. Qual é a melhor atitude?",
      o: ["Parar o treinamento até alguém entrar em contato com você.",
          "Repetir o simulador e, se ainda não estiver claro, mandar uma mensagem para o seu mentor.",
          "Pular: você descobre na aula."],
      a: 1, e: "É nos simuladores que a confiança se constrói — repita quantas vezes precisar, e o seu mentor está sempre lá para o que ainda não estiver claro." },
    { q: "A sua primeira aula não saiu como planejado. Qual mentalidade combina melhor?",
      o: ["“Este curso não é para mim.”",
          "“Ainda não está funcionando: vou anotar uma melhoria e conversar com o meu mentor.”",
          "“Vou esperar alguém resolver.”"],
      a: 1, e: "As suas primeiras aulas são o seu protótipo: cada uma parece mais fácil que a anterior, e o seu feedback dá forma à próxima versão." }
  ]
};
