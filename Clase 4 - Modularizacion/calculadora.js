let readlineSync = require("readline-sync");

let numero1 = readlineSync.questionInt("Ingrese numero 1: ");
let numero2 = readlineSync.questionInt("Ingrese numero 2:  ");
let operacion = readlineSync.questionInt("Ingrese numero 1 para sumar o numero 2 para restar: ");

let dibujarLinea = (cantidadLinea) => {
    let i, linea;
    linea = "-"
    for (i=0; i<=cantidadLinea;i++){
        linea = linea + "-";
    }

    console.log(linea);
}


if(operacion == 1){
    dibujarLinea(40);
   console.log("El resultado es: ", numero1 + numero2);
   dibujarLinea(40);
}else{
    dibujarLinea(40);
    console.log("El resultado es: ", numero1 - numero2);
    dibujarLinea(40);
}