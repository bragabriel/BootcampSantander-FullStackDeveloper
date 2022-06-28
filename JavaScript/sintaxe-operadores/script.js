function atividade(n1, n2){
    
    let soma = parseInt(n1) + parseInt(n2);
    let comparaDez = 'menor';
	let comparaVinte = 'menor';

    if(n1 == n2){
        var paragrafo = document.createElement('p');
        paragrafo.innerHTML = "Os números " + n1 + " e " + n2 + " são iguais.";
        document.getElementById('resultado').appendChild(paragrafo);
    }else{
        var paragrafo = document.createElement('p');
        paragrafo.innerHTML = "Os números " + n1 + " e " + n2 + " não são iguais.";
        document.getElementById('resultado').appendChild(paragrafo);
    }
    
    if (soma > 10) {
		comparaDez = 'maior';
	}

	if (soma > 20) {
		comparaVinte = 'maior';
	}
        var paragrafo = document.createElement('p');
        paragrafo.innerHTML = `Sua soma é ${soma}, que é ${comparaDez} do que 10 e ${comparaVinte} do que 20.`;
        document.getElementById('resultado').appendChild(paragrafo);
}

let botao = document.getElementById('btn-enviar');

botao.addEventListener("click", e => {
    
    var n1 = document.getElementById('n1').value;
    var n2 = document.getElementById('n2').value;
    
    atividade(n1, n2);
    e.preventDefault();
});
