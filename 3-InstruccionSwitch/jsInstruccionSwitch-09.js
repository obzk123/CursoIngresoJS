function mostrar()
{
	let estacion = txtIdEstacion.value;
	let destino = txtIdDestino.value;
	let precio = 15000;
	let total;

	switch(estacion)
	{
		case "Invierno": 
			switch(destino)
			{
				case "Bariloche": 
				total = precio + (precio * 0.20);
				alert("El precio final es: $" + total + " pesos");
				break;

				case "Cataratas":
				case "Cordoba":
				total = precio - (precio * 0.10);
				alert("El precio final es: $" + total + " pesos");
				break;

				case "Mar del plata":
				total = precio - (precio * 0.20);
				alert("El precio final es: $" + total + " pesos");
				break;
			}
		break;
		
		case "Verano":
			switch(destino)
			{
				case "Bariloche":
				case "Mar del plata": 
				total = precio - (precio * 0.20);
				alert("El precio final es: $" + total + " pesos");
				break;

				case "Cataratas":
				case "Cordoba":
				total = precio - (precio * 0.10);
				alert("El precio final es: $" + total + " pesos");
				break;
			}
		break;

		case "Otoño":
		case "Primavera":
			switch(destino)
				{
					case "Bariloche":
					case "Cataratas":
					case "Mar del plata":
					total = precio + (precio * 0.10);
					alert("El precio final es: $" + total + " pesos");
					break;
	
					case "Cordoba":
					alert("El precio final es: $" + precio + " pesos");
					break;
				}
			break;
	}


}