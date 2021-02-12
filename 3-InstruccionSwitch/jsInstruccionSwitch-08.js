function mostrar()
{
	let destino;
	
	destino = document.getElementById("txtIdDestino").value;

	switch(destino)
	{
		//Bariloche
		case "Bariloche":
		case "Ushuaia": 
			alert("FRIO");
		break;

		//Cataratas
		case "Cataratas":
		case "Mar del plata": 
			alert("CALOR");
		break;

	}

}//FIN DE LA FUNCIÓN