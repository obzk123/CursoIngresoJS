function mostrar()
{
	//Declaro variables
	let numero;
	const minimo = 1;
	const maximo = 10;

	//Genero el número RANDOM entre 1 y 10 
	numero = Math.round(Math.random() * (maximo - minimo) + minimo);

	//Mostar en la consola el numero
	console.log(numero);

}//FIN DE LA FUNCIÓN