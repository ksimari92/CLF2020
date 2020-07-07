salaDeCine = [true, true, false, false, false, true, true, false, false, true, false, false, true, true];
let butacasDesocupadas=0;

let calcularButacasDesocupada = () =>{
    for(let i=0; i<salaDeCine.length; i++){
        if(salaDeCine[i] == false){
            butacasDesocupadas = butacasDesocupadas + 1;
        }
    }
    return butacasDesocupadas;
}

butacasDesocupadas = calcularButacasDesocupada();

console.log("La cantidad de butacas desocupadas es", butacasDesocupadas);
