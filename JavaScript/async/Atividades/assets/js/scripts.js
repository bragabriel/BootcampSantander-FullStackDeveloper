const URL = 'https://thatcopy.pw/catapi/rest/';

const catBtn = document.getElementById('change-cat')
const catImg = document.getElementById('cat')

const getCats = async () => {
    
    try{
        const data = await fetch(URL); //recebendo o result da API
        const dataJson = await data.json(); //transformando o result para formato Json
    
        return dataJson.webpurl
    }
    catch(err){
        console.log(err.message)
    }
};

const loadImg = async() => {
    catImg.src = await getCats();
}

catBtn.addEventListener('click', loadImg);

loadImg(); //para a pág já inicializar com uma img