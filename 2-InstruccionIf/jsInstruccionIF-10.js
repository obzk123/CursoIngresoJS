function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	let numero;
	const minimo = 1;
	const maximo = 10;

	numero = Math.round(Math.random() * (maximo - minimo) + minimo);

	if(numero >= 9)
	{
		alert("EXCELENTE " + numero);

	}else{
		if(numero > 4)
		{
			alert("APROBO " + numero);
		}else{
			alert("Vamos, la proxima se puede " + numero);
		}
	}

}//FIN DE LA FUNCIÓN