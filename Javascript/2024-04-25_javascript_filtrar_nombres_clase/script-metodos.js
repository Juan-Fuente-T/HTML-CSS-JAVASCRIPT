let nombres = [
    "Antonio",
    "Arturo",
    "Armando",
    "Alissa",
    "Ana",
    "Adán",
    "Azul",
    "Bárbara",
    "Bastidas",
    "Bartolomé",
    "Betzaida",
    "Betania",
    "Berta",
    "Bernarda",
    "Carlos",
    "Castillo",
    "Costa",
    "Celeste",
    "Cindy",
    "Cecilia",
    "Carmona",
    "Constantino",
    "Edgardo",
    "Fátima",
    "Florencia",
    "Fausto",
    "Fernando",
    "Francisco",
    "Franyer",
    "Gerardo",
    "Gustavo",
    "Gabriela",
    "González",
    "Guzmán",
    "Juan",
    "José",
    "Jacinto",
    "Juvenal",
    "Julián",
    "Juliana",
    "Jesús",
    "Julio",
    "Luis",
    "López",
    "Luisana",
    "Maria",
    "Marcos",
    "Mariana",
    "Montenegro",
    "Rodriguez",
    "Comunes",
    "Acueducto",
    "Acero",
    "Acido",
    "Árbol",
    "Aula",
    "Avión",
    "Bronce",
    "Bombilla",
    "Bombona",
    "Bulto",
    "Bate",
    "Barco",
    "Bastón",
    "Bicicleta",
    "Caballo",
    "Cabo",
    "Cabaña",
    "Cabello",
    "Calendario",
    "Caimán",
    "Camión",
    "Corneta",
    "Capitán",
    "Carro",
    "Destornillador",
    "Deportista",
    "Edad",
    "Edificio",
    "Enero",
    "Español",
    "Escritorio",
    "Estudio",
    "Escudo",
    "Estación",
    "Escuela",
    "Faena",
    "Falda",
    "Flores",
    "Fortín",
    "Flecha",
    "Gato",
    "General",
    "Guerra",
    "Hoja",
    "Hierro",
    "Julio",
    "Junio",
    "Ladrillo",
    "Kilometro",
    "Manzana"
];
//METODOS DE STRINGS
let miString = "hola mundo!";
let miString2 = "HOLA MUNDO!"

console.log("Eso es miString con toUpperCase", miString.toUpperCase());
console.log("Esto es miString2 con toLowerCase", miString2.toLowerCase());
// Se suele usar para comparar strings sin tener en
// cuenta las mayusculas y minusculas
// Por ejemplo: comparar números hexadecimales
// '091a' y '091A'

console.log("Esto es miString con _ en vez de ' '", miString.replace(" ", "_"));
console.log("Esto es miString.split(' ')", miString.split(" "));
console.log("Esto es miString.split('o')", miString.split("o"));

// Ejemplo de uso de split
// Definimos el nombre de una operación de compra como
// <ID COMPRA>_<ID OPERACION>_<DIA>_<MES>_<AÑO>
let strOperacion = "00001_00060_01_04_2024";
let strOpeSplited = strOperacion.split("_");
let idCompra = strOpeSplited[0];
let idOperacion = strOpeSplited[1];
let dia = strOpeSplited[2];
let mes = strOpeSplited[3];
let anho = strOpeSplited[4];
console.log('strOperacion', strOperacion);
console.log('strOpeSplited', strOpeSplited);
console.log('idCompra', idCompra);
console.log('idOperacion', idOperacion);
console.log('dia', dia);
console.log('mes', mes);
console.log('año', anho);

let miString3 = "      Hola mundo!          ";
console.log("Esto es miString3.trim()", miString3.trim());

console.log("Esto es miString.substring(3, 7)", miString.substring(3, 7));
console.log("Estos son los 3 primeros caracteres de miString", miString.substring(0, 3));
console.log("Estos son los 3 últimos caracteres de miString", miString.substring(miString.length-3));

//FUNCIONES Y PARAMETROS
miFunc(1)
function miFunc(var1, var2, var3) {
    console.log(var1, var2, var3);
}

funcionDe2Var(3, 2, 1);
funcionDe2Var(3, 2);
funcionDe2Var(3);
try {
    funcionDe2Var();
} catch (err) {
    console.warn(err);
}
/**
 * 
 * @param {*} var1 variable obligatoria
 * @param {*} var2 variable opcional
 */
function funcionDe2Var(var1, var2) {
    if (var1 === undefined) {
        throw("Falta var1");
    }
    var2 = var2 ?? 'var2 por defecto';
    console.log('Esta es la var1', var1);
    console.log('Esta es la var2', var2);
}
//METODOS DE ARRAYS
    let miArray = [];//esto es como si en Java se hubiese hecho "new Array<Object>()"
    miArray = [1, "hola mundo", 23.87, new Date()]
    console.log("Mi array:", miArray);
    
    miArray.push(0);
    console.log("Mi array:", miArray);
    miArray.push(1);
    console.log("Mi array:", miArray);
    miArray.push(2);
    console.log("Mi array:", miArray);
    
    let pop1 = miArray.pop();
    console.log("elemento eliminado pop1", pop1);//quita el ultimo elemento
    console.log("Mi array:", miArray);
    
    let elementosEliminados = miArray.splice(1, 3);//elimina a partir del 1, 3 elementos
    console.log("elementos eliminado Splice", elementosEliminados);//quita el ultimo elemento
    console.log("Mi array:", miArray);

    console.log("Esto es mi array antes", miArray );
    //parece igual es la consola, pero al expandirlo se ve que no lo es
    let miCopia = [...miArray]; 
    //esto es como si hicieramos una copia de seguro con un constructor
    //en java sería "let miCopia = new ArrayList<>(miArray)"
    //{...variable} crea copia para objetos
    //[]...variable] crea copia para arrays
    console.log("Esto es mi copia", miCopia);
    miArray.pop();
    miArray.pop();
    miArray.pop();
    miArray.push(2);
    miArray.push(2);
    miArray.push(2);
    miArray.push(2);
    console.log("Esto es mi array despues", miArray);

let miObjeto = {a:1,b:2};
let miObjetoCopia = {...miObjeto}
console.log("Esto es miObjeto antes", miObjeto)
console.log("Esto es miObjetoCopia", miObjetoCopia)
let copiaJson = JSON.parse(JSON.stringify(miObjeto));
console.log("Esto es mi copiaJson", copiaJson);
//crea un objeto a partir del string del objeto original. Es un objeto copia del original.

miObjeto.a = 0;
miObjeto.b = 0;
console.log("Esto es miObjeto después", miObjeto);

let data = [
    {a: 1, b: 1},
    {a: 1, b: 2},
    {a: 2, b: 2},
    {a: 2, b: 1}
];

//esto ordenado el array en orden inverso con respecto al parametro "a"
//pero no toma en cuenta el parametro "b"
//en la funcion que declaremos dentro de sort
//   return -1 -> el primer elemento va antes
//   return 1 -> el primer elemento va despues
//   return 0 -> son iguales
data.sort(function(x, y){
    return y.a - x.a;
});
console.log("Array ordenado con respecto a 'a'", data);

data.sort(function(x, y){
    if (x.a != y.a){
        return y.a - x.a;
    }else{
        return y.b - x.b;
    }
});
console.log("Array ordenado con respecto a 'a' y luego con respecto a 'b'", data);

let arrayDeStrings = [
    "Pepe",
    "Juan",
    "Ana",
    "Belen",
    "Adán",
    "Tania",
    "Pilar",
    "Diego",
    "Aaron"
];

console.log("arraydeStrings antes de ordenar", [...arrayDeStrings]);
arrayDeStrings.sort(function(a, b){
    return a.localeCompare(b);
});
console.log("arraydeStrings despues de ordenar", [...arrayDeStrings]);
arrayDeStrings.reverse();
console.log("arraydeStrings despues de reverse", [...arrayDeStrings]);

console.log("Estos son los nombres que hemos importado: ", nombres);
   let valorAFiltrar = "a";
   let nombresFiltradosCon_a = nombres.filter(function(nombre){
       return nombre.includes(valorAFiltrar);
    });
    console.log("nombres filtrados con 'a': ", nombresFiltradosCon_a);

    let valorAFiltrarCon_A = "A";
    let nombresFiltradosCon_A = nombres.filter(function(nombre){
        return nombre.includes(valorAFiltrarCon_A);
     });
     console.log("nombres filtrados con 'A': ", nombresFiltradosCon_A);
   
    let nombresFiltrados = nombres.filter(function(nombre){
        return nombre.toUpperCase().includes(valorAFiltrarCon_A.toUpperCase());
     });
     console.log("nombres filtrados sin importar si es 'a' o 'A': ", nombresFiltrados);

    let listaAIterar = [
        "valor 1",
        "valor 2",
        "valor 3"
    ]
    for(let i = 0; i < listaAIterar.length; ++i){
        console.log("Iteracion sobre lista con for i", listaAIterar[i])
    }
    
    listaAIterar.forEach(function(valor){
        console.log("Iteracion sobre lista con for each", valor)
    });
    
    //for of devuelve los valores. No se puede usar en un objeto porque los objetos no son iterables
    for (let valor of listaAIterar){
        console.log("Iteracion sobre lista con for of", valor)
    }
    
    //for in devuelve el indice, vale para los elementos que tengan clave o key. 
    for (let index in listaAIterar){
        console.log("Iteracion sobre lista con for in. Indice y valor: ", index, listaAIterar[index]);
    }
    let objetoAiterar = {a: 1, b: 2};
    //No se puede iterar con for-of prque un objeto no es iterable
    //Podemos usar for para iterar sobre las claves del objeto
    for (let key in objetoAiterar){
        console.log("iteracion sobre objeto con for in", key, objetoAiterar[key]);
    }

document.addEventListener("readystatechange",function(){
    filtrarNombres('');
})

     /**
      * Filtra de los nombres de la Lista en funcion a valorFiltro
      * @param {string} valorFiltro 
      */
     function filtrarNombres(valorFiltro){
        let valoresFiltrados = nombres.filter(function(nombre){
            // return valor.toUpperCase().includes(valorFiltro.toUpperCase());
            return nombre.toUpperCase().startsWith(valorFiltro.toUpperCase());
         });
        // console.log(valoresFiltrados);
        let selectDeHtml = document.getElementById("selector_de_nombre");
        selectDeHtml.innerHTML = "";
        let ulDeHtml = document.getElementById("lista_nombres");
        ulDeHtml.innerHTML = "";
         for (let valor of valoresFiltrados){
            let elemento = document.createElement('li');
            elemento.innerHTML = valor;
            ulDeHtml.appendChild(elemento);
            let opcionSelected = document.createElement('option');
            opcionSelected.value = valor;
            opcionSelected.innerHTML = valor;
            selectDeHtml.appendChild(opcionSelected);
         };
     }

     /*
        let ulDeHtml = document.getElementById("lista_nombres");
    ulDeHtml.innerHTML = "";
    for (let valor of valoresFiltrados) {
        let nodo = document.createElement('li');
        nodo.innerHTML = valor;
        ulDeHtml.appendChild(nodo);
    }
      */