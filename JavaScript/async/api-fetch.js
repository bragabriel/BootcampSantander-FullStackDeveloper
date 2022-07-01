/* É muito comum que APIs retornem seus dados no formato .json (JavaScript Object Notation) */


// O Fetch retorna uma promise, então precisamos utilizar o await
fetch(url, options)
    .then(response => response.json())
    .then(json => console.log(json))


//Exemplo utilizando o método GET
fetch('https://endereco-api.com/', {
    method: 'GET',
    cache: 'no-cache',
})
    .then(response => response.json())
    .then(json => console.log(json))

//Exemplo utilizando o método POST
fetch('https://endereco-api.com/', {
    method: 'POST',
    cache: 'no-cache',
    body: JSON.stringify(data)
})
    .then(response => response.json())
    .then(json => console.log(json))