function verificarAposentadoria() {
  let idade = Number(document.getElementById("idade").value);
  let tempo = Number(document.getElementById("tempo").value);

  let resultado = document.getElementById("resultadoAposentadoria");

  if (idade >= 65 || tempo >= 30) {
    resultado.innerText = "Você pode se aposentar.";
    resultado.style.color = "green";
  } else {
    resultado.innerText = "Você ainda não pode se aposentar.";
    resultado.style.color = "red";
  }
}

function calcularIMC() {
  let altura = Number(document.getElementById("altura").value);
  let peso = Number(document.getElementById("peso").value);

  let resultado = document.getElementById("resultadoIMC");

  let imc = peso / (altura * altura);
  let classificacao = "";

  if (imc < 18.5) {
    classificacao = "Abaixo do peso";
  } else if (imc >= 18.5 && imc <= 24.9) {
    classificacao = "Peso normal";
  } else if (imc >= 25 && imc <= 29.9) {
    classificacao = "Sobrepeso";
  } else if (imc >= 30 && imc <= 34.9) {
    classificacao = "Obesidade grau I";
  } else if (imc >= 35 && imc <= 39.9) {
    classificacao = "Obesidade grau II";
  } else {
    classificacao = "Obesidade grau III (mórbida)";
  }

  resultado.innerText = `Seu IMC é ${imc.toFixed(2)} - ${classificacao}`;
}
