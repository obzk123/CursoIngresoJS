function mostrar()
{
	let destino;

	destino = document.getElementById("txtIdDestino").value;

	switch(destino)
	{
		//Bariloche
		case "Bariloche": alert("Sur");
		break;

		//Cataratas
		case "Cataratas": alert("Este");
		break;

		//Mar del plata
		case "Mar del plata": alert("Este");
		break;

		//Ushuaia
		case "Ushuaia": alert("Sur");
		break;
	}
}