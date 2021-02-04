function mostrar()
{
    let precio;
    let descuento;
    let preciofinal;

    precio = parseInt(prompt("Ingrese el precio: "));
    descuento = parseInt(prompt("Ingrese el descuento: "));

    preciofinal = (precio) - ((precio * descuento) / 100);

    elPrecioFinal.value = preciofinal;
}
