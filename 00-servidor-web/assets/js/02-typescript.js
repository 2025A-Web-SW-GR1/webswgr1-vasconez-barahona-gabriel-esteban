console.log("Hola, typescript");
var nombres = "Gabriel";
// nombres = 1; // Ya no se puede hacer esto
var nombreTs = "";
console.log(typeof nombres, "nombres");
var numeros = 1;
var numerosTs = 1;
console.log(typeof numeros, "numeros");
numeros = 1.1;
console.log(typeof numeros, "numeros decimales");
var booleanos = true;
var booleanoTs = true;
booleanos = false;
console.log(typeof booleanos, "booleanos");
var nulos = null;
var nulosTs = null;
console.log(typeof nulos, "nulos");
var arreglos = [];
var arreglosTs = [];
var arreglosTs2 = [];
console.log(typeof arreglos, "arreglos");
var objetos = {};
var objetosTs = {};
console.log(typeof objetos, "objetos");
var undefineds = undefined;
var undefinedTs = undefined;
console.log(typeof undefineds, "undefined");
// Truty y Falsy
var func = function (trutyFalsy) {
    if (trutyFalsy) {
        console.log("Truty");
    }
    else {
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
var persona = {
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
};
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
var edadGabriel = 21;
var edadDavid = edadGabriel;
console.log(edadDavid);
edadGabriel = edadGabriel + 1;
console.log(edadDavid); // No cambia
// Variables por referencia:
// En JavaScript no existen los punteros. 
// Object: {}, []
var notas = {
    total: 10
};
var notas2 = notas; // notas2 "apunta" a notas
notas2.total = notas2.total + 1;
console.log(notas.total); // 11
// Clonacion de objetos:
var notasClonadas = Object.assign({}, notas);
notasClonadas.total++;
console.log(notas.total); // 11
// Clonacion de arreglos:
var arregloACopiar = [1, 2, 3];
var arregloClonado = Object.assign([], arregloACopiar);
