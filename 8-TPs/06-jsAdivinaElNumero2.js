/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

let contadorIntentos = 0;
let numerorandom;
let numeroingresado;

function comenzar()
{
	numerorandom = Math.round(Math.random() * 100);
	alert(numerorandom);
}

function verificar()
{

	contadorIntentos++;

	txtIdIntentos.value = contadorIntentos;
	
	numeroingresado = parseInt(txtIdNumero.value);

	if(numeroingresado == numerorandom)
	{
		switch(contadorIntentos)
		{
			case 1: alert("Usted es un Psiquico");
			break;
			case 2: alert("Excelente percepción");
			break;
			case 3: alert("Esto es suerte");
			break
			case 4: alert("Excelente técnica");
			break;
			case 5: alert("usted está en la media");
			break;
			case 6:
			case 7:
			case 8:
			case 9:
			case 10: alert("falta técnica");
			break;

			default: alert("afortunado en el amor");
			break;
		}
	}
	

}