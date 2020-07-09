let inputCompra = document.querySelector(".agregar");
let misCompras = document.querySelector(".misCompras");
let compras = [];

let actualizarLista = () => {
    for (let i=0; i<compras.length; i++){
        let miLi = document.createElement('li');
        miLi.innerHTML = compras[i];
        misCompras.appendChild(miLi)
    }
}

let agregarCompra = () => {
   let nuevaCompra = Number(inputCompra.value);
   compras.push(nuevaCompra); 
   console.log(compras);
   inputCompra.value = '';
}


let sumarCompra = () => {
    let suma=0;
    for (let i =0; i< compras.length; i++){
        suma = suma + compras[i];
    }
    let totalCompra = document.querySelector(".totalCompra");
    totalCompra.innerHTML = suma;
}

let borrarCompra = () =>{
    compras.pop();
    console.log(compras);
}


let botonAgregar = document.querySelector(".comprar");
botonAgregar.addEventListener('click', agregarCompra);

let botonSumar = document.querySelector(".sumar");
botonSumar.addEventListener("click", sumarCompra);

let botonBorrar = document.querySelector(".borrar");
botonBorrar.addEventListener("click", borrarCompra);