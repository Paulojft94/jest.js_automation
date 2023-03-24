import { turmaClassificacao } from "../../lab02/functions02";

describe("Validate the class classification", () => {
  test("-1 should return valor inválido", () => {
    const turmaClass: number = -1;
    expect(turmaClassificacao(turmaClass)).toBe("Valor Inválido");
  });

  test("1.1 should return Valor Invalido", () => {
    const turmaClass: number = 1.1;
    expect(turmaClassificacao(turmaClass)).toBe("Valor Inválido");
  });

  test("-0.1 should return Valor Invalido", () => {
    const turmaClass: number = -0.1;
    expect(turmaClassificacao(turmaClass)).toBe("Valor Inválido");
  });

  test("0 should return Turma Má", () => {
    const turmaClass: number = 0;
    expect(turmaClassificacao(turmaClass)).toBe("Turma Má");
  });

  test("0.1 should return Turma Má", () => {
    const turmaClass: number = 0.1;
    expect(turmaClassificacao(turmaClass)).toBe("Turma Má");
  });

  test("0.19 should return Turma Má", () => {
    const turmaClass: number = 0.19;
    expect(turmaClassificacao(turmaClass)).toBe("Turma Má");
  });

  test("0.2 should return Turma Fraca", () => {
    const turmaClass: number = 0.2;
    expect(turmaClassificacao(turmaClass)).toBe("Turma Fraca");
  });

  test("0.21 should return Turma Fraca", () => {
    const turmaClass: number = 0.21;
    expect(turmaClassificacao(turmaClass)).toBe("Turma Fraca");
  });

  test("0.49 should return Turma Fraca", () => {
    const turmaClass: number = 0.49;
    expect(turmaClassificacao(turmaClass)).toBe("Turma Fraca");
  });

  test("0.5 should return Turma Razoável", () => {
    const turmaClass: number = 0.5;
    expect(turmaClassificacao(turmaClass)).toBe("Turma Razoável");
  });

  test("0.51 should return Turma Razoável", () => {
    const turmaClass: number = 0.51;
    expect(turmaClassificacao(turmaClass)).toBe("Turma Razoável");
  });

  test("0.69 should return Turma Razoável", () => {
    const turmaClass: number = 0.69;
    expect(turmaClassificacao(turmaClass)).toBe("Turma Razoável");
  });

  test("0.7 should return Turma Boa", () => {
    const turmaClass: number = 0.7;
    expect(turmaClassificacao(turmaClass)).toBe("Turma Boa");
  });

  test("0.71 should return Turma Boa", () => {
    const turmaClass: number = 0.71;
    expect(turmaClassificacao(turmaClass)).toBe("Turma Boa");
  });
  test("0.89 should return Turma Boa", () => {
    const turmaClass: number = 0.89;
    expect(turmaClassificacao(turmaClass)).toBe("Turma Boa");
  });

  test("0.9 should return Turma Excelente", () => {
    const turmaClass: number = 0.9;
    expect(turmaClassificacao(turmaClass)).toBe("Turma Excelente");
  });

  test("0.91 should return Turma Excelente", () => {
    const turmaClass: number = 0.91;
    expect(turmaClassificacao(turmaClass)).toBe("Turma Excelente");
  });

  test("1 should return Turma Excelente", () => {
    const turmaClass: number = 1;
    expect(turmaClassificacao(turmaClass)).toBe("Turma Excelente");
  });
});
