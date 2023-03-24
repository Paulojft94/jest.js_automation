import { numListClassification, numSegregation } from "../../lab02/functions02";

describe("Validar as sequencias de números", () => {
  test("123 should return an array [1, 2, 3]", () => {
    const input: number = 123;
    let numDigit: number[] = [1, 2, 3];

    expect(numSegregation(input)).toEqual(numDigit);
  });

  test("123 should return A sequência é crescente", () => {
    let numDigit: number[] = [1, 2, 3];

    expect(numListClassification(numDigit)).toBe("A sequência é crescente");
  });

  test("113 should return A sequência não é crescente", () => {
    let numDigit: number[] = [1, 1, 3];

    expect(numListClassification(numDigit)).toBe("A sequência não é crescente");
  });

  test("111 should return A sequência não é crescente", () => {
    let numDigit: number[] = [1, 1, 1];

    expect(numListClassification(numDigit)).toBe("A sequência não é crescente");
  });

  test("122 should return A sequência não é crescente", () => {
    let numDigit: number[] = [1, 2, 2];

    expect(numListClassification(numDigit)).toBe("A sequência não é crescente");
  });
});
