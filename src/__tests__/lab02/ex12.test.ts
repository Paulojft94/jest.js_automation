import { discountedPreco } from "../../lab02/functions02";

describe("Validate the prices with discount", () => {
  test("205 should return 82", () => {
    const preco: number = 205;
    expect(discountedPreco(preco)).toBe(82);
  });

  test("200 should return 120", () => {
    const preco: number = 200;
    expect(discountedPreco(preco)).toBe(120);
  });

  test("105 should return 63", () => {
    const preco: number = 105;
    expect(discountedPreco(preco)).toBe(63);
  });

  test("100 should return 70", () => {
    const preco: number = 100;
    expect(discountedPreco(preco)).toBe(70);
  });

  test("60 should return 42", () => {
    const preco: number = 60;
    expect(discountedPreco(preco)).toBe(42);
  });

  test("50 should return 40", () => {
    const preco: number = 50;
    expect(discountedPreco(preco)).toBe(40);
  });
});
