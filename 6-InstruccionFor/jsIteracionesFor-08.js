function mostrar()
{
	let numero;
	let contador = 0;
	let i;
	numero = parseInt(prompt("Ingrese un numero: "));

	for(i=1; i<=numero; i++)
	{
		if(numero % i == 0)
		{
			contador++;
		}
	}

	if(contador == 2)
	{
		alert("Es un numero primo");
	}else
	{
		alert("No es un numero primo")
	}
}