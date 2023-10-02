function showFortunePopup() {
    var popup = document.getElementById("fortunePopup");
    var message = document.getElementById("fortuneMessage");
    var randomIndex = Math.floor(Math.random() * messages.length);
    message.textContent = messages[randomIndex];
    popup.style.display = "block";
  }
  
  function closeFortunePopup() {
    var popup = document.getElementById("fortunePopup");
    popup.style.display = "none";
  }
  
  var messages = ["Seu amor e cuidado são como um farol para aqueles ao seu redor. Espalhe sua luz e inspire positividade, querido câncer.",
  "Aproveite o poder curativo do seu instinto. Você é capaz de superar qualquer desafio que cruzar seu caminho, Câncer.",
  "Sua intuição é sua maior aliada. Confie nos sinais do universo e siga o caminho que o levará ao sucesso.",
  "Seu coração compassivo é uma dádiva. Use sua empatia para construir relacionamentos duradouros e duradouros.",
  "As ondas de mudança estão trazendo oportunidades incríveis. Abra-se para o desconhecido e veja onde a vida o transporte, Câncer.",
  "Sua natureza resiliente é sua força secreta. Enfrente cada desafio com coragem e saiba que você é capaz de superá-los.",
  "Você possui um dom especial para nutrir e apoiar. Suas ações amorosas têm um impacto duradouro naqueles ao seu redor.",
  "Este é o momento de se concentrar em suas metas e sonhos. Seu esforço incansável o leva a grandes corpos, câncer.",
  "Mantenha-se fiel à sua intuição. Suas escolhas são guiadas por uma sabedoria interior profunda e valiosa.",
  "Sua imaginação é o berço da criação. Deixe suas ideias fluírem e transforme-as em realidade, Câncer.",
  "Seu coração generoso é uma fonte de bênçãos. Abrace cada oportunidade de gozar amor e vitória pelo mundo.",
  "Confie na jornada que está trilhando. Cada passo o aproxima de um futuro brilhante e repleto de emoção.",
  "Sua dedicação incansável está rendendo frutos notáveis. Continue a trabalhar com paixão e alcance suas metas, Câncer.",
  "O amor e a harmonia estão à sua volta. Cultive relações saudáveis ​​e deixe sua influência positiva brilhar.",
  "Aproveite o presente como uma dádiva. Cada momento é uma oportunidade para crescer e se fortalecer.",
  "Seu instinto é protetor é importante. Use-o para guiar suas escolhas e proteger aqueles que você ama, Câncer.",
  "A criatividade está fluindo em sua direção. Use sua imaginação para enfrentar desafios com soluções inovadoras.",
  "Você é um farol de esperança para os outros. Compartilhe sua sabedoria e inspire mudanças positivas no mundo.",
  "Sua intuição é como uma bússola. Confie em sua orientação interna para tomar decisões que o levem ao sucesso.",
  "Sua natureza sensível é uma força incrível. Use-a para criar conexões profundas e genuínas com aqueles ao seu redor, Câncer.",
  "Aproveite as oportunidades que se apresentam. Você está destinado a um futuro brilhante e cheio de realizações.",
  "Sua empatia é um dom poderoso. Use-a para entender as necessidades dos outros e fazer uma diferença positiva.",
  "Cada passo é uma vitória em sua jornada. Continue avançando com espiritualidade e alcance o sucesso, Câncer.",
  "Você é capaz de transformar desafios em oportunidades. Mantenha-se resiliente e confiante em sua capacidade de superar qualquer obstáculo.",
  "Sua sensibilidade é uma dádiva para o mundo. Deixe seu coração guiar suas ações e inspire compaixão onde quer que vá.",
  "A confiança é a chave para desbloquear seu potencial máximo. Acredite em si mesmo e alcance as estrelas, Câncer.",
  "Mantenha-se conectado à sua intuição. Ela o guiará para o caminho certo, mesmo nas situações mais desafiadoras.",
  "Apreciar as pequenas alegrias da vida é uma fonte de felicidade e firmeza. Celebre cada momento, querido Câncer.",
  "Você tem o poder de moldar seu próprio destino. Visualize suas metas e trabalhe incansavelmente para realizá-las.",
  "Sua experiência é admirável. Continue avançando, enfrentando cada obstáculo com coragem, e alcançará o sucesso que merece.",
  ];
  
  var fortuneButton = document.getElementById("fortuneButton");
  fortuneButton.addEventListener("click", showFortunePopup);