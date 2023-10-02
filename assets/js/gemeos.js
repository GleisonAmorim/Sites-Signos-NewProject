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
    "Sua mente curiosa é um tesouro. Continue explorando novos horizontes e descobrindo a magia que o mundo tem a oferecer.",
"Sua manifestação é um superpoder. Use-a para se adaptar às situações e encontrar soluções criativas para qualquer desafio.",
"A comunicação é sua ferramenta de poder. Compartilhe suas ideias e perspectivas, pois sua voz tem o potencial de inspirar muitos.",
"Sua agilidade mental é surpreendente. Transforme seus pensamentos em ações rápidas e construa um caminho para o sucesso, Gêmeos.",
"Você tem a capacidade de se conectar com pessoas de todas as esferas da vida. Use essa habilidade para construir relacionamentos valiosos.",
"Uma curiosidade é sua bússola interior. Siga-a sem medo, pois ela o conduza a descobertas incríveis e oportunidades únicas.",
"Sua energia é contagiosa. Inspire os outros com seu entusiasmo e mostre como a positividade pode transformar vidas.",
"Seu intelecto é uma fonte inesgotável de poder. Cultive-o, alimente-o e você verá como ele o transportará a extraordinárias.",
"A cada desafio, você aprende e cresce. Encare as dificuldades como oportunidades de evolução e alcance novos patamares.",
"Sua adaptabilidade é notável. Abraçar a mudança é o que o mantém em constante crescimento e desenvolvimento, Gêmeos.",
"Sua mente é uma caixa de tesouros. Continue buscando conhecimento e expandindo seus horizontes para alcançar seus sonhos.",
"Sua curiosidade é o fio condutor do seu sucesso. Explore, pergunte e descubra, pois cada resposta leva a novas conquistas.",
"Sua habilidade de se comunicar é poderosa. Use-a para compartilhar ideias inspiradas e criar conexões genuínas com os outros.",
"Sua agilidade mental é um trunfo valioso. Encontre soluções criativas para os desafios e inspire aqueles ao seu redor.",
"Você é um eterno aprendiz. Abra-se para novas experiências e verá como cada lição o levará a um crescimento excepcional.",
"Sua mente é um jardim de possibilidades. Plante as sementes dos seus sonhos e veja como eles florescem em convidados.",
"Sua curiosidade é uma chama que nunca se apaga. Continue explorando e buscando conhecimento, pois ele é sua maior riqueza.",
"Você é um comunicador nato. Use suas palavras para inspirar, educar e criar mudanças positivas na vida daqueles ao seu redor.",
"Sua sinceridade é admirável. Abrace uma diversidade de talentos e interesses que possui e crie um caminho único para o sucesso.",
"Sua mente é como um livro aberto. Continue a escrever sua história com aventuras incríveis e realizações inesquecíveis.",
"Sua capacidade de adaptação é incomparável. Não tenha medo de mudanças, pois são oportunidades de crescimento e evolução.",
"Uma curiosidade é o combustível da sua jornada. Deixe que ela o guie por caminhos emocionantes e cheios de descobertas.",
"Você é um mestre da comunicação. Use suas palavras para construir pontes, expressar sua verdade e inspirar mudanças positivas.",
"Sua mente é um universo de possibilidades. Explore-o com paixão e veja como suas ideias podem se transformar em realidade.",
"Sua versatilidade é um dom valioso. Aproveite suas múltiplas habilidades para se destacar em todas as áreas da sua vida.",
"Sua capacidade de adaptação é uma superpotência. Transforme desafios em oportunidades e continue a prosperar, Gêmeos.",
"Sua curiosidade é uma chama que nunca se apaga. Mantenha-a viva e ela o estudo de aventuras e conquistas inimagináveis.",
"Sua mente é um tesouro de conhecimento. Continue a buscar aprendizado e veja como ele o impulsiona para o sucesso.",
"Você é um comunicador excepcional. Use suas palavras para inspirar, educar e criar um impacto positivo duradouro.",
"Sua agilidade mental é admirável. Encontre soluções criativas para os desafios e continue trilhando um caminho extraordinário.",


  ];

  var fortuneButton = document.getElementById("fortuneButton");
fortuneButton.addEventListener("click", showFortunePopup);