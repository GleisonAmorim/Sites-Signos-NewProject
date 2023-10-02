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
    "Sua busca por aventura é inspiradora. Abra as asas e voe em direção aos seus sonhos, Sagitário.",
"Seu otimismo é um raio de sol. Compartilhe sua energia positiva e inspire outros a verem o lado brilhante da vida.",
"Você é um explorador destemido. Aventure-se pelo desconhecido e inspire outros a abraçarem o inexplorado.",
"Sua sede de conhecimento é admirável. Continue aprendendo e inspire outros a buscarem constantemente a sabedoria.",
"Sua liberdade é preciosa. Use-a para inspirar outros a seguirem seus caminhos autênticos autênticos.",
"Você é um visionário da vida. Compartilhe suas visões grandiosas e inspire outros a sonharem sem limites.",
"Sua confiança é contagiosa. Mostre aos outros o poder de acreditar em si mesmos e inspirar autoestima.",
"Sua paixão pela vida é inspiradora. Abraçar cada momento com entusiasmo e inspirar outros a fazerem o mesmo.",
"Você é um mestre das possibilidades. Inspire outros a transformarem desafios em oportunidades de crescimento.",
"Sua honestidade é refrescante. Compartilhe sua confiança e inspire outros a viverem sem máscaras.",
"Sua energia é como um incêndio. Incendeie os corações dos outros com motivação e inspire a ação.",
"Você é um buscador espiritual. Compartilhe suas jornadas internas e inspire outros a explorarem seu mundo interior.",
"Sua alegria é contagiante. Espalhe risos e sorrisos por onde quer que vá e inspire felicidade.",
"Sua independência é inspirada. Mostre aos outros o valor de ser autossuficiente e inspire liberdade.",
"Você é um filósofo da vida. Compartilhe suas reflexões profundas e inspire outros a ponderarem sobre o significado da existência.",
"Sua motivação é admirável. Continue perseguindo seus objetivos e inspire outros a nunca desistirem.",
"Sua atitude descomplicada é uma vitória. Mostre aos outros como abraçar a simplicidade e inspirar paz de espírito.",
"Você é um explorador de culturas. Compartilhe suas experiências globais e inspire outros a abraçarem a diversidade.",
"Sua coragem é inspiradora. Enfrente seus medos de frente e inspire outros a conquistarem seus próprios desafios.",
"Você é um atrativo de estrelas. Aponte para o alto e inspire outros a alcançarem alturas incríveis.",
"Sua busca pela verdade é notável. Compartilhe seu conhecimento e inspire outros a questionarem e explorarem.",
"Sua mente aberta é inspiradora. Abraçar diferentes perspectivas e inspirar outros a expandirem seus horizontes mentais.",
"Você é um viajante do universo interno. Compartilhe suas jornadas espirituais e inspire outros a explorarem suas almas.",
"Sua curiosidade é uma fonte de crescimento. Mantenha a chama da curiosidade viva e inspire outros a buscarem respostas.",
"Você é um mestre das possibilidades. Inspire outros a acreditarem em suas capacidades e manifestem seus sonhos.",
"Sua sede por liberdade é inspiradora. Mostre aos outros como se libertar das amarras e inspire a busca por autonomia.",
"Sua alegria em compartilhar é notável. Compartilhe suas conquistas e inspire outros a celebrarem as vitórias da vida.",
"Você é um caçador de experiências. Caçe momentos inesquecíveis e inspire outros a viverem plenamente.",
"Sua sinceridade é um presente. Compartilhe seus pensamentos honestos e inspire confiança nos outros.",
"Você é um arqueiro do destino. Aponte para o sucesso e inspire outros a acertarem seus objetivos, Sagitário.",

  ]
  var fortuneButton = document.getElementById("fortuneButton");
  fortuneButton.addEventListener("click", showFortunePopup);