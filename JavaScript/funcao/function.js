//funcao default
function soma(a, b){
    return a + b;
}


//funcao recebendo array
function returnEvenValues(array){

    let evenNums = [];

    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 == 0){
            evenNums.push(array[i]);
        }
        else{
            console.log(`${array[i]} não é par!`)
        }
    }
    console.log('Os números pares são: ', evenNums);
}


//funcao anonima
const somaConst = function (a, b) {
    return a + b;
}



//funcao default
console.log(soma(3, 5))

//funcao anonima
console.log(somaConst(1, 3))

//funcao recebendo array
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
returnEvenValues(array)