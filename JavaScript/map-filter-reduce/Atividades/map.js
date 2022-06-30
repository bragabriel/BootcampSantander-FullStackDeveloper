/* Map com THIS */
console.log('')
console.log('Map com THIS')

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

/* *** */


/* Map sem THIS */
console.log('')
console.log('Map sem THIS')

function mapSemThis(arr){
    return arr.map(function(item){
        return item * 2;
    })
}

const nums = [2, 4, 6, 8, 10];

console.log('Array com map: ' + mapSemThis(nums))
console.log('Array original: ' + nums)
/* *** */