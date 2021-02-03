function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
	let numero;
	const minimo = 1;
	const maximo = 10;
	numero = Math.round(Math.random() * (maximo - minimo) + minimo);

	alert(numero);

}//FIN DE LA FUNCIÓN