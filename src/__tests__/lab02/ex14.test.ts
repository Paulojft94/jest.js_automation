import { empresaGrupo } from "../../lab02/functions02";

describe("Validate the suspended comapnies", () => {
  test("0 should return Indíce de poluícao aceitavel", () => {
    const index: number = 0;
    expect(empresaGrupo(index)).toBe("Índice de poluícão aceitável");
  });

  test("0.29 should return Indíce de poluícao aceitavel", () => {
    const index: number = 0.29;
    expect(empresaGrupo(index)).toBe("Índice de poluícão aceitável");
  });

  test("0.3 should return Indíce de poluícao aceitavel", () => {
    const index: number = 0.3;
    expect(empresaGrupo(index)).toBe("Índice de poluícão aceitável");
  });

  test("0.31 should return Indíce de poluícao aceitavel", () => {
    const index: number = 0.31;
    expect(empresaGrupo(index)).toBe("O grupo 1 está suspenso");
  });

  test("0.4 should return O grupo 1 está suspenso", () => {
    const index: number = 0.4;
    expect(empresaGrupo(index)).toBe("O grupo 1 está suspenso");
  });

  test("0.41 should return Indíce de poluícao aceitavel", () => {
    const index: number = 0.41;
    expect(empresaGrupo(index)).toBe("Os grupos 1 e 2 estão suspensos");
  });

  test("0.5 should return Indíce de poluícao aceitavel", () => {
    const index: number = 0.5;
    expect(empresaGrupo(index)).toBe("Os grupos 1 e 2 estão suspensos");
  });

  test("0.51 should return Indíce de poluícao aceitavel", () => {
    const index: number = 0.51;
    expect(empresaGrupo(index)).toBe("Todos os grupos estão suspensos");
  });

  test("-0.1 should return valor inválido", () => {
    const index: number = -0.1;
    expect(empresaGrupo(index)).toBe("Valor inválido");
  });
});
