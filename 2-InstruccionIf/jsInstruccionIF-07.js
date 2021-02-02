function mostrar()
{
	//tomo la edad  
	let edad;
	let estadocivil;

	edad = parseInt(document.getElementById("txtIdEdad").value);
	estadocivil = document.getElementById("estadoCivil").value;

	if(edad < 18)
	{
		if(estadocivil == 'Casado' || estadocivil == 'Divorciado')
		{
			alert("Es muy pequeño para NO ser soltero");
		}
	}
	


}//FIN DE LA FUNCIÓN