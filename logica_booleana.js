//tabela de verdade

//'&&' ('E' logico), a decisão logica só retornara verdadeiro caso as decisões forem verdadeiros.
true && true; //true
true && false; //false
false && true; //false
false && false; //false

/* ja a tabela de verdade do operador '||' ('OU' logico) a decisão logica retorna verdadeiro 
se pelo menos uma das decisões logicas retornar verdadeiro */
true || true; //true
true || false; //true
false || false; //false
false || true; //true

//exemplo '&&' ('E' logico)
let numeroMacas = 4;
let todasAsMacasSaoVerdes = false;

if (numeroMacas > 1 && todasAsMacasSaoVerdes === true) {
  console.log("Temos mais de uma maçã e todas as maçãs são verdes");
} else {
  console.log("Ou não temos mais de uma maçã ou nem todas são verdes"); //este serà o retorno
}

//exemplo de '||' ('OU' logico)
let numeroCarros = 6;
let todosOsCarrosMesmaMarca = false;

if (numeroCarros === 5 || todosOsCarrosMesmaMarca === true) {
  console.log("Ou todos os carros são da mesma marca");
  console.log("Ou temos cinco carros");
  console.log("Ou as duas coisas juntas");
} else {
  console.log("Não temos cinco carros e nem todos são da mesma marca"); 
}
//saida no console, pois não atende nenhuma das verdades.
