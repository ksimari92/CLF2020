let readlineSync = require("readline-sync");

let precioUnitario= readlineSync.questionFloat("Ingrese el precio del producto: ");
let cantidad = readlineSync.questionInt("Ingrese cantidad de productos: ");
let mes = readlineSync.question("En que mes hizo la compra?");
let compra = precioUnitario * cantidad;
let porcentajeDescuento= 0.15;
let descuento= compra * porcentajeDescuento;
let compraConDescuento= compra - descuento;

if (mes == 10){
    console.log("Su compra tiene 15% de descuento. El total de su compra es: ", compraConDescuento );
} else {
    console.log("Su compra no tiene descuento. El total es: ", compra);
}