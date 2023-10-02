function verifySign() {
  var birthdate = new Date(document.getElementById("birthdate").value);
  var month = birthdate.getMonth() + 1;
  var day = birthdate.getDate();
  var sign = "";

  if ((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
    sign = "Áries: de 21 de março a 20 de abril";
  } else if ((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
    sign = "Touro: de 21 de abril a 20 de maio";
  } else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
    sign = "Gêmeos: de 21 de maio a 20 de junho";
  } else if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) {
    sign = "Câncer: de 21 de junho a 22 de julho";
  } else if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) {
    sign = "Leão: de 23 de julho a 22 de agosto";
  } else if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) {
    sign = "Virgem: de 23 de agosto a 22 de setembro";
  } else if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) {
    sign = "Libra: de 23 de setembro a 22 de outubro";
  } else if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) {
    sign = "Escorpião: de 23 de outubro a 21 de novembro";
  } else if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) {
    sign = "Sagitário: de 22 de novembro a 21 de dezembro";
  } else if ((month == 12 && day >= 22) || (month == 1 && day <= 20)) {
    sign = "Capricórnio: de 22 de dezembro a 20 de janeiro";
  } else if ((month == 1 && day >= 21) || (month == 2 && day <= 18)) {
    sign = "Aquário: de 21 de janeiro a 18 de fevereiro";
  } else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
    sign = "Peixes: de 19 de fevereiro a 20 de março";
  }

  var balloon = document.getElementById("signBalloon");
  balloon.innerText = sign;
  balloon.classList.add("show");
  setTimeout(function() {
    balloon.classList.remove("show");
  }, 5000);
  window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };
}