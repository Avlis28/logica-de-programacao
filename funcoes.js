function verificarIdade(nomePessoa, anoNascimento) {
  let idade = 2018 - anoNascimento;

  if (idade >= 18) {
    return nomePessoa + " è maior de idade!";
  } else {
    return nomePessoa + " è menor de idade";
  }
}

let nome = "Joana";
let nascimento = 2002;
console.log(nome, nascimento);

console.log(verificarIdade("Cassiano", 1988)); //cassiano é maior de idade

nome = "Jhon";
nascimento = 1978;
let texto = verificarIdade(nome, nascimento);
console.log(texto);
