import { custoMateriais, custoTotal, numPintores } from "../../lab02/functions02";

describe("Validate all the costs related with the painting", () => {
  describe("validate de number of painters", () => {
    test("0 should return -1", () => {
      const area: number = 0;
      expect(numPintores(area)).toBe(-1);
    });

    test("1 should return 1 painter", () => {
      const area: number = 1;
      expect(numPintores(area)).toBe(1);
    });

    test("99 should return 1 painter", () => {
      const area: number = 99;
      expect(numPintores(numPintores(area))).toBe(1);
    });

    test("100 should return 2", () => {
      const area: number = 100;
      expect(numPintores(area)).toBe(2);
    });

    test("299 should reutrn 2", () => {
      const area: number = 100;
      expect(numPintores(area)).toBe(2);
    });

    test("300 should return 3", () => {
      const area: number = 300;
      expect(numPintores(area)).toBe(3);
    });

    test("999 should return 3", () => {
      const area: number = 999;
      expect(numPintores(area)).toBe(3);
    });

    test("1000 should return 5", () => {
      const area: number = 1000;
      expect(numPintores(area)).toBe(4);
    });
  });

  describe("Validate the cost of manPower and painting", () => {
    test("should reuturn 8437.5", () => {
      const areaEd: number = 750;
      const pintores: number = 3;
      const salarioHora: number = 7.5;

      expect(parseFloat(custoTotal(areaEd, pintores, salarioHora).toFixed(2))).toBe(8437.5);
    });
  });

  describe("validate the material costs", () => {
    test("the material costs should be ", () => {
      const areaEd: number = 750;
      const custoTinta: number = 7.5;
      const renimento: number = 32;

      expect(custoMateriais(areaEd, custoTinta, renimento)).toBe(180);
    });
  });
});
