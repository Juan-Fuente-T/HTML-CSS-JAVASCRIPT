console.log("Hola mundo");

console.warn("Vivan os mocos");

alert("Vivan os piollos");

console.log("El resultado de sumar 3 y 5 es ", sumar(3,5));
console.log(`El resultado de sumar 3 y 5 tambien es ${sumar(3,5)}`);

var x = "Hola";
var y = "Mundo 2";
var concatenada = `${x} ${y}`;
console.log(concatenada);

function sumar (x, Y){
    return x + Y;
}
addEventListener('keypress', function(evt){
    //console.log(evt);
    console.log("Has pulsado " + evt.key);
});