function calcularFibonacci(numero) {
    let resultado;
    if (numero == 0) {
        resultado = numero;
    }else if (numero == 1) {
        resultado= numero;
    }else {
        resultado = calcularFibonacci(numero-1) + calcularFibonacci(numero-2);
    }
  return resultado;
}
 let rl = require("readline-sync");
 let numero = rl.questionInt("Ingrese numero: ");

console.log("El fibonacci de", numero,  "es " ,calcularFibonacci(numero));