let readlineSync = require("readline-sync");


let suma = 0;
let num1 = readlineSync.questionInt("Ingrese primer numero: ");
let num2 = readlineSync.questionInt("Ingrese segundo nummero: ");
let contador;


num1;
num2;

if (num1>num2){ //cambio de lugar el numero mayor y menor
    let aux=num1;
    num1=num2;
    num2=aux;
}
for (contador=num1; contador<=num2; contador++){
    suma = suma + contador;
}

console.log("la suma es: ", suma);