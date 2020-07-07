let readlineSync = require("readline-sync");

let longitudArreglo =  readlineSync.questionInt("Ingrese longitud del arreglo");
let primerArreglo = new Array(longitudArreglo);
let segundoArreglo = new Array(longitudArreglo);

let cargarArreglo = () => {
    for(let indice=0; indice<longitudArreglo ;indice++){
        primerArreglo[indice] = readlineSync.questionInt("Ingrese un valor para el primer arreglo");
        segundoArreglo[indice] = readlineSync.questionInt("Ingrese un valor para el segundo arreglo")
    }
}

let calcularProductoEscalar = (arreglo1, arreglo2) => {
  let productoEscalar = 0;
  for(let indice=0; indice<longitudArreglo ;indice++){
      productoEscalar = productoEscalar + (arreglo1[indice]*arreglo2[indice]);
  }
  return productoEscalar;
}

cargarArreglo(primerArreglo, segundoArreglo);
console.log("El producto escalar entre ambos arreglos es: ", calcularProductoEscalar(primerArreglo, segundoArreglo));