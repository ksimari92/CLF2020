let readlineSync = require("readline-sync");

let timbre = readlineSync.questionInt("Ingrese el numero de depto");

switch (timbre) {
    case 1:
        console.log("Aqui vive Juan");
    break;
    case 2: 
        console.log("Aqui vive Lisa");
    break;
    case 3: 
        console.log("Aqui vive Pedro");
    default:
        console.log("No existe ese departamento");
}