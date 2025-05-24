console.log("Hola, typescript");

let nombres = "Gabriel";
// nombres = 1; // Ya no se puede hacer esto

let nombreTs: String = "";

console.log(typeof nombres, "nombres");

let numeros = 1;
let numerosTs: number = 1;
console.log(typeof numeros, "numeros");

numeros = 1.1;
console.log(typeof numeros, "numeros decimales");

let booleanos = true;
let booleanoTs: boolean = true;

booleanos = false;
console.log(typeof booleanos, "booleanos");

let nulos = null;
let nulosTs: null = null;
console.log(typeof nulos, "nulos")

let arreglos = [];
let arreglosTs: number[] = [];
let arreglosTs2: Array<number> = [];
console.log(typeof arreglos, "arreglos");

let objetos = {};
let objetosTs: object = {};
console.log(typeof objetos, "objetos");

let undefineds = undefined;
let undefinedTs: undefined = undefined;
console.log(typeof undefineds, "undefined")

// Truty y Falsy
let func = function(trutyFalsy: any) {
    if (trutyFalsy) {
        console.log("Truty");
    } else {
        console.log("Falsy");
    }
};

console.log(func(""));
console.log(func("a"));
console.log(func(-1));
console.log(func(0));
console.log(func(1));
console.log(func(null));
console.log(func({}));
console.log(func([]));

const persona:any = {
    "nombre": "Gabriel",
    'apellido': 'Vasconez',
    edad: 21,
    hijos: 0,
    casado: false,
    zapatos: undefined,
    ropa: {
        color: "negro",
        talla: 40
    },
    mascotas: ['Thomas', 'Hera']
}

console.log(persona);

console.log(persona.nombre);
console.log(persona['apellido']);
// Modificacion:
persona.nombre = "Esteban";
persona["nombre"] = "Gabriel";

// Reasignacion:
// persona = {}; -> ERROR

// Creacion de nuevos atributos (Solo cuando el objeto esta definido como any):
persona.carrera = "Software";
persona.facultad = "FIS";

// Eliminacion de propiedades:
persona.facultad = undefined;
delete persona.facultad;

// Variables por valor o por referencia
// Variables por valor:
// En general, son las primitivas: number, string, boolean
let edadGabriel = 21;
let edadDavid = edadGabriel;
console.log(edadDavid);
edadGabriel = edadGabriel + 1;
console.log(edadDavid); // No cambia

// Variables por referencia:
// En JavaScript no existen los punteros. 
// Object: {}, []
let notas = {
    total: 10
};

let notas2 = notas; // notas2 "apunta" a notas
notas2.total = notas2.total + 1;
console.log(notas.total); // 11
// Clonacion de objetos:
let notasClonadas = Object.assign({}, notas);
notasClonadas.total++;
console.log(notas.total) // 11
// Clonacion de arreglos:
let arregloACopiar = [1, 2, 3];
let arregloClonado = Object.assign([], arregloACopiar);

// Arreglos:
const arregloEjemplo = [1, 2, 3, 4, 5];
// for of: obtiene valores
for (let valorDelArreglo of arregloEjemplo) {
    console.log('Valor:', valorDelArreglo);
}
// for in: obtiene indices
for (let indiceDelArreglo in arregloEjemplo) {
    console.log('Indice:', indiceDelArreglo);
    console.log('Valor:', arregloEjemplo[indiceDelArreglo]);
}
// Añadir al final un elemento:
arregloEjemplo.push(6); // [1, 2, 3, 4, 5, 6]
// Eliminar el ultimo elemento:
arregloEjemplo.pop(); // [1, 2, 3, 4, 5]
// Añadir al principio:
arregloEjemplo.unshift(0); // [0, 1, 2, 3, 4, 5]
// Eliminar y agregar elementos:
// splice: indiceInicio, nroDeElementosAEliminar, elementosAAñadir
arregloEjemplo.splice(0, 3, 3, 4, 5);
// Resultado: [3, 4, 5, 3, 4, 5]