let jugadorTurno = 1;
let tablero = [
    0, 0, 0,
    0, 0, 0,
    0, 0, 0
];

let victoriasJugador1 = 0;
let victoriasJugador2 = 0;
let empates = 0;
let jugador1 = {
    nombre: '',
    color: ''
}
let jugador2 = {
    nombre: '',
    color: ''
}

class DatosGuardados{
    jugadorTurno;
    tablero;
    victoriasJugador1;
    victoriasJugador2;
    empates;
    jugador1;
    jugador2;
}

function guardarDatos(){
    let datosAGuardar = new DatosGuardados();
    datosAGuardar.jugadorTurno = jugadorTurno;
    datosAGuardar.tablero = tablero;
    datosAGuardar.victoriasJugador1 = victoriasJugador1;
    datosAGuardar.victoriasJugador2 = victoriasJugador2;
    datosAGuardar.empates = empates;
    datosAGuardar.jugador1 = jugador1;
    datosAGuardar.jugador2 = jugador2;
    localStorage.setItem("INFO PREVIA", JSON.stringify(datosAGuardar));
}
function cargarDatos(){
    let infoPrevia = localStorage.getItem("INFO PREVIA");
    if (infoPrevia){
        let datosCargados = JSON.parse(infoPrevia);
        jugadorTurno = datosCargados.jugadorTurno;
        tablero = datosCargados.tablero;
        victoriasJugador1 = datosCargados.victoriasJugador1;
        victoriasJugador2 = datosCargados.victoriasJugador2; 
        empates = datosCargados.empates;
        jugador1 = datosCargados.jugador1;
        jugador2 = datosCargados.jugador2;
        dibuja();
        console.log("INFO PREVIA", localStorage.getItem("INFO PREVIA"));
        // console,log("MOSCAS", datosCargados.empates,datosCargados.jugador2,datosCargados.jugador1)
    }
}
function eliminarDatos(){
    localStorage.removeItem("INFO PREVIA");
}

function empezarPartida(nombre1, color1, nombre2, color2){
    if(
        nombre1 == null ||
        nombre1 == undefined ||
        nombre1 == '' ||
        nombre2 == null ||
        nombre2 == undefined ||
        nombre2 == ''
    ){
        alert("Debe escribir ambos nombres!");
    }else{
        jugador1.nombre = nombre1;
        jugador1.color = color1;
        jugador2.nombre = nombre2;
        jugador2.color = color2;
        let form = document.getElementById("formulario");
        form.style.visibility = 'hidden';
        form.style.height = '0px';
        dibuja();
        let juego = document.getElementById("juego");
        juego.style.visibility = 'visible';
    }
}

function reiniciarTodo(){
    let jugadorTurno = 1;
    let tablero = [
        0, 0, 0,
        0, 0, 0,
        0, 0, 0
    ];
    victoriasJugador1 = 0;
    victoriasJugador2 = 0;
    empates =0;
    dibuja();
}
function reiniciarPartida() {
    tablero = [
        0, 0, 0,
        0, 0, 0,
        0, 0, 0
    ];
    dibuja();
}


function ejecutarTurno(posicion) {
    let nombrejugadorTurno = jugadorTurno == 1? jugador1.nombre : jugador1.nombre;
    if(tablero[posicion] != 0){
        alert("No se puede sobreescribir la jugada de otro jugador");
        return;
    }
    tablero[posicion] = jugadorTurno;

    // jugadorTurno = jugadorTurno == 1 ? 2 : 1;
    if (jugadorTurno == 1) {
        jugadorTurno = 2;
    } else {
        jugadorTurno = 1;
    }

    dibuja();
    comprobarTresEnRaya();
    console.log("DATOS Storage", jugador1, jugador2)
    guardarDatos();
    console.log(tablero);
}

function dibuja() {
    document.getElementById("turnoJugador").innerHTML;
    for (let posicion = 0; posicion < tablero.length; ++posicion) {
        let celdaHtml = document.getElementById("celda_" + posicion);
        if (tablero[posicion] != 0) {
            celdaHtml.innerHTML = tablero[posicion] == 1 ? 'x' : 'o';
            celdaHtml.style.backgroundColor = tablero[posicion] == 1 ? jugador1.color : jugador2.color;
        } else {
            celdaHtml.innerHTML = posicion;
            celdaHtml.style.backgroundColor = '';
        }
    }
    document.getElementById('marcador').innerHTML = `${jugador1.nombre} - ${victoriasJugador1} : ${victoriasJugador2} - ${jugador2.nombre}`;
    document.getElementById('empates').innerHTML = "Empates: " + empates;
    document.getElementById('partidas').innerHTML = "Partidas totales: " + (victoriasJugador1 + victoriasJugador2 + empates);
}
const combinacionesGanadoras = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function comprobarTresEnRaya(){
    let existeGanador = false;
    let ganador = 0;
    for(let combinacion of combinacionesGanadoras){
        if(
            tablero[combinacion[0]] == tablero[combinacion[1]] &&  
            tablero[combinacion[1]] == tablero[combinacion[2]] &&  
            tablero[combinacion[0]] != 0
        ){
            existeGanador = true;
            ganador = tablero[combinacion[0]];
            break;
        }
    }
    if(existeGanador){
        if(ganador == 1){
            ++victoriasJugador1
        }else{
            ++victoriasJugador2
        }
        alert(`Ha ganado el jugador: ${ganador}`);
        reiniciarPartida();
        return;
    }
    for (let valorTablero of tablero){
        if (valorTablero == 0){
            return;
        }
    }
    ++empates;

    alert("Empate");
    reiniciarPartida();
}
function comprobarTresEnRayaSome(){
    combinacionesGanadoras.some(function(combinacion){
        const [combinacion_0, combinacion_1, combinacion_2] = combinacion;
        return( 
            tablero[combinacion[0]] == tablero[combinacion[1]] &&
            tablero[combinacion[1]] == tablero[combinacion[2]] &&
            tablero[combinacion[0]] != 0
        );
    });
}

function comprobarTresEnRayaLargoMalo(){
    if(
        tablero[0] == tablero[1]&&
        tablero[1] == tablero[2]&&
        tablero[0] != 0
    ){

    }else if(
        tablero[3] == tablero[4]&&
        tablero[4] == tablero[5]&&
        tablero[3] != 0   
    ){

    }else if(
        tablero[6] == tablero[7]&&
        tablero[7] == tablero[8]&&
        tablero[6] != 0   
    ){
        
    }else if(
        tablero[0] == tablero[3]&&
        tablero[3] == tablero[6]&&
        tablero[0] != 0   
    ){
        
    }else if(
        tablero[1] == tablero[4]&&
        tablero[4] == tablero[7]&&
        tablero[1] != 0   
    ){
        
    }else if(
        tablero[2] == tablero[5]&&
        tablero[5] == tablero[8]&&
        tablero[2] != 0   
    ){
        
    }else if(
        tablero[0] == tablero[4]&&
        tablero[4] == tablero[8]&&
        tablero[0] != 0   
    ){
        
    }else if(
        tablero[2] == tablero[4]&&
        tablero[4] == tablero[6]&&
        tablero[2] != 0   
    ){
        
    }
}