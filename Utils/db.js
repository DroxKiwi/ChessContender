const { Pool } = require('pg')


// IF USING NPM RUN !
//const pool = new Pool({
//    user: process.env.POSTGRES_USER,
//    host: process.env.HOST,
//    database: process.env.DATABASE,
//    password: process.env.PASSWORD,
//})

// IF USING NODEMON !
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'chesscontenderBD',
    password: 'psqlpsw'
})

module.exports = pool