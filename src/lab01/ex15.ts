/*Exercício 15: Custo Jardinagem (**)
Uma empresa presta serviços de jardinagem e pretende automatizar o processo de cálculo de custos para a construção de jardins.
Desenvolva uma solução (métodos + testes) que dada:

• a área em m2 onde será colocada a grama
• o número de árvores desejados
• o número de arbustos desejados

seja calculado, de acordo com a tabela, a quantidade de horas necessárias para execução do serviço solicitado pelo cliente e também apresentar o custo estimado para o referido serviço.
A tabela indica os custos a considerar nesse cálculo.

Item                      Custo                 Tempo   estimado
Grama                     10 € /m2              300 s/ m2   
Árvores                   20 € /cada            600 s/cada
Arbustos                  15 € /cada            400 s/cada
Custo trabalho / hora     10€                   1h
*/

import { precoCalc, tempoCalc } from "./functions";

let grama: number = 300;
let trees: number = 10;
let bushes: number = 8;

let durServico: number;
let finalTime: string;
let precoFinal: number;

durServico = tempoCalc(grama, trees, bushes);

finalTime = Math.floor(durServico / 3600) + "h " + Math.floor((durServico % 3600) / 60) + " minuto(s) e " + (durServico % 60) + "secs ";

precoFinal = precoCalc(grama, trees, bushes, durServico);

console.log("O Serviço terá uma duração de " + finalTime + "e um custo de " + precoFinal + "€");
