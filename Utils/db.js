const { Pool } = require('pg')


// IF USING NPM RUN !
//const pool = new Pool({
//    user: process.env.POSTGRES_USER || 'postgres',
//    host: process.env.HOST || 'localhost',
//    database: process.env.DATABASE || 'chesscontenderBD',
//    password: process.env.PASSWORD || 'psqlpsw'
//})

// IF USING NODEMON !
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'chesscontenderBD',
    password: 'psqlpsw'
})

module.exports = pool