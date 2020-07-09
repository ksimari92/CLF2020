let readlineSync = require("readline-sync");

let longitudArreglo = readlineSync.questionInt("Ingrese la longitud del arreglo: ");
let nuevoArreglo = new Array(longitudArreglo);
let indice=0;

for (indice;indice<longitudArreglo; indice++){
     nuevoArreglo[indice]= readlineSync.questionInt("Ingrese un valor: ");
}



for(indice=longitudArreglo -1; indice>=0; indice--){
    console.log(nuevoArreglo[indice]);
}