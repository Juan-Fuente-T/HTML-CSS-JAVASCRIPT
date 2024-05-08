let x = 10;
let y = 5;

//operadores matematicos
let suma = x + y;
console.log("suma", suma);
let resta = x - y;
console.log("resta", resta);

let multiplicacion = x * y;
console.log("multiplicacion", multiplicacion);

let division = x / y;
console.log("division", division);

let modulo = x % y; //resto de dividir x entre y , en este caso 0
console.log("modulo", modulo);

++x;
console.log("x despues de ++ x", x);

++y;
console.log("y despues de ++ y", y);

--x;
console.log("x despues de -- x", x);

--y;
console.log("y despues de -- y", y);

//operadores de comparacion
let igual = (x == y);
console.log("igual que: ", igual);   

let igualEstricto = (x  === y);
//OJO, null == undefined da true pero null === undefined es false
console.log("igual estricto que: ", igualEstricto);  

let diferente = (x != y);
console.log("diferente que: ", diferente);

let diferenteEstricto = (x !== y);
console.log("diferenteEstricto que: ", diferenteEstricto);

let mayorQue = (x > y);
console.log("mayor que: ", mayorQue);

let menorQue = (x < y);
console.log("menor que: ", menorQue);

let mayorIgualQue = (x >= y);
console.log("mayor igual que: ", mayorIgualQue);

let menorIgualQue =  (x <= y);
console.log("menor igual que: ", menorIgualQue);

//OPERADORES LOGICOS
let  and = (diferente && mayorIgualQue);//deben cumplirse ambas
console.log("and: ", and);

/*
    | a | b | a && b |
    | true | true | true |
    | true | true | false |
    | false | true | false |
    | true | false | false |
*/

let  or = (diferente || mayorIgualQue);//deben culplirse cualquiera de las dos
console.log("or: ", or);

/*
    | a | b | a || b |
    | true | true | true |
    | true | true | true |
    | false | true | true |
    | true | false | false |
*/
let  negado = !igual;//es lo mismo que diferente
console.log("negado: ", negado);

/*
    | a | !a |
    | true | false |
    | false | true |
*/

let  otroNegado = !(x != y);//primero evalua lo de los parentesis y despues intercambia el resultado
console.log("otroNegado: ", otroNegado);

//if (a.altura !== undefined && a != null)
//ASIGNACIONES

let sumarIgualar = 0;
console.log("sumarIgualar antes:", sumarIgualar );
sumarIgualar += 2;
console.log("sumarIgualar despues:", sumarIgualar );

let restarIgualar = 0;
console.log("restarIgualar antes:", restarIgualar );
restarIgualar -= 2;
console.log("restarIgualar despues:", restarIgualar );

let multiplicarIgualar = 3;
console.log("multiplicarIgualar antes:", multiplicarIgualar );
multiplicarIgualar *= 4
console.log("multiplicarIgualar despues:", multiplicarIgualar);

let dividirIgualar = 1;
console.log("dividirIgualar antes:", dividirIgualar );
dividirIgualar /= 2;
console.log("dividirIgualar despues:", dividirIgualar);

let moduloIgualar = 5;
console.log("moduloIgualar antes:", moduloIgualar);
moduloIgualar %= 3;
console.log("moduloIgualar despues:", moduloIgualar);

//PLUS
let potencia = 2**3; //esto es 2^3 (dos elevado a tres)

let potenciaIgualar = 2;
console.log("potenciaIgualar antes:", potenciaIgualar);
potenciaIgualar **= 4;
console.log("potenciaIgualar despues:", potenciaIgualar);

let operadorTernario = 3 > 5? "Es true" : "No es true";
console.log("operadorTernario", operadorTernario);

//Operador coalescencia(no creo que se llegue  usar)
// Coalescencia
const coalescenciaNull = null ?? 'default string';
console.log('coalescenciaNull', coalescenciaNull);
// Deberia imprimir: "default string"

const coalescenciaValor = 0 ?? 42;
console.log('coalescenciaValor', coalescenciaValor);
// Deberia imprimir: 0

const coalescenciaUndefined = undefined ?? 42;
console.log('coalescenciaUndefined', coalescenciaUndefined);
// Deberia imprimir: 42