/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/

let num; 

function comenzar()
{
  num = Math.round(Math.random() * 100);
  alert(num);
}

function verificar()
{
  let contadorIntentos = 0;
  let numeroingresado;
  numeroingresado = document.getElementById("txtIdNumero").value;
  contadorIntentos++;
  txtIdIntentos.value = contadorIntentos;

  if(num == numeroingresado)
  {
    alert("Usted es un ganador!!! y en solo " + contadorIntentos + " intentos");

  }else{

    if(numeroingresado > num)
    {
      alert("Se paso");

    }else{

      alert("Falta");
    }
  }
	
}