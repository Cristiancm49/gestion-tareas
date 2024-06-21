const { Pool } = require('pg');
const { user, password, host, port, database } = require('./config');



const db = new Pool({
    user: user,
    password: password,
    host: host,
    port: port,
    database: database
})

module.exports = db;