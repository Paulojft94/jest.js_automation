/*Exercício 10: Múltiplos (**)
Implemente uma ou funções e respetivos testes que em conjunto permitam que, 
dados dois números (X e Y) indique se um é múltiplo do outro, retornando, 
conforme o caso, uma das mensagens do tipo: X é múltiplo de Y ou Y é múltiplo de X 
ou X não é múltiplo nem divisor de Y.*/

import { multiDiv } from "./functions";

let x: number = 20;
let y: number = 10;
let res: string;

res = multiDiv(x, y);

console.log(res);
