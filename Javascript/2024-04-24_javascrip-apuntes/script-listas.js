const lista = [];
// No se puede lista = [] otra vez

let lista2 = [];
// Si se puede lista2 = [] otra vez


let filter = {}; // Un mapa (Objeto)
let columns = []; // Un array (Lista)

filter['a'] = '3';
columns.push('a', 'b');
query(filter, columns);

filter = {
    x: 8
};
columns = ['x', 'y'];
query(filter, columns)

/**
 * @param {Map} filter 
 * @param {Array} columns 
 */
function query(filter, columns) {
}



/**
 * @returns Lista con [id, nombre, dni, [numeros de tel]]
 */
function getUser() {
    // En vez de esto devolver un objeto es mejor
    // ej: {id: 1, nombre: 'Ramón', dni: '78495623G', tlfs: ['num1', 'num']}
    return [1, 'Ramón', '78495623G', ['num1', 'num2']];
}