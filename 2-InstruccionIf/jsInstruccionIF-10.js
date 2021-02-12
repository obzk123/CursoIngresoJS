function mostrar()
{
	//Declaro variables
	let nota;
	minimo = 1;
	maximo = 10;
	let mensaje;

	//Genero el numero Random entre 1 y 10
	nota = Math.round(Math.random() * (maximo - minimo) + minimo);

	//Pregunto si es mayor a 8, luego mayor a 4 y por ultimo lo tomo de descarte
	if(nota > 8)
	{
		mensaje = "EXCELENTE " + nota;

	}else{
		if(nota > 4)
		{
			mensaje = "APROBO " + nota;
		}else{

			mensaje = "Vamos, la proxima se puede " + nota;
		}
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN