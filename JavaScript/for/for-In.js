function forInExemplo1(obj){
    for(prop in obj){
        console.log(prop)
    }
}

const meuObjeto1 = {
    nome: "Gabriel",
    idade: "20",
    cidade: "LA"
}

forInExemplo1(meuObjeto1)
//Resposta:

//nome
//idade
//cidade



function forInExemplo2(obj){
    for(prop in obj){
        console.log(prop)
    }
}
const meuObjeto2 = {
    nome: "Gabriel",
    idade: "20",
    cidade: "LA"
}

forInExemplo2(meuObjeto2)
//Resposta:

//Gabriel
//20
//LA