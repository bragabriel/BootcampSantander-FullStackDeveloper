function filtraPares(arr){
    return arr.filter(callback)
}

function callback(item){
    return item % 2 == 0;
}

const meuArray = [1, 23, 43, 45, 56, 67, 78, 80];

console.log(filtraPares(meuArray))