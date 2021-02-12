function mostrar()
{
	//tomo la edad  
	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);

	if (edad < 18 || edad > 12)
	{
		alert("La persona no es adolescente");
	}

}//FIN DE LA FUNCIÓN