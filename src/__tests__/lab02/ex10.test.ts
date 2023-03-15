import { multiDiv } from "../../lab02/functions02";

describe("validacao dos número múltiplos e divisores", () => {
  test("6 and 3 should be multiples", () => {
    const xNum: number = 3;
    const yNum: number = 3;

    expect(multiDiv(xNum, yNum)).toBe("X é Múltiplo de Y");
  });

  test("3 e 6 should not be multiples", () => {
    const xNum: number = 3;
    const yNum: number = 6;
    expect(multiDiv(xNum, yNum)).toBe("Y é Múltiplo de x");
  });

  test("3 e 5 should not be multiple or divisor", () => {
    const xNum: number = 3;
    const yNum: number = 5;

    expect(multiDiv(xNum, yNum)).toBe("X não é múltiplo, nem divisor de Y");
  });
});
