function logLetras(palavra){
    for(letra of palavra){
        console.log(letra)
    }
}

const palavra = "abacaxi";

logLetras(palavra)
//Resposta:
//a
//b
//a
//c
//a
//x
//i



function logNumeros(nums){
    for(num of nums){
        console.log(nums)
    }
}

const nums = [12, 43, 563, 982];

logNumeros(nums)
//Resposta:
//12
//43
//563
//982