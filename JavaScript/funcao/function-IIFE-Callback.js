/* Uma função IIFE (Immediately Invoked Function Expression é invocada automáticamente [autoinvocável]) */

(
    function(){
        let name = "Gabriel"
        return name;
    }
)();          


const soma = (
    function(a, b){
        return a + b;
    }
)(1, 2);

/* ** */


/* Callbacks */

const calc = function(operacao, num1, num2){
    return operacao(num1, num2);
}

const somaa = function(num1, num2){
    return num1+num2;
}
const subb = function(num1, num2){
    return num1-num2;
}

const resultSoma = calc(somaa, 1, 2);
const resultSub = calc(subb, 1, 2);

console.log(resultSub); // -1
console.log(resultSoma); // 3



/* ** */