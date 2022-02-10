const express = require('express');
const cors = require('cors');
const app = express();

const port = 3000;

app.use(cors({
    origin:'*'
}));

app.get('/',(req,res)=>{
    console.log('Hello world');
    res.sendStatus(200);
});

app.listen(port,()=>{
    console.log(`Example listening port ${port}`);
});