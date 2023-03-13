/*O departamento que controla o índice de poluição do meio ambiente mantém 3 grupos de indústrias que são altamente poluentes do meio ambiente.
O índice de poluição aceitável varia de 0 até 0,3.
Se o índice subir para além de 0,3 as indústrias do 1o grupo são intimadas a suspenderem as suas atividades, se o índice crescer para além de 0,4 as indústrias do 1o e 2o grupo são intimadas a suspenderem as suas atividades e se o índice superar os 0,5 os 3 grupos devem ser notificados a paralisarem as suas atividades.
Elabore uma solução (métodos + testes) que recebe o índice de poluição medido e retorna a notificação apropriada.*/

import { empresaGrupo } from "./functions";

let polIndex: number = 0.3000001;
let notificacao: string;

notificacao = empresaGrupo(polIndex);

console.log(notificacao);
