import { horasExtra } from "../../lab02/functions02";

describe("test the extra hours of the workers", () => {
  test("<36 should return the same amount of input*precoHora", () => {
    const horaS: number = 35;
    const pHora: number = 7.5;

    expect(horasExtra(horaS, pHora)).toBe(262.5);
  });

  test("36 should return the same amount of input*precoHora", () => {
    const horaS: number = 36;
    const pHora: number = 7.5;

    expect(horasExtra(horaS, pHora)).toBe(270);
  });

  test("37 should return the amount of 280€", () => {
    const horaS: number = 37;
    const pHora: number = 7.5;

    expect(horasExtra(horaS, pHora)).toBe(280);
  });

  test("41 should return the amount of 320", () => {
    const horaS: number = 41;
    const pHora: number = 7.5;

    expect(horasExtra(horaS, pHora)).toBe(320);
  });

  test("36 should return the amount of  ", () => {
    const horaS: number = 42;
    const pHora: number = 7.5;

    expect(horasExtra(horaS, pHora)).toBe(335);
  });
});
