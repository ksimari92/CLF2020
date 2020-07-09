let readlineSync = require("readline-sync");
//No estaba muy claro el enunciado. Lo adapte para que el usuario ingrese los numeros
let cantidadDeNumeros = readlineSync.questionInt("De que longitud quiere que sea el arreglo? ");

let primerArreglo = new Array (cantidadDeNumeros);
let segundoArreglo = new Array (cantidadDeNumeros);
let tercerArreglo = new Array (cantidadDeNumeros);

let cargarArreglo = () => {
    for(let indice=0; indice<cantidadDeNumeros ;indice++){
        primerArreglo[indice] = readlineSync.questionInt("Ingrese un valor para el primer arreglo");
        segundoArreglo[indice] = readlineSync.questionInt("Ingrese un valor para el segundo arreglo")
    }
}

let multiplicarArreglo = (arreglo1, arreglo2,arreglo3) => {
    for(let i = 0; i<cantidadDeNumeros; i++){
        arreglo3[i] =arreglo1[i] * arreglo2[i];
    }  
    return arreglo3;
}


cargarArreglo();

console.log(multiplicarArreglo(primerArreglo, segundoArreglo, tercerArreglo));


