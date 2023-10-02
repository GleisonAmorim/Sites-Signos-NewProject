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
  "Sua experiência é admirável. Continue avançando, enfrentando cada obstáculo com coragem, e alcanceá o sucesso que merece.",
  "A estrada para o sucesso é pavimentada com esforço e dedicação. Continue trabalhando arduamente e você colherá os frutos, querido Capricórnio.",
  "Sua resiliência é sua maior força. Supere os obstáculos com coragem e continue avançando em direção aos seus sonhos.",
  "Seu compromisso com a excelência é admirável. Continue buscando a perfeição e você alcançará resultados extraordinários.",
  "Suas metas estão ao seu alcance. Mantenha-se focado e siga em frente com experiência e paixão.",
  "Acredite em sua capacidade de transformar desafios em oportunidades. Sua perseverança o levará longe, Capricórnio.",
  "Cada passo em direção aos seus objetivos é uma conquista notável. Continue progredindo com coragem e instrução.",
  "Seu cuidado planejamentoo é a chave visão para o sucesso. Mantenha sua clara e persista em direção ao seu destino.",
  "Sua ética de trabalho é inspiradora. Continue a trilhar o caminho da realização com confiança e persistência.",
  "As montanhas podem ser difíceis de escalar, mas sua tenacidade é incomparável. Supere cada desafio e alcance o topo, capricorniano.",
  "A jornada pode ser longa, mas cada passo o aproxima do sucesso merecido. Continue avançando com força e competência.",
  "Sua disciplina é uma fonte de respeito. Mantenha-se focado e siga em frente, pois grandes artistas estão por vir.",
  "Aproveite suas habilidades únicas para superar qualquer obstáculo. Sua capacidade de adaptação é uma vantagem poderosa.",
  "Seus esforços incansáveis ​​não passam despercebidos. Continue construindo um futuro brilhante com sua dedicação.",
  "Sua atitude prática é um guia valioso. Confie em sua intuição e continue fazendo escolhas sábias em sua jornada.",
  "A coragem está no cerne de suas ações. Enfrente cada desafio com determinação e ajude ao seu sucesso se desdobrar.",
  "Você é um exemplo de persistência. Continue superando as adversidades e sua luz brilhará ainda mais intensamente.",
  "Sua paixão pelo progresso é admirável. Mantenha sua chama interior acesa e alcance suas aspirações mais ousadas.",
  "As sensações que você plantou com esforço estão florescendo. Continue regando seu jardim de sucesso com dedicação.",
  "A confiança em suas habilidades é sua maior arma. Continue acreditando em si mesmo e alcance conquistas extraordinárias.",
  "Sua ética de trabalho é inigualável. Continue a trilhar o caminho do sucesso com determinação e foco.",
  "A ciência é o que o define. Supere as dificuldades com bravura e alcance as alturas que você merece, Capricórnio.",
  "Cada obstáculo é uma oportunidade para crescer. Mantenha-se resiliente e sua jornada o transporte para lugares incríveis.",
  "Sua visão clara do futuro é inspiradora. Continue a traçar seu caminho com confiança e veja suas aspirações se concretizarem.",
  "Sua capacidade de superar desafios é notável. Continue a enfrentar cada situação com coragem e confiança.",
  "Suas metas são o farol que guia seu caminho. Mantenha-se firme em sua jornada e alcance o sucesso que você busca.",
  "Seus esforços diligentes estão dando frutos. Continue avançando com orientação e alcance o sucesso merecido.",
  "Sua abordagem prática é sua vantagem. Continue a tomar decisões sábias e construa um futuro sólido.",
  "Sua resiliência é sua marca registrada. Enfrente cada desafio com força e continue em direção à sua visão.",
  "Sua busca implacável pelo sucesso é admirável. Continue a trilhar o caminho das realizações e veja suas aspirações se tornarem realidade.",
  
  
  ];
  
  var fortuneButton = document.getElementById("fortuneButton");
  fortuneButton.addEventListener("click", showFortunePopup);