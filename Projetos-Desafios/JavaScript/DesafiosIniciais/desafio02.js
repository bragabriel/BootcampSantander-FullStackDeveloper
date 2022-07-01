// A função gets() é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print() para imprimir a saída (output) de dados e já pula uma linha ("\n")
// Abaixo segue um exemplo de código que você pode ou não utilizar

/* let lines = gets().split('\n');

let N = parseInt(lines.shift());
 */
let N = 13;

for (let i = 1; i < 10000; i++) {

	if (i % N == 2) console.log(i);
}