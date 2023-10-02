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
  
  var messages = [
  
  "Sua paixão e motivação são poderosas. Continue perseguindo seus objetivos com fervor e alcance conquistas notáveis.",
  "Sua intuição é uma ferramenta valiosa. Confie nela para tomar decisões sábias e seguir em direção ao seu sucesso, Escorpião.",
  "Cada desafio é uma oportunidade para você brilhar. Enfrente-os com coragem e veja como sua resiliência o impulsionada.",
  "Seu magnetismo é irresistível. Use sua energia para atrair o que deseja e chorar um caminho de atração.",
  "A profundidade de sua visão é admirável. Continue a explorar e descobrir novas classes de conhecimento e sabedoria.",
  "Você é um mestre na arte da transformação. Abraçar mudanças e evoluções é o que o levará a novos horizontes, Escorpiano.",
  "Sua autoridade é inabalável. Persista em seu caminho com confiança, pois cada passo o aproxima de seus objetivos.",
  "Seu instinto aguçado é um guia confiável. Ouça sua voz interior e siga os sinais que o levam à realização.",
  "A força de sua vontade é inspiradora. Continue avançando, superando adversidades e alcançando um futuro brilhante.",
  "Sua natureza apaixonada é um trunfo. Utilize-a para criar conexões profundas e fortes projetos ambiciosos.",
  "A mudança é sua aliada. Abrace o desconhecido e deixe que suas experiências moldem uma versão mais forte de si mesmo.",
  "Sua dedicação é incomparável. Continue a trabalhar com afinco e veja como suas metas se materializam, Escorpião.",
  "Você é capaz de superar qualquer desafio que surja. Confie em sua capacidade de enfrentar as situações com coragem.",
  "Sua capacidade de proteção é incrível. Sempre que enfrentar adversidades, lembre-se de que você pode se recuperar e florescer.",
  "Sua energia é intensa e magnética. Use-a para conquistar seus e atrair o sucesso que deseja.", 
  "Sua visão é única e poderosa. Continue a moldar seu futuro com paixão e veja como ele se maravilhosamente maravilhosamente.",
  "Seu desejo de crescimento é admirável. Continue a aprender, crescer e se reinventar para alcançar patamares mais elevados.",
  "Você é resiliente como um fênix. Renasça das cinzas e permitiu que suas experiências o fortaleçam ainda mais.",
  "Sua intuição é uma bússola confiável. Deixe-a guiar você em direção a oportunidades valiosas e desejadas.",
  "Sua intensidade é uma fonte de poder. Use-a para se destacar, conquistar desafios e trilhar um caminho notável.",
  "Cada obstáculo é uma chance de crescimento. Supere-os com resiliência e você colherá os frutos de suas conquistas.",
  "Sua poderosa é inabalável. Continue a lutar por seus sonhos e veja como o universo conspira a seu favor.",
  "Seu magnetismo atrai as melhores oportunidades. Confie em si mesmo e na energia que emana para criar um futuro excepcional.",
  "Sua natureza investigativa é uma bênção. Use-a para explorar e descobrir novas possibilidades em sua jornada.",
  "Você é um agente de transformação. Abraçar mudanças é o que o torna mais forte e capaz de enfrentar qualquer desafio.",
  "Sua persistência é incomparável. Continue a percorrer seu caminho com confiança, pois cada passo é uma realização.",
  "Sua força interna é um farol de inspiração. Enfrente cada desafio com a certeza de que sua direção o avanço adiante.",
  "Sua busca pelo conhecimento é admirável. Continue a expandir sua mente e veja como isso o leva a novos patamares.",
  "Você é um mestre em se adaptou às circunstâncias. Use essa habilidade para prosperar em qualquer cenário, Escorpião.",
  "Sua energia apaixonada é o combustível para suas convidadas. Mantenha o fogo interior aceso e conquiste o extraordinário.",
  
  
  ];
  
  var fortuneButton = document.getElementById("fortuneButton");
  fortuneButton.addEventListener("click", showFortunePopup);