let readlineSync = require("readline-sync");

let edad = readlineSync.questionInt("Ingrese su edad: ");
let altura = readlineSync.questionInt("Ingrese su altura: ");

if ((edad>18) && (altura>160)){
    console.log("Tiene permitido subir");
} else {
    if ((edad<18) && (altura>160)){
        console.log("Usted no tiene la edad correspondiente");
    } else {
        console.log("Usted no cumple con algun requisito para subir");
    }
}