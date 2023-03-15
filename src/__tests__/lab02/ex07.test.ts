import { cubeClassification, volumeCubo } from "../../lab02/functions02";

describe("tests for volCube", () => {
  const aresta: number = 4;
  test("test with area > 0 (=4)", () => {
    expect(volumeCubo(aresta)).toBe(0.54);
  });

  test("TestClassification for Cube with area > 0 (=4)", () => {
    const classificacao: number = volumeCubo(aresta);

    expect(cubeClassification(classificacao)).toBe("Pequeno");
  });

  test("test with area == 0", () => {
    expect(volumeCubo(0)).toBe(-1);
  });

  test("test with area <0 (-1)", () => {
    expect(volumeCubo(-1)).toBe(-1);
  });

  test("Classificacao do cubo ==1", () => {
    const classificacao = 1;
    expect(cubeClassification(classificacao)).toBe("Pequeno");
  });

  test("Classificacao do cubo >1", () => {
    const classificacao = 1.1;
    expect(cubeClassification(classificacao)).toBe("Médio");
  });

  test("Classificacao do cubo = 1.9", () => {
    const classificacao = 1.9;
    expect(cubeClassification(classificacao)).toBe("Médio");
  });

  test("Classificacao do cubo = 2", () => {
    const classificacao = 2;
    expect(cubeClassification(classificacao)).toBe("Grande");
  });
});
