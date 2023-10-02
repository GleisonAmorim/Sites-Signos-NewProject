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
    "Sua atenção aos detalhes é excepcional. Utilize sua minúcia para conquistar grandes convidados e inspire outros a cuidarem dos detalhes.",
    "Você é um mestre da organização. Demonstre como a ordem pode criar eficiência e inspirar outros a simplificar suas vidas.",
    "Sua busca pela perfeição é admirável. Busque a excelência em tudo que faz e inspire outros a alcançarem padrões elevados.",
    "Sua dedicação ao trabalho é inspiradora. Coloque seu coração em suas tarefas e inspire outros a se comprometerem com suas paixões.",
    "Você é um defensor da saúde e bem-estar. Mostre como cuidar de si mesmo é fundamental e inspire outros a adotarem hábitos saudáveis.",
    "Sua mente analítica é uma bênção. Use sua perspicácia para resolver problemas complexos e inspirar outros a desenvolverem suas habilidades mentais.",
    "Sua habilidade de organização é um farol. Ilumine o caminho para uma vida mais estruturada e inspire outros a trilharem essa jornada.",
    "Você é um especialista em planejamento. Demonstre como traçar metas realistas e inspire outros a definirem roteiros para o sucesso.",
    "Sua ética de trabalho é exemplar. Empenhe-se ao máximo em suas empreitadas e inspire outros a seguirem seu exemplo.",
    "Você é um cultivador de soluções. Encontre respostas inovadoras para desafios e inspire outros a pensarem fora da caixa.",
    "Sua busca pelo aprimoramento é inabalável. Busque constantemente o crescimento pessoal e inspire outros a investirem em si mesmos.",
    "Sua diligência é uma inspiração. Continue avançando com experiência e inspire outros a enfrentarem desafios com coragem.",
    "Você é um amante do conhecimento. Busque sabedoria em todas as oportunidades e inspire outros a nutrirem suas mentes.",
    "Sua atitude prática é valiosa. Aborde problemas com um olhar realista e inspire outros a agirem de forma sensata.",
    "Você é um mestre da análise crítica. Examine as situações minuciosamente e inspire outros a avaliarem suas escolhas com cuidado.",
    "Sua abordagem meticulosa é admirável. Realize cada tarefa com precisão e inspire outros a realizarem suas atividades com cuidado.",
    "Sua capacidade de resolver problemas é inspiradora. Enfrente desafios com confiança e inspire outros a superarem obstáculos.",
    "Você é um defensor da excelência. Busque sempre o melhor em si mesmo e inspire outros a se esforçarem por grandeza.",
    "Sua habilidade de adaptação é notável. Supere mudanças com agilidade e inspire outros a abraçarem a transformação.",
    "Sua atenção aos detalhes é um dom. Use-a para resultados involuntários e inspire outros a apreciarem a beleza das pequenas coisas.",
    "Você é um perseguidor de perfeição. Busque aprimoramento constante e inspire outros a se esforçarem por seus objetivos.",
    "Sua dedicação aos seus valores é inspiradora. Permaneça fiel a suas convicções e inspire outros a seguirem seus princípios.",
    "Você é um exemplo de eficiência. Realize tarefas com destreza e inspire outros a otimizar suas ações.",
    "Sua busca pelo entendimento é admirável. Busque conhecimento em todas as oportunidades e inspire outros a valorizarem a aprendizagem.",
    "Sua habilidade de organização é uma bússola. Mostre o caminho para a ordem e inspire outros a encontrarem equilíbrio.",
    "Você é um construtor de estratégias. Demonstre como planejar pode levar ao sucesso e inspirar outros a traçarem seus próprios planos.",
    "Sua diligência é uma virtude útil. Empenhe-se em tudo o que faz e inspire outros a darem o melhor de si.",
    "Você é um amante da precisão. Realize tarefas com precisão e inspire outros a cuidarem dos detalhes.",
    "Sua mente analítica é uma fonte de inspiração. Use-a para resolver problemas complexos e inspirar outros a desenvolverem suas habilidades mentais.",
    "Sua busca pela perfeição é inigualável. Persiga a excelência em cada esforço e inspire outros a superarem limites, Virgem.",

  ];

  var fortuneButton = document.getElementById("fortuneButton");
  fortuneButton.addEventListener("click", showFortunePopup);