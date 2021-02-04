function mostrar()
{
	let nombre;
	let respuesta;
	let edad;
	let sexo;
	let estado_civil;
	let temperatura;
	let mayor_temperatura = 0;
	let mayor_edad_viudo = 0;
	let cantidad_hombre_soltero_viudo = 0;
	let personas_tercera_edad = 0;
	let nombre_mayor_temperatura;
	let suma_edad = 0;
	let hombres_solteros = 0;
	let promedio_hombres_solteros = 0;


	//Validaciones de datos
	do
	{	
		do
		{
			nombre = prompt("Ingrese su nombre: ");
		}while(nombre == "");

		do
		{
			edad = parseInt(prompt("Ingrese su edad: "));

		}while ( (edad < 1) || (edad > 90) );

		do
		{
			sexo = prompt("Ingrese su sexo f o m");
		}while((sexo != "f") && (sexo != "m"));

		do
		{
			estado_civil = prompt("Ingrese su estado civil  (casado, soltero, viudo): ");

			if( (edad >= 18) && (estado_civil == "viudo"))
			{
				mayor_edad_viudo++;
			}

			if(sexo == "m")
			{
				if((estado_civil == "soltero") || (estado_civil == "viudo"));
				{
					cantidad_hombre_soltero_viudo++;
				}

				if(estado_civil == "soltero")
				{
					hombres_solteros++;
					suma_edad = suma_edad + edad;
				}
			}
		}while( (estado_civil != "casado") && (estado_civil != "soltero") && (estado_civil != "viudo"));
		

		do
		{
			temperatura = parseInt(prompt("Ingrese su temperatura corporal: "));
		
			if(temperatura >= mayor_temperatura)
			{
				mayor_temperatura = temperatura;
				nombre_mayor_temperatura = nombre;
			}

			if((edad > 60) && (temperatura > 38) )
			{
				personas_tercera_edad++;
			}

		}while( (temperatura < 20) || (temperatura > 40));

		respuesta = prompt("Ingresar otro pasajero s/n: ");

	}while(respuesta == "s");

	//Fin de validacion de datos

	promedio_hombres_solteros = suma_edad / hombres_solteros;

	alert("La persona con mayor temperatura es: " + nombre_mayor_temperatura);
	alert("Hay " + mayor_edad_viudo + " personas de mayor edad viudas");
	alert("La cantidad de hombres viudos o solteros que hay son de: " + cantidad_hombre_soltero_viudo);
	alert("La cantidad de personas con mas de 60 años y 38 de temperatura son: " + personas_tercera_edad);
	alert("El promedio de edad entre los hombres solteros es de: " + promedio_hombres_solteros);


}
