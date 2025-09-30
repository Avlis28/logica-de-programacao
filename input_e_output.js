//Primeiro é necessario importar o modulo 'readline' do node.js
//a função 'require' é usada para indicar modulos que vêm com node.js

const readline = require("readline");

//em seguida criamos uma interface usando a função 'createdInterface' do módulo 'readline' que criamos
//sera usada para interagir no terminal
const r1 = readline.createInterface({
  input: process.stdin, // representa o stream de acesso padrão, onde vamos receber os dados
  output: process.stdout, // representa o stream de saida padrão, onde vamos exibir os dados
});
// usamos o metodo question para fazer uma pergunta ao usuario
//o primeiro parametro é a pergunta em si, e o segundo é uma função callback que será chamada com a resposta
r1.question("Qual é o seu nome?", (resposta) => {
  //dentro dessa função callback 'resposta' contém o texto que o usuario digitou

  console.log("Olà, ${resposta}");

  r1.close();
});

// exemplo 2
const readline = require("readline");

const r2 = readline.createInterface({
  input: process.stdin,
  output: process.stdin,
});

function fazerPergunta(pergunta) {
  return new Promise((resolve) => {
    r2.question(pergunta, (resposta) => {
      resolve(resposta);
    });
  });
}
async function coletarResposta() {
  const nome = await fazerPergunta("Qual é o seu nome?");
  const corFavorita = await fazerPergunta("Qual é a sua cor favorita?");
  const animalFavorito = await fazerPergunta("Qual é o seu animal favorito?");
  const hobby = await fazerPergunta("Qual é o seu hobby?");
  const pratoFavorito = await fazerPergunta("Qual é o seu prato favorito?");

  console.log(`/nAqui estão suas respostas:
    nome: ${nome}
    cor favorita: ${corFavorita}
    animal favorito ${animalFavorito}
    hobby ${hobby}
    prato favorito ${pratoFavorito}

    `);
    r1.close();
}
coletarResposta();
