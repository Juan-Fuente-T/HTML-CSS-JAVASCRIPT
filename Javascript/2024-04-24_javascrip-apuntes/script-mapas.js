let obj = {};
let map = new Map();

console.log('obj.a', obj.a);
console.log('map.a', map.a);
map.set('a', 5)
map.set('c', 3)
map.set('d', 2)
obj.a = 5;
obj.c = 3;
obj.d = 2;

// PARTE OBJETOS
// Esto no funciona porque obj es un objeto y no tiene funciones
// console.log(obj.get('a'))

console.log('obj.a', obj.a);
console.log('obj.b', obj.b);

Object.keys(obj);

// PARTE MAPAS

// Devuelve undefined porque se ha definido map como un mapa (Map)
console.log('map.a', map.a);
console.log("map.get('a')", map.get('a'))
console.log("map.get('b')", map.get('b'))

console.log('map.keys()', map.keys())

map.forEach((value, key, object) => {
    console.log('value', value);
    console.log('key', key);
    console.log('object', object);
});

map.forEach((value, key) => {
    console.log('value', value);
    console.log('key', key);
});