const pokeService = require('../services/pokemon');
const pokeApi = require('../api/pokeapi');
const { formatPokemonImagePath } = require('../utils');

const getPokemonImage = async (req, res) => {
    const pokeName = req.params.pokeName;
    try {
        const pokemon = await pokeApi.getPokemonByName(pokeName);
        if (!pokemon) {
            res.sendStatus(404);
            return;
        }
        if (pokeService.existImage(pokeName)) {
            res.sendFile(formatPokemonImagePath(pokeName));
        } else {
            const pokeImage = await pokeService.getImage(pokemon.sprites.front_shiny ?? pokemon.sprites.front_default);
            await pokeService.saveImage(pokeImage.data, pokeName);
            const contentType = pokeImage.headers['content-type'];
            res.setHeader('Content-Type', contentType);
            pokeImage.data.pipe(res);
        }
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
}

module.exports = {
    getPokemonImage
}