const alunos = [
	{
		nome: 'João',
		nota: 5,
		turma: '1B',
	},
	{
		nome: 'Sofia',
		nota: 9,
		turma: '1B',
	},
	{
		nome: 'Paulo',
		nota: 6,
		turma: '2C',
	},
    {
		nome: 'Miguel',
		nota: 3,
		turma: '2C',
	},
];

function alunosAprovados(arr, media){

    let aprovados = []

    for(let i=0; i<arr.length; i++){
        
        //Usando Objecting Destructuring
        const {nota, nome} = arr[i];

        if(nota >= media){
            aprovados.push(nome)
        } 

       /*  
       Sem usar Objecting Destructuring
            if(arr[i].nota >= media){
                aprovados[i].push(arr[i].nome)
            } 
        */
    }
    return aprovados
}

console.log(alunosAprovados(alunos, 5))