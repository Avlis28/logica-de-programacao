// tipos de dados booleanos 'true' e 'false'
//atribui a uma variavel o valor de verdadeiro ou falso.
let estaLogado = true;

let maiorDeIdade = false;

console.log("Boolean (verdadeiro):" , estaLogado);

console.log("Boolean (falso):" , maiorDeIdade);


//variaveis 'undefined' e 'null'
//declara uma variavel que nao tem um valor inicial atribuido e automaticamente recebe o valor 'undefined'
//este tipo é usado para indicar que uma variavel foi declarada mas o valor ainda não foi atribuido
let endereco;

console.log("Undefined:" , endereco); 

// É uma variavel que ja foi declarada como nula 
//demonstra a ausencia intencional do valor 
let salario = null;

console.log("null:" , salario);


/* symbol usado para criar propriedades unicas de objetos, sao sempre unicos  mesmo que tenham a mesma descrição
*/
// id é declarado como um symbol com a descrição id
// symbol sao imutaveis 
//nao popde ser convertido diretamente para string 
//para ser imoresso usamos 'id.toString()' para obter a sua descriçãO como string 
let id = symbol("id");

console.log("symbol:" , id.toString());

//BigInt  representa numeros muito grandes que nao podem ser representados por number 
//passam do limite seguro representado pelo number  
// sao escritos com um n nbo final 
let numeroGrande = 12345670910123456709101n;

console.log("BigInt:" , numeroGrande);
