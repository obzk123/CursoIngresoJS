/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
let eleccionMaquina;
let numerorandom;
let numerominimo = 1;
let numeromaximo = 3;

function comenzar()
{
    numerorandom = Math.round(Math.random() * (numeromaximo - numerominimo) + numerominimo);
    alert(numerorandom);
}
function piedra()
{
    let eleccionMaquina = 1;

    if(numerorandom == eleccionMaquina)
    {
        alert("Empate");
    }

    switch(numerorandom)
    {
        case 2: alert("Perdi");
        break;
        case 3: alert("Gane");
        break;
    }

}
function papel()
{
    eleccionMaquina = 2;

    if(numerorandom == eleccionMaquina)
    {
        alert("Empate");
    }

    switch(numerorandom)
    {
        case 1: alert("Gane");
        break;
        case 3: alert("Perdi");
        break;
    }

}


function tijera()
{
    eleccionMaquina = 3;

    if(numerorandom == eleccionMaquina)
    {
        alert("Empate");
    }

    switch(numerorandom)
    {
        case 1: alert("Perdi");
        break;
        case 2: alert("Gane");
        break;
    }
}