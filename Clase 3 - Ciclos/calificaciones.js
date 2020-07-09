let readlineSync = require("readline-sync");

let nombreAlumno = readlineSync.question("Ingrese nombre del alumno: ");
let notaPractica;
let notaTeorica;
let notaProblema

while(nombreAlumno != ''){
    notaPractica = readlineSync.questionInt("Ingrese nota practica: ");
    notaTeorica = readlineSync.questionInt("Ingrese nota teorica: ");
    notaProblema = readlineSync.questionInt("Ingrese nota problema: ");

   if (notaPractica<0 || notaProblema<0 || notaTeorica<0 || notaPractica>10 || notaProblema>10 || notaTeorica>10){
    console.log("Esta nota no es valida");
   }else{
    console.log(`La nota del ${nombreAlumno} es: `, (notaPractica*0.1+notaProblema*0.5+notaTeorica*0.4));
   }
   nombreAlumno = readlineSync.question("Ingrese nombre del alumno: ");
 }



