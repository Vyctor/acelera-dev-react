add = (num1, num2) => num1 + num2;

sub = (num1, num2) => num1 - num2;

mult = (num1, num2) => num1 * num2;

div = (num1, num2) =>
  num2 === 0 ? "Erro, não se pode dividir por zero!" : num1 / num2;

module.exports = {
  soma: add,
  subtracao: sub,
  multiplicacao: mult,
  divisao: div,
};
