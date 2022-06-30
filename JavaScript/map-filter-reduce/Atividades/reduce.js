/* Some todos os números de um array */
console.log('-----------------------------')
console.log('Ex1: Soma')

function somaNumeros(arr){
    return arr.reduce(function (previous, current){
        console.log({previous});
        console.log({current});
        return previous + current;
    })
}

const arr = [1, 2];

console.log(somaNumeros(arr));



/* Crie uma função que recebe uma lista de preços e um número representando o saldo disponível. Calcule qual será o saldo final após subtrair todos os preços da lista enviada. */
console.log('-----------------------------')
console.log('Ex2: Lista & Saldo')
const lista = [
    {
        name: 'sabao em po',
        preco: 30
    },
    {
        name: 'pasta de amendoim',
        preco: 20
    },
    {
        name: 'toalha',
        preco: 22
    },
];

const saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel, lista){
    return lista.reduce(function(prev, current, index){
        console.log('rodada: ', index + 1);
        console.log({prev});
        console.log({current});
        return prev - current.preco;
    }, saldoDisponivel)
}

console.log(calculaSaldo(saldoDisponivel, lista))