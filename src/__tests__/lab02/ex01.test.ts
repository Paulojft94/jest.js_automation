import { calculateBoysPercentage } from "../../lab02/functions02";

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
    expect(calculateBoysPercentage(boys, girls)).toBe(0.5);
  });
});
