const express = require('express')
const twig = require('twig')
const app = express()

const port = process.env.PORT || 3001

app.use(express.json())

// set as view engine 
app.set('view engine', 'twig')
app.set('views', './Views')
app.engine('twig', twig.renderFile)

const appRoute = require("./Routes/app")

appRoute(app)

app.listen(port, () => {
    console.log(`Dev app listening on port ${port}`)
})