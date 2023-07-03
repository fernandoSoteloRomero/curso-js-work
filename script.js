const $d = document;

const $title = $d.querySelector("h1");
const $input1 = $d.querySelector("#calculo1");
const $input2 = $d.querySelector("#calculo2");
const $btnCalcular = $d.querySelector("#btnCalcular");
const $pWithId = $d.querySelector("#pid");
const $form = $d.querySelector("#form");

function sumar(e) {
  console.log(e);
  e.preventDefault();
  const n1 = Number($input1.value);
  const n2 = Number($input2.value);
  const resultado = n1 + n2;
  $pWithId.innerText = resultado;
}

$form.addEventListener("submit", sumar);
