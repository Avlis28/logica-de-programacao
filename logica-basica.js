/*Logica é a capacidade de resolver problemas usando passos estruturados
entrada - o que o programa recebe 
processamento - o que ele faz com isso 
o que o programa devolve */

let name = "Ana";
console.log("Bem vindo, " + name + "!");

let nome2 = "Davi";
let idade2 = 23;
let cidade = "São Paulo";
console.log(
  "Meu nome é " + nome2 + " e tenho " + idade2 + " anos e sou de " + cidade
);
// result 2 =
//Result = Bem vindo, Ana!

const a = 134;
const b = 14;
console.log(a + b);
//Result = 148 soma

const c = 18;
const d = 20;
console.log(c - d);
//Result = -2 subtração

const e = 14;
const f = 14;
console.log(e * f);
//Result = 196 Multiplicação

const j = 134;
const k = 14;
console.log(a / b);
// Result = 9.571428571428571 divisão

// Logica basica com condições com retornno de numero ">" ou "<"
let idade = 20;
if ((idade) => 18) {
  console.log("Maior de idade");
} else {
  console.log("menor de idade");
}

//logica basica com retorno de impar ou par
let numero = 14;
if (numero % 2 === 0) {
  console.log(numero + " é par ");
} else {
  console.log(numero + " é impar ");
}

//logica basica com fluxos de decisoes comparativas.
let num = 7;
if (num % 2 === 0) {
  console.log(num + "é par");
} else {
  console.log(num + "  impar");
}

//Logica basica com operadores
let numero1 = 3;
let numero2 = 5;
const soma = numero1 + numero2;
console.log("A soma é: " + soma);

//soma de 5 numeros acumulados
let n1 = 7;
let n2 = 10;
let n3 = 25;
let n4 = 48;
let n5 = 20;
let som = n1 + n2 + n3 + n4 + n5;
console.log(som);
