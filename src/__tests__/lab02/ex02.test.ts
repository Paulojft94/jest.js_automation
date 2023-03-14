import { valorIntroduzido } from "../../lab02/functions02";

describe("testar valores de input", () => {
  const input: number = 10;
  const outputV: string = "VERDADEIRO";

  test("maior que 8 deve retornar verdadeiro", () => {
    expect(valorIntroduzido(input)).toBe(outputV);
  });

  test("igual a 8 deve retornar VERDADEIRO", () => {
    expect(valorIntroduzido(input)).toBe(outputV);
  });
});
