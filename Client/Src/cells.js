// Au clic, on ajoute la classe .active à l'élément en paramètre
function selectCell(element) {
    element.addEventListener('click', function() {
        if (element.classList.contains('whitepawn') || element.classList.contains('blackpawn')){
            var cellSelected = document.querySelectorAll('.selected')
            element.classList.toggle('selected')
            for (var i = 0; i < cellSelected.length; i++){
                cellSelected[i].classList.remove('selected')
            }
        }
    });
}

function addEventToCase(){
    // On récupère toutes les cases 
    var cell = document.querySelectorAll('.cell');
    // Pour chaque case on applique la fonction selectCell
    for(var i = 0; i < cell.length; i++) {
        selectCell(cell[i]);
    }
}

export default addEventToCase