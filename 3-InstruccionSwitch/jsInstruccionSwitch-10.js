function mostrar()
{
	let estacion;
	let destino;
	let mensaje;

	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;
	
	switch(estacion)
	{
		case "Invierno":
			switch(destino)
			{
				case "Bariloche": 
					mensaje = "se viaja";
				break;

				default: 
					mensaje = "No se viaja";
				break;
			}
		break;

		case "Verano":
			switch(destino)
			{
				case "Mar del plata":
				case "Cataratas": 
					mensaje = "se viaja";
				break;

				default: 
					mensaje = "no se viaja";
				break;
			}
		break;

		case "Otoño":
			switch(destino)
			{
				default: 
					mensaje = "se viaja";
				break;
			}
		break;

		case "Primavera":
			switch(destino)
			{
				case "Bariloche": 
					mensaje = "no se viaja";
				break;
				default: 
					mensaje = "se viaja";
				break;
			}
	}

	alert(mensaje);

}