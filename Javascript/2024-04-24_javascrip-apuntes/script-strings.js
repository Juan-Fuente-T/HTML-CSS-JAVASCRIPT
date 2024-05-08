// let hola = "Hola";
// let mundo =  "Mundo";
let hola = "Bocadillo de ";
let mundo =  "Nocilla";

let concatConMas = hola + " " + mundo + "!";
console.log(concatConMas); // Hola Mundo!

let concatMetodo1 = hola.concat(" ", mundo, "!");
let concatMetodo2 = hola.concat(" ").concat(mundo).concat("!");
console.log("concatMetodo1",concatMetodo1); 
console.log("concatMetodo2",concatMetodo2); 

let concatStr = `${hola} ${mundo}!`;
console.log("concatStr",concatStr);

let numeroHolas = 3;
//Hola mundo 3 veces!

let concatConMasNum = hola + " " + mundo + " " + numeroHolas + " veces!";
console.log ("concatConMasNum", concatConMasNum);

let concatMetodoNum = hola.concat (" ", mundo, " ", numeroHolas, " veces!");
console.log ("concatMetodoNum", concatMetodoNum);

let concatStrNum = `${hola} ${mundo} ${numeroHolas} veces!`;
console.log("concatStrNum", concatStrNum);

//"Hola mundo 5 veces!"

let concatConMasNumSuma = hola + " " + mundo + " " + numeroHolas + 2 + " veces!";
console.log ("concatConMasNumSuma", concatConMasNumSuma);

// let concatMetodoNumSuma = hola.concat (" ", mundo, " ", numeroHolas + 2, " veces!");
// console.log ("concatMetodoNumSuma", concatMetodoNumSuma);

// let concatStrNumSuma = `${hola} ${mundo} ${numeroHolas +2} veces!`;
// console.log("concatStrNumSuma", concatStrNumSuma);

// "Hola mundo 5 veces!"

let concatConMasNumSumaSinParentesis = hola + " " + mundo + " " + numeroHolas + 2 + " veces!";
let concatConMasNumSumaConParentesis = hola + " " + mundo + " " + (numeroHolas + 2) + " veces!";
console.log('concatConMasNumSumaSinParentesis', concatConMasNumSumaSinParentesis);
console.log('concatConMasNumSumaConParentesis', concatConMasNumSumaConParentesis);

let concatMetodoNumSuma = hola.concat(" ", mundo, " ", numeroHolas + 2, " veces!");
console.log('concatMetodoNumSuma', concatMetodoNumSuma);

let concatStrNumSuma = `${hola} ${mundo} ${numeroHolas + 2} veces!`;
console.log('concatStrNumSuma', concatStrNumSuma);

// Prueba con resta y sin paréntesis
let concatConMasNumRestaSinParentesis = hola + " " + mundo + " " + numeroHolas - 2 + " veces!";
console.log('concatConMasNumRestaSinParentesis', concatConMasNumRestaSinParentesis);