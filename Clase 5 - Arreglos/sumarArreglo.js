let readlineSync = require("readline-sync");

let primerArreglo = new Array(6);
let segundoArreglo = new Array(6);
let sumaArreglos = new Array(6);

for(let indice=0; indice<6;indice++){
    primerArreglo[indice] = readlineSync.questionInt("Ingrese un valor para el primer arreglo");
    segundoArreglo[indice] = readlineSync.questionInt("Ingrese un valor para el segundo arreglo");
    sumaArreglos[indice] = primerArreglo[indice] + segundoArreglo[indice];
}

for(let indice=0; indice<6;indice++){
    console.log(`La suma de primer arreglo + segundo arreglo en posicion ${indice} es ${sumaArreglos[indice]}`); 
}