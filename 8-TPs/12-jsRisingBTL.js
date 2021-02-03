/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	//definicion de variables
	let edad;
	let sexo;
	let estadocivil;
	let sueldobruto;
	let numerolegajo;
	let nacionalidad;

	//Validacion edad
	do
	{
		edad = parseInt(prompt("Ingrese su edad: "));

	}while  ( (edad < 18) || (edad > 90) );
	//Edad en plantilla
	txtIdEdad.value = edad;

	//Validacion sexo
	do{
		sexo = prompt("Ingrese su sexo F/M: ");

	}while( (sexo != 'M') && (sexo != 'F') );

	//Sexo en plantilla
	if(sexo == 'M')
	{
		txtIdSexo.value = "Masculino";
	}else{
		txtIdSexo.value = "Femenino";
	}

	//Validacion estado civil
	do{
		estadocivil = parseInt(prompt("Ingrese su estado civil: "));
	}while ((estadocivil < 1) || (estadocivil > 4));
	
	//Estado civil en plantilla
	if(estadocivil == 1)
	{
		txtIdEstadoCivil.value = "Soltero";
	}else{
		if(estadocivil == 2)
		{
			txtIdEstadoCivil.value = "Casado";
		}else{
			if(estadocivil == 3)
			{
				txtIdEstadoCivil.value = "Divorciado";
			}else{
				txtIdEstadoCivil.value = "Viudo";
			}
		}
	}

	//Validar sueldo bruto
	do
	{
		sueldobruto = parseInt(prompt("Ingrese su sueldo bruto: "));
	}while(sueldobruto < 8000);
	//Sueldo bruto en plantilla
	txtIdSueldo.value = sueldobruto;

	//Validar legajo
	do
	{
		numerolegajo = parseInt(prompt("Ingrese el numero de legajo: "));
	}while  (numerolegajo < 1000);
	//Legajo en plantilla
	txtIdLegajo.value = numerolegajo;

	//Validar nacionalidad
	do
	{
		nacionalidad = prompt("Ingrese su nacionalidad: ");

	}while ((nacionalidad != 'A') && (nacionalidad != 'E') && (nacionalidad != 'N'));
	//Nacionalidad en planilla

	switch(nacionalidad)
	{
		case 'A': txtIdNacionalidad.value = "Argentino";
		break;

		case 'E': txtIdNacionalidad.value = "Extranjero";
		break;

		case 'N': txtIdNacionalidad.value = "Nacionalizado";
		break;
	}
	


}
