const calculadora = require("./calc");

describe("calculadora", () => {
  describe("soma", () => {
    it("retorna 3 quando 2 somado com 1", () => {
      expect(calculadora.soma(1, 2)).toBe(3);
    });
    it("retorna 188 quando 1 somado com 187", () => {
      expect(calculadora.soma(1, 187)).toBe(188);
    });
    it("retorna -1 quando 1 somado com -2", () => {
      expect(calculadora.soma(1, -2)).toBe(-1);
    });
  });
  describe("subtracao", () => {
    it("retorna 3 quando 4 subtraido com 1", () => {
      expect(calculadora.subtracao(4, 1)).toBe(3);
    });
  });
  describe("divisao", () => {
    it("retorna 100 quando 10 dividido por 10", () => {
      expect(calculadora.divisao(100, 10)).toBe(10);
    });
    it("retorna 0 quando o divisor for igual a 0", () => {
      expect(calculadora.divisao(100, 0)).toBe(
        "Erro, não se pode dividir por zero!"
      );
    });
  });
  describe("multiplicacao", () => {
    it("retorna 99 quando 33 multiplicado por 3", () => {
      expect(calculadora.multiplicacao(33, 3)).toBe(99);
    });
  });
});
