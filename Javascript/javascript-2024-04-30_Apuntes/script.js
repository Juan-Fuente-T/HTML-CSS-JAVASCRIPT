// alert("Hola, esto es una alerta");
// console.log("El usuario ya hizo click en confirmar")

// let confirmCookies = confirm("Desea aceptar las cookies?");
// console.log(`El usuario ${confirmCookies? 'si': 'no'} ha aceptado las cookies`);

// if(confirm("¿Abrimos Google?")){
//     window.open('https://google.com', '_blank')
// }


//LO DE ARRIBA ESTA COMENTADO SOLO PARA 
//NO TENER QUE ESTAR CLICKANDO CONTINUAMENTE

function evaluaExpresion(expression){
    try{
        //Ejecuta el codigo que se encuentra dentro de la función eval()
        let resultado = eval(expression);
        alert(`El resultado de la evaluacion es: ${ resultado }`);
    }catch(error){
        alert(`Ha ocurrido un error, la expresion no es correcta (${ error })`)
        console.warn(error);
    }
}

let numeroNormal = parseInt("122");
console.log("ParseInt de 122: ", numeroNormal);
let numeroSoloLetras = parseInt("ijk");
console.log("ParseInt de ijk: ", numeroSoloLetras);
console.log("numeroSoloLetras == Nan: ", numeroSoloLetras == NaN);
console.log("isNan(numeroSoloLetras): ", isNaN(numeroSoloLetras));
console.log("ParseInt de ijk: ", numeroSoloLetras);

let numeroConLetras =parseInt("12hin");
console.log("ParseInt de 12hin: ", numeroConLetras);

let floatConPunto = parseFloat(".223");
console.log("ParseInt de .223: ", floatConPunto);
let floatConPuntoLetras = parseFloat(".223rt");
console.log("ParseInt de .233rt: ", floatConPuntoLetras);

let encodedURI = encodeURI("http://google.com?param=Hola Mundo!");
console.log("ESta es nuestra URI codificada ", encodedURI);
let decodedURI  = decodeURI(encodedURI);
console.log("ESta es nuestra URI decodificada ", decodedURI);

setTimeout(function (){
    let inputConQuerySelect = document.querySelector("util");
    let inputConQuerySelectPropio = document.querySelector("pruebaSelector");
    console.log("Este es nuestro input tomado con querySelector", inputConQuerySelect);
    console.log("Este es nuestro input tomado con querySelectorPropio", inputConQuerySelectPropio);
}, 2000)

let ejemploJoinArray = ["Hola", 3, new Date()];
console.log("Esto es el join de un array sin separador", ejemploJoinArray.join());
console.log("Esto es el join de un array con ' ' como separador", ejemploJoinArray.join(" "));

let miRegExpr = /[+]\d{2}[ ]\d{9}/;
console.log("Expresion regular evaluada ", miRegExpr.test("+35 666777666"));
