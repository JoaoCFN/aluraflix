import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND}/categorias`;

function getAllVideos(){
    return fetch(`${URL_CATEGORIES}?_embed=videos`)
    .then(reponse => reponse.json())     
}

export default {
    getAllVideos
}