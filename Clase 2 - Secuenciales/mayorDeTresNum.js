let readlineSync = require("readline-sync");

let valor1= readlineSync.questionInt("Ingrese numero 1: ");
let valor2= readlineSync.questionInt("Ingrese numero 2: ");
let valor3= readlineSync.questionInt("Ingrese numero 3: ");

if (valor1>(valor2&&valor3)){
    console.log(`El numero mayor es ${valor1}`);
} else {
    if (valor2>(valor1&&valor3)){
        console.log(`El numero mayor es ${valor2}`);
    }else{
        if (valor3>(valor1&&valor2)){
            console.log(`El numero mayor es ${valor3}`);
        }   
    }
}

    
