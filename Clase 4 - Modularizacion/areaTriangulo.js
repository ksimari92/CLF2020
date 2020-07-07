let readlineSync = require("readline-sync");
let i;
let base = readlineSync.questionInt("Ingrese base: ");
let altura = readlineSync.questionInt("Ingrese altura: ");

let calcularAreaTriangulo = (base, altura) => {
    let resultado = (base * altura)/2; 
    return resultado;
}

for(i=1; i<=8; i++){
    base = base + 1;
    altura= altura + 2;
    console.log(`para un triangulo de base ${base} y de altura ${altura}:`);
console.log("Su area es ; ", calcularAreaTriangulo(base,altura));
}
