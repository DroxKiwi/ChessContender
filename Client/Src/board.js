// Fonction d'initiation du plateau de jeu
function init_board(){
    // On crée le table
    document.getElementById('chess').innerHTML = '<table id="chessboard"><tbody></tbody></table>'

    // On récupère le table
    var board = document.getElementById('chessboard').querySelector('tbody')

    // On stocke les valeurs des colonnes
    var cols = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']

    // Si i est impair on crée une tr avec la classe .row-odd sinon .row-even
    for (i = 0; i < 8; i++) {
        if (i % 2 !== 0) {
            board.innerHTML += '<tr class="row row-odd"></tr>'
        } else {
            board.innerHTML += '<tr class="row row-even"></tr>'
        }
    }

    // On récupère toutes les tr impaires et on les stocke dans un tableau
    var rowOdd = document.querySelectorAll('.row-odd')

    // On parcoure le tableau pour récupérer chaque tr impaire
    for (var i = 0; i < rowOdd.length; i++) {
        // On crée 8 td dans chaque tr
        for(var j = 0; j < 8; j++) {

            //Si j est impair la case est blanche sinon noire
            if(j % 2 !== 0) {
                rowOdd[i].innerHTML += '<td class="cell cell-white"></td>'
            } else {
                rowOdd[i].innerHTML += '<td class="cell cell-black"></td>'
            }
        }
    }

    // On récupère toutes les tr paires et on les stocke dans un tableau
    var rowEven = document.querySelectorAll('.row-even')

    // On parcoure le tableau pour récupérer chaque tr paire
    for (var k = 0; k < rowEven.length; k++) {

        // On crée 8 td dans chaque tr
        for(var l = 0; l < 8; l++) {

            //Si j est impair la case est noire sinon blanche
            if(l % 2 !== 0) {
                rowEven[k].innerHTML += '<td class="cell cell-black"></td>'
            } else {
                rowEven[k].innerHTML += '<td class="cell cell-white"></td>'
            }
        }
    }

    // On récupère toutes les lignes du tableau
    var row = document.querySelectorAll('.row')

    // On parcoure toutes les lignes
    for(var m = 0; m < row.length; m++) {

        // Pour chaque ligne on parcoure toutes les cases
        for (var n = 0; n < row.length; n++) {
            var cells = row[m].childNodes[n]
            // A chaque case on injecte la valeur de la colonne correspondante à j et 8 - i
            // La ligne de code suivante permet d'afficher le nom de la case
            cells.innerHTML = cols[n] + (row.length - m)
            cells.id = cols[n] + (row.length - m)
        }
    }
}

export default init_board