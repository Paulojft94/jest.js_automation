import { pontos } from "../../lab02/functions02";

describe("validar a distancia entre pontos", () => {
  test("same coordinates should return 0", () => {
    const x1: number = 1;
    const x2: number = 1;
    const y1: number = 1;
    const y2: number = 1;
    const result: number = 0;

    expect(pontos(x1, y1, x2, y2)).toBe(result);
  });

  test("(1,-1) and (-1,1) should return 2.83", () => {
    const x1: number = 1;
    const x2: number = -1;
    const y1: number = -1;
    const y2: number = 1;
    const result: number = 2.83;

    expect(pontos(x1, y1, x2, y2)).toBe(result);
  });
});
