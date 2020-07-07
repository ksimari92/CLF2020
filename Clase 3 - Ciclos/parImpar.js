let readineSync = require("readline-sync");

let numIngresado = readineSync.questionInt("Ingrese un numero: ");

while(numIngresado <= 0){
    numIngresado = readineSync.questionInt("Ingrese un numero mayor a 0: ");
    }

if (numIngresado != 0 && numIngresado%2 == 0) {
     console.log("El numero es par");
}else{
      if(numIngresado%2 != 0){ 
          console.log("El num es impar");
      }
};
