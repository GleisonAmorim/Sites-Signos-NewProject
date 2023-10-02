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
    "Sua coragem é incomparável. Continue enfrentando os desafios da vida com confiança, e você conquistará grandes vitórias.",
"Sua presença irradia poder. Use sua energia para inspirar e liderar, deixando uma marca indelével onde quer que vá.",
"Você é a estrela da sua própria história. Brilhe intensamente, mostre ao mundo o seu verdadeiro eu e inspire outros a fazerem o mesmo.",
"Sua motivação é admirável. Mantenha o foco em seus objetivos e supere os obstáculos com uma vontade inabalável, Leão.",
"Sua confiança é sua maior força. Não tenha medo de ser quem você é, pois é isso que o torna magnífico.",
"Seu coração generoso é uma dádiva. Compartilhe sua bondade com o mundo e veja como ela retorna para você em formas maravilhosas.",
"A confiança é a chave para o seu sucesso. Acredite em suas habilidades e aja com autoridade, pois você é capaz de grandes feitos.",
"Sua presença ilumina qualquer ambiente. Use sua energia positiva para inspirar aqueles ao seu redor e criar um impacto duradouro.",
"Você é um líder nato. Assuma a responsabilidade com coragem, inspire outros a seguirem e conquiste seus objetivos, Leão.",
"Sua paixão é contagiante. Deixe-a guiar suas ações e verá como ela o levará a mulheres impressionantes.",
"Sua criatividade é uma fonte inesgotável. Use-a para expressar sua singularidade e trazer beleza ao mundo de modos únicos.",
"Você é o mestre da sua jornada. Defina seus próprios padrões de sucesso e continue avançando com autoridade.",
"Sua energia é uma força motriz. Aplique-a com sabedoria, e você verá como ela o conduzirá a um futuro brilhante.",
"Sua resiliência é inspiradora. Enfrente os desafios com coragem e transforme-os em oportunidades de crescimento.",
"Você é um catalisador de mudanças positivas. Use seu poder para criar um mundo melhor ao seu redor e inspire outros a fazerem o mesmo.",
"Sua autoconfiança é magnética. Acredite em si mesmo e atraia as oportunidades que o levarão ao sucesso merecido.",
"Sua presença é cativante. Deixe sua luz interior brilhar e contagiar a todos com sua energia positiva e alegria de viver.",
"Você é o autor da sua narrativa. Escreva uma história de conquistas, coragem e conquistas que inspirarão gerações futuras.",
"Sua inspiração é incomparável. Mantenha o foco em suas metas e mostre ao mundo que você é capaz de alcançar o impossível.",
"Sua paixão é o combustível do seu sucesso. Use-a para se seguir em direção a grandes talentos e conquistas.",
"Sua autoexpressão é poderosa. Use sua voz para inspirar, impactar e criar mudanças positivas na vida daqueles ao seu redor.",
"Você é uma estrela em ascensão. Acredite no seu potencial, persevere com confiança e alcance alturas inimagináveis, Leão.",
"Sua coragem é sua coroa. Use-a com orgulho, supere qualquer desafio que apareça e conquiste o sucesso que você merece.",
"Sua confiança é o que o torna único. Abrace suas características individuais e veja como elas o levam a grandes conquistas.",
"Sua presença é magnética. Inspire os outros com seu carisma e deixe uma marca positiva por onde passar.",
"Você é o leão destemido do zodíaco. Enfrente cada desafio com coragem, e sua força interior o guiará para a vitória.",
"Sua paixão é um farol. Deixe-a iluminar o caminho para o seu sucesso e inspirar outros a seguirem seus sonhos também.",
"Sua força é imparável. Supere os obstáculos com resiliência e alcance patamares que muitos só sonhariam em alcançar.",
"Sua presença é empoderadora. Use sua influência para criar um impacto positivo e inspirar outros a se destacarem também.",
"Você é a personificação da força e do carisma. Continue a brilhar intensamente e inspire todos ao seu redor, Leão.",
  ]

var fortuneButton = document.getElementById("fortuneButton");
fortuneButton.addEventListener("click", showFortunePopup);