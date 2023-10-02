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

    
  "Sua coragem é inspiradora. Enfrente desafios de cabeça erguida e inspire outros a seguirem seu exemplo, Áries.",
  "Seu espírito pioneiro é um farol. Ilumine o caminho para novas possibilidades e inspire ações ousadas.",
  "Você é um líder nato. Mostre o poder da determinação e inspire outros a seguirem você na direção ao sucesso.",
  "Sua energia é como uma chama ardente. Incendeie paixões e inspire outros a perseguirem seus sonhos com fervor.",
  "Sua independência é inspiradora. Mostre como trilhar seu próprio caminho e inspire outros a abraçarem a autossuficiência.",
  "Você é um guerreiro incansável. Lute por suas metas com garra e inspire outros a persistirem em seus esforços.",
  "Sua confiança é um exemplo. Acredite em suas habilidades e inspire outros a confiarem em si mesmos.",
  "Sua motivação é inabalável. Continue perseguindo seus objetivos e inspire outros a nunca desistirem.",
  "Você é um pioneiro da mudança. Mostre como abraçar a evolução e inspire outros a se adaptarem às transformações.",
  "Sua paixão é contagiante. Viva cada momento com intensidade e inspire outros a abraçarem a vida com fervor.",
  "Sua ousadia é admirável. Tome riscos calculados e inspire outros a se aventurarem fora de suas zonas de conforto.",
  "Você é um mestre do progresso. Mostre aos outros como avançar com determinação e inspire a busca pelo crescimento.",
  "Sua iniciativa é inspiradora. Tome a liderança e inspire outros a seguirem a voz interior de suas ambições.",
  "Sua força interior é notável. Cultive sua resiliência e inspire outros a superarem obstáculos com coragem.",
  "Você é um combatente implacável. Enfrente adversidades com estrangeira e inspire a perseverança nos outros.",
  "Sua confiança é inspiradora. Mostre seu verdadeiro eu ao mundo e inspire outros a se expressarem livremente.",
  "Sua força é um farol. Mantenha-se firme em seus valores e inspire outros a permanecerem fiéis a si mesmos.",
  "Você é um desbravador do desconhecido. Explore o inexplorado e inspire outros a se aventurarem em novas direções.",
  "Sua vitalidade é contagiante. Irradie energia positiva e inspire outros a viverem com vigor e entusiasmo.",
  "Sua paixão é uma chama inextinguível. Incendeie sonhos e aspirações e inspire outros a buscar o que amam.",
  "Você é um inspirador de ação. Demonstre como transformar ideias em realidade e inspirar outros a colocarem seus planos em prática.",
  "Sua experiência é admirável. Continue avançando e inspire outros a conquistarem seus objetivos com persistência.",
  "Sua coragem é um exemplo. Enfrente desafios de frente e inspire outros a enfrentarem suas próprias batalhas.",
  "Você é um criador de possibilidades. Inspire outros a visualizarem futuros brilhantes e buscarem criativos.",
  "Sua energia é um catalisador. Estimule a ação positiva e inspire outros a fazerem a diferença.",
  "Você é um explorador da vida. Abrace cada experiência com curiosidade e inspire outros a viverem com mente aberta.",
  "Sua iniciativa é inspiradora. Tome a dianteira em projetos importantes e inspire outros a serem proativos.",
  "Sua confiança é uma força. Mostre ao mundo quem você é e inspire outros a abraçarem sua individualidade.",
  "Você é um pioneiro do progresso. Mostre como romper barreiras e inspirar outros a seguirem rumo ao sucesso.",
  "Sua motivação é imparável. Continue a batalha pelo que deseja e inspire outros a nunca desistirem, Áries.",
];

var fortuneButton = document.getElementById("fortuneButton");
fortuneButton.addEventListener("click", showFortunePopup);  