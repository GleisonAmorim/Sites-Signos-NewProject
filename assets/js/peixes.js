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
    "Sua imaginação é um universo de possibilidades. Explore seus sonhos e transforme-os em realidade, Peixes.",
    "Seu coração compassivo é um guia poderoso. Use sua empatia para criar conexões profundas e inspirar positividade ao seu redor.",
    "Você é um artista da vida. Pinte sua jornada com cores vibrantes de amor, criatividade e alegria.",
    "Sua intuição é um farol confiável. Confie em sua orientação interna para navegar pelas águas da vida com segurança e confiança.",
    "Sua sensibilidade é uma força, não uma fraqueza. Use-a para compreender os sentimentos dos outros e criar laços verdadeiros.",
    "Você é um curador natural. Compartilhe sua sabedoria de cura e inspire outros a encontrarem conforto e paz.",
    "Sua conexão com o mundo espiritual é uma vitória. Deixe essa conexão guiar suas escolhas e inspire outros a encontrarem significado.",
    "Sua empatia é um dom de cura. Mostre compaixão e inspire outros a cuidarem uns dos outros.",
    "Você é um sonhador corajoso.",
    "Sua felicidade é um raio de luz. Espalhe seu amor incondicional e inspire uma mudança positiva no mundo.",
    "Sua intuição é sua bússola. Confie nela para tomar decisões que o levarão na direção certa, mesmo nas situações mais complicadas.",
    "Você é um poeta da vida. Use suas palavras para inspirar, elevar e tocar o coração das pessoas ao seu redor.",
    "Sua capacidade de se adaptar é admirável. Flua com as mudanças e inspire outros a aceitarem a impermanência da vida.",
    "Seu coração generoso é um tesouro. Compartilhe sua abundância e inspire outros a fazerem o mesmo.",
    "Você é um farol de compaixão. Mostre aos outros o poder da gentileza e inspire um mundo mais amoroso.",
    "Sua busca por significado é inspiradora. Continue explorando os mistérios da vida e inspire outros a buscarem a verdade interior.",
    "Você é um visionário espiritual. Compartilhe sua visão do mundo e inspire outros a conectarem-se com algo maior.",
    "Sua criatividade é ilimitada. Deixe sua mente voar e inspire outros a abraçarem sua expressão única.",
    "Você é um nadador destemido nas emoções emocionais. Mergulhe nas suas emoções e inspire outros a fazerem o mesmo.",
    "Sua intuição é um guia fiel. Siga os impulsos do seu coração e inspire uma jornada autônoma e significativa.",
    "Você é um farol de esperança. Mesmo nass da vida, inspire outros a acreditarem em um amanhã mais brilhante.",
    "Sua conexão com o divino é uma fonte de força. Deixe essa conexão iluminar seu caminho e inspire outros a se conectarem também.",
    "Você é um canal de empatia. Use essa habilidade para tocar vidas e inspirar a cura emocional.",
    "Sua capacidade de tolerar é libertadora. Inspire outros a deixarem ir o passado e abraçarem um futuro cheio de amor.",
    "Você é um defensor dos sonhos. Corra atrás dos seus objetivos e inspire outros a seguirem suas paixões.",
    "Sua intuição é uma fonte de sabedoria. Confie nela para guiar suas escolhas e inspirar outros a se conectarem com sua intuição.",
    "Você é um enviado dos sentimentos profundos. Compartilhe suas emoções e inspire outros a expressarem seu verdadeiro eu.",
    "Sua compreensão das complexidades da vida é notável. Compartilhe sua perspectiva e inspire outros a explorarem mais profundamente.",
    "Você é um explorador do mundo espiritual. Compartilhe suas descobertas e inspire outros a embarcarem em suas próprias jornadas interiores.",
    "Sua capacidade de amar é infinita. Deixe seu amor fluir e inspire outros a experimentarem o poder transformador do amor, Peixes.",
    
  ];
  
  var fortuneButton = document.getElementById("fortuneButton");
  fortuneButton.addEventListener("click", showFortunePopup);