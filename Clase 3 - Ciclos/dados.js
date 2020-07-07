let readlineSync = require("readline-sync");

let dados = readlineSync.questionInt("Ingrese cantidad de dados: ");
let contador;
let probabilidades= 1;
let probabilidadPorCara= 1/6;

for (contador=1; contador <= dados; contador++){
     probabilidades = probabilidades * probabilidadPorCara;
}

console.log("La probabilidad de que toque un 6 es: ", probabilidades);