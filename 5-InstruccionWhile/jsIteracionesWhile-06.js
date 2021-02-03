function mostrar()
{

	let num1 = parseInt(prompt("Ingrese el numero 1: "));
	let num2 = parseInt(prompt("Ingrese el numero 2: "));
	let num3 = parseInt(prompt("Ingrese el numero 3: "));
	let num4 = parseInt(prompt("Ingrese el numero 4: "));
	let num5 = parseInt(prompt("Ingrese el numero 5: "));
	let suma = num1+num2+num3+num4+num5;
	let promedio = suma / 5;

	txtIdSuma.value = suma;
	txtIdPromedio.value = promedio;


}