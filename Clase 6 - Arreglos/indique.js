let rl = require('readline-sync');

let elem, arr, nro, ocu=0;

elem = rl.questionInt('Ingrese tamaño: ');
arr = new Array(elem);

function cargar(v,l) {
    for (let i=0; i<l; i++){
        v[i]=Math.floor(Math.random()*100);
    }
}

let mostrar = (v,l) => {
    let c="";
    for (let i=0; i<l; i++){
        c+=v[i]+" ";
    }
    console.log(c);
}

let metodo = (v,l,n) => {
    let oc=0;
    for (let i=0; i<l; i++){
        if (n == v[i]){
              oc++
        }
    }
    return oc;
}


cargar(arr,elem);
nro = rl.questionInt('Ingrese número: ');
metodo(arr,elem,nro);
ocu= metodo(arr,elem,nro);
console.log("El número "+nro+" esta dentro del arreglo "+ocu+ "veces");
mostrar(arr,elem);
