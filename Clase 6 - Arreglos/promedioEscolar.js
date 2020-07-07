// tota alumnos
// arreglo alumnos
// nota 1 
//  nota2 
//  nota 3
//  promedio = 0;

let readlineSync = require("readline-sync");

let cantidadDeAlumnos = readlineSync.questionInt("Ingrese cantidad de alumnos: ");
let arregloAlumnos = new Array(cantidadDeAlumnos);
let notas1 = [];
let notas2 = [];
let notas3 = [];
let promedio;

let cargarArreglo = () => {
    for (let i=0; i<arregloAlumnos.length; i++){
        arregloAlumnos[i] = readlineSync.question("Ingrese nombre del alumno ");
        notas1[i] = readlineSync.questionInt("Ingrese primer nota ");
        notas2[i] = readlineSync.questionInt("Ingrese segunda nota ");
        notas3[i] = readlineSync.questionInt("Ingrese tercer nota ");
    } 
}

let buscarAlumno = (arreglo) => {
    let nombreIngresado = readlineSync.question("Ingrese nombre para calcular promedio ");
   
    for (let i=0; i<arregloAlumnos.length; i++){
        if(nombreIngresado == arregloAlumnos[i] ){
         promedio = (notas1[i] + notas2[i] + notas3[i])/3
        }
    }
    return promedio;
}

cargarArreglo();
promedio = buscarAlumno(arregloAlumnos);
console.log(promedio);

