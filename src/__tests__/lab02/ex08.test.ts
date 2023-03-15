import { calcHoras } from "../../lab02/functions02";

describe("verificar conversao de de segundos em HH:MM:SS", () => {
  test("inserir 10 segundos", () => {
    const segundos: number = 10;
    expect(calcHoras(segundos)).toBe("0:0:10");
  });

  test("testar 16minutos e 40 segundos em segundos", () => {
    const segundos: number = 1000;
    expect(calcHoras(segundos)).toBe("0:16:40");
  });
  test("testar 2h 46minutos e 40 segundos em segundos", () => {
    const segundos: number = 10000;
    expect(calcHoras(segundos)).toBe("2:46:40");
  });
});
