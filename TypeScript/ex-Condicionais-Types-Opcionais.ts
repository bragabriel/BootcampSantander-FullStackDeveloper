const input = document.getElementById('entrada') as HTMLInputElement;

input.addEventListener('input', (event) => {
    const i = event.currentTarget as HTMLInputElement;
    console.log(i.value);
}) 



/* Generic Types */
function AdicionaNaLista<T>(array: any[], valor: T){
    return array.map(item => item + valor)
}

AdicionaNaLista([1, 2, 3], 1) 


/* Condicionais a partir de elementos */
interface IUsuario{
    id: string;
    email: string;
    cargo?: 'gerente' | 'coordenador' | 'supervisor';
}


interface IAdmin{
    cargo: 'gerente' | 'coordenador' | 'supervisor';
} 

function redirecione(usuario: IUsuario | IAdmin){
    if('cargo' in usuario){
        //redirecionar para a área de administração
    }
    //redirecionar para a área de usuário
}