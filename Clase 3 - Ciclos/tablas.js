let readlineSync = require("readline-sync");

let contador=1;
let ingreseTabla = readlineSync.questionInt("Ingrese la tabla que desea ver: ");
let numero = readlineSync.questionInt("Ingrese hasta que numero quiere ver: ");

ingreseTabla;
numero;
for (contador; contador<=numero; contador++){
    let multiplicacion = ingreseTabla * contador; 
    console.log( ingreseTabla, "x", contador, "=", multiplicacion );
    
}