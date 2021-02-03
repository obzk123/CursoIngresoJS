/*En la pantalla se mostrarán 6 botones de 
distintos colores,  al comenzar el juego se 
mostrara el texto de un color entre los 6 posibles
 para que el jugador sepa que botón tocar .Al tocar 
 el botón correcto se informara cuanto tiempo tardo.
*/
let ColorSecreto;
let random;
let min = 1;
let max = 6;
let tiempoInicio = 0;
function comenzar()
{

    random = Math.round(Math.random() * (max - min) + min);

    switch(random)
    {
        case 1: txtIdColorElegido.value = "azul";
            break;
        case 2: txtIdColorElegido.value = "amarillo";
            break;
        case 3: txtIdColorElegido.value = "marrón";
            break;
        case 4: txtIdColorElegido.value = "verde";
            break;
        case 5: txtIdColorElegido.value = "celeste";
            break;
        case 6: txtIdColorElegido.value = "rojo";
            break;
    }

        setInterval(function()
        {
            tiempoInicio++;

        }, 1000);

}//FIN DE LA FUNCIÓN
function Responder(colorParametro)
{
    switch(random)
    {
        case 1: 
        
        if(colorParametro == 'azul')
        {
            alert("Es correcto y se tardo " +  tiempoInicio + " segundos");
            
        }else{
            alert("Es incorrecto");
        }
        break;

        case 2:
        if(colorParametro == 'amarillo')
        {
            alert("Es correcto y se tardo " + tiempoInicio + " segundos");
            
        }else{
            alert("Es incorrecto");
        }
        break;

        case 3:
        if(colorParametro == 'marron')
        {
            alert("Es correcto y se tardo " + tiempoInicio + " segundos");
            
        }else{
            alert("Es incorrecto");
        }            
        break;

        case 4:
        if(colorParametro == 'verde')
        {
            alert("Es correcto y se tardo " + tiempoInicio + " segundos");
            
        }else{
            alert("Es incorrecto");
        }  
        break;

        case 5:
        if(colorParametro == 'celeste')
        {
            alert("Es correcto y se tardo " + tiempoInicio + " segundos");
            
        }else{
            alert("Es incorrecto");
        }  
        break;

        case 6:
        if(colorParametro == 'rojo')
        {
            alert("Es correcto y se tardo " + tiempoInicio + " segundos");
            
        }else{
            alert("Es incorrecto");
        }  
        break;

    }
}
