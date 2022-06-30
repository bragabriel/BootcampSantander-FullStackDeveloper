const maca = {
    value: 2,
}

const laranja = {
    value: 3,
}

function mapComThis(arr, thisArg){
    return arr.map(function (item){
        return item * this.value;
    }, thisArg)
}


numeros = [1, 2];

console.log('Resultado quando this = maçã ' + mapComThis(numeros, maca));

console.log('Resultado quando this = laranja ' + mapComThis(numeros, laranja));