
class Juego {
    jugadorDelTurno = 1;
    tablero = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ];
}
let juego = new Juego();


function ejecutarTurno(fila, columna) {
    juego.tablero[fila][columna] = juego.jugadorDelTurno;
    juego.jugadorDelTurno = juego.jugadorDelTurno == 1 ? 2 : 1;
    dibuja();
    checkTresEnRaya();
    checkTresEnRayaDiagonal();
    console.log(juego);
}

function checkTresEnRaya() {
    for (let i = 0; i < 3 ; ++i) {
        if (
            juego.tablero[i][0] == juego.tablero[i][1] &&
            juego.tablero[i][1] == juego.tablero[i][2] &&
            juego.tablero[i][0] != 0
        ) {
            alert(`Ha ganado el jugador ${juego.tablero[i][0] == 1 ? 1 : 2}`);
        }
    }
}
function checkTresEnRayaDiagonal() {
    if(juego.tablero[0][0] == juego.tablero[1][1] 
    && juego.tablero[1][1] == juego.tablero[2][2] 
    && juego.tablero[1][1] != 0 ||
    juego.tablero[0][2] == juego.tablero[1][1] 
    && juego.tablero[1][1] == juego.tablero[2][0] 
    && juego.tablero[1][1] != 0 
){
    alert(`Ha ganado el jugador ${juego.tablero[1][1] == 1 ? 1 : 2}`);
    }
}

function reiniciarPartida() {
    console.log("juego");
    for(let fila = 0; fila < juego.tablero.length; fila++){
        for(let columna = 0; columna < juego.tablero[fila].length; columna++ ){
            let celda = document.getElementById(`celda_${fila}_${columna}`);
            
            celda.innerHTML = juego.tablero[fila][columna] = 0;
            
        }
    }   
}
function dibuja() {
    for (let fila = 0; fila < juego.tablero.length; fila++) {
        for (let columna = 0; columna < juego.tablero[fila].length; columna++) {
            let celda = document.getElementById(`celda_${fila}${columna}`);
            if (juego.tablero[fila][columna] != 0) {
                celda.innerHTML = juego.tablero[fila][columna] == 1 ? 'X' : 'O';
                celda.style.backgroundColor = juego.tablero[fila][columna] == 1 ? 'blue' : 'red';
            }
        }
    }
}

// function _dibuja() {
//     for (let fila = 0; fila < juego.tablero.length; fila++) {
//         for (let columna = 0; columna < juego.tablero[fila].length; columna++) {
//             let celda = document.getElementById(`celda_${fila}${columna}`);
//             if (juego.tablero[fila][columna] != 0) {
//                 celda.innerHTML = juego.tablero[fila][columna] == 1 ? 'X' : 'O';
//                 celda.style.backgroundColor = juego.tablero[fila][columna] == 1? 'blue': 'red';
//             }
//         }
//     }
// }
