const utils = require('../utils');
const axios = require('axios').default
const fs = require('fs');

const getImage = async (url) => {
    try {
        const image = await axios.get(url, { responseType: 'stream' });
        return image;
    } catch (error) {
        console.log(error);
        return null;
    }
}

const existImage = (name) => {
    try {
        const result = fs.existsSync(utils.formatPokemonImagePath(name));
        return result;
    } catch (error) {
        console.log(error);
        return false;
    }
}

const saveImage = async (image, name) => {
    try {
        await image.pipe(fs.createWriteStream(utils.formatPokemonImagePath(name)));
        
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}

module.exports = {
    existImage,
    saveImage,
    getImage
}