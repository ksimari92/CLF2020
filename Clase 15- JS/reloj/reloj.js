

let activarBomba = () => {
    let mensaje = document.getElementById("cuentaRegresiva");
    let contador = 5;
    let bomba = setInterval(function(){
        if (contador === 0){
            mensaje.innerHTML = "BOOOM";
            clearInterval(bomba);
        } else { 
            contador--
            mensaje.innerHTML = contador;
        }
    }, 1000);
}


let boton = document.getElementById("myButton");
boton.addEventListener('click', activarBomba);