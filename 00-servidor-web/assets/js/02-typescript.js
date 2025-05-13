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
