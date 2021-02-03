/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
let respuesta;
let numerorandom1;
let numerorandom2
let min = 1;
let max = 10;
let numerorandom3
let total = 0;


function comenzar()
{

    numerorandom1 = Math.round(Math.random() * (max - min) + min);
    numerorandom2 = Math.round(Math.random() * (max - min) + min);
    numerorandom3 = Math.round(Math.random() * (3 - 0) + 0);


    txtIdPrimerNumero.value = numerorandom1;
    txtIdSegundoNumero.value = numerorandom2;

    switch(numerorandom3)
    {
        case 0: txtIdOperador.value = "+";
        total = numerorandom1 + numerorandom2;
            break;
        case 1: txtIdOperador.value = "-";
        total = numerorandom1 - numerorandom2;
            break;
        case 2: txtIdOperador.value = "x";
        total = numerorandom1 * numerorandom2;
            break;
        case 3: txtIdOperador.value = "/";
        total = numerorandom1 / numerorandom2;
            break;
    }
        
}

function Responder()
{
    respuesta = parseInt(document.getElementById("txtIdRespuesta").value);

    if(total == respuesta)
    {
        alert("Es correcto");
    }else
    { 
        alert("Es incorrecto"); 
    }

}
