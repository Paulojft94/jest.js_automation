//Exercício 13: Estruturas de decisão encadeadas (**)

import { turmaClassificacao } from "./functions";

let aprovados: number = 0.9;
let classificacaoTurma: string;

classificacaoTurma = turmaClassificacao(aprovados);

console.log(classificacaoTurma);
