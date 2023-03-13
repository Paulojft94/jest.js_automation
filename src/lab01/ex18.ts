/*Exercício 18: Cálculo hora de chegada de comboio (***)
Elabore uma solução (métodos + testes) para apoio à CP que permita indicar a hora de chegada de um d
eterminado comboio (horas e minutos), conhecida a hora de partida (horas e minutos) e a duração da viagem (horas e minutos). 
Na informação de retorno deve ainda ser indicado se o comboio chega no próprio dia ou no dia seguinte.
Considere que a duração da viagem nunca é superior a 24 horas.*/

import { horaChegada } from "./functions";

let horaPartida: string = "23:30";
let viagemDur: string = "0:45";

let chegada: string;

chegada = horaChegada(horaPartida, viagemDur);

console.log(chegada);
