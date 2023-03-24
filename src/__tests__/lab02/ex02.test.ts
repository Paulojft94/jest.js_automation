import { valorIntroduzido } from "../../lab02/functions02";

describe("testar valores de input", () => {
  test("maior que 8 deve retornar verdadeiro", () => {
    const input: number = 10;
    const outputV: string = "VERDADEIRO";
    expect(valorIntroduzido(input)).toBe(outputV);
  });

  test("igual a 8 deve retornar VERDADEIRO", () => {
    const input: number = 8;
    const outputV: string = "VERDADEIRO";
    expect(valorIntroduzido(input)).toBe(outputV);
  });

  test(" <8 should return empty", () => {
    const input: number = 7;
    const outputV: string = "";

    expect(valorIntroduzido(input)).toBe(outputV);
  });
});
