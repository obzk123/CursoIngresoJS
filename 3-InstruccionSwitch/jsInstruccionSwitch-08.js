function mostrar()
{
	let destino = document.getElementById("txtIdDestino").value;

	switch(destino)
	{
		//Bariloche
		case "Bariloche": alert("FRIO");
		break;

		//Cataratas
		case "Cataratas": alert("CALOR");
		break;

		//Mar del plata
		case "Mar del plata": alert("CALOR");
		break;

		//Ushuaia
		case "Ushuaia": alert("FRIO");
		break;
	}

}//FIN DE LA FUNCIÓN