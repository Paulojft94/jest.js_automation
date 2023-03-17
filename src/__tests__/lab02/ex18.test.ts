import { horaChegada } from "../../lab02/functions02";

describe("validate the time of arrival of the train", () => {
  test("00:29/23:30 should return O Comboio chega hoje às 23:59", () => {
    const horaPartida: string = "23:30";
    const viagem: string = "00:29";
    expect(horaChegada(horaPartida, viagem)).toBe("O Comboio chega hoje às 23:59");
  });

  test("00:00/00:00 should return O Comboio chega hoje às 0:0", () => {
    const horaPartida: string = "00:00";
    const viagem: string = "00:00";
    expect(horaChegada(horaPartida, viagem)).toBe("O Comboio chega hoje às 0:0");
  });

  test("01:45/23:00 should return O Comboio chega amanhã às 0:45", () => {
    const horaPartida: string = "23:00";
    const viagem: string = "01:45";
    expect(horaChegada(horaPartida, viagem)).toBe("O Comboio chega amanhã às 0:45");
  });

  test("20:00/10:45 should return O Comboio chega hoje às 6:45", () => {
    const horaPartida: string = "20:00";
    const viagem: string = "10:45";
    expect(horaChegada(horaPartida, viagem)).toBe("O Comboio chega amanhã às 6:45");
  });

  test("0:30/23:35 should return O Comboio chega hoje às 0:5", () => {
    const horaPartida: string = "23:35";
    const viagem: string = "0:30";
    expect(horaChegada(horaPartida, viagem)).toBe("O Comboio chega amanhã às 0:5");
  });
});
