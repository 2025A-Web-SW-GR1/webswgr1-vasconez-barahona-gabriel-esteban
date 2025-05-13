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