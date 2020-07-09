let inputTarea = document.querySelector(".tareas");
let lista = document.querySelector(".lista");
let arregloTareas = [];


let agregarTarea = () => {
    let nuevaTarea = inputTarea.value;
    arregloTareas.push(nuevaTarea);
    let miLi = document.createElement("li");
    miLi.innerHTML = nuevaTarea;
    lista.appendChild(miLi);
    console.log(lista);
    inputTarea.value = '';
}

let limpiarLista = () => {
    let miLista = document.querySelector("ul");
     let padre = miLista.parentNode;
     padre.removeChild(miLista);
}

let btnAgregar = document.querySelector(".agregar-tarea");
btnAgregar.addEventListener("click", agregarTarea);

let btnLimpiar = document.querySelector(".limpiar");
btnLimpiar.addEventListener("click", limpiarLista);