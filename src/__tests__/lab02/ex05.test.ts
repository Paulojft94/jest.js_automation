import { evenCalc } from "../../lab02/functions02";

describe("Verificar se um número é PAR ou IMPAR", () => {
  test("número Par deve retornar É PAR", () => {
    const inputNum: number = 2;
    expect(evenCalc(inputNum)).toBe("É Par");
  });

  test("número Par negativo deve retornar É PAR", () => {
    const inputNum: number = -50;
    expect(evenCalc(inputNum)).toBe("É Par");
  });

  test("número Ímpar deve retornar Não É PAR", () => {
    const inputNum: number = 31;
    expect(evenCalc(inputNum)).toBe("Não É PAR");
  });

  test("número Ímpar negativo deve retornar Não É PAR", () => {
    const inputNum: number = -7;
    expect(evenCalc(inputNum)).toBe("Não É PAR");
  });
});

describe("verificar cálculo com input 0", () => {
  test("Input 0 deve retornar Input Inválido", () => {
    const invalido: number = 0;

    expect(evenCalc(invalido)).toBe("Input Inválido");
  });
});
