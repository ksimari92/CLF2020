let readlineSync= require("readline-sync");

let longitudArreglo= readlineSync.questionInt("Ingrese la longitud del arreglo: ");

let arregloNumeros= new Array(longitudArreglo);
let resultado = 0;

for(indice=0; indice < longitudArreglo; indice++){
    arregloNumeros[indice]= readlineSync.questionInt("Ingrese un valor");
}

for (indice = 0; indice<longitudArreglo; indice++){
     resultado = resultado + arregloNumeros[indice];
}

console.log ("La suma de todos los numeros es", resultado);