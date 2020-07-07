let readlineSync = require("readline-sync");

let sueldo = readlineSync.questionInt("Ingrese su sueldo actual: ");
let aumento20 = 0.20;
let aumento15= 0.15;
let aumento5= 0.05;

if (sueldo <= 15000){
    console.log("Usted tiene un aumento de: " , (sueldo*aumento20));
}
if ((sueldo > 15000) && (sueldo<=20000)){
    console.log("Usted tiene un aumento de: ", (sueldo*aumento15));
}
if ((sueldo > 20000) && (sueldo<= 25000)){
    console.log("Usted tiene un aumento de: ", (sueldo*aumento5) );
}
if (sueldo > 25000) {
    console.log("Usted no tiene aumento");
}