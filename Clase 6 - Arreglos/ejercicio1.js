let readlineSync = require("readline-sync");

let cadena = readlineSync.question("Ingrese el texto: ");
cadena = cadena.toLowerCase();
let arreglo = cadena.split("");


console.log(arreglo,);

let calcularLetras = (arreglo,letra) => {
   let cantidad=0;
    for(let i=0; i<arreglo.length; i++){
        if (letra == arreglo[i]){
            cantidad++
        }
    }
    return cantidad;
}

console.log("La letra A esta en la cadena",calcularLetras(arreglo, "a"), "veces, y la probabilidad de aparicion es", calcularLetras(arreglo, "a")/arreglo.length);
console.log("La letra B esta en la cadena",calcularLetras(arreglo, "b"), "veces, y la probabilidad de aparicion es", calcularLetras(arreglo, "b")/arreglo.length);
console.log("La letra C esta en la cadena",calcularLetras(arreglo, "c"), "veces, y la probabilidad de aparicion es", calcularLetras(arreglo, "c")/arreglo.length);
console.log("La letra D esta en la cadena",calcularLetras(arreglo, "d"), "veces, y la probabilidad de aparicion es", calcularLetras(arreglo, "d")/arreglo.length);
console.log("La letra E esta en la cadena",calcularLetras(arreglo, "e"), "veces, y la probabilidad de aparicion es", calcularLetras(arreglo, "e")/arreglo.length);
console.log("La letra F esta en la cadena",calcularLetras(arreglo, "f"), "veces, y la probabilidad de aparicion es", calcularLetras(arreglo, "f")/arreglo.length);
console.log("La letra G esta en la cadena",calcularLetras(arreglo, "g"), "veces, y la probabilidad de aparicion es", calcularLetras(arreglo, "g")/arreglo.length);
console.log("La letra H esta en la cadena",calcularLetras(arreglo, "h"), "veces, y la probabilidad de aparicion es", calcularLetras(arreglo, "h")/arreglo.length);
console.log("La letra I esta en la cadena",calcularLetras(arreglo, "i"), "veces, y la probabilidad de aparicion es", calcularLetras(arreglo, "i")/arreglo.length);
console.log("La letra J esta en la cadena",calcularLetras(arreglo, "j"), "veces, y la probabilidad de aparicion es", calcularLetras(arreglo, "j")/arreglo.length);
console.log("La letra K esta en la cadena",calcularLetras(arreglo, "k"), "veces, y la probabilidad de aparicion es", calcularLetras(arreglo, "k")/arreglo.length);
console.log("La letra L esta en la cadena",calcularLetras(arreglo, "l"), "veces, y la probabilidad de aparicion es", calcularLetras(arreglo, "l")/arreglo.length);
console.log("La letra M esta en la cadena",calcularLetras(arreglo, "m"), "veces, y la probabilidad de aparicion es", calcularLetras(arreglo, "m")/arreglo.length);
console.log("La letra N esta en la cadena",calcularLetras(arreglo, "n"), "veces, y la probabilidad de aparicion es", calcularLetras(arreglo, "n")/arreglo.length);
console.log("La letra O esta en la cadena",calcularLetras(arreglo, "o"), "veces, y la probabilidad de aparicion es", calcularLetras(arreglo, "o")/arreglo.length);
console.log("La letra P esta en la cadena",calcularLetras(arreglo, "p"), "veces, y la probabilidad de aparicion es", calcularLetras(arreglo, "p")/arreglo.length);
console.log("La letra Q esta en la cadena",calcularLetras(arreglo, "q"), "veces, y la probabilidad de aparicion es", calcularLetras(arreglo, "q")/arreglo.length);
console.log("La letra R esta en la cadena",calcularLetras(arreglo, "r"), "veces, y la probabilidad de aparicion es", calcularLetras(arreglo, "r")/arreglo.length);
console.log("La letra S esta en la cadena",calcularLetras(arreglo, "s"), "veces, y la probabilidad de aparicion es", calcularLetras(arreglo, "s")/arreglo.length);
console.log("La letra T esta en la cadena",calcularLetras(arreglo, "t"), "veces, y la probabilidad de aparicion es", calcularLetras(arreglo, "t")/arreglo.length);
console.log("La letra U esta en la cadena",calcularLetras(arreglo, "u"), "veces, y la probabilidad de aparicion es", calcularLetras(arreglo, "u")/arreglo.length);
console.log("La letra V esta en la cadena",calcularLetras(arreglo, "v"), "veces, y la probabilidad de aparicion es", calcularLetras(arreglo, "v")/arreglo.length);
console.log("La letra W esta en la cadena",calcularLetras(arreglo, "w"), "veces, y la probabilidad de aparicion es", calcularLetras(arreglo, "w")/arreglo.length);
console.log("La letra X esta en la cadena",calcularLetras(arreglo, "x"), "veces, y la probabilidad de aparicion es", calcularLetras(arreglo, "x")/arreglo.length);
console.log("La letra Y esta en la cadena",calcularLetras(arreglo, "y"), "veces, y la probabilidad de aparicion es", calcularLetras(arreglo, "y")/arreglo.length);
console.log("La letra Z esta en la cadena",calcularLetras(arreglo, "z"), "veces, y la probabilidad de aparicion es", calcularLetras(arreglo, "z")/arreglo.length);
