const express = require('express');
const createMail = require('./routes/new')
const app = express();

app.use(express.json());

app.set("trust proxy", 1);

app.use(createMail);

app.listen(3000, ()=>{
    console.log('Escuchando en el puerto 3000')
})