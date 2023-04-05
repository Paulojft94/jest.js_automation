import { calculateBoysPercentage, calculateGirlsPercentage } from "../../lab02/functions02";

describe("Boys percentage", () => {
  const boys: number = 10;
  const girls: number = 10;

  test("should return 50% of boys", () => {
    expect(calculateBoysPercentage(boys, girls)).toBe(0.5);
  });
});

describe("Girls percentage", () => {
  const boys: number = 10;
  const girls: number = 10;

  test("should return 50% of boys", () => {
    expect(calculateGirlsPercentage(boys, girls)).toBe(0.5);
  });

  test("0 should throw an Error", () => {
    const boys: number = 0;
    const girls: number = 0;
    expect(() => {
      calculateGirlsPercentage(boys, girls);
    }).toThrow("Boys and girls must not equal zero");
  });
});
