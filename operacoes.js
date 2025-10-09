//operadores e precedencia
let somaESubtracao = 5 + 5 - 7;
let subtracaoEMultiplicacao = 30 - 15 * 2;
let multiplicacaoExponenciacao = 2 * 2 ** 2;
let agrupamentoEDivisao = (22 - 2) / 4;

//exibir no console os resultados de saida

console.log(somaESubtracao);
console.log(subtracaoEMultiplicacao);
console.log(multiplicacaoExponenciacao);
console.log(agrupamentoEDivisao);
//a precedência determina qual a ordem em que os operadores
//são processados. Operadores com maior precedencia são processados primeiro.
//isso serve para entender por que algumas operações são feitas antes mesmo a ordem sendo outra.

let a = "4"
let b = "6"
console.log(a + b);//neste caso o codigo concatenou as strings e saiu 46, pois não são numeros  

let a1 = 22;
let b2 = 43;
console.log(a1 + b2);//neste como são mnumeros o resultado é uma soma = 65

let c = "22"
let d = 22;
console.log(c + d); //neste codigo ele não entendeu se era uma soma ou concatenação = 2222, pois '22' é um tipo str.