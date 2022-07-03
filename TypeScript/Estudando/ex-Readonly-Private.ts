interface Cachorro{
    nome:string;
    idade: number;
    parqueFavorito?: string;
}

type CachorroSomenteLeitura = {
    readonly [K in keyof Cachorro]: Cachorro[K];
}

class MeuCachorro implements Cachorro{
    
    idade;
    nome;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
}

const cao = new MeuCachorro('Apolo', 14)