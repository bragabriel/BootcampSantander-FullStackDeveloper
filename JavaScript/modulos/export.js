/* Exportando funções: */


//forma 01
export function mostraIdade(pessoa){
    return `A idade de ${pessoa.nome} é ${pessoa.idade}`
}

export function mostraCidade(pessoa){
    return `A cidade de ${pessoa.nome} é ${pessoa.cidade}`
}



//forma 02
function mostraIdade2(pessoa){
    return `A idade de ${pessoa.nome} é ${pessoa.idade}`
}

function mostraCidade2(pessoa){
    return `A cidade de ${pessoa.nome} é ${pessoa.cidade}`
}

export{
    mostraIdade2,
    mostraCidade2
}


//forma 03 - default export
export default mostraIdade2