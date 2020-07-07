let readlineSync = require("readline-sync");

let salaAzul = new Array(40);
let salaVerde = new Array(35);
let salaAmarilla = new Array(30); //Los declare solo por la consigna, pero no me pude ingeniar para usar los array 

let cantidadDeInfantes = readlineSync.questionInt("Ingrese cantidad de infantes");

let asignarSala = () =>{
     if(cantidadDeInfantes < 30){
         console.log("Se le ha asignado la sala amarilla");
     } else if(cantidadDeInfantes > 30 && cantidadDeInfantes <= 35){
         console.log("Se le ha asignado la sala Verde");
     } else {
         console.log("Se le ha asignado la sala Azul");
     }
}

asignarSala();