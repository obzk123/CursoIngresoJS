/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
*/


function ComenzarIngreso () 
{

}

//LISTO
function NumerosPares()
{
    
    let numero = parseInt(txtIdNumero.value);
    let numeropar = 0;
    if(numero <= 0)
    {
        alert("Ingrese un numero positivo");
    }

    for(let i = 1; i <= numero; i++)
    {
        if(i % 2 == 0)
        {
            numeropar++;
        }
    }

    alert("La cantidad de numeros pares del 0 al " + numero + " son " + numeropar);
}
//LISTO
function NumerosImpares()
{
    let numero = parseInt(txtIdNumero.value);
    let numeroimpar = 0;
    if(numero <= 0)
    {
        alert("Ingrese un numero positivo");
    }

    for(let i = 0; i <= numero; i++)
    {
        if(i % 2 != 0)
        {
            numeroimpar++;
        }
    }

    alert("La cantidad de numeros impares del 0 al " + numero + " son " + numeroimpar);
}

//LISTO
function NumerosDivisibles()
{
    let numero = parseInt(txtIdNumero.value);
    let contador = 0;

    if(numero <= 0)
    {
        alert("Ingrese un numero positivo");
    }

    for(let i = 0; i <= numero; i++)
    {
        if(numero % i == 0)
        {
            contador++;
        }
    }

    alert("La cantidad de numeros divisibles son: " + contador);
    
    
}

//LISTO
function VerificarPrimo()
{
    let numero = parseInt(txtIdNumero.value);
    let contador = 0;
    if(numero <= 0)
    {
        alert("Ingrese un numero positivo");
    }
    for(let i = 0; i <= numero; i++)
    {
        if(numero % i == 0)
        {
            contador++;
        }
    }

    if(contador == 2)
    {
        alert("Es un numero primo");
    }else{
        alert("No es un numero primo")
    }

}

//LISTO
function NumerosPrimos()
{
    let numero = parseInt(txtIdNumero.value);
    let numerosprimos = 0;
    if(numero <= 0)
    {
        alert("Ingrese un numero positivo");
    }

    for(let i = 1; i <= numero; i++)
    {
        if(numero % i == 0)
        {
            numerosprimos++;
        }
    }

    alert("La cantidad de numeros primos del 0 al " + numero + " son " + numerosprimos);
}