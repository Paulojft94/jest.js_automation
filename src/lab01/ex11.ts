/*Exercício 11: Verifica se dígitos são crescentes (**)
Construa uma solução (métodos + testes) que dado um número de três dígitos (centenas, dezenas e unidades), 
verifique se a sequência dos algarismos é ou não crescente.*/

import { numListClassification, numSegregation } from "./functions";

// divisão inteira para saber a centena
// Modulo por 100 dividido por 10 para saber a dezena.
// (Modulo por 100 dividido por 10 para saber a dezena)%10

let number = 122;
let digitArray: number[];

digitArray = numSegregation(number);

console.log(numListClassification(digitArray));
