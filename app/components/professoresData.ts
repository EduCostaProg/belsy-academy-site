export type Professor = {
  slug: string;
  nome: string;
  idioma: string;
  fundadora?: boolean;
  rotate: number;
  resumo: string;
  credenciais: string;
  localizacao?: string;
  interesses?: string;
  bio: string[];
};

export const professores: Professor[] = [
  {
    slug: "isabela",
    nome: "Isabela",
    idioma: "Inglês & Espanhol",
    fundadora: true,
    rotate: 3,
    resumo:
      "A mente por trás da Belsy. 9 anos ensinando inglês e 3 de espanhol — especialista em Fonética e Fonologia, com métodos baseados em psicologia pra te levar à fluência na metade do tempo.",
    credenciais:
      "Fundadora da Belsy · Especialista em Fonética e Fonologia · 9 anos de inglês, 3 de espanhol",
    interesses:
      "Mente inquieta: de Perícia Criminal a Game Design (faz jogos!), fã de música do pop Disney ao Metal, musculação e viagens.",
    bio: [
      "Hello, sou a Bela! Sou apaixonada por idiomas desde os 5 anos de idade, quando a música me despertou o desejo de entender o mundo. Hoje, com 9 anos de experiência no ensino de inglês e 3 no espanhol (além de falar francês e me aventurar no alemão), sou a mente por trás da Belsy!",
      "Sou especialista em Fonética e Fonologia e também preparo alunos para o mercado de trabalho. Utilizo métodos baseados em psicologia para que meus alunos alcancem a fluência na metade do tempo que eu levei para alcançar a minha, além de treinar outros professores para que entreguem aulas muito mais práticas e prazerosas.",
      "Para além das salas de aula, sou uma mente inquieta e curiosa: já estudei de Perícia Criminal a Game Design (sim, eu sei fazer jogos!!) e sou extremamente fã de música, indo do pop Disney ao Metal. Entre meus treinos de musculação, viagens e estudos aleatórios, sigo acreditando que falar uma língua estrangeira é a chave para realizar sonhos e acessar lugares inimagináveis.",
      "Meu objetivo é fazer com que cada aluno viva essa mesma liberdade e encontre um universo de oportunidades através da comunicação. ✨",
    ],
  },
  {
    slug: "eduardo",
    nome: "Eduardo",
    idioma: "Inglês",
    rotate: -4,
    resumo:
      "Aprendeu inglês de forma autodidata — games, séries e conversa real em jogos online. Hoje atua com desenvolvimento de software e ensina inglês prático pra você perder o medo de falar.",
    credenciais: "Autodidata · Atua com desenvolvimento de software · Inglês prático",
    bio: [
      "Hey guys, sou o Eduardo! Tenho formação construída de forma autodidata, prática e aplicada ao mundo real. Comecei a aprender inglês ainda cedo, impulsionado por vídeo games, séries e conteúdos em inglês, o que me ajudou a desenvolver uma compreensão natural do idioma.",
      "Apesar de ter passado por um curso tradicional, o grande diferencial do meu aprendizado foi a imersão constante na conversação, principalmente ao interagir com estrangeiros em jogos online, onde o inglês era a única forma de comunicação. Essa vivência me forçou a evoluir rapidamente, lidando com sotaques, gírias e situações reais do dia a dia.",
      "Com o tempo, o inglês deixou de ser apenas um interesse e se tornou essencial para meus estudos e para minha carreira profissional. Atuo na área de desenvolvimento de software, onde grande parte dos conteúdos técnicos, documentações, cursos, artigos e ferramentas estão disponíveis exclusivamente em inglês. Isso fez com que o idioma se tornasse uma ferramenta indispensável no meu crescimento profissional e acadêmico.",
      "Meu método de ensino é voltado para quem deseja usar o inglês de forma prática, seja para estudos, trabalho ou conversação. O foco é ajudar o aluno a perder o medo de falar, entender o inglês como ele é realmente usado e desenvolver autonomia na língua, indo além da gramática tradicional. 📚",
    ],
  },
  {
    slug: "bernardo",
    nome: "Bernardo",
    idioma: "Inglês",
    rotate: -2,
    resumo:
      "Professor de inglês há 3 anos (presencial e online), autodidata de nível avançado. Ensino prático, acessível e conectado ao dia a dia, focado em confiança e comunicação real.",
    credenciais:
      "Autodidata de nível avançado · 3 anos lecionando inglês (presencial e online)",
    interesses: "Leitura e corrida.",
    bio: [
      "Hey, sou o Bernardo! Sou professor de inglês, autodidata, com formação de nível avançado e uma paixão genuína pelo aprendizado contínuo. Leciono inglês há 3 anos, tanto de forma presencial quanto online. Ao longo da minha trajetória, desenvolvi o idioma de forma independente, o que me permite entender de perto os desafios e conquistas de quem está aprendendo uma nova língua.",
      "Acredito em um ensino prático, acessível e conectado ao dia a dia, valorizando a confiança e a comunicação real dos alunos. Ensinar inglês, para mim, é mais do que transmitir conteúdo: é conectar pessoas ao mundo. 🌍",
      "Fora da sala de aula, gosto de atividades que estimulam a mente e o corpo, como a leitura e a corrida.",
    ],
  },
  {
    slug: "kamila",
    nome: "Kamila",
    idioma: "Inglês",
    rotate: -3,
    localizacao: "Búzios — RJ",
    resumo:
      "Professora de inglês desde 2023, tradutora e intérprete. Chegou à fluência de forma autodidata e entende o aluno como ninguém — aulas leves, pacientes e descontraídas (às vezes com um dos seus 10 gatos 🐾).",
    credenciais: "Professora de inglês desde 2023 · Tradutora e intérprete · Autodidata",
    interesses:
      "Gatos (tem 10!), livros, música, palavras cruzadas, sudoku, quebra-cabeças e natureza.",
    bio: [
      "Hello! Meu nome é Kamila Victoria, sou professora de inglês desde 2023 e tradutora e intérprete desde 2025.",
      "Sempre tive interesse em línguas estrangeiras, principalmente o inglês desde cedo. Além disso, sempre foi um prazer ajudar as pessoas a se entenderem quando há barreiras linguísticas; por isso, também me profissionalizei como intérprete e tradutora. Alcancei a proficiência de forma autodidata, mas reconheço o valor de um bom professor para quem está aprendendo; por isso decidi ser professora e ajudar o máximo de pessoas a alcançarem seus sonhos. Por ter passado pelos desafios de estudar sozinha uma língua nova, prezo em levar conhecimento aos alunos, para que não enfrentem todas as dificuldades pelas quais passei.",
      "Na vida pessoal, sou apaixonada por gatos, livros, música, e curiosidades. Adoro fazer palavras cruzadas, jogar sudoku, montar quebra-cabeças. Me interesso profundamente pela natureza e amo todos os animais do mundo. Tenho 10 gatos muito fofos e, quando possível, aproveito para mostrá-los aos alunos pra dar uma descontraída.",
      "Meu objetivo principal é tranquilizar os alunos e utilizar toda a paciência que tenho para guiá-los à fluência, contando com aulas leves e despojadas. Durante elas, foco no entendimento do aluno, reforçando dicas de memorização e auxiliando em quaisquer dúvidas que possam surgir. 💡",
    ],
  },
  {
    slug: "camila",
    nome: "Camila",
    idioma: "Inglês",
    rotate: 4,
    resumo:
      "Estudante de Pedagogia com +8 anos de inglês e 3 ensinando (presencial e online). Aulas dinâmicas, lúdicas e acolhedoras — com experiência internacional como camp counselor, trabalhando com crianças no exterior.",
    credenciais:
      "Estudante de Pedagogia · +8 anos de inglês, 3 lecionando · Ex-camp counselor",
    interesses: "Arte e contato com a natureza.",
    bio: [
      "Hi, sou a Camila! Sou estudante de Pedagogia e tenho formação em inglês, com mais de oito anos de estudo da língua e três anos atuando no ensino de inglês de forma presencial e online, sempre buscando aulas dinâmicas, lúdicas e acolhedoras.",
      "Também tive uma experiência internacional como camp counselor! Trabalhando diretamente com crianças em um acampamento no exterior, o que fortaleceu ainda mais minha prática pedagógica e minha comunicação em inglês.",
      "No meu tempo livre, gosto de atividades ligadas à arte e estar em contato com a natureza. 💚",
    ],
  },
  {
    slug: "sophia",
    nome: "Sophia",
    idioma: "Espanhol",
    rotate: 2,
    localizacao: "Puerto Iguazú — Argentina 🇦🇷",
    resumo:
      "Professora de espanhol nascida em Puerto Iguazú (Argentina), onde culturas e idiomas se cruzam. Ensina de forma criativa e prática, unindo cultura, contexto real e escuta ativa — perfeita pra quem começa do zero.",
    credenciais: "Professora de espanhol · Nascida em Puerto Iguazú, Argentina 🇦🇷",
    interesses: "Arte, natureza e a mente humana.",
    bio: [
      "Hola, mucho gusto, soy Sophia 💐 E, se você está começando do zero no espanhol, talvez eu possa ser a sua porta de entrada.",
      "Sou professora de espanhol, nascida em Puerto Iguazú, Argentina 🇦🇷, uma cidade onde culturas e idiomas se encontram todos os dias. Sou apaixonada por arte, natureza e pela mente humana.",
      "Minha proposta é simples: ensinar espanhol de forma criativa, prática e com sentido. Para que você não apenas aprenda uma língua, mas abra novas possibilidades na sua vida.",
      "Eu vejo o ensino como uma experiência. Por isso, nossas aulas unem cultura, contexto real e escuta ativa, criando um espaço seguro onde você pode evoluir com confiança.",
      "Acredito profundamente que todos são capazes de aprender. O idioma abre portas. Eu te ajudo a atravessá-las. Se você busca um espanhol que faça sentido na sua vida, você está no lugar certo. 🌿",
    ],
  },
];
