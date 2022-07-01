/* 
    - Crie uma função que recebe um array e um número
    - Realize as seguintes validações
*/

function validaArray(arr, num){
    //Utilize a declaração `try...catch`
    try{

        //Se os parâmetros não forem enviados, lance um erro do tipo `ReferenceError`
        if(!arr && !num) throw new ReferenceError("Envie os parâmetros!")

        //Se o array não for do tipo 'object', lance um erro do tipo `TypeError`
        if(typeof arr !== 'object') throw new TypeError("Array precisa ser do tipo object!")

        //Se o número não for do tipo 'number', lance um erro do tipo `TypeError`
        if(typeof arr !== 'number') throw new TypeError("Num precisa ser do tipo number!")
        
        //Se o tamanho do array for diferente do número enviado como parâmetro, lance um erro do tipo `RangeError`
        if(arr.lenghth !== num) throw new RangeError("Tamanho do array inválido!")

        //Caso array seja válido
        return arr;

    }catch(e){

        //Filtre as chamadas de catch por cada tipo de erro utilizando o operador `instanceof`
        if(e instanceof ReferenceError){
            //se o erro é uma instancia de ReferenceError
            
            console.log("Este erro é um ReferenceError!")
            console.log(e.name)
            console.log(e.stack)
            console.log(e.message)

        }else if(e instanceof TypeError){
            console.log("Este erro é um TypeError!")
            console.log(e.message)

        }else if(e instanceof RangeError){
            console.log("Este erro é um RangeError!")
            console.log(e.message)
        }else{
            console.log("Tipo de erro não esperado: " + e)
        }
    }
}

console.log(validaArray(''))
console.log(validaArray(5, 5))
console.log(validaArray([], 5))
console.log(validaArray([1, 2, 3, 4, 5], 5))