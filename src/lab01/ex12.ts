/*Exercício 12: Custo de Artigo em Saldo (**)
Construa uma soluçãoque permita calcular o preço de saldo de um artigo. 
Os descontos variam em função do preço, conforme se mostra na tabela abaixo.

Preço > 200 = 60%
100 > Preço ≤ 200 = 40%
50 > Preço ≤ 100 = 30%
Preço ≤ 50 = 20%*/

import { discountedPreco } from "./functions";

let preco: number = 134;
let precoFinal: number;

precoFinal = discountedPreco(preco);

console.log(precoFinal);
