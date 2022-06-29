//Solução 01:
function verificaPalindromo(string){
    
    if(!string) return "String inexistente"; //se vier como null, vazio ou undefined

    //separando todas as letras = vai virar um array
    return string.split("").reverse().join("") === string
    //colocando ao contrário
    //juntando os elementos do array = vira uma string   
}


//Solução 02:
// abba
// 0123
function verificaPalinfromo2(string){
    if(!string) return "string inexistente";

    for(let i = 0; i<string.length / 2; i++){
        if(string[i] !== string[string.length - 1 - i] ){
            return false;
        }
    }

    return true;
}

console.log(verificaPalindromo("ovo"))

console.log(verificaPalinfromo2("abba"))