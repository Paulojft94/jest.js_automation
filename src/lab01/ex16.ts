/*Exercício 16: Cálculo de média de milhas e conversão (**)
Desenvolva uma solução (métodos + testes) que a partir de cinco valores indicando as distâncias diárias em milhas percorrida por um estafeta, 
durante uma semana de trabalho, retorne a distância média diária em quilómetros. A conversão faz-se com base na fórmula: 1 Milha=1609 metros.
*/

import { mediaKM } from "./functions";

let dia1: number = 20;
let dia2: number = 10;
let dia3: number = 10;
let dia4: number = 10;
let dia5: number = 15;

let mediaSemanalKM;

mediaSemanalKM = mediaKM(dia1, dia2, dia3, dia4, dia5);

console.log(mediaSemanalKM);
