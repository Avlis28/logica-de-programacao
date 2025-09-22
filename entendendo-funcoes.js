/*Uma funçao é um bloco de codigo reutilizavel que recebe entradas, executa um processo e retorna uma saida*/
//exemplo 1 - declaracao tradicional
function nomeDaFuncao(param1, param2) {
  //corpo
  return resultado;
}

/*
Nome deve expressar acao
parametros dados que entram
corpo instruçoes que processam 
retorno resultado final 
*/

//expressao de funcao
const soma = function (a, b) {
  return a + b;
};

// arrow function
const sub = () => a - b;

//parametros de retorno - parametro padrao
function saudar(nome = "visitante") {
  return "ola, ${nome}";
  console.log(saudar + "Avlis");
}

let x = 10;
function mostrar() {
  let y = 20;
  console.log(x + y);
}
// Funcao pua depende de entrada e nao altera nada fora dela
//funcao impura altera ou depende de fatores externos (acessar banco de dados, modificar variavel global)

/* a seguir tera exercicios de funcao abordando todos os problemas e usos*/
function saudar(nome = "visitante") {
  return "ola, ${nome}";
}
  console.log(saudar(+ "Bea"));
  console.log(saudar());

