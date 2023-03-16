import { precoCalc, tempoCalc } from "../../lab02/functions02";

describe("validate the cost of gardening", () => {
  test("gardening duration should take 51000", () => {
    const grass: number = 100;
    const trees: number = 15;
    const bushes: number = 30;

    expect(tempoCalc(grass, trees, bushes)).toBe(51000);
  });

  test("gardening cost should be 1891.67", () => {
    const manPower: number = 51000;
    const grass: number = 100;
    const trees: number = 15;
    const bushes: number = 30;

    expect(precoCalc(grass, trees, bushes, manPower)).toBe(1891.67);
  });
});
