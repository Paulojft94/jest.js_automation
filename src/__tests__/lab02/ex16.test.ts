import { mediaKM } from "../../lab02/functions02";

describe("Calculate the mean distance of a delivery man", () => {
  test("all days 13 should return a mean miles of 20.92", () => {
    const seg: number = 13;
    const ter: number = 13;
    const qua: number = 13;
    const qui: number = 13;
    const sex: number = 13;

    expect(mediaKM(seg, ter, qua, qui, sex)).toBe(20.92);
  });
});
