//È uma forma mais elegante de apresentar estruturas de decisões maiores, ao inves de encher de 'if else'
let nome = "Michele";
let emprego = "desenvolvedora";

switch (emprego) {
  case "policial":
    console.log(nome + " è uma policial");
    break;//o 'break' é obrigatorio, pois serve para parar o codigo caso o valor seja correto.
  case "cozinheira":
    console.log(nome + " è uma cozinheira");
    break;
  case "desenvolvedora":
    console.log(nome + " è desenvolvedora");
    break;
  case "lutadora":
    console.log(nome + " è lutadora");
    break;
  default://sera executado parecido com o 'else'. Caso nenhum dos 'case' seja a resposta correta ele será executado.
    console.log("Trabalha em outra coisa");
}
