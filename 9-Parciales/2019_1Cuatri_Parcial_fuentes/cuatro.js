function mostrar()
{
    let numeroA;
    let numeroB;
    let resta;
    let suma;

    numeroA = parseInt(prompt("Ingrese el primer numero: "));
    numeroB = parseInt(prompt("Ingrese el segundo numero: "));

    if(numeroA == numeroB)
    {
        alert(numeroA + " " + numeroB);

    }else if(numeroA > numeroB)
    {
        resta = numeroA - numeroB;
        
        if(resta > 10)
        {
            alert("El resultado es " + resta + " y superó el 10");
        }else{
            alert(numeroA - numeroB);
        }
 

    }else{
        suma = numeroA + numeroB;
        alert(suma);
    }
}
