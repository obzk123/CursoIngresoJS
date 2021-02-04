function mostrar()
{

   
    let sexo;
    let i;
    let promedio = 0;
    let cantidadMujeres = 0;

    //altura
    let altura;
    let altura_total = 0;
    let altura_mas_baja = 250;
    let sexo_altura_mas_baja;
    
    
    //Variables de mensaje
    let mensajeA;
    let mensajeB;
    let mensajeC;

    for(i = 0; i < 5; i++)
    {
        
        altura = parseInt(prompt("Ingrese la altura en cm: "));

        while((altura <= 0) || (altura > 250))
        {
            altura = parseInt(prompt("Ingrese una altura validad (0-250cm)"));
        }

        altura_total = altura_total + altura;


        sexo = prompt("Ingrese su sexo f/m : ");

        while((sexo != "f") && (sexo != "m"))
        {
            sexo = prompt("Ingrese un sexo valido f/m: ");
        }

        if(sexo == "f" && altura > 190)
        {
            cantidadMujeres++;
        }

        if(altura <= altura_mas_baja)
        {
            altura_mas_baja = altura;

            sexo_altura_mas_baja = sexo;

            if(sexo_altura_mas_baja == "f")
            {
                sexo_altura_mas_baja = "Femenino";
            }else{
                sexo_altura_mas_baja = "Masculino";
            }

        }


    }

    promedio = altura_total / i;
    
    mensajeA = "El promedio de las alturas totales es de: " + promedio;

    mensajeB = "La altura mas baja es " + altura_mas_baja + " y es de sexo " + sexo_altura_mas_baja;

    mensajeC = "La cantidad de mujeres que superan los 190 centimetros son " + cantidadMujeres;

    alert(mensajeA + "\n" + mensajeB + "\n" + mensajeC);
}
