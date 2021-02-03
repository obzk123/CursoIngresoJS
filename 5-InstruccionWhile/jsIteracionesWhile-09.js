/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	
	let numero;
	let numeroMaximo = 0;
	let numeroMinimo;
	let respuesta;
	let primerapasada = 0;
	


	do
	{
		
		numero = parseInt(prompt("Escriba un numero: "));
		
		//Asigno un primer valor al minimo
		if(primerapasada == 0)
		{
			numeroMinimo = numero;
			primerapasada = 1;
		}

		respuesta=prompt("desea continuar? s/n: ");

		if(numero > numeroMaximo)
		{
			numeroMaximo = numero;
		}

		if(numero < numeroMinimo)
		{
			numeroMinimo = numero;
		}

	}while(respuesta == 's');

	txtIdMaximo.value=numeroMaximo;
	txtIdMinimo.value=numeroMinimo;

}