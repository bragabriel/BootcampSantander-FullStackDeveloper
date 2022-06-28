/* 
Troque todos os elementos pares e diferentes de zero de um array pelo número 0.
Se o array for vazio, retorne -1.

ex:
input -> [1, 3, 4, 6, 80, 33, 23, 90]
output -> [1, 3, 0, 0, 0, 33, 23, 0]

input -> []
output -> -1
*/ 

function substituiPares(array){

    if(!array.length) return -1;
    
    for(let i = 0; i < array.length; i++){
        if(array[i] === 0){
            console.log("Você já é zero!")
        }else if(array[i] % 2 === 0){
            console.log(`Substituindo o valor ${array[i]} por 0...`)
            array[i] = 0;
        }
    }
    return array;
}


let arr = [1, 3, 4, 6, 80, 33, 23, 90]

console.log(substituiPares(arr))