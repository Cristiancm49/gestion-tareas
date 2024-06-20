const express = require('express');
const morgan = require('morgan');

const routesTask = require('./routes/task.routes')


const app = express();
PORT = 3000;

app.use(morgan('dev'));
app.use(express.json());
app.use(routesTask);


app.listen(PORT);

console.log(`Servidor funcionando por el puerto ${PORT}`)

