const pessoa = {
    nome: 'Miguel'
};

const animal = {
    nome: 'Murphy'
};

function getSomething(){
    console.log(this.nome) //this se refere a quem?
}

getSomething.call(pessoa); //aqui dizemos que 'this' se refere à pessoa (utilizando o método '.call')