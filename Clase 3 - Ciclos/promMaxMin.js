let readlineSync = require("readline-sync");

let numeroIngresado = readlineSync.questionInt("Ingrese un numero:");
let numeroMayor = 0;
let numeroMenor = numeroIngresado;
let promedio=0;
let suma= 0;
let contador=0;

while (numeroIngresado != 0){

    if (numeroIngresado < numeroMenor){
        numeroMenor = numeroIngresado;    
    } else{
     if(numeroIngresado > numeroMayor){
        numeroMayor = numeroIngresado;
    }
 }
    suma = suma + numeroIngresado;
    contador ++ 
    numeroIngresado = readlineSync.questionInt("Ingrese un numero:");
    
 };

console.log("El numero maximo es: ", numeroMayor, "el minimo es: ", numeroMenor, " y el promedio de ingresados es ", (suma/contador));
