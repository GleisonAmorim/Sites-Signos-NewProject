const compatibilityTable = {
    aries: { touro: 60, gemeos: 85, cancer: 40, leao: 95, virgem: 55, libra: 70, escorpiao: 30, sagitario: 90, capricornio: 75, aquario: 45, peixes: 50 },
    touro: { gemeos: 65, cancer: 80, leao: 50, virgem: 90, libra: 55, escorpiao: 70, sagitario: 40, capricornio: 95, aquario: 45, peixes: 75, aries: 30 },
    gemeos: { cancer: 75, leao: 60, virgem: 80, libra: 70, escorpiao: 50, sagitario: 85, capricornio: 45, aquario: 90, peixes: 40, aries: 55, touro: 65 },
    cancer: { leao: 70, virgem: 60, libra: 75, escorpiao: 80, sagitario: 55, capricornio: 90, aquario: 40, peixes: 85, aries: 50, touro: 75, gemeos: 65 },
    leao: { virgem: 50, libra: 75, escorpiao: 80, sagitario: 90, capricornio: 65, aquario: 55, peixes: 70, aries: 95, touro: 30, gemeos: 40, cancer: 60 },
    virgem: { libra: 60, escorpiao: 70, sagitario: 45, capricornio: 80, aquario: 75, peixes: 85, aries: 55, touro: 90, gemeos: 80, cancer: 60, leao: 50 },
    libra: { escorpiao: 70, sagitario: 80, capricornio: 55, aquario: 90, peixes: 75, aries: 60, touro: 55, gemeos: 70, cancer: 75, leao: 85, virgem: 45 },
    escorpiao: { sagitario: 75, capricornio: 90, aquario: 60, peixes: 80, aries: 30, touro: 70, gemeos: 50, cancer: 80, leao: 80, virgem: 70, libra: 60 },
    sagitario: { capricornio: 70, aquario: 85, peixes: 60, aries: 90, touro: 40, gemeos: 75, cancer: 55, leao: 90, virgem: 45, libra: 75, escorpiao: 70 },
    capricornio: { aquario: 70, peixes: 80, aries: 75, touro: 95, gemeos: 45, cancer: 90, leao: 65, virgem: 80, libra: 55, escorpiao: 85, sagitario: 70 },
    aquario: { peixes: 70, aries: 45, touro: 45, gemeos: 90, cancer: 40, leao: 55, virgem: 75, libra: 90, escorpiao: 60, sagitario: 85, capricornio: 70 },
    peixes: { aries: 40, touro: 75, gemeos: 40, cancer: 85, leao: 70, virgem: 85, libra: 75, escorpiao: 80, sagitario: 60, capricornio: 80, aquario: 70 }
  };
  
  const signCharacteristics = {
    aries: "Áries é o primeiro signo do zodíaco e é conhecido por sua energia, entusiasmo e coragem. Eles têm uma natureza impulsiva e tendem a ser líderes naturais.",
    touro: "Touro é um signo estável e prático. Eles valorizam a segurança e a estabilidade. Têm uma natureza paciente e apreciam os prazeres da vida.",
    gemeos: "Gêmeos é um signo comunicativo e curioso. São adaptáveis e gostam de aprender sobre uma variedade de tópicos. Têm uma natureza dual e podem ser contraditórios.",
    cancer: "Câncer é um signo sensível e emocional. Valorizam a família e o lar, e têm uma intuição forte. São protetores e podem ser cautelosos ao se abrir emocionalmente.",
    leao: "Leão é um signo carismático e autoconfiante. Gostam de ser o centro das atenções e têm uma natureza criativa. Valorizam a lealdade e a generosidade.",
    virgem: "Virgem é um signo prático e analítico. São detalhistas e perfeccionistas, buscando a eficiência em tudo o que fazem. Têm uma natureza prestativa e organizada.",
    libra: "Libra é um signo social e harmonioso. Valorizam a justiça e a parceria, buscando equilíbrio e beleza em suas vidas. Têm uma natureza encantadora e diplomática.",
    escorpiao: "Escorpião é um signo intenso e determinado. São apaixonados e tendem a ser misteriosos. Têm uma natureza investigativa e podem ser emocionalmente profundos.",
    sagitario: "Sagitário é um signo aventureiro e otimista. Valorizam a liberdade e a expansão mental. Têm uma natureza filosófica e gostam de explorar novas ideias.",
    capricornio: "Capricórnio é um signo disciplinado e ambicioso. Valorizam o sucesso e a responsabilidade. Têm uma natureza prática e estão dispostos a trabalhar duro para atingir seus objetivos.",
    aquario: "Aquário é um signo inovador e progressista. Valorizam a individualidade e a amizade. Têm uma natureza humanitária e estão interessados no bem-estar da sociedade.",
    peixes: "Peixes é um signo sensitivo e empático. São intuitivos e muitas vezes têm uma conexão espiritual. Têm uma natureza criativa e podem ser sonhadores."
  };
  
  function calculateCompatibility(sign1, sign2) {
    if (sign1 === sign2) {
      return 100;
    }
  
    const compatibility1to2 = compatibilityTable[sign1][sign2];
    const compatibility2to1 = compatibilityTable[sign2][sign1];
  
    const avgCompatibility = (compatibility1to2 + compatibility2to1) / 2;
    return avgCompatibility;
  }
  
  function getEmojisForCompatibility(percentage) {
    if (percentage < 30) {
      return "😢💔😬";
    } else if (percentage < 70) {
      return "😐🤔😐";
    } else {
      return "😍❤️😄";
    }
  }
  
  function getColorForCompatibility(percentage) {
    if (percentage <= 25) {
      return "#e74c3c"; // Vermelho
    } else if (percentage <= 50) {
      return "#f39c12"; // Amarelo
    } else {
      return "#2ecc71"; // Verde
    }
  }
  
  function getCompatibilitySummary(sign1, sign2, percentage) {
    if (percentage < 30) {
      return `A compatibilidade entre ${sign1} e ${sign2} pode ser desafiadora. ${signCharacteristics[sign1]} ${signCharacteristics[sign2]}`;
    } else if (percentage < 70) {
      return `A compatibilidade entre ${sign1} e ${sign2} é moderada. ${signCharacteristics[sign1]} ${signCharacteristics[sign2]}`;
    } else {
      return `A compatibilidade entre ${sign1} e ${sign2} é excelente! ${signCharacteristics[sign1]} ${signCharacteristics[sign2]}`;
    }
  }
  
  function updateCompatibility(sign1, sign2) {
    const compatibilityPercentage = calculateCompatibility(sign1, sign2);
    const emojis = getEmojisForCompatibility(compatibilityPercentage);
  
    console.log(`Compatibilidade entre ${sign1} e ${sign2}: ${compatibilityPercentage}%`);
    console.log(`Emojis: ${emojis}`);
  
    const mercury = document.getElementById("mercury");
    const emojisElement = document.getElementById("emojis");
    const percentageElement = document.getElementById("percentage");
    const compatibilitySummaryElement = document.getElementById("compatibilitySummary");
  
    if (typeof compatibilityPercentage === "number") {
      const mercuryHeight = Math.min(compatibilityPercentage, 100);
      const color = getColorForCompatibility(compatibilityPercentage);
  
      mercury.style.backgroundColor = color;
      mercury.style.height = `${mercuryHeight}%`;
      emojisElement.innerHTML = getEmojisForCompatibility(compatibilityPercentage);
      percentageElement.textContent = `${compatibilityPercentage}% de compatibilidade`;
      compatibilitySummaryElement.textContent = getCompatibilitySummary(sign1, sign2, compatibilityPercentage);
    } else {
      mercury.style.backgroundColor = "#ddd";
      mercury.style.height = "0%";
      emojisElement.innerHTML = "";
      percentageElement.textContent = compatibilityPercentage;
      compatibilitySummaryElement.textContent = "";
    }
  
    setTimeout(() => {
      emojisElement.style.opacity = 0;
    }, 5000);
  }
  
  function calculateAndShowCompatibility() {
    const sign1 = document.getElementById("sign1").value;
    const sign2 = document.getElementById("sign2").value;
    updateCompatibility(sign1, sign2);
  }
  
  // Ligando a função calculateAndShowCompatibility ao botão de Verificar Compatibilidade
  document.getElementById("calculateButton").addEventListener("click", calculateAndShowCompatibility);
  </script>