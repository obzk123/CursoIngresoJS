/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let respuesta;
	let numero;
	let repetidor = 0;
	let total = 0;

	do
	{
		numero = parseInt(prompt("Ingrese un numero: "));
		respuesta = prompt("Si quiere seguir ingresando escriba si o no: ");
		total = total + numero;
		repetidor++;

	}while(respuesta == 'si');

	txtIdSuma.value = total;
	txtIdPromedio.value = total / repetidor;

}