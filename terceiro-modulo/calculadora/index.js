const calculadora = require("./calc");
const promptSync = require("prompt-sync");

const prompt = promptSync();

function opcaos() {
  console.log(`
  1 - somar
  2 - subtrair
  3 - multiplicar
  4 - dividir
  0 - sair
  
  `);
}

function opcaoSelected(opcao) {
  const num1 = Number(prompt("Digite o número 1: "));
  const num2 = Number(prompt("Digite o número 2: "));

  if (opcao === "1") {
    return calculadora.soma(num1, num2);
  }
  if (opcao === "2") {
    return calculadora.subtracao(num1, num2);
  }
  if (opcao === "3") {
    return calculadora.multiplicacao(num1, num2);
  }
  if (opcao === "4") {
    return calculadora.divisao(num1, num2);
  }
}

let opcao;
while (opcao != "0") {
  opcaos();
  opcao = prompt("Qual a operação? ");
  if (opcao == "0") break;
  const resultado = opcaoSelected(opcao);

  console.log(`O resultado é ${resultado}`);
}
