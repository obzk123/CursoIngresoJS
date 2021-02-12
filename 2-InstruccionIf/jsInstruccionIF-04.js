function mostrar()
{
	//Declaro la variable para la edad
	let edad;

	//Tomo el dato ingresado por ID
	edad = (document.getElementById("txtIdEdad").value);

	//Transformo el dato a entero
	edad = parseInt(edad);

	//Verifico si es menor a 18 
	if(edad < 18)
	{
		if(edad > 12)
		{
			alert("Es adolescente");
		}
	}



}//FIN DE LA FUNCIÓN