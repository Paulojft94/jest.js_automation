import { cubeClassification, volumeCubo } from "./functions";

let area: number = -11111;
let volume: number;
let tipo: string;

volume = volumeCubo(area);

tipo = cubeClassification(volume);

console.log("O cubo tem um  volume de " + volume, "e é considerado " + tipo);
