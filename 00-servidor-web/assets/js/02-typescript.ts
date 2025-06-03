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

// OPERADORES
// 03-operadores.js
const arreglo = [{id: 1, nombre: 'Adrian', nota: 5}, {id: 2, nombre: 'Vicente', nota: 8}, {
    id: 3,
    nombre: 'Carolina',
    nota: 14
}, {id: 4, nombre: 'Wendy', nota: 16}, {id: 5, nombre: 'Andrea', nota: 19}, {id: 6, nombre: 'Pamela', nota: 19}, {
    id: 7,
    nombre: 'Cristian',
    nota: 20
}, {id: 8, nombre: 'Daniel', nota: 19}, {id: 9, nombre: 'Lilly', nota: 14}, {id: 10, nombre: 'Ramiro', nota: 12}];

// Funcion COMO PARAMETRO
// FIND
// enviamos una expresion -> TRUTY FALSY
// Devuelve el primero que cumpla esa condicion
const respuestaFind = arreglo
    .find(
        function (valorActual, indiceActual, arregloCompleto) {
            console.log('valorActual', valorActual);
            console.log('indiceActual', indiceActual);
            console.log('arregloCompleto', arregloCompleto);
            return valorActual.nota < 5; // Expresion (< =)
        }
    );
console.log('respuestaFind', respuestaFind); // Adrian

// FINDINDEX
// enviamos una expresion -> truty falsy
// devolver el indice del primer elemento que cumpla esa condicion

const respuestaFindIndex = arreglo
    .findIndex(
        function (valorActual) {
            return valorActual.nota < 5; // Expresion (< =)
        }
    );
console.log('respuestaFindIndex', respuestaFindIndex); // Si encuentra indice, sino-1

// FOREACH
// Iterar el arrglo
const respuestaForEach = arreglo
    .forEach(
        function (valorActual) {
            console.log(valorActual);
        }
    );
console.log('respuestaForEach', respuestaForEach); // undefined

// MAP (Modificar o Iterar en un NUEVO arreglo)
// enviamos los datos del nuevo arreglo
// devuelve el nuevo arreglo
const respuestaMap = arreglo
    .map(
        function (valorActual) {
            const nuevaNota = {
                id: valorActual.id,
                nombre: valorActual.nombre,
                nota: valorActual.nota + 1,
                estaAprobado: (valorActual.nota + 1) > 14,
                registrado: true,
            }
            return nuevaNota;
        }
    );
console.log('respuestaMap', respuestaMap); // [....] nuevo arreglo
console.log('arreglo', arreglo); // [....]  arreglo


// FILTER (Filtra arreglo)
// enviamos expresion
// devuelve los elementos que cumplen esa condicion en un nuevo arreglo
const respuestaFilter = arreglo
    .filter(
        function (valorActual) {
            return valorActual.nota > 10;
        }
    );
console.log('respuestaFilter', respuestaFilter); // [....] nuevo arreglo
console.log('arreglo', arreglo); // [....]  arreglo

// SOME -> expresion
// devuelve boolean
// Hay alguna X que cumpla esta condicion?
// OR
const respuestaSome = arreglo
    .some(
        function (valorActual) {
            return valorActual.nota > 9;
        }
    );
console.log('respuestaSome', respuestaSome); // true


// EVERY -> expresion
// devuelve boolean
// Todos los X cumplen esta condicion?
// AND
const respuestaEvery = arreglo
    .every(
        function (valorActual) {
            return valorActual.nota <= 20;
        }
    );
console.log('respuestaEvery', respuestaEvery); // true

// REDUCE                       izq -> Der
// REDUCE RIGHT                 Der -> izq
// 1) [1,2,5,6,2,4,5,6,7,8,3,1,2]
// 2) 0 -> Variable (acumulador)
// 3) devolvemos la Operacion
// Ej: Variable inicial en 100
// 1_ 100 - 1 = 99
// 2_ 99 - 2 = 97
// 3_ 97 - 5 = 92
// ..
// EJ: Variable inicial en 0
// 1_ 0 + 1 = 1
// 2_ 1 + 2 = 3
// 3_ 3 + 5 = 8
// ..

// REDUCE
const respuestaReduce = arreglo
    .reduce(
        function (valorAcumulado, valorActual, indice, arreglo) {
            return valorActual.nota + valorAcumulado;
        },
        0 // acumulador
    );
console.log('respuestaReduce', respuestaReduce); // true
console.log(respuestaReduce / arreglo.length); // true

// CONCATENAR OPERADORES
arreglo.filter( (a) => a.nota < 14)
    .map( (a) => a.nota + 1)
    .some( (a) => a < 14);

// FUNCIONES
function soloNumeros(a, b, c) {
    return a - b + c;
}

// Funcion que retorna un numero
function soloNumerosTs(a: number, b: number, c: number): number {
    return a - b + c;
}

// Funciones que no retornan nada
function soloImprimir1(texto: string): void {
    console.log(texto);
}

function soloImprimir2(texto: string): undefined {
    console.log(texto);
}

// FUNCION NOMBRADA
function nombreFuncion() {}

// FUNCION ANONIMA
const funcionAnonima = function() {};
// Para llamar a la funcion:
funcionAnonima();
// Otra funcion anonima:
[].forEach(function() {});

// FAT ARROW FUNCTION
const funcionFatArrow = (a: number, b: number): number => {
    return a + b;
}
const funcionFatArrowSinParametros = () => {
    console.log("Sin parametros");
}
const funcionFASinReturn = (a, b) => a + b;
const fFAUnParametro = a => a * a;

// PARAMETROS INFINITOS
function sumarNumeros (...muchosNumeros: number[]): number {
    let total = 0;
    for (let numero of muchosNumeros) {
        total = total + numero;
    }
    return total;
}
sumarNumeros(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// DESTRUCTURACION
// Destructuracion de Objetos
const objeto1 = {
    nombre: "Gabrel"
};
const objeto2 = {
    nombre: "Mariela",
    apellido: "Morales"
};
// Se hace un merge de las dos variables (el orden importa):
const obj1Obj2Dest = {
    ...objeto1,
    ...objeto2
};
// Resultado: {"Mariela", "Morales"}

const overrideDest = {
    ...obj1Obj2Dest,
    nombre: "Normi"
};
// Se crea un nuevo objeto que toma los atributos del objeto previamente fusionado y sobre-escribe el atributo nombre a Normi

// Destructuracion de Arreglos
const arrayDest1 = [1, 2, 3];
const arrayDest2 = [4, 5, 6];

// Merge
const arrayDest1y2 = [...arrayDest1, ...arrayDest2];
// [1, 2, 3, 4, 5, 6]
const arrayDest2y1 = [...arrayDest2, ...arrayDest1];
// [4, 5, 6, 1, 2, 3]

// Clonacion
const obj = {a: 1};
const clonObj = {...obj};