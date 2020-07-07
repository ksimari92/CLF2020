let readlineSync = require("readline-sync");

let longitudArreglo = readlineSync.questionInt("Ingrese longitud del arreglo: ");

let arregloNuevo= new Array(longitudArreglo);
let sumaCero=0;
let sumaPositivo=0;
let sumaNegativo=0;

for (let indice=0; indice<longitudArreglo; indice++){
    arregloNuevo[indice]= readlineSync.questionInt("Ingrese valor: ");

    if(arregloNuevo[indice] == 0){
        sumaCero = sumaCero + 1;
    }else{
        if(arregloNuevo[indice] < 0){
            sumaNegativo = sumaNegativo + 1;
        }else{
            sumaPositivo = sumaPositivo +1;
        }
    }
}

console.log("La cantidad de 0 es",  sumaCero);
console.log("La cantidad de positivos es",  sumaPositivo);
console.log("La cantidad de negativos es",  sumaNegativo);