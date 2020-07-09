let readlineSync = require("readline-sync");
let base = readlineSync.questionInt("Ingrese base: ");
let exponente = readlineSync.questionInt("Ingrese exponente: ");



let calcularBase = (base, exponente) => {
    let contador;
    let resultado=1;
    
    if (exponente == 0){
        return 1
    }else{
        for (contador=0;contador<exponente;contador++){
            resultado = resultado * base;
        }
        return resultado;
    }
}                               
    
if(exponente < 0){
    console.log("Ingrese un exponente mayor o igual a 0");
}else{
   console.log(calcularBase(base,exponente));
}
