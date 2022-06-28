/* Arrays - Vetores */

//Listas iteraveis de elementos

let array = []

//adicionando no último elemento
console.log(array.push(3))
console.log(array.push(2))
console.log(array.push(1))
console.log(array)

array.pop()
console.log(array)

//removendo do último elemento
console.log(array.push(5))
console.log(array)



//removendo o primeiro elemento
array.shift()
console.log(array)

//adiciona no primeiro elemento
array.unshift(55)


for(let i=0; i<array.length; i++){
    console.log(array[i])
}

//verificando se existe o elemento 55 no meu array
console.log(array.includes(55))

//verificando se todos os meus items são iguais a 5
array.every(item => item === 5)

//verificando se um dos meus itens são = 5
array.some(item => item === 5)


console.log(array.reverse())