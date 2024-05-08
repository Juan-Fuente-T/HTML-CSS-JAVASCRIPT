let numTurnos = 0;
let partidaTerminada;
let cellMatrix = [
    ['','',''],
    ['','',''],
    ['','','']
];

let jugadorUno = '';
let jugadorDos = '';
let colorJugadorUno = '';
let colorJugadorDos = '';

//victorias de cada jugador
let victoriasJugadorUno = 0;
let victoriasJugadorDos = 0;
let empates = 0;

function empezarPartida(jugador1, jugador2, colorJugador1, colorJugador2){
    console.log("Datos", jugador1, jugador2, colorJugador1, colorJugador2);
    if(
        jugador1 == null ||
        jugador1 == undefined ||
        jugador1 == '' ||
        jugador2 == null ||
        jugador2 == undefined ||
        jugador2 == ''
    ){
        alert("Debe escribir ambos nombres!");
    }else{
        jugadorUno = jugador1;
        jugadorDos = jugador2;
        colorJugadorUno = colorJugador1;
        colorJugadorDos = colorJugador2;
        let form = document.getElementById("jugadoresForm");
        form.style.visibility = 'hidden';
        form.style.height = '0px';
        let juego = document.getElementById("contenedorJuego");
        juego.style.visibility = 'visible';
        juego.style.height = "auto";
    }
}

// function guardarJugadores(event){
//     event.preventDefault();
//     // console.log("Porras");
//     jugadorUno = document.getElementById("jugador1").value;
//     colorJugadorUno = document.getElementById("colorJugador1").value;
//     jugadorDos = document.getElementById("jugador2").value;
//     colorJugadorDos = document.getElementById("colorJugador2").value;
//     console.log("Jugadores y colores: ", jugadorUno, jugadorDos, colorJugadorUno, colorJugadorDos);
// }

function manejarTurno(row, numCell){
    let avisoJugador = document.getElementById("avisoJugador");
    let cell = document.getElementById(`cellButton${row}${numCell}`);

    console.log("Cell: ", document.getElementById(`cellButton${row}${numCell}`).innerHTML);
    console.log("NumCell", numCell)
   
    if(numTurnos % 2 == 0 && !partidaTerminada
    && cell.innerHTML == '') {
        cell.style.backgroundImage = "url('')";
        cell.innerHTML = '<div>x</div>';
        cell.style.backgroundColor = colorJugadorUno;
        cellMatrix[row][numCell] = 'x';
        (new Audio('assets/explosion.mp3')).play();
        // avisoJugador.innerHTML = "JUGADOR ACTUAL: JUGADOR 1"
        avisoJugador.innerHTML = `Es el turno de ${jugadorDos}`;
        ++numTurnos;
    }else if(numTurnos % 2 != 0 && !partidaTerminada
        && cell.innerHTML == ''){
            cell.style.backgroundImage = "url('')";
            cell.innerHTML = "<div>o</div>";
            cell.style.backgroundColor = colorJugadorDos;
            cellMatrix[row][numCell] = 'o';
            (new Audio('assets/queja.mp3')).play();
            avisoJugador.innerHTML = `Es el turno de ${jugadorUno}`;
        // avisoJugador.innerHTML = "JUGADOR ACTUAL: JUGADOR 2"
        ++numTurnos;
    }
    
    mostrarVencedor();
   
    console.log("Matriz", cellMatrix);
    // console.log("Matriz", cellArray);
    
    console.log("NumTurnos", numTurnos);

}
function mostrarVencedor(){
    comprobarVencedor(0,0,0,1,0,2);
    comprobarVencedor(1,0,1,1,1,2);
    comprobarVencedor(2,0,2,1,2,2);

    comprobarVencedor(0,0,1,0,2,0);
    comprobarVencedor(0,1,1,1,2,1);
    comprobarVencedor(0,2,1,2,2,2);

    comprobarVencedor(0,0,1,1,2,2);
    comprobarVencedor(0,2,1,1,2,0);
}

function comprobarVencedor(row, numCell, row1, numCell1, row2, numCell2){
    let avisoJugador = document.getElementById("avisoJugador");
    console.log("AVISO", avisoJugador);
    if (cellMatrix[row][numCell] == "x"  
    && cellMatrix[row1][numCell1] == "x" 
    && cellMatrix[row2][numCell2] == "x" 
    && !partidaTerminada){
        avisoJugador.innerHTML = `${jugadorUno} ha vencido`;
        ++victoriasJugadorUno;
        partidaTerminada = true;
        setTimeout(function (){
            (new Audio('assets/risa.mp3')).play();
            reiniciarPartida();
        }, 1000);
       
    }else if(cellMatrix[row][numCell] == "o"  
    && cellMatrix[row1][numCell1] == "o" 
    && cellMatrix[row2][numCell2] == "o"
    && !partidaTerminada){
        avisoJugador.innerHTML = `${jugadorDos} ha vencido`;
        ++victoriasJugadorDos;
        partidaTerminada = true;
        setTimeout(function (){
            (new Audio('assets/risa.mp3')).play();
            reiniciarPartida();
             }, 1000);
    }
    //CORREGIR
    if(!partidaTerminada && numTurnos == 9){
        ++empates;
        reiniciarPartida();
    }
    document.getElementById("numVictorias").innerHTML = `${jugadorUno}: ${victoriasJugadorUno} | ${victoriasJugadorDos} : ${jugadorDos}`
    document.getElementById("empates").innerHTML = `Empates: ${empates}`
    for(let i = 0; i < 3; ++i){
        // for(let j = 0; j < 3; ++j){
        //     if(document.getElementById(`cellButton${i}${j}`).innerHTML != ""){
        //         partidaTerminada = true;
        //     }else{
        //         partidaTerminada = false;
        //     }
    }
}    
function reiniciarContador(){
    
    reiniciarPartida();
    victoriasJugadorUno = 0;
    victoriasJugadorDos = 0;
    empates = 0;
    document.getElementById("numVictorias").innerHTML = "NUMERO DE VICTORIAS:";
    document.getElementById("avisoJugador") = `INICIA EL JUEGO: ${jugadorUno}`;;
    document.getElementById("empates").innerHTML = "EMPATES:";

}
function reiniciarPartida(){
    // if(partidaTerminada){
        for(let i = 0; i < 3; ++i){
            for(let j = 0; j < 3; ++j){
                cell = document.getElementById(`cellButton${i}${j}`);
                cell.innerHTML = "";
                // cell.style.backgroundColor = "";
                cell.style.backgroundImage = "url('./assets/pokemon-fondo.jpg')";
                cell.style.backgroundPosition = "center";
                cell.style.backgroundSize = "contain";
            }
        }  
        cellMatrix = [
            ['','',''],
            ['','',''],
            ['','','']
        ];
    // }else{alert("Termina la partida, anénoma")}
    avisoJugador.innerHTML = `INICIA EL JUEGO: ${jugadorUno}`;
    numTurnos = 0;
    partidaTerminada = false;
}
