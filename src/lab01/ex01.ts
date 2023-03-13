
import { calculateBoysPercentage, calculateGirlsPercentage } from "./lab01";
let girls = 20;
let boys = 20;
let resultBoys:number;
let resultGirls:number;

resultBoys = calculateBoysPercentage(boys, girls);
resultGirls = calculateGirlsPercentage(boys, girls)

console.log("A média de Rapazes é: " + resultBoys);
console.log("A média de Raparigas é: " + resultBoys);
