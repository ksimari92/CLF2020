let readlineSync = require("readline-sync");

let num = readlineSync.questionInt("Ingrese un numero");
let numMin = num;
 
while (num != "" && num !=0 ){
    
    if (num < numMin){
        numMin = num;
    }
    num = readlineSync.questionInt("Ingrese un numero");
}

console.log("El numero minimo es: ", numMin);

