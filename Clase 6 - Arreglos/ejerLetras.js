let readlineSync = require("readline-sync");


let cadena = readlineSync.question("Ingrese el texto: ");
cadena = cadena.toLowerCase();
let arreglo = cadena.split("");
let vocalesCadena= new Array();
let consonantesCadena = new Array();

let devolverArreglo = () => {
    for (let i =0; i<arreglo.length ;i++) {                 
      if (arreglo[i] == "a" || arreglo[i] == "e" ||arreglo[i] == "i"||arreglo[i] == "o" ||arreglo[i] == "u") {
          vocalesCadena.push(arreglo[i]);
    } else {           
        consonantesCadena.push(arreglo[i]);
    }
  }
}

devolverArreglo();

console.log(vocalesCadena);
console.log(consonantesCadena);

