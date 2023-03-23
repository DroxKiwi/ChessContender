const { home } = require("../Controllers/app")

function appRoute(app){
    app.get('/home', home)
}

module.exports = appRoute