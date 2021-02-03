function mostrar()
{
	let numero;
	let i;
	let pares = 0;

	numero = parseInt(prompt("Ingrese un numero: "));

	for(i = 1; i <= numero; i++)
	{
		if(i % 2 == 0)
		{
			pares++;
		}
	}

	alert(pares);
}