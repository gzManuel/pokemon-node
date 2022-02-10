const express = require('express');
const cors = require('cors');
const app = express();
const pokemonApi = require('./api/pokemon');
const axios = require('axios').default;
const fs = require('fs');
const pokemonUtil = require('./utis/pokemon');

const port = 3000;

app.use(cors({
    origin: '*'
}));

app.get('/pokemon/:pokeName', async (req, res) => {
    const pokeName = req.params.pokeName;
    try {
        const pokemon = await pokemonApi.getPokemon(pokeName);


        if (pokemonUtil.thereIsImage(pokeName)) { //Check if there is an image
            res.sendFile(`${__dirname}/assets/${pokeName}.png`);
        } else {
            //Download and write it
            let image = await axios.get(pokemon.sprites.front_shiny ?? pokemon.sprites.front_default, { responseType: 'stream' });
            await image.data.pipe(fs.createWriteStream(`./src/assets/${pokeName}.png`));

            const contentType = image.headers['content-type'];
            res.setHeader('Content-Type', contentType);
            image.data.pipe(res);
        }
    } catch (error) {
        console.log(error);
        res.sendStatus(500)
    }
});

app.listen(port, () => {
    console.log(`Example listening port ${port}`);
});