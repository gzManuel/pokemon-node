const path = require('path');
const PATH_POKEMON_IMAGE = `${__dirname}/../assets/`;

const formatPokemonImagePath = (name) => {
    return path.normalize(`${PATH_POKEMON_IMAGE}${name}.png`);
}

module.exports = {
    PATH_POKEMON_IMAGE,
    formatPokemonImagePath
}