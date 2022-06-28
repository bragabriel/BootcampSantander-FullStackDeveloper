/* Tipo Primitivo */
const LP = "JavaScript"

let nome = "João"
let sobrenome = "Pedro"

console.log(typeof(nome))

let concatenado = nome.concat(sobrenome)
console.log("concat: " + concatenado)

console.log("lenght: " + concatenado.length)

let vazio = ""
console.log("vazio: " + typeof(vazio))
console.log("tamanho vazio: " + vazio.length)

console.log("indice: " + nome[0])

concatenado = nome + " " + sobrenome
console.log("concatenado novamente: " + concatenado)

concatenado = nome + "\n" + sobrenome
console.log("concatenado novamente 2: " + concatenado)

concatenado = `${nome}

oi

${sobrenome}`
console.log("concatenado novamente 3: " + concatenado)


let frase = "Olá, mundo! Tranquilo?"
console.log(frase.split(""))


//Tem a palavra 'Tranquilo' na minha frase? = true : false
console.log(frase.includes("Tranquilo"))


console.log(frase.startsWith("O"))

console.log(frase.endsWith("?"))

console.log(frase.replace(",", "!"))

/* Tipo Objeto */
let exemplo = new String("blablabla")
console.log(typeof(exemplo))