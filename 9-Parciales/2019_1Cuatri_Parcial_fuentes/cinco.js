function mostrar()
{
    let continente;
    let dias;
    let precio = 100;
    let total;
    let total_descuento;
    let mercadoPago;
    let otroMedio;

    continente = Marca.value;

    dias = parseInt(prompt("Cuantos dias desea viajar: "));



    switch(continente)
    {
        case "América": 
        total = (precio * dias) - ((precio * dias) * 0.50);
        total_descuento = (precio * dias) - ((precio * dias) * 0.60);
        alert("El precio total con descuento es de $" + total + " y si paga con debito $" + total_descuento);
        break;

        case "África": 
        total = (precio * dias) - ((precio * dias) * 0.60);
        total_descuento = (precio * dias) - ((precio * dias) * 0.75);
        alert("El precio total con descuento es de $" + total + " y si paga por mercadoPago o efectivo $" + total_descuento);
        break;


        case "Europa": 
        total = (precio * dias) - ((precio * dias) * 0.20);
        total_descuento = (precio * dias) - ((precio * dias) * 0.35);
        mercadoPago = (precio * dias) - ((precio * dias) * 0.10);
        otroMedio = (precio * dias) - ((precio * dias) * 0.05);
        alert("El precio total es de $" + total + " y si paga con debito $" + total_descuento + " si paga por mercadoPago $" + mercadoPago + " y por otro medio $" + otroMedio);
        break;

        default: 
        total = (precio * dias) + ((precio * dias) * 0.20);
        alert("Tiene un recargo del 20% y el total es: $" + total);
        break;
    }

}
