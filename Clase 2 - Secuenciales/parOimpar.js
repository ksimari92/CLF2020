let readlineSync = require("readline-sync");

let valorIngresado = readlineSync.questionInt("Ingrese un numero: ");

while (valorIngresado == 0){
    console.log("El numero es 0");
    valorIngresado =  readlineSync.questionInt("Ingrese un numero distinto de 0: ");
}
  if ((valorIngresado%2) == 0){
    console.log("El numero es par");
  }else{
    console.log("El numero es impar");
  }
