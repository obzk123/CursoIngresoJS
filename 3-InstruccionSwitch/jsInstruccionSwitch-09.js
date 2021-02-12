function mostrar()
{
	//Declaro varibles
	let estacion;
	let destino;
	let precio = 15000;
	let total = 0;
	let descuento = 0;
	let aumento = 0;

	//Cargo el dato del usuario a la variable
	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;

	//Creo un switch que abarque las estaciones del año
	switch(estacion)
	{

		//En el caso de invierno
		case "Invierno": 
			switch(destino)
			{
				case "Bariloche": 
					aumento = 0.20;
				break;

				case "Mar del plata":
					descuento = 0.20;

				break;

				default:
					descuento = 0.10;
				break;
			}
		break;
		
		//En el caso de verano
		case "Verano":
			switch(destino)
			{
				case "Bariloche":
					descuento = 0.20;
				break;

				case "Mar del plata": 
					aumento = 0.20;
				break;

				default:
					aumento = 0.10;
				break;
			}

		break;

		//En el caso de Otoño y Primavera
		case "Otoño":
		case "Primavera":
			switch(destino)
				{
					case "Cordoba":
					break;
					
					default:
						aumento = 0.10;
					break;
				}
			break;
	}

	//Calculo el total
	total = (precio) - (precio * descuento) + (precio * aumento);

	//Muestro por pantalla
	alert("El precio total es de $" + total);

}