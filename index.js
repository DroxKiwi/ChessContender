const express = require('express')
const app = express()

const port = process.env.PORT || 3000

app.use(express.json())

// set as view engine 
app.set('view engine', 'twig')
app.set('views', './Views')
app.engine('twig', twig.renderFile)

app.listen(port, () => {
    console.log(`Dev app listening on port ${port}`)
})