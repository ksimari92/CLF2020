let ventaCamila = [32558, 36165, 34240, 39273, 34360, 21347, 20869, 21493, 23062, 31908, 30369, 30652];
let ventaFranco =  [27520, 31480, 24053, 34823, 32942, 38477, 23756, 21413, 26699, 22045, 25625, 26855];
let ventaSofia =  [20584, 33473, 34300, 24598, 33955, 24040, 39173, 25542, 25105, 26759, 29790, 36218];
let ventaMatias =  [27243, 38774, 21246, 30691, 24542, 39771, 31807, 31641, 20850, 29837, 37182, 28006];
let ventaAgustina =  [23334, 32687, 25217, 26844, 27033, 35244, 25702, 25781, 35525, 34874, 38842, 20562];
let numMax = 0;
let numMin = 100000;
let promSemanal1 = 0;
let promSemanal2 = 0;
let promSemanal3 = 0;

let calcularMaximo = (arreglo) => {

    for (let i =0; i<arreglo.length; i++){
         if (arreglo[i] > numMax){
             numMax = arreglo[i];
         }
    }
    return numMax;
}

let calcularMinimo = (arreglo) => {

    for (let i =0; i<arreglo.length; i++){
         if (numMin > arreglo[i]){
             numMin = arreglo[i];
         }
    }
    return numMin;
}

let calcularPromedioSemanal = (arreglo) => {
    let suma =0;
    let promedioSemanal;
    for(let i =0; i<arreglo.length; i++){
        suma = suma + arreglo[i];
    }
    promedioSemanal = suma/12;
return promedioSemanal
}

let calcularPromedioMensual = (arreglo) => {
    let suma1=0, suma2=0, suma3=0;
    let mes1=0, mes2=0, mes3=0;
    let promedioMensual=0;

   for(let i=0;i<4;i++){
       suma1 = suma1 + arreglo[i];
   }
   mes1= suma1/4;

   for(let i=4;i<8;i++){
    suma2 = suma2 + arreglo[i];
    }
   mes2= suma2/4;

   for(let i=8;i<arreglo.length;i++){
    suma3 = suma3 + arreglo[i];
    }
   mes3= suma3/4;
    
   promedioMensual = (mes1+mes2+mes3)/3;
   return promedioMensual;
}




console.log("La venta maxima de Sofia es, ", calcularMaximo(ventaSofia) + ". Su venta minima es de,", calcularMinimo(ventaSofia) +". Su promedio semanal de ventas es  ", calcularPromedioSemanal(ventaSofia) + ". Su promedio mensual de ventas es ", calcularPromedioMensual(ventaSofia));
console.log("La venta maxima de Agustina es, ", calcularMaximo(ventaAgustina) + ". Su venta minima es de,", calcularMinimo(ventaAgustina) +". Su promedio semanal de ventas es  ", calcularPromedioSemanal(ventaAgustina) + ". Su promedio mensual de ventas es ", calcularPromedioMensual(ventaAgustina))
console.log("La venta maxima de Franco es, ", calcularMaximo(ventaFranco) + ". Su venta minima es de,", calcularMinimo(ventaFranco) +". Su promedio semanal de ventas es  ", calcularPromedioSemanal(ventaFranco) + ". Su promedio mensual de ventas es ", calcularPromedioMensual(ventaFranco));
console.log("La venta maxima de Camila es, ", calcularMaximo(ventaCamila) + ". Su venta minima es de,", calcularMinimo(ventaCamila) +". Su promedio semanal de ventas es  ", calcularPromedioSemanal(ventaCamila) + ". Su promedio mensual de ventas es ", calcularPromedioMensual(ventaCamila));
console.log("La venta maxima de Matias es, ", calcularMaximo(ventaMatias) + ". Su venta minima es de,", calcularMinimo(ventaMatias) +". Su promedio semanal de ventas es  ", calcularPromedioSemanal(ventaMatias) + ". Su promedio mensual de ventas es ", calcularPromedioMensual(ventaMatias));



