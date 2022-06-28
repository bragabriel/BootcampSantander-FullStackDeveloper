const user = {
    id: 10,
    displayName: 'bragabriel',
    fullName: {
        firstName: 'Gabriel',
        lasName: 'Braga'
    }
};

function userId({id}){
    return id;
}

function getFullName({fullName: {firstName: first, lasName: last}}){
    return `${first} ${last}`
}

console.log(userId(user)) // 10

console.log(getFullName(user)) // Gabriel Braga