const express = require('express');
const morgan = require('morgan');
const cors = require('cors')

const routesTask = require('./routes/task.routes')


const app = express();
PORT = 3000;

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(routesTask);


app.listen(PORT);

app.use((err, req, res, next) => {
    res.json({
        message: err.message
    })
} )


console.log(`Servidor funcionando por el puerto ${PORT}`)

