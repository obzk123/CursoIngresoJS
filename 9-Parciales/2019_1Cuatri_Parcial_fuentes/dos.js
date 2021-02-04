function mostrar()
{
    let nombreA;
    let nombreB;
    let pesoA;
    let pesoB;
    let suma;
    let promedio;


    nombreA = prompt("Ingrese su nombre: ");
    nombreB = prompt("Ingrese el nombre de su pareja: ");
    pesoA = parseInt(prompt("Ingrese su peso: "));
    pesoB = parseInt(prompt("Ingrese el peso de su pareja: "));
    suma = pesoA + pesoB;
    promedio = suma / 2;

    alert("Ustedes se llaman " + nombreA + " y " + nombreB + " pesan " + pesoA + " y " + pesoB + " kilos y el promedio de peso " + promedio);
  
}
