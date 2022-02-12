const express = require('express');
const cors = require('cors');
const app = express();
const route = require('./routes/pokemon');

const port = 3000;

app.use(cors({
    origin: '*'
}));

app.use('/pokemon', route.pokemon);

app.listen(port, () => {
    console.log(`Pokemon-node listening port ${port}`);
});