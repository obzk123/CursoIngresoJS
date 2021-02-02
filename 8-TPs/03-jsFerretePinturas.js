/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    let grados;
    let cuenta;
    
    grados = parseInt(document.getElementById("txtIdTemperatura").value);

    cuenta = (grados - 32) * (5/9);

    alert("La temperatura en Fahrenheit es de " + grados + " grados Y en Grados centigrados es de " + cuenta);


}

function CentigradosFahrenheit () 
{
    let grados;
    let cuenta;
    
    grados = parseInt(document.getElementById("txtIdTemperatura").value);

    cuenta = (grados * 9/5) + 32;

    alert("La temperatura en grados Celcius es de " + grados + " grados Y en Grados Fahrenheit es de " + cuenta);
}
