const fs = require('fs')
const { Pool } = require('pg')


// Verify information about database HERE !!!!
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'database_dev_studiecf',
    password: 'psqlpsw',
})


// Read the SQL file
const usersModel = fs.readFileSync('users.sql').toString()
const contactsModel = fs.readFileSync('contacts.sql').toString()
const logsModel = fs.readFileSync('logs.sql').toString()
const imagesModel = fs.readFileSync('images.sql').toString()
const menusModel = fs.readFileSync('menus.sql').toString()
const formulesModel = fs.readFileSync('formules.sql').toString()
const openhoursModel = fs.readFileSync('openhours.sql').toString()
const reservationsModel = fs.readFileSync('reservations.sql').toString()

// Execute the SQL commands in the database
pool.query(usersModel, (err, result) => {
    if (err) throw err
    else {
        console.log("userModel imported")
        pool.query(contactsModel, (err, result) => {
            if (err) throw err
            else {
                console.log("contactsModel imported")
                pool.query(logsModel, (err, result) => {
                    if (err) throw err
                    else {
                        console.log("logsModel imported")
                        pool.query(imagesModel, (err, result) => {
                            if (err) throw err
                            else {
                                console.log("imageModel imported")
                                pool.query(menusModel, (err, result) => {
                                    if (err) throw err
                                    else {
                                        console.log("menusModel imported")
                                        pool.query(formulesModel, (err, result) => {
                                            if (err) throw err
                                            else {
                                                console.log("formulesModel imported")
                                                pool.query(openhoursModel, (err, result) => {
                                                    if (err) throw err
                                                    else {
                                                        console.log("openhoursModel imported")
                                                        pool.query(reservationsModel, (err, result) => {
                                                            if (err) throw err
                                                            else {
                                                                console.log("reservationsModel imported")
                                                                console.log("All models are imported succesfully !")
                                                            }
                                                        })
                                                    }
                                                })
                                            }
                                        })
                                    }
                                })
                            }
                        })
                    }
                })
            }
        })
    }
})