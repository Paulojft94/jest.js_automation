/*Desenvolva uma solução que sabendo a hora de início de processamento de uma tarefa numa determinada máquina 
e o tempo que a tarefa demora a processar, calcule a hora de fim de processamento. 
O tempo de início de processamento é indicado em horas, minutos e segundos e o tempo de duração do processamento em segundos. 
O tempo de fim de processamento deve ser retornado em horas, minutos e segundos.*/

import { somar } from "./functions";

let hora: string = "23:30:12";
let tarefaDur: number = 7200;
let terminoH: string;

terminoH = somar(hora, tarefaDur);

console.log(terminoH);
