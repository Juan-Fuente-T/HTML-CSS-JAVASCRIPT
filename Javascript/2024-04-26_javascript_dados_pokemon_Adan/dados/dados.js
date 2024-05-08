/**
 * @param {number} min 
 * @param {number} max 
 * @returns Random number between min and max included
 */
function calcNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * @param {number} caras 
 * @param {HTMLElement} htmlElem 
 */
function tirarDados(caras, htmlElem) {
    // reproduceAudio();
    reproduceAudioRandom();
    htmlElem.innerHTML = calcNumber(1, caras);
}

/**
 * @param {Array<HTMLElement>} botones 
 */
function lanzarTodos(botones) {
    for (const boton of botones) {
        boton.click();
    }
}

function reproduceAudio() {
    (new Audio('assets/dados.mp3')).play();
}
reproduceAudio()
function reproduceAudioRandom() {
    let srcs = [
        'assets/dados.mp3',
        'assets/dados2.mp3',
        'assets/dados3.mp3',
        'assets/dados4.mp3'
    ];
    (new Audio(srcs[calcNumber(0, 3)])).play();
}