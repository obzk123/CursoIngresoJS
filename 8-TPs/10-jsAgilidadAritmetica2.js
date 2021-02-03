/*Además de lo anterior, ahora 
se agregara un temporizador que
 a los cinco segundos dará por terminado 
 el juego  de no ser ingresado el resultado 
 correcto en ese lapso de tiempo. */


let temporizador = 4000;
let respuesta;
let numerorandom1;
let numerorandom2;
let min = 1;
let max = 10;
let numerorandom3;
let total = 0;


function comenzar()
{
    
    numerorandom1 = Math.round(Math.random() * (max - min) + min);
    numerorandom2 = Math.round(Math.random() * (max - min) + min);
    numerorandom3 = Math.round(Math.random() * (3 - 0) + 0);


    txtIdPrimerNumero.value = numerorandom1;
    txtIDSegundoNumero.value = numerorandom2;

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
    
    setTimeout(function()
    {
        respuesta = parseInt(document.getElementById("txtIdRespuesta").value);

        if(total == respuesta)
        {
            alert("Es correcto");
        }else
        {
            alert("Es incorrecta");
        }

    }, temporizador);

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
