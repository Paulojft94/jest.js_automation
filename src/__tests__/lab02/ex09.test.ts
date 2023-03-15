import { saudacao } from "../../lab02/functions02";

describe("Validar exercício saudacao", () => {
  test("Bom Dia1 — 21600 should return bom dia", () => {
    const bdia: number = 21600;
    expect(saudacao(bdia)).toBe("Bom dia");
  });

  test("Bom Dia2 — 43200 should return bom dia", () => {
    const bdia: number = 43200;
    expect(saudacao(bdia)).toBe("Bom dia");
  });

  test("Boa Tarde1 — 43201 should return boa tarde", () => {
    const btarde: number = 43201;
    expect(saudacao(btarde)).toBe("Boa tarde");
  });

  test("Boa Tarde2 — 72000 should return boa tarde", () => {
    const btarde: number = 72000;
    expect(saudacao(btarde)).toBe("Boa tarde");
  });

  test("Boa NoiteA1 — 72000 should return boa tarde", () => {
    const btarde: number = 72001;
    expect(saudacao(btarde)).toBe("Boa Noite");
  });

  test("Boa NoiteA2 — 0 should return boa tarde", () => {
    const btarde: number = 0;
    expect(saudacao(btarde)).toBe("Boa Noite");
  });

  test("Boa NoiteB1 — 1 should return boa tarde", () => {
    const btarde: number = 1;
    expect(saudacao(btarde)).toBe("Boa Noite");
  });

  test("Boa NoiteB1 — 21,599 should return boa tarde", () => {
    const btarde: number = 21599;
    expect(saudacao(btarde)).toBe("Boa Noite");
  });
});
