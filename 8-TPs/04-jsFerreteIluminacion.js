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

    //Declaro variables
    let precio = 35;
    let cantidad;
    let tipoLampara;
    let total = 0;
    let impuesto = 0;
    let descuento = 0;


    //Tomo la cantidad y la convierto en un entero
    cantidad = document.getElementById("txtIdCantidad").value;
    cantidad = parseInt(cantidad);


    //Cantidad mayor a 5
    if(cantidad > 5)
    {
        descuento = 0.50;
    }
    else
    {
        //Obtengo el tipo de lampara
        tipoLampara = document.getElementById("Marca").value;
        
        //INICIO LOGICA CANTIDAD = 5
        if(cantidad == 5)
        {
            if(tipoLampara == "ArgentinaLuz")
            {
                descuento = 0.40;
            }else
            {
                //Si es otra marca el descuento es del 30%
                descuento = 0.30;
            }
        }//FIN LOGICA CANTIDAD = 5
        else
        {
                //JNICIO LOGICA CANTIDAD = 4
                if(cantidad == 4)
                {
                    //Consulto que tipo de lampara es para aplicar el descuento
                    if(tipoLampara == "ArgentinaLuz" || tipoLampara == "FelipeLamparas")
                    {
                        descuento = 0.25;
                    }
                    else
                    {
                    //Aplico el descuento de 20% si la cantidad es igual a 4 pero otra marca
                    descuento = 0.20;
                    }                    
                }//FIN LOGICA CANTIDAD = 4  
            else
            {
                    //iNICIO LOGICA CANTIDAD = 3
                    if(cantidad == 3)
                    {
                        //Pregunto si es ArgentinaLuz para aplicar un 15%
                        if(tipoLampara == "ArgentinaLuz")
                        {
                            descuento = 0.15;
                        }
                        else
                        {
                            //En caso de que sea FelipeLamparas aplico un 10%
                            if(tipoLampara == "FelipeLamparas")
                            {
                                descuento = 0.10;
                            }
                                else
                            {
                                //Si no es ninguno de los anteriores dos tipos aplico 5%
                                descuento = 0.05;
                            }
                        }           
                    } //fIN LOGICA CANTIDAD = 3

            }
        }
    } 

    total = (cantidad * precio) - ( (cantidad * precio) * descuento);

    if(total > 120)
    {
        impuesto = total * 0.10;

        total = total + impuesto;

        alert("IIBB Usted pago $" + total + ", siendo $" + impuesto + " el impuesto que se pago")
    }

    document.getElementById("txtIdprecioDescuento").value = total;

}
