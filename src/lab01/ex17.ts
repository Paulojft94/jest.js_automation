/* Construa uma ou mais funções e respetivos testes que em conjunto permitam determinar 
o custo da pintura de um edifício, contabilizando tinta e mão-de-obra.
Será fornecida a área do edifício, o custo do litro da tinta a utilizar e o respetivo rendimento do litro
, isto é, a área que se consegue pintar com um litro dessa tinta e o salário/dia de um pintor.
Considere a seguinte informação:
• Cada pintor trabalha 8 horas por dia e o seu rendimento é de 2 m2/hora;
• O número de pintores necessários é determinado a partir da seguinte tabela:

ÁREA                            Núm Pintores
Entre 0 e 100 m2 exclusive      1
De 100 a 300 m2 exclusive       2 
De 300 a 1000 m2 exclusive      3 
Acima de 1000 m2                4 

*/

import { custoMateriais, custoTotal, numPintores } from "./functions";

let areaEd: number = 900;
let litroTinta: number = 5.49;
let tintaM2: number = 25;
let manPower: number = 7.5;

let numPin: number;
let totalMaoObra: number;
let totalMaterial: number;
let totalEuros: number;

numPin = numPintores(areaEd);

totalMaoObra = custoTotal(areaEd, numPin, manPower);
totalMaterial = custoMateriais(areaEd, litroTinta, tintaM2);

totalEuros = totalMaoObra + totalMaterial;

console.log("O Custo de pintura do edifício é de " + totalEuros.toFixed(2));
