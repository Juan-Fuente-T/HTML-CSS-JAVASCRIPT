/**
 * Esta funcion se usa para sumar dos numeros 
 * @param {Number} a El primer numero
 * @param {Number} b El segundo numero
 * @returns a + b
 */
function sumar(a, b){

    if(typeof(a) !== "number" ){
        throw('a no es un numero')
    }
    if(typeof(b) !== 'number'){
        throw('b no es un numero')
    }
    // if(typeof(a) !== "number" || typeof(b) !== 'number'){
    //     throw('alguno de los inputs no es un numero')
    // }
    return a + b;
}

console.log("sumar con numeros", sumar(2, 3));
try{
    sumar(1, "4");
}catch(err){
    // console.log("Error al sumar: ", err);
    // console.error("Error al sumar: ", err);
    console.warn("Error al sumar: ", err);
}

console.log("sumar con strings", sumar('2', '3'));

console.log('print despues de la excepcion');//si salta la excepcion no se ejecuta este log