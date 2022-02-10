const express = require('express');
const cors = require('cors');
const app = express();
const pokemonApi = require('./api/pokemon');

const port = 3000;

app.use(cors({
    origin: '*'
}));

app.get('/pokemon/:pokeName', async (req, res) => {
    try {
        const pokemon = await pokemonApi.getPokemon(req.params.pokeName);
        res.status(200).send(pokemon)
    } catch (error) {
        res.sendStatus(error.response.status)
    }
});

app.listen(port, () => {
    console.log(`Example listening port ${port}`);
});