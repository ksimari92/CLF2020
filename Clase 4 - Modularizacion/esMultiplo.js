let readlineSync= require("readline-sync");
let num1= readlineSync.questionInt("Ingrese numero 1: ");
let num2= readlineSync.questionInt("Ingrese numero 2: ");


let esMultiplo = (num1,num2) =>{
    let resultado = num2%num1;

    if (resultado == 0){
        console.log(true);
    }else{
        console.log(false);
    }

}


esMultiplo(num1,num2);