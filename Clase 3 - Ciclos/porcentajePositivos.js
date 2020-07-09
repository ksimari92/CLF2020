let readlineSync = require("readline-sync");

let numIngresado = readlineSync.questionInt("Ingrese un numero: ");
let numeroPositivo = 0;
let suma = 0;

while (numIngresado != 0){
     
    if (numIngresado > 0){
        numeroPositivo = numeroPositivo + 1;
    } 
    suma = suma + 1
    numIngresado = readlineSync.questionInt("Ingrese un numero: ");
}


console.log("El porcentaje de positivos es ", numeroPositivo/suma);