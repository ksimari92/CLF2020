let readlineSync = require("readline-sync");

let num = readlineSync.questionInt("Ingrese un numero");
let numMax= num;
 
while (num != "" && num !=0 ){
    
    if (num > numMax){
        numMax = num;
    }
    num = readlineSync.questionInt("Ingrese un numero");
}

console.log("El numero maximo es: ", numMax);

