function miFuncion1() {
    var nombre = "Juan";
    console.log('log dentro de funcion con var', nombre);
}
miFuncion1();
// Si descomentamos esto da error porque nombre no está definido
// console.log('log fuera de funcion con var', nombre); 

function miFuncion2() {
    let nombre = "Juan";
    console.log('log dentro de funcion con let', nombre);
}
miFuncion2();
// Si descomentamos esto da error porque nombre no está definido
// console.log('log fuera de funcion con let', nombre); 

if (true) {
    var edad = 30;
    console.log('log dentro de if con var', edad);
}
console.log('log fuera de if con var', edad); 

if (true) {
    let edad = 30;
    console.log('log dentro de if con let', edad);
}
console.log('log fuera de if con let', edad); 

if(false) {
    var x = false;
}
console.log('esto es x sin declarar', x); // undefined si no se cumple el if

if (false) {
    var y = false;
} else {
    var y = true;
}
console.log('esto es y declarada en if y en else', y) // true

for (let i=0; i<2; ++i) {
    console.log('valor de i dentro de for', i);
}
//esto da un error de que i no esta definida
//console.log('valor de i fuera de for', i);

for (var j=0; j<2; ++j) {
    console.log('valor de j dentro de for', j);
}
//esto no da problemas porque la variable se define con var
console.log('valor de j fuera de for', j);

const PI = 3.1416;
console.log('esto es una constante', PI);
// Esto da error porque no se puede asignar una constante de nuevo
// PI = 3.14; 

class A {

    x;

    myOtherFunc = function() {
    }

    myFunc = function() {
        const self = this;
        setTimeout(() => {
            this.myOtherFunc(); // Esto puede dar un error porque falta contexto
            self.myOtherFunc(); // Esto ya no da problemas
        }, 500);
    };
}