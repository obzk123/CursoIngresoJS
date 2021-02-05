/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	let importe;
	let aumento;
	let total

	importe = parseInt(document.getElementById("txtIdSueldo").value);
	aumento = parseInt(prompt("Ingrese el aumento: "));

	total = importe + (importe * aumento) / 100;

	document.getElementById("txtIdResultado").value = total;
}
