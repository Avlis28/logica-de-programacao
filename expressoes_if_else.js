//conhecidas tambem como estruturas de controle de estrutura ou decisões
let nome = "Ricardo";
let idade = 22;
let estaSolteiro = true;

if (estaSolteiro === true) {
  console.log(nome + " está solteiro"); //se retorno for true
} else {
  console.log(nome + " está casado"); //se retorno for falso
}

//podemos unir estruturas de controle com operadores logicos para criar uma gama de decisões logicas
let variavel1 = 53;
let variavel2 = true;
let variavelTexto = "Zero";
let variavelNumero = "24";
let variavelLogica = false;
let variavelCurta = "texto curto";

if (variavel2 && variavelNumero == 24) {
  console.log("retorno true");
} else {
  console.log("retorno false");
}
if (variavel1 > 50) {
  console.log(variavel1 + " é maior que 50");
  if (variavelTexto != "um") {
    console.log(variavelTexto + " è diferente de um");
    if (!variavelLogica) {
      console.log("Negacação da variavel Logica é verdadeira");
      if (variavelTexto != variavel1) {
        console.log("Valor das variaveis são diferentes");
      }
    }
  }
}
//usando os operadores logicos existentes na linguagem nós criamos várias decisões logicas .
//Inclusive podenos notar que não utilizamos a expressão 'else', apenas a expressão 'if'.

//aqui veremos a decisão 'else if'
let numeroPassageiros = 23;

if (numeroPassageiros === 0){
    console.log("O transorte esta vazio");
} else if (numeroPassageiros > 0 && numeroPassageiros < 50){
console.log("o transporte tem passageiros");
} else {
    console.log("o transporte esta cheio");
}