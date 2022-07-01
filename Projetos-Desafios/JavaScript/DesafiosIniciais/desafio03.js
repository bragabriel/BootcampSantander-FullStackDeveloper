// A função gets() é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print() para imprimir a saída (output) de dados e já pula uma linha ("\n")
// Abaixo segue um exemplo de código que você pode ou não utilizar

// A função gets() é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print() para imprimir a saída (output) de dados e já pula uma linha ("\n")
// Abaixo segue um exemplo de código que você pode ou não utilizar

/* let lines = gets().split("\n");

let line = lines.shift().split(' '); */

let line = [2, 4, 3, 2]

var soma = 0; 

for(i=0; i<line.length; i++){
    let transfor = parseInt(line[i])
    soma = soma + transfor
} 


console.log('soma: ' + (soma-3))