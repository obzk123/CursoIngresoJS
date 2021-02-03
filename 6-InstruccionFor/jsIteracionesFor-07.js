function mostrar()
{

	let numero;
	let i;
	let divisoresencontrados = 0;

	numero = parseInt(prompt("Ingrese un numero: "));

	for(i = 1; i <= numero; i++)
	{

		if(numero % i == 0)
		{
			divisoresencontrados++;
		}

	}

	alert(divisoresencontrados);

}