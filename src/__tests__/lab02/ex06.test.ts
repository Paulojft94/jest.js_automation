import { funcao } from "../../lab02/functions02";

describe("validar a função x<0 x=0 e x>0", () => {
  test("x<0 should return the input number", () => {
    const x: number = -1;
    expect(funcao(x)).toBe(x);
  });

  test("x>0 should return num ** 2 - 2 * num", () => {
    const x: number = 1;
    expect(funcao(x)).toBe(x ** 2 - 2 * x);
  });

  test("x=0 should return 0", () => {
    const x: number = 0;
    expect(funcao(x)).toBe(0);
  });
});
