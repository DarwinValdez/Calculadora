const bottonNumeros = document.getElementsByName("date-number");
const bottonOpera = document.getElementsByName("date-opera");
const bottonIgual = document.getElementsByName("date-igual")[0];
const bottonDelete = document.getElementsByName("date-delete")[0];
let result = document.getElementById("result");
let opeActual = '';
let opeAnterior = '';
let operacion = undefined;

bottonNumeros.forEach(function (botton) {
  botton.addEventListener("click", function () {
    agregarNumero(botton.innerText);
  });
});

bottonOpera.forEach(function (botton) {
  botton.addEventListener("click", function () {
    selectOperacion(botton.innerText);
  });
});

bottonIgual.addEventListener("click", function () {
  calcular();
  actualizarDisplay();
});

bottonDelete.addEventListener("click", function () {
  clear();
  actualizarDisplay();
});


function selectOperacion(op) {
  if (opeActual === '') return;
  if (opeAnterior !== '') {
    calcular();
  }
  operacion = op.toString();
  opeAnterior = opeActual;
  opeActual = '';
}

function calcular() {
  let calculo;
  const anterior = parseFloat(opeAnterior);
  const actual = parseFloat(opeActual);

  if (isNaN(anterior) || isNaN(actual)) result;
  switch (operacion) {
    case "+":
      calculo = anterior + actual;
      break;
    case "-":
      calculo = anterior - actual;
      break;
    case "x":
      calculo = anterior * actual;
      break;
    case "/":
      calculo = anterior / actual;
      break;

      default:
        return;
  }

  opeActual= calculo
  operacion= undefined
  opeAnterior='';
}

function agregarNumero(num) {
  opeActual = opeActual.toString() + num.toString();
  actualizarDisplay();
}

function clear() {
  opeActual = "";
  opeAnterior = "";
  operacion = undefined;
}

function actualizarDisplay() {
  result.value = opeActual;
}

