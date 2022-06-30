/* Um conjunto passa por uma operação e se torna outro conjunto
Cria um novo array;
Não modifica o array original;
Realiza as operações em ordem.
*/


//Usando map:
const array = [1, 2, 3, 4, 5]

array.map((item) => item * 2)
//retorno: [2, 4, 6, 8, 10]
//retorna um array

//Usando for each:
const array2 = [1, 2, 3, 4, 5]
array.forEach((item) => item * 2)
//retorno: undefined
//precisaria atribuir o resultado em um array auxiliar para retornar um array