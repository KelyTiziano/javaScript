window.onload = function () {
  var botaoEnviarNome = document.getElementById("enviarNome"); //cria variavel para id

  botaoEnviarNome.onclick = function () {
    // criando função onclick
    var inputNome = document.getElementById("nome");
    var sexo = document.querySelector('input[name="sexo"]:checked');
    var msg = document.getElementById("ola");

    msg.innerHTML =
      " <h2><i> Olá " +
      inputNome.value +
      " Você é um(a) " +
      sexo.value +
      "</i></h2>"; // imprimir na div da variavel selecionada os valores citados após o =
  };

  var botaoFinalizar = document.getElementById("finalizar");
  var selectTexto = document.getElementById("selectBye");
  botaoFinalizar.onclick = function () {
    alert(selectTexto.value); // a impressão acontece em forma de alerta
  };

  var vermelho = document.getElementById("vermelho");
  vermelho.onclick = function () {
    var r2 = document.getElementById("r2");
    if (vermelho.checked) {
      r2.style.backgroundColor = "red";
    } else {
      r2.style.backgroundColor = "#c3c3c3";
    }
  };

  var azul = document.getElementById("azul");
  azul.onclick = function () {
    var r3 = document.getElementById("r3");
    if (azul.checked) {
      r3.style.backgroundColor = "DodgerBlue";
    } else {
      r3.style.backgroundColor = "#c3c3c3";
    }
  };

  var amarelo = document.getElementById("amarelo");
  amarelo.onclick = function () {
    var r4 = document.getElementById("r4");
    if (amarelo.checked) {
      r4.style.backgroundColor = "yellow";
    } else {
      r4.style.backgroundColor = "#c3c3c3";
    }
  };

  var verde = document.getElementById("verde");
  verde.onclick = function () {
    var r5 = document.getElementById("r5");
    if (verde.checked) {
      r5.style.backgroundColor = "limeGreen";
    } else {
      r5.style.backgroundColor = "#c3c3c3";
    }
  };

  var branco = document.getElementById("branco");
  branco.onclick = function () {
    var r6 = document.getElementById("r6");
    if (branco.checked) {
      r6.style.backgroundColor = "white";
    } else {
      r6.style.backgroundColor = "#c3c3c3";
    }
  };

  var preto = document.getElementById("preto");
  preto.onclick = function () {
    var r7 = document.getElementById("r7");
    if (preto.checked) {
      r7.style.backgroundColor = "black";
    } else {
      r7.style.backgroundColor = "#c3c3c3";
    }
  };

  var calcular = document.getElementById("calcular");

  calcular.onclick = function (e) {
    e.preventDefault();
    var dataHoje = document.getElementById("dataHoje");
    var dataNasc = document.getElementById("dataNasc");
    var idade = document.getElementById("idade");

    dataNasc = new Date(dataNasc.value);
    dataHoje = new Date(dataHoje.value);

    let calculoIdade = dataHoje.getTime() - dataNasc.getTime();
    let calculo = Math.floor(calculoIdade / (1000 * 60 * 60 * 24 * 365.25));

    console.log(calculo);
    idade.innerHTML = "<h2><i>Você tem " + calculo + " anos de idade. </i></h2>"
  };
};
