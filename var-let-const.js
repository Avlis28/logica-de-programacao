//Primeiro codigo
console.log("Hello World!");

// entendendo escopo global e local
// escopo com var
if (true) {
  var fruta = "maçã";
  console.log(fruta);
}
console.log(fruta); // a variável fruta está visível aqui fora do bloco if

// escopo com let respeitando o bloco
if (true) {
  let cor = "azul";
  console.log(cor);
}
console.log(cor); // a variável cor não está visível aqui fora do bloco if

// escopo com const respeitando o bloco
if (true) {
  const animal = "cachorro";
  console.log(animal);
}
console.log(animal); // a variável animal não está visível aqui fora do bloco if

// escopo de função
function teste() {
  let numero = "4";
  console.log(numero); // a variávelvnumero está visível aqui dentro da função
}
teste();
console.log(numero); // a variável numero não está visível aqui fora da função

{
  let idade = 20; // Nesta variavel o valor pode ser alterado.
  idade = +5; // aqui somo 5 ao valor dentro da variavel.
  console.log(idade);
}
//O valor muda sem erro.
// Existe diferença pratica de const para let.

let Mensagem = "Fora";
{
  let mensagem = "Dentro";
  console.log(mensagem);
}
console.log(mensagem);

//troca de var por let
var mensagem = "fora";
{
  var mensagem = "Dentro";
  console.log(mensagem);
}
console.log(mensagem);
//A variavel dentro do escopo foi sobrescrita, por que ele substitui a variavel que estava fora.
//escopo de function vs escopo de bloco

function exemplo() {
  let valor = "42";
  console.log("Dentro", valor);
}
exemplo();
console.log("Fora", valor); //"dentro 42"
//fora da funçao ERRO!

sistema();

//escopo lexico (closures)
function criarSaudacao() {
  let saudacao = "ola";

  return function (nome) {
    console.log(nome);
  };
}
let saudar = criarSaudacao();
saudar("Ana");
saudar("Carlos");
