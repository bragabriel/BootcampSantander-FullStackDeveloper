async function resolvePromise(){
    const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(console.log('Resolvida!'));
            //Após 2 segundos, retornará o valor
        }, 2000);
    }) 

//após a promise resolvida:
const resolved = await myPromise
    .then((result) => result + ' passando pelo then')
    .then((result) => result + ' e agora acabou!')
    .catch((err) => console.log(err.message))

return resolved;
}

console.log(resolvePromise());