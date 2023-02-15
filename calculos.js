// //Segundo: se define el cociente para la distribución de los cargos entre la minoría.
// let cocienteMinoriaAR
// let cocienteMinoriaCD

// if (porcentajeMinoria > 50) {
//     cocienteMinoriaAR = votosMinoria/miembrosMinoriaAR;
//     cocienteMinoriaCD = votosMinoria/miembrosMinoriaCD;
// } else {
//     cocienteMinoriaAR = (lista1+votosMinoria)/miembrosMinoriaAR;
//     cocienteMinoriaCD = (lista1+votosMinoria)/miembrosMinoriaCD;
// }

// console.log("El cociente para calcular la distribución de cargos de la minoria para la Asamblea es: " + cocienteMinoriaAR);

// console.log("El cociente para calcular la distribución de cargos de la minoría para la Comisión Directiva es: " + cocienteMinoriaCD);

// //Tercero: Se calculan los cargos para cada agrupación minoritaria a partir de la relación entre votos obtenidos y el cociente.

// //ASAMBLEA DE REPRESENTANTES

// let miembrosLista2AR = parseFloat(lista2/cocienteMinoriaAR).toFixed(3);
// alert("La segunda lista obtiene " + miembrosLista2AR + " asambleístas.");

// let miembrosLista3AR = parseFloat(lista3/cocienteMinoriaAR).toFixed(3);
// alert("La tercer lista obtiene " + miembrosLista3AR + " asambleístas.");

// let miembrosLista4AR = parseFloat(lista4/cocienteMinoriaAR).toFixed(3);
// alert("La cuarta lista obtiene " + miembrosLista4AR + " asambleístas.");

// //COMISIÓN DIRECTIVA

// let miembrosLista2CD = parseFloat(lista2/cocienteMinoriaCD).toFixed(3);
// alert("La segunda lista obtiene " + miembrosLista2AR + " miembros en Comisión Directiva.");

// let miembrosLista3CD = parseFloat(lista3/cocienteMinoriaCD).toFixed(3);
// alert("La tercer lista obtiene " + miembrosLista3AR + " miembros en Comisión Directiva.");

// let miembrosLista4CD = parseFloat(lista4/cocienteMinoriaCD).toFixed(3);
// alert("La cuarta lista obtiene " + miembrosLista4AR + " miembros en Comisión Directiva.");

// //Cuarto: Se debe chequear que la minoría en Asamblea de representantes no sea menor a 15, en caso que suceda la diferencias deben ser cedidas por la lista mayoritarias según el número de votos de la minorías.


// //DESDE AQUÍ VA UNA COPIA QUE SALE DEL OTRO REPOSITORIO

// //1 - Se asignan los votos obtenidos por cada una de las listas y los votos en blanco.
// let lista1 = parseInt(prompt("Cuantos votos recibió la lista ganadora?"));
// console.log("La lista 1 obtuvo " + lista1 + " votos.");

// let lista2 = parseInt(prompt("Cuantos votos recibió la segunda lista?"));
// console.log("La lista 2 obtuvo " + lista2 + " votos.");

// let lista3 = parseInt(prompt("Cuantos votos recibió la tercer lista?"));
// console.log("La lista 3 obtuvo " + lista3 + " votos.");

// let lista4 = parseInt(prompt("Cuantos votos recibió la cuarta lista?"));
// console.log("La lista 4 obtuvo " + lista4 + " votos.");

// let votosBlancos =parseInt(prompt("Cuantos votos fueron en blanco?"));
// console.log("Hubo " + votosBlancos + " votos en blanco.");

// //2 - Se suman los votos totales y el total de votos obtenido por la minoría.
// let totalVotos
// let votosMinoria

// function sumaVotos (){
//     totalVotos = lista1 + lista2 + lista3 + lista4 + votosBlancos;
//     console.log("Se contabiliza un total de " + totalVotos + " votos.");
    
//     votosMinoria = lista2+lista3+lista4;
//     console.log("Los votos totales de la minoría son: " + votosMinoria);
// }

// sumaVotos ();

// //3 - Se calcula el porcentaje que obtiene la mayoría y la minoría

// let porcentajeMayoria
// let porcentajeMinoria

// function porcentajes(){
//     porcentajeMayoria = parseFloat((lista1*100)/totalVotos).toFixed(3);
//     console.log("El porcentaje de la mayoría es: " + porcentajeMayoria + " %");

//     porcentajeMinoria = parseFloat((votosMinoria*100)/totalVotos).toFixed(3);
//     console.log("El porcentaje de la minoría es: " + porcentajeMinoria + " %");
// }

// porcentajes();

// alert("La mayoría obtuvo un " + porcentajeMayoria + " %.");
// alert("La minoría obtuvo un " + porcentajeMinoria + " %.");

// //4 - Se calculan los cargos en Asamblea de Representantes y Comisión Directiva que ocupa la mayoría.

// let miembrosMayoriaAR = 0;
// let miembrosMayoriaCD = 0; 

// if (porcentajeMayoria < 50) {
//     miembrosMayoriaAR = 60;
//     miembrosMayoriaCD = 15;
// } else {
//     miembrosMayoriaAR = parseFloat((((porcentajeMayoria-50)/100)*60)+60).toFixed(3);
//     miembrosMayoriaCD = parseFloat((((porcentajeMayoria-50)/100)*15)+15).toFixed(3);
// }

// alert("La mayoría obtuvo " + miembrosMayoriaAR + " asambleístas.");
// alert("La mayoría obtuvo " + miembrosMayoriaCD + " cargos en Comisión Directiva.");

// //Definición de los miembros por la minoría.

// //Primero se definen cuantos miembros tiene la minoría.

// let miembrosMinoriaAR = parseFloat(90 - miembrosMayoriaAR).toFixed(3);
// let miembrosMinoriaCD = parseFloat(20 - miembrosMayoriaCD).toFixed(3);

// alert("La minoría obtiene " + miembrosMinoriaAR + " asambleístas.");
// alert("La minoría obtiene " + miembrosMinoriaCD + " cargos en Comisión Directiva");

// //Segundo: se define el cociente para la distribución de los cargos entre la minoría.
// let cocienteMinoriaAR
// let cocienteMinoriaCD

// if (porcentajeMinoria > 50) {
//     cocienteMinoriaAR = votosMinoria/miembrosMinoriaAR;
//     cocienteMinoriaCD = votosMinoria/miembrosMinoriaCD;
// } else {
//     cocienteMinoriaAR = (lista1+votosMinoria)/miembrosMinoriaAR;
//     cocienteMinoriaCD = (lista1+votosMinoria)/miembrosMinoriaCD;
// }

// console.log("El cociente para calcular la distribución de cargos de la minoria para la Asamblea es: " + cocienteMinoriaAR);

// console.log("El cociente para calcular la distribución de cargos de la minoría para la Comisión Directiva es: " + cocienteMinoriaCD);

// //Tercero: Se calculan los cargos para cada agrupación minoritaria a partir de la relación entre votos obtenidos y el cociente.

// //ASAMBLEA DE REPRESENTANTES

// let miembrosLista2AR = parseFloat(lista2/cocienteMinoriaAR).toFixed(3);
// alert("La segunda lista obtiene " + miembrosLista2AR + " asambleístas.");

// let miembrosLista3AR = parseFloat(lista3/cocienteMinoriaAR).toFixed(3);
// alert("La tercer lista obtiene " + miembrosLista3AR + " asambleístas.");

// let miembrosLista4AR = parseFloat(lista4/cocienteMinoriaAR).toFixed(3);
// alert("La cuarta lista obtiene " + miembrosLista4AR + " asambleístas.");

// //COMISIÓN DIRECTIVA

// let miembrosLista2CD = parseFloat(lista2/cocienteMinoriaCD).toFixed(3);
// alert("La segunda lista obtiene " + miembrosLista2AR + " miembros en Comisión Directiva.");

// let miembrosLista3CD = parseFloat(lista3/cocienteMinoriaCD).toFixed(3);
// alert("La tercer lista obtiene " + miembrosLista3AR + " miembros en Comisión Directiva.");

// let miembrosLista4CD = parseFloat(lista4/cocienteMinoriaCD).toFixed(3);
// alert("La cuarta lista obtiene " + miembrosLista4AR + " miembros en Comisión Directiva.");

// //Cuarto: Se debe chequear que la minoría en Asamblea de representantes no sea menor a 15, en caso que suceda la diferencias deben ser cedidas por la lista mayoritarias según el número de votos de la minorías.
// let limiteMinoriaAR = 15;
// let limiteMayoriaAR = 75;

// if (miembrosMinoriaAR<15) {
//     miembrosMinoriaAR = miembrosMinoriaAR+(miembrosMayoriaAR-limiteMayoriaAR);
//     miembrosMayoriaAR = miembrosMayoriaAR-limiteMayoriaAR;
// }

// alert("A la minoría le corresponde " + miembrosMinoriaAR + " asambleístas.");

