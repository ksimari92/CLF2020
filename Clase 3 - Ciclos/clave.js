let readlineSync = require("readline-sync");
let palabraIngresada;
let contador = 1;


while (palabraIngresada != "eureka" && contador <= 3){
    palabraIngresada = readlineSync.question("Ingrese palabra clave: ");
    if (palabraIngresada == "eureka"){
        console.log("La clave es correcta");
    } else {
        console.log("la clave es incorrecta");
    }
        contador = contador + 1;
    };

if (palabraIngresada != "eureka"){
    console.log("Se acabaron los intentos");
};

