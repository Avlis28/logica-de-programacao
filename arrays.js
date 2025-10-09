/*'Arrays' tambem conhecidos como matrizes, podem nos ajudar a criar 
codigos mais limpos e organizados assim como facilitar muitas questões e a nos 
ajudar a economizar varias linhas de codigos.
*/
let arrJogadores = ['Ricardo', 'Monica', 'Leonardo'];
let anoNascimento = new Array(1998, 1975, 1991); 
let arrPontos = [45, 117, 78];
arrPontos[1] = 71;
console.log(arrJogadores);
console.log(arrJogadores[1] + ' tem ' + arrPontos[1] + ' pontos');//saida = 'Monica tem 71 pontos'
 arrPontos.push('120');//metodo para adicionar mais um dado ao array.
 console.log(arrPontos);