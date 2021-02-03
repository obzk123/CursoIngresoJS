/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	let numero;
	let respuesta;
	let sumanegativos = 0;
	let sumapositivos = 0;
	let cantidadpositivos = 0;
	let cantidadnegativos = 0;
	let cantidaddeceros = 0;
	let pares = 0;
	let promedionegativos;
	let promediopositivos;
	let diferencia;

	do
	{

		numero = parseInt(prompt("Ingrese un numero: "));
		respuesta = prompt("Desea continuar s/n: ");

		if(numero < 0)
		{
			sumanegativos = sumanegativos + numero;
			cantidadnegativos++;
		}
		if(numero > 0)
		{
			sumapositivos = sumapositivos + numero;
			cantidadpositivos++;
		}
		if(numero == 0)
		{
			cantidaddeceros++;
		}

		if(numero % 2 == 0)
		{
			pares++;
		}

	}while(respuesta == 's');

	promediopositivos = sumapositivos / cantidadpositivos;
	promedionegativos = sumanegativos / cantidadnegativos;
	diferencia = sumapositivos - sumanegativos;

	document.write("la suma de negativos es : " + sumanegativos + " la suma de positivos es " + sumapositivos + " la cantidad de positivos es " 
	+ cantidadpositivos + " la cantidad de negativos es " + cantidadnegativos + " la cantidad de ceros es " + cantidaddeceros + 
	" la cantidad de numero pares es " + pares + " promedio de positivos es " + promediopositivos + " promedio de negativos es " + promedionegativos + 
	" y la diferencia entre positivos y negativos es " + diferencia);
}