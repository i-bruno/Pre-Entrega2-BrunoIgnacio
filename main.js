//Se desarrolla la instrucción para crear objeto de Agrupaciones, las cuales contiene nombre de la agrupación, nombre del candidato a elecciones y los votos obtenidos.
class Agrupaciones {
    constructor (nombre, candidato, votos){
        this.nombre = nombre;
        this.candidato = candidato;
        this.votos = votos;
    }
}

//Se crean las variables que va a contener cada uno de los objetos con valores de propiedades definidas con un valor estandar.
const lista1 = new Agrupaciones ("sin definir", "sin definir", 0);
const lista2 = new Agrupaciones ("sin definir", "sin definir", 0);
const lista3 = new Agrupaciones ("sin definir", "sin definir", 0);
const lista4 = new Agrupaciones ("sin definir", "sin definir", 0);
const lista5 = new Agrupaciones ("sin definir", "sin definir", 0);

//Se solicita al usuario que defina cuántas listas se presentan a elecciones
let listas = parseInt(prompt("¿Cuántas listas se presentan?"));

//Se crea una función que implementa un switch para crear la cantidad de objetos, según lo que defina el usuario en el prompt anterior.
function numListas() {
    switch(listas){
        case 1:
            alert("No hay elecciones");
        break;

        case 2:
            lista1.nombre = prompt("¿Cuál es el nombre de la lista 1?");
            lista1.candidato = prompt("¿Cuál es el nombre del candidato de " + lista1.nombre + "?");

            lista2.nombre = prompt("¿Cuál es el nombre de la lista 2?");
            lista2.candidato = prompt("¿Cuál es el nombre del candidato de "  + lista2.nombre + "?");
        break;

        case 3:
            lista1.nombre = prompt("¿Cuál es el nombre de la lista 1?");
            lista1.candidato = prompt("¿Cuál es el nombre del candidato de " + lista1.nombre + "?");

            lista2.nombre = prompt("¿Cuál es el nombre de la lista 2?");
            lista2.candidato = prompt("¿Cuál es el nombre del candidato de " + lista2.nombre + "?");

            lista3.nombre = prompt("¿Cuál es el nombre de la lista 3?");
            lista3.candidato = prompt("¿Cuál es el nombre del candidato de " + lista3.nombre + "?");
        break;

        case 4:
            lista1.nombre = prompt("¿Cuál es el nombre de la lista 1?");
            lista1.candidato = prompt("¿Cuál es el nombre del candidato de " + lista1.nombre + "?");

            lista2.nombre = prompt("¿Cuál es el nombre de la lista 2?");
            lista2.candidato = prompt("¿Cuál es el nombre del candidato de " + lista2.nombre + "?");

            lista3.nombre = prompt("¿Cuál es el nombre de la lista 3?");
            lista3.candidato = prompt("¿Cuál es el nombre del candidato de " + lista3.nombre + "?");

            lista4.nombre = prompt("¿Cuál es el nombre de la lista 4?");
            lista4.candidato = prompt("¿Cuál es el nombre del candidato de " + lista4.nombre + "?");
        break;

        case 5:
            lista1.nombre = prompt("¿Cuál es el nombre de la lista 1?");
            lista1.candidato = prompt("¿Cuál es el nombre del candidato de " + lista1.nombre + "?");

            lista2.nombre = prompt("¿Cuál es el nombre de la lista 2?");
            lista2.candidato = prompt("¿Cuál es el nombre del candidato de " + lista2.nombre + "?");

            lista3.nombre = prompt("¿Cuál es el nombre de la lista 3?");
            lista3.candidato = prompt("¿Cuál es el nombre del candidato de " + lista3.nombre + "?");

            lista4.nombre = prompt("¿Cuál es el nombre de la lista 4?");
            lista4.candidato = prompt("¿Cuál es el nombre del candidato de " + lista4.nombre + "?");

            lista5.nombre = prompt("¿Cuál es el nombre de la lista 5?");
            lista5.candidato = prompt("¿Cuál es el nombre del candidato de " + lista5.nombre + "?");
        break;
    }
}

numListas();

//Se crea un Array con los objetos creados anteriormente.
const arrayListas = [lista1, lista2, lista3, lista4, lista5];

//A través del método splice, se quitan del array los objetos que no fueron creados.
arrayListas.splice(listas);

//Console log para chequear que el array sea correcto.
console.log(arrayListas);

//2 - Una vez que se definen las listas que se presentan con sus nombres de candidatos, se establecen los votos para da cada lista.

//Según la cantidad de listas que se presentan a elecciones definido por el usuario, se implementa una función con un switch el cual le solicita al usuario que establezca los votos conseguidos por cada lista.
function votosListas (){
    switch(listas){
        case 2:
            lista1.votos = parseInt(prompt("¿Cuántos votos consiguió " + lista1.candidato + " (" + lista1.nombre + ")?"));

            lista2.votos = parseInt(prompt("¿Cuántos votos consiguió " + lista2.candidato + " (" + lista2.nombre + ")?"));
        break;

        case 3:
            lista1.votos = parseInt(prompt("¿Cuántos votos consiguió " + lista1.candidato + " (" + lista1.nombre + ")?"));

            lista2.votos = parseInt(prompt("¿Cuántos votos consiguió " + lista2.candidato + " (" + lista2.nombre + ")?"));

            lista3.votos = parseInt(prompt("¿Cuántos votos consiguió " + lista3.candidato + " (" + lista3.nombre + ")?"));
        break;

        case 4:
            lista1.votos = parseInt(prompt("¿Cuántos votos consiguió " + lista1.candidato + " (" + lista1.nombre + ")?"));

            lista2.votos = parseInt(prompt("¿Cuántos votos consiguió " + lista2.candidato + " (" + lista2.nombre + ")?"));

            lista3.votos = parseInt(prompt("¿Cuántos votos consiguió " + lista3.candidato + " (" + lista3.nombre + ")?"));

            lista4.votos = parseInt(prompt("¿Cuántos votos consiguió " + lista4.candidato + " (" + lista4.nombre + ")?"));
        break;

        case 5:
            lista1.votos = parseInt(prompt("¿Cuántos votos consiguió " + lista1.candidato + " (" + lista1.nombre + ")?"));

            lista2.votos = parseInt(prompt("¿Cuántos votos consiguió " + lista2.candidato + " (" + lista2.nombre + ")?"));

            lista3.votos = parseInt(prompt("¿Cuántos votos consiguió " + lista3.candidato + " (" + lista3.nombre + ")?"));

            lista4.votos = parseInt(prompt("¿Cuántos votos consiguió " + lista4.candidato + " (" + lista4.nombre + ")?"));

            lista5.votos = parseInt(prompt("¿Cuántos votos consiguió " + lista5.candidato + " (" + lista5.nombre + ")?"));
        break;
    }
}

votosListas();

//Se le pregunta al usuario cuantos votos fueron en blanco
let votosBlancos = parseInt(prompt("¿Cuantos votos en blanco hubo?"));

//Se calcula la suma total de votos emitidos.
let votosTotales = lista1.votos + lista2.votos + lista3.votos + lista4.votos + lista5.votos + votosBlancos;

//A través de console.log se emite mensajes que anunca la cantidad de votos para cada lista, los votos blancos y el total de votos.
console.log("Se contabilizaron un total de " + lista1.votos + " votos para " + lista1.candidato + " (" + lista1.nombre + ").");
console.log("Se contabilizaron un total de " + lista2.votos + " votos para " + lista2.candidato + " (" + lista2.nombre + ").");
console.log("Se contabilizaron un total de " + lista3.votos + " votos para " + lista3.candidato + " (" + lista3.nombre + ").");
console.log("Se contabilizaron un total de " + lista4.votos + " votos para " + lista4.candidato + " (" + lista4.nombre + ").");
console.log("Se contabilizaron un total de " + lista5.votos + " votos para " + lista5.candidato + " (" + lista5.nombre + ").");
console.log("Se contabilizaron un total de " + votosBlancos + " votos en blanco.");
console.log("Se contabilizaron un total de " + votosTotales + " votos totales.");

//Busca cual es la lista que sacó mayores votos.
let votosMayor = Math.max(lista1.votos, lista2.votos, lista3.votos, lista4.votos, lista5.votos);
console.log(votosMayor);

//Localiza la lista ganadora dentro del arrayListas, y la almacena en la variable listaGanadora.
let listaGanadora = arrayListas.filter (function (arrayListas){
    return arrayListas.votos == votosMayor;
});

console.log(listaGanadora);

//Se calcula el porcentaje que obtiene la mayoría.

let porcentajeMayoria = parseFloat((votosMayor*100)/votosTotales).toFixed(3);
console.log("El porcentaje de la mayoría es: " + porcentajeMayoria);

//Se calcula el porcentaje que obtiene la minoría.

let votosMinoria = (votosTotales-votosMayor)-votosBlancos;
console.log("Los votos totales de la minoría son: " + votosMinoria);

let porcentajeMinoria = parseFloat((votosMinoria*100)/votosTotales).toFixed(3);
console.log("El porcentaje de la minoría es: " + porcentajeMinoria);

console.log("La mayoría obtuvo un " + porcentajeMayoria + " porciento.");
console.log("La minoría obtuvo un " + porcentajeMinoria + " porciento.");

//Se calculan los cargos en Asamblea de Representantes y Comisión Directiva que ocupa la mayoría.

let miembrosMayoriaAR = 0;
let miembrosMayoriaCD = 0; 

if (porcentajeMayoria < 50) {
    miembrosMayoriaAR = 60;
    miembrosMayoriaCD = 15;
} else {
    miembrosMayoriaAR = parseFloat((((porcentajeMayoria-50)/100)*60)+60).toFixed(3);
    miembrosMayoriaCD = parseFloat((((porcentajeMayoria-50)/100)*15)+15).toFixed(3);
}

//La mayoría nunca puede tener mas de 75 asambleístas, cualquiera sea el caso.
if (miembrosMayoriaAR > 75){
    miembrosMayoriaAR = 90-15
}

console.log("La mayoría obtuvo " + miembrosMayoriaAR + " asambleístas.");
console.log("La mayoría obtuvo " + miembrosMayoriaCD + " cargos en Comisión Directiva.");

// //Definición de los miembros por la minoría.

// //Primero se definen cuantos miembros tiene la minoría.

let miembrosMinoriaAR = parseFloat(90 - miembrosMayoriaAR).toFixed(3);
let miembrosMinoriaCD = parseFloat(20 - miembrosMayoriaCD).toFixed(3);

console.log("La minoría obtiene " + miembrosMinoriaAR + " asambleístas.");
console.log("La minoría obtiene " + miembrosMinoriaCD + " cargos en Comisión Directiva");