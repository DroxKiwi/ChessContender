function init_game(){
    // On récupère toutes les lignes du tableau
    var row = document.querySelectorAll('.row')

    var whitepawntop1 = ["T","C", "F", "RO", "RE", "F", "C", "T"]
    var whitepawntop2 = ["P", "P", "P", "P", "P", "P", "P", "P"]

    var blackpawntop1 = ["T","C", "F", "RE", "RO", "F", "C", "T"]
    var blackpawntop2 = ["P", "P", "P", "P", "P", "P", "P", "P"]

    var whitepawnbot2 = ["T","C", "F", "RE", "RO", "F", "C", "T"]
    var whitepawnbot1 = ["P", "P", "P", "P", "P", "P", "P", "P"]

    var blackpawnbot2 = ["T","C", "F", "RO", "RE", "F", "C", "T"]
    var blackpawnbot1 = ["P", "P", "P", "P", "P", "P", "P", "P"]
    // On parcoure toutes les lignes
    for(var m = 0; m < 2; m++) {
        // Pour chaque ligne on parcoure toutes les cases
        for (var n = 0; n < row.length; n++) {
            var cells = row[m].childNodes[n]
            if (m == 0){
                cells.innerHTML = whitepawntop1[n]
                cells.classList.add(whitepawntop1[n] + "w")
                cells.classList.add("whitepawn")
            }
            else {
                cells.innerHTML = whitepawntop2[n]
                cells.classList.add(whitepawntop2[n] + "w")
                cells.classList.add("whitepawn")
            }
        }
    }
    // On parcoure toutes les lignes
    for(var m = 6; m < 8; m++) {
        // Pour chaque ligne on parcoure toutes les cases
        for (var n = 0; n < row.length; n++) {
            var cells = row[m].childNodes[n]
            if (m == 6){
                cells.innerHTML = blackpawnbot1[n]
                cells.classList.add(blackpawnbot1[n] + "b")
                cells.classList.add("blackpawn")
            }
            else {
                cells.innerHTML = blackpawnbot2[n]
                cells.classList.add(blackpawnbot2[n] + "b")
                cells.classList.add("blackpawn")
            }
        }
    }
}

export default init_game