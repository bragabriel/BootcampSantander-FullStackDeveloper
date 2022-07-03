console.log('TypeScript')

/* Tipagem forte */
//definindo o tipo: number
function soma(a: number, b:number){
    return a + b;
}


/* Interfaces */
interface IAnimal{
    nome: string;
    tipo: 'terrestre' | 'aquático';
    domestico: boolean;
    //executarRugido(alturaEmDecibeis: number): void;
}

interface IFelino extends IAnimal{
    visaoNoturna: boolean;
}

interface ICanino extends IAnimal{
    porte: 'pequeno' | 'medio' | 'grande';
}

const animal: IAnimal = {
    nome: 'Elefante',
    tipo: 'terrestre',
    domestico: false
    //executarRugido: (alturaEmDecibeis) => (`${alturaEmDecibeis}dB`)
}
//animal.executarRugido(10);

/* 
const felino: IFelino = {
    nome: 'Leão',
    tipo: 'terrestre',
    visaoNoturna: true
} 
*/


/* Types */

//juntar diferentes interfaces, definir que uma variável será uma interface...
type IDomestico = IFelino | ICanino;

const animal2: IDomestico = {
    domestico: true,
    nome: 'cachorro',
    porte: 'medio',
    tipo: 'terrestre'
}
