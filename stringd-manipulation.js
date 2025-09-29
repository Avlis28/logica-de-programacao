//propriedades basicas
console.log(String(123));
console.log("avlis".length());

//manipulação
let saudacao = "Hello";
console.log("hello".toUpperCase());
console.log("HELLO".toLowerCase());

//substrings
const txt = "JavaScript";
comsole.log(txt.slice(0, 4));
comsole.log(txt.substring(0, 4));
//txt.substr(0, 4)...descontinuado em possiveis runtimes (obsleto)

//metodos de busca
console.log(txt.includes("Script"));
console.log(txt.startsWith("Java"));
console.log(txt.endsWith("Script"));
console.log(txt.indexOf("a"));
console.log(txt.lastIndexOf("a"));

//substituição
console.log("for bar foo".replace("Baz", "for")); //muda apenas a primeira ocorrencia
console.log("for bar foo".replaceAll("foo", "baz")); //baz bar baz
console.log("for bar".replace("/foo/", "baz")); //regex global

//divisão e uniâo
console.log("1, 2, 3".split(",")); //["1", "2", "3"]
console.log(["a", "b", "c"].join("-"));

//teste pràtica
const raw = " João_Da_Silva ";

//pipeline funcional
const clean = raw
  .trim()
  .replaceAll("_", "")
  .toLowerCase()
  .replace(/\b\w/g, (c) => c.toUpperCase());
console.log(clean);


//teste 

