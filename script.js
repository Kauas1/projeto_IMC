let document;
let alert;
const peso = document.querySelector('#boxpeso');
const altura = document.querySelector('#boxaltura');
const button = document.querySelector('#bnt');

button.addEventListener('click', () => {
  const pesoFinal = peso.value;
  const alturaFinal = altura.value;
  const imc = pesoFinal / (alturaFinal * alturaFinal);

  if (imc <= 16.9) {
    alert('Você está muito abaixo do peso');
  } else if (imc >= 17 && imc <= 18.4) {
    alert('Você está abaixo do peso');
  } else if (imc >= 18.5 && imc <= 24.9) {
    alert('Você está no peso normal');
  } else if (imc >= 25 && imc <= 29.9) {
    alert('Você está acima do peso');
  } else if (imc >= 30 && imc <= 34.9) {
    alert('Você está em Obesidade grau I');
  } else if (imc >= 35 && imc <= 40) {
    alert('Você está em Obesidade grau II');
  } else if (imc > 40) {
    alert('Você está em Obesidade grau III');
  } else {
    alert('Preencha os campos corretamente.');
  }
});
