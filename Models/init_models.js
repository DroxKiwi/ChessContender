const fs = require('fs')
const { Pool } = require('pg')


// Verify information about database HERE !!!!
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'chesscontenderDB',
    password: 'psqlpsw',
})

const usersModel = fs.readFileSync('users.sql').toString()

pool.query(usersModel, (err, result) => {
    if (err) throw err
    else {
        console.log("usersModel loaded !")
    }
})

// Import and red the SQL file


// Execute the SQL commands in the database