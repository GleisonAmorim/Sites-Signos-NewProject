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
    "Sua motivação é como uma rocha. Enfrente desafios com firmeza e inspire outros a perseverarem, Touro.",
    "Sua estabilidade é admirável. Mostre como se manter firme em tempos turbulentos e inspirar a confiança.",
    "Você é um construtor de bases sólidas. Demonstre como edificar seus sonhos e inspire outros a construirem suas alicerces.",
    "Sua persistência é uma luz guia. Continue sua jornada com tenacidade e inspire outros a seguirem seus objetivos.",
    "Sua paciência é uma virtude valiosa. Mostre como esperar pelo melhor momento e inspirar outros a praticar a serenidade.",
    "Você é um cultivador de vegetais. Colha os frutos do seu trabalho árduo e inspire outros a perseverarem.",
    "Sua natureza confiável é um farol. Ilumine o caminho para a confiança mútua e inspire relacionamentos sólidos.",
    "Sua força interior é inspiradora. Enfrente desafios com coragem e inspire outros a enfrentarem suas batalhas.",
    "Você é um mestre da perseverança. Supere obstáculos com força e inspire outros a superarem adversidades.",
    "Sua dedicação é contagiante. Demonstre como se dedicar inteiramente e inspirar outros a darem o seu melhor.",
    "Sua firmeza é admirável. Mantenha-se firme em suas convicções e inspire outros a seguirem suas próprias crenças.",
    "Você é um criador de beleza. Transforme ideias em realidade e inspire outros a apreciarem a estética da vida.",
    "Sua atenção aos detalhes é um exemplo. Mostre como pequenos esforços fazem grande diferença e inspire outros a cuidarem dos detalhes.",
    "Sua experiência é imparável. Continue avançando com foco e inspire outros a atingirem seus alvos.",
    "Você é um amante da estabilidade. Demonstre como criar fundamentos sólidos e inspirar outros a buscarem segurança.",
    "Sua resistência é inspiradora. Supere adversidades com resiliência e inspire outros a persistirem em suas metas.",
    "Sua lealdade é um farol. Mostre como ser um apoio constante e inspire conexões duradouras.",
    "Você é um empreendedor incansável. Demonstre como alcançar o sucesso com esforço e inspirar outros a se esforçarem.",
    "Sua calma é contagiante. Mantenha a serenidade em tempos desafiadores e inspire outros a encontrarem a paz.",
    "Sua confiabilidade é admirável. Cumpra suas promessas e inspire outros a protegerem a responsabilidade.",
    "Você é um cultivador de sonhos. Plante sementes de esperança e inspire outros a perseguirem suas aspirações.",
    "Sua perseverança é um exemplo. Enfrente obstáculos com força e inspire outros a persistirem em suas metas.",
    "Sua dedicação é inabalável. Continue sua jornada com comprometimento e inspire outros a alcançarem suas ambições.",
    "Você é um mestre da consistência. Demonstre como manter-se constante e inspirar outros a permanecerem focados.",
    "Sua força interior é inspiradora. Supere dificuldades com coragem e inspire outros a superarem desafios.",
    "Sua paciência é uma virtude rara. Mostre como esperar com graça e inspirar outros a praticarem a serenidade.",
    "Você é um construtor de conquistas. Demonstre como construir passo a passo e inspirar outros a trilharem caminhos sólidos.",
    "Sua persistência é admirável. Enfrente desafios com tenacidade e inspire outros a perseverarem.",
    "Sua poderosa é uma chama interior. Alimente seu fogo de motivação e inspire outros a buscarem suas paixões.",
    "Você é um exemplo de estabilidade. Demonstre como ser um porto seguro e inspire outros a encontrarem equilíbrio, Touro.",
    
    

  ];

  var fortuneButton = document.getElementById("fortuneButton");
  fortuneButton.addEventListener("click", showFortunePopup);