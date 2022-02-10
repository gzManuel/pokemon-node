const axios = require('axios').default;

axios.defaults.baseURL = 'https://pokeapi.co/api/v2/';

module.exports.getPokemon = async (name) => {
    const pokemon = await axios.get(`pokemon/${name}`);
    return pokemon.data;
}