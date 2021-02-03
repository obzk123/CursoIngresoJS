/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */

function CalcularPrecio () 
{
     let cantidad = txtIdCantidad.value;
     let precio = 35;
     let marca = Marca.value;
     let preciofinal;
     let iva;

    if(cantidad >= 6)
    {
        preciofinal = (cantidad * precio) - ((cantidad * precio) * 0.50 );

        txtIdprecioDescuento.value = preciofinal;
        
        if(preciofinal > 120)
        {
            iva = preciofinal * 0.10;
            preciofinal = preciofinal + iva;

            alert("IIBB Usted pago $" + preciofinal + " siendo $" + iva + " el impuesto que se pago");
        }
    }else{
        if(cantidad == 5)
        {
            switch(marca)
            {
                case "ArgentinaLuz": 
                    preciofinal = (cantidad * precio) - ((cantidad * precio) * 0.40 );
                    txtIdprecioDescuento.value = preciofinal;
                break;

                default: 
                    preciofinal = (cantidad * precio) - ((cantidad * precio) * 0.30 );
                    txtIdprecioDescuento.value = preciofinal;
                break;                
            }
        }else{
            if(cantidad == 4)
            {
                switch(marca)
                {
                    case "ArgentinaLuz":
                    case "FelipeLamparas":
                        preciofinal = (cantidad * precio) - ((cantidad * precio) * 0.25 );
                        txtIdprecioDescuento.value = preciofinal;
                    break;
                    default:
                        preciofinal = (cantidad * precio) - ((cantidad * precio) * 0.20 );
                        txtIdprecioDescuento.value = preciofinal;
                    break;
                }
            }else{
                if(cantidad == 3)
                {
                    switch(marca)
                    {
                        case "ArgentinaLuz":
                            preciofinal = (cantidad * precio) - ((cantidad * precio) * 0.15);
                            txtIdprecioDescuento.value = preciofinal;
                        break;
                        case "FelipeLamparas":
                            preciofinal = (cantidad * precio) - ((cantidad * precio) * 0.10);
                            txtIdprecioDescuento.value = preciofinal;
                        break;
                        default: 
                            preciofinal = (cantidad * precio) - ((cantidad * precio) * 0.05);
                            txtIdprecioDescuento.value = preciofinal;
                        break;
                    }
                }else{
                    if((cantidad > 0) && (cantidad < 3))
                    {
                        preciofinal = cantidad * precio;
                        txtIdprecioDescuento.value = preciofinal;
                    }
                }
            }
        }

    }
}
