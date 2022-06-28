let obj = {}

console.log(typeof(obj))

obj.name = "Gabriel"
console.log(obj.name)

obj.age = 20
console.log(obj.age)

//verificando os valores do obj
console.log(Object.values(obj))

//Verificando as chaves do obj
console.log(Object.keys(obj))


let person = {
    name: "Gabriel",
    age: 20,
    adress: "Rua ABC"
}

console.log(person)
console.log(person.adress) //retornando o adress
console.log(person["name"]) //retornando o name

person["numberOfSiblings"] = 3 //criando outra chave
console.log(person)

let mom = "nameOfMom"
person[mom] = "Maria"
//conteudo do [mom]

console.log(person)