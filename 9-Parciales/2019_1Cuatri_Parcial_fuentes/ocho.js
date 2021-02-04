function mostrar()
{
    //Varialbes de entrada
    let letra;
    let numero;
    let respuesta = "s";

    //Varibles de logica
    let cantidad_pares = 0;
    let cantidad_impares = 0;
    let cantidad_ceros = 0;
    let promedio_positivos = 0;
    let suma_negativos = 0;
    let numero_maximo = -101;
    let numero_minimo = 101;
    let letra_maximo;
    let letra_minimo;
    let suma_positivos = 0;

    //Variables a mostar al usuario
    let mensajeA;
    let mensajeB;
    let mensajeC;
    let mensajeD;
    let mensajeE;
    let mensajeF;

    while(respuesta == "s")
    {
        letra = prompt("Ingrese una letra: ");
        numero = parseInt(prompt("Ingrese un numero (-100 - 100): "));

        while(numero < -100 || numero > 100)
        {
            numero = parseInt(prompt("Error, Ingrese un numero valido entre (-100 - 100): "));
        }
        
        if(numero % 2 == 0)
        {
            cantidad_pares++
        }else{
            cantidad_impares++;
        }

        if(numero == 0)
        {
            cantidad_ceros++;
        }

        if(numero > 0)
        {
            suma_positivos = suma_positivos + numero;
            promedio_positivos++;

        }else if (numero < 0)
        {
            suma_negativos = suma_negativos + numero;
        }

        if(numero > numero_maximo)
        {
            numero_maximo = numero;
            letra_maximo = letra;

        }

        if(numero < numero_minimo)
        {
            numero_minimo = numero;
            letra_minimo = letra;
        }



        respuesta = prompt("Desea seguir ingresando (s/n): ");
        while(respuesta != "s" && respuesta != "n")
        {
            respuesta = prompt("Ingrese una respuesta correcta (s/n): ");
        }
    }


    
    mensajeA = ("A. La cantidad de numeros pares son: " + cantidad_pares);
    mensajeB = ("B. La cantidad de numeros impares son: " + cantidad_impares);
    mensajeC = ("C. La cantidad de ceros son: " + cantidad_ceros);
    mensajeD = ("D. El promedio de todos los numeros positivos ingresados es: " + suma_positivos / promedio_positivos);
    mensajeE = ("E. La suma de todos los numero negativos es: " + suma_negativos);
    mensajeF = ("F. El numero maximo y su letra es: " + numero_maximo + " " + letra_maximo + " y el numero minimo con su letra es: " + numero_minimo + " " + letra_minimo);

    document.write(mensajeA + "\n" + mensajeB + "\n" + mensajeC + " " + mensajeD + "\n" + mensajeE + "\n" + mensajeF);
}
