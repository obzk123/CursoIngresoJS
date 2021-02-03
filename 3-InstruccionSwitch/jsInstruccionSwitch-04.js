function mostrar()
{
	let mes =txtIdMes.value;
	
	switch(mes)
	{

		//meses con 31 dias
		case "Enero":
		case "Marzo":
		case "Mayo":
		case "Julio":
		case "Agosto":
		case "Octubre":
		case "Diciembre": alert("Tiene 31 días");
		break;

		//meses con 30 dias

		case "Abril":
		case "Junio": 
		case "Septiembre":
		case "Noviembre": alert("Tiene 30 días");
		break;

		case "Febrero": alert("Tiene 28 días");
		break;
				
	}
}