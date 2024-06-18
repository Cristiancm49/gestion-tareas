const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'));
PORT = 3000;

app.listen(PORT);

console.log(`Servidor funcionando por el puerto ${PORT}`)

