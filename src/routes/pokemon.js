const express = require('express');
const router = express.Router();

const pokemonControllers = require('../controllers/pokemon');

router.get('/:pokeName/image', pokemonControllers.getPokemonImage);

module.exports.pokemon = router