function mostrar()
{
    //Varibles de validacion y de entrada
    let nombre_pais;
    let cantidad_habitantes;
    let temperatura;
    let respuesta = "s";

    //Variables de logica
    let temperatura_pares = 0;
    let pais_menos_habitantes = 7001;
    let pais_menos_habitantes_nombre = "";
    let cantidad_paises_temperatura = 0;
    let total_habitantes = 0;
    let promedio_habitantes = 0;
    let paises_ingresados = 0;
    let temperatura_minima = 50;
    let pais_temperatura_minima = "";

    //Variables a mostar al usuario
    let mensajeA;
    let mensajeB;
    let mensajeC;
    let mensajeD;
    let mensajeF;


    while (respuesta == "s") {
        
        nombre_pais = prompt("Ingresar nombre pais: ");

        cantidad_habitantes = parseInt(prompt("Ingrese la cantidad de habitantes (1-7000): "));

        //Validar cantidad de habitantes
        while (cantidad_habitantes < 1 || cantidad_habitantes > 7000) {
            cantidad_habitantes = parseInt(prompt("Error. Una cantidad de habitantes valida (1-7000): "));
        } //Fin de validacion

        temperatura = parseInt(prompt("Ingrese la temperatura (-50 - 50): "));

        //Validar temperatura
        while (temperatura < -50 || temperatura > 50) {
            temperatura = parseInt(prompt("Error. Ingrese una temperatura valida (-50 - 50): "));
        } //Fin de validacion


        //Algoritmo temperatura minima
        if(temperatura < temperatura_minima)
        {
            temperatura_minima = temperatura;
            pais_temperatura_minima = nombre_pais;
        }

        //Algoritmo temperaturas pares
        if(temperatura % 2 == 0)
        {
            temperatura_pares++;
        }

        //Algoritmo pais con menos habitantes y su nombre
        if(cantidad_habitantes < pais_menos_habitantes)
        {
            pais_menos_habitantes = cantidad_habitantes;
            pais_menos_habitantes_nombre = nombre_pais;
        }

        //Algoritmo paises con temperatura mayor a 40 grados
        if(temperatura > 40)
        {
            cantidad_paises_temperatura++;
        }

        respuesta = prompt("Desea seguir ingresando datos (s/n): ");

        //Validar respuesta para continuar o salir
        while (respuesta != "s" && respuesta != "n") 
        {
            respuesta = prompt("Error. Ingrese una respuesta valido (s/n): ");
        }//Fin de validacion

        //Suma de habitantes
        total_habitantes = total_habitantes + cantidad_habitantes;

        //Ingresa pais nuevo
        paises_ingresados++;
    }




    //Seteo de los mensajes
    mensajeA = "A. La cantidad de temperaturas pares son: " + temperatura_pares;
    mensajeB = "B. El pais con menos habitantes es: " + pais_menos_habitantes_nombre;
    mensajeC = "C. La cantidad de paises que superan los 40 grados es: " + cantidad_paises_temperatura;
    mensajeD = "D. El promedio de habientes entre los paises ingresados es de: " + total_habitantes / paises_ingresados;
    mensajeF = "F. La temperatura minima ingresada es de: " + temperatura_minima + " y el pais es: " + pais_temperatura_minima;





    //Mostrar por document.write los mensajes
    document.write(mensajeA + "\n " + mensajeB + "\n " + mensajeC + "\n " + mensajeD + "\n " + mensajeF);

}
