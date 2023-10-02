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
    "Seu equilíbrio interior é uma força poderosa. Continue buscando a harmonia em todas as áreas da sua vida e alcançará grandes convidados.",
"Sua diplomacia é uma virtude única. Use sua capacidade de encontrar soluções pacíficas para inspirar uma mudança positiva no mundo.",
"Você é um defensor da justiça e da igualdade. Lute por aquilo em que acredita e deixe sua voz ressoar com impacto e inspiração.",
"Sua empatia é um dom incrível. Use-a para entender os outros e construir conexões significativas que perdurarão ao longo do tempo.",
"Sua busca por beleza é uma busca pela verdade. Encontre a beleza nas pequenas coisas e inspire outros a apreciarem a magia da vida.",
"Seu olhar crítico é uma ferramenta valiosa. Use-o para avaliar situações com sabedoria e tomar decisões difíceis, Libra.",
"Sua paz interior é um tesouro. Cultive-a diariamente e inspire outros a encontrarem a serenidade em meio ao caos.",
"Sua habilidade de ver todos os lados é uma dádiva. Use-a para mediar conflitos e construir pontes entre pessoas divergentes.",
"Você é um farol de cooperação. Trabalhe em equipe e inspire colaboração para alcançar metas maiores e mais manifestações.",
"Sua busca por relacionamentos saudáveis ​​é inspiradora. Demonstre amor, compreensão e conexão genuína onde quer que vá.",
"Você é um artista da vida. Crie uma vida que seja administradora uma obra-prima, cheia de aventura, amor e criatividade.",
"Sua intuição é uma guia confiável. Siga sua bússola interna e alcance suas metas com confiança e independência.",
"Sua capacidade de encontrar a beleza em todos os lugares é único. Compartilhe sua visão e inspire outros a apreciarem a magia do mundo.",
"Você é um pacificador nato. Use sua influência para acalmar conflitos e promover um ambiente de paz e harmonia.",
"Sua busca pela verdade é admirável. Continue a explorar e aprofundar seu conhecimento, inspirando outros a fazerem o mesmo.",
"Sua gentileza é uma luz radiante. Ilumine o caminho dos outros com atos de bondade e compaixão, Libra.",
"Você é um mestre do equilíbrio. Encontre o meio-termo em todas as situações e inspire outros a fazerem o mesmo.",
"Sua exaltação é cativante. Use sua presença refinada para inspirar outros a incorporar a beleza em todos os aspectos da vida.",
"Você é um defensor da paz. Trabalhe incansavelmente por um mundo mais harmonioso e deixe seu legado de positividade.",
"Sua capacidade de tomar decisões justas é admirável. Use-a para guiar suas escolhas e inspirar outros a agirem com ética.",
"Você é uma fonte de inspiração para a colaboração. Unir forças com os outros é a chave para alcançar grandes conquistas.",
"Sua busca pelo amor verdadeiro é inspiradora. Manifeste o amor em todas as suas formas e inspire outros a fazerem o mesmo.",
"Você é um exemplo de elegância e graça. Deixe sua marca por onde passar, inspirando outros com sua beleza interior e exterior.",
"Sua capacidade de ver a beleza na imperfeição é única. Compartilhe essa visão e inspire outros a abraçarem sua confiança.",
"Você é um mediador habilidoso. Use sua sabedoria para resolver conflitos e criar soluções que beneficiem a todos.",
"Sua busca por justiça é admirável. Lute pelo que é certo e inspire outros a se unirem na causa da igualdade.",
"Você é um visionário de paz. Mantenha sua visão de um mundo melhor e inspire outros a trabalharem juntos para alcançá-la.",
"Sua empatia é um farol. Use-a para criar conexões, representações e mostrar aos outros que eles não estão sozinhos.",
"Você é um conjunto de harmonia. Use sua influência para criar um ambiente de cooperação e inspirar outros a se unirem.",
"Sua busca por equilíbrio é constante. Mantenha-se firme no seu caminho e inspire outros a encontrarem a estabilidade em suas vidas, Libra.",


  
  ];
  
  var fortuneButton = document.getElementById("fortuneButton");
  fortuneButton.addEventListener("click", showFortunePopup);