import { somar } from "../../lab02/functions02";

describe("Calculate the end of the task processing", () => {
  test("3600 deve retomar 23:30:23", () => {
    const hora: string = "22:30:23";
    const dur: number = 3600;

    expect(somar(hora, dur)).toBe("O processamento desta tarefa termina às 23:30:23");
  });

  test("16030 deve retomar 2:57:33", () => {
    const hora: string = "22:30:23";
    const dur: number = 16030;

    expect(somar(hora, dur)).toBe("O processamento desta tarefa termina às 2:57:33");
  });
});
