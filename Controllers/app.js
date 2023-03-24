async function boardgame(req, res){
    return res.render('./Templates/board.html.twig')
}



module.exports = { boardgame }