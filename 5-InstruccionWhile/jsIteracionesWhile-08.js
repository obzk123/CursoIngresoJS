/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
    let respuesta;
    let numero;
    let positivos = 0;
    let negativos = 0;
    do
    {
        numero = parseInt(prompt("Ingrese un numero: "));
        respuesta = prompt("Desea continuar s/n: ");

        if(numero >= 0)
        {
            positivos = positivos + numero;
        }else
        {
            negativos = negativos + numero;
        }
    }while(respuesta == 's');

    txtIdSuma.value = positivos;
    txtIdProducto.value = negativos;
}