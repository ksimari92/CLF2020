let boton = document.querySelectorAll('button');

let cambiar = () => {
    let miP= document.querySelector('p');
    miP.classList.toggle('borrar');
}


for (let i=0;i<boton.length; i++){
    boton[i].addEventListener('click',cambiar);
}


for (let i =0; i<boton.length; i++){
    boton[i].addEventListener('click', function(e){
        let next = this.nextElementSibling;
        next.classList.toggle('ver');
    })
}

///el primer boton no desaparece!!!!


