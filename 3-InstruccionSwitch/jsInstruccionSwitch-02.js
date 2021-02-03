function mostrar()
{
	let mes =txtIdMes.value;
	

	switch(mes)
	{

		//Falta para el invierno
		case "Enero":
		case "Febrero": 
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio": alert("Falta para el invierno");
		break;

		//Invierno
		case "Julio":
		case "Agosto": alert("Abrigate que hace frio");
		break;

		//Calor
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre": alert("Ya pasamos el frio, ahora calor!!!");
		break;



	}



}