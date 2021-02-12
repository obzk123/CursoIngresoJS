function mostrar()
{
	//tomo la edad  
	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);
	edad = parseInt(edad);
	if(edad < 18)
	{
		alert("La persona es menor de edad");
	}
	if(edad > 18)
	{

		alert("La persona es mayor de edad");
	}


}//FIN DE LA FUNCIÓN