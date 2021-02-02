/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	let importe;
	let aumento;

	importe = parseInt(document.getElementById("txtIdSueldo").value);

	aumento = importe * 0.10 + importe;

	document.getElementById("txtIdResultado").value = aumento;
}
