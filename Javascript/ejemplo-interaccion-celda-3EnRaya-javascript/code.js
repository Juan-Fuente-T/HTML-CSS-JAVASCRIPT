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
    console.log(juego);
}

function dibuja() {
    for (let fila = 0; fila < juego.tablero.length; fila++) {
        for (let columna = 0; columna < juego.tablero[fila].length; columna++) {
            let celda = document.getElementById(`celda_${fila}${columna}`);
            if (juego.tablero[fila][columna] != 0) {
                celda.innerHTML = juego.tablero[fila][columna] == 1 ? 'X' : 'O';
            }
        }
    }
}