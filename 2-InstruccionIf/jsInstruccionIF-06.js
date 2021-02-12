function mostrar()
{
	//Declaro la variable edad
	let edad;

	//Le cargo el valor
	edad = (document.getElementById("txtIdEdad").value);

	//La convierto en entero
	edad = parseInt(edad);

	//Verifico en cada caso
	if(edad > 17)
	{
		alert("Es mayor de edad")
	}else{
		if(edad < 13)
		{
			alert("Es un niño");
		}else{
			alert("Es un adolescente");
		}
	}



}//FIN DE LA FUNCIÓN