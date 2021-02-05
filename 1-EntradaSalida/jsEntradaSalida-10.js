/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
    let importe;
    let descuento;
    let total;
    
    importe = parseInt(document.getElementById("txtIdImporte").value);

    descuento = parseInt(prompt("Ingrese el descuento: "));

    total = importe - (importe * descuento) / 100;


    document.getElementById("txtIdResultado").value = total;

}
