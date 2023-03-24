const { boardgame } = require("../Controllers/app")

function appRoute(app){
    app.get('/', boardgame)
}

module.exports = appRoute