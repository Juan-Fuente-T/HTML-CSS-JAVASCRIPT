let numTurnos = 0;

let cellMatrix = [
    ['','',''],
    ['','',''],
    ['','','']
];

let cellArray = Array[9];

let victoriasJugadorUno;
let victoriasJugadorDos;

function handleClick(numCell){
    let jugador = document.getElementsByClassName("avisoJugador")[0];
    let cell = document.getElementById(`cellButton${numCell}`);
    console.log("Cell: ", document.getElementById(`cellButton${numCell}`).innerHTML);
    if(numTurnos % 2 != 0) {
        cell.innerHTML = "x";
        (new Audio('assets/queja.mp3')).play();
        jugador.innerHTML = "JUGADOR 1"
        cellArray[numCell] = 'x';
        // if(numCell<3){
        //     cellMatrix[0][numCell] = "x";
        // }else if(numCell>5){
        //     cellMatrix[2][numCell] = "x";
        // }else{
        //         cellMatrix[1][numCell] = "x";
        //     }
        ++numTurnos;
        }else{
            cell.innerHTML = "o";
            (new Audio('assets/explosion.mp3')).play();
            jugador.innerHTML = "JUGADOR 2"
            cellArray[numCell] = 'o';
            // if(numCell<3){
            //     cellMatrix[0][numCell] = "o";
            // }else if(numCell>5){
            //     cellMatrix[2][numCell] = "o";
            // }else{
            // cellMatrix[1][numCell] = "o";
            // }
            ++numTurnos;
        }
        // console.log("Matriz", cellMatrix);
        console.log("Matriz", cellArray);
        cell.disabled = true;
        console.log("NumTurnos", numTurnos);
    }

