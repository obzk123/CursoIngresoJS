
function mostrar()
{

	let i;
	let tipo;
	let precio;
	let cantidad;
	let marca;
	let fabricante;

	let contadorAlcohol = 0;
	let contadorJabon = 0;
	let contadorBarbijo = 0;

	let alcohol_mas_barato = 1001;
	let alcohol_mas_barato_cantidad = 0;
	let alcohol_mas_barato_fabricante;

	let alcohol_unidades = 0;
	let jabon_unidades = 0;
	let barbijo_unidades = 0;

	let tipo_mayor_unidades;
	let promedioCompra;

	let mensajeA;
	let mensajeB;
	let mensajeC;


	for(i=1; i <= 5; i++)
	{
		do
		{
			tipo = prompt("Ingrese el producto numero " + i + " : ");

		}while( (tipo != "barbijo") && (tipo != "alcohol") && (tipo != "jabon"));

		do
		{

			precio = parseInt(prompt("Ingrese el precio del producto " + i + " : "));

		}while( (precio < 100) || (precio > 300));


		do
		{
			cantidad = parseInt(prompt("Ingrese la cantidad del producto " + i + " : "));

		}while( (cantidad < 1) || (cantidad > 1000));

		marca = prompt("Ingrese la marca: ");

		fabricante = prompt("ingrese el fabricante: ");

		if(tipo == "alcohol")
		{
			if(precio <= alcohol_mas_barato)
			{
				alcohol_mas_barato = precio;
				alcohol_mas_barato_cantidad = cantidad;
				alcohol_mas_barato_fabricante = fabricante;
			}
		}

		if(tipo == "barbijo")
		{
				barbijo_unidades = barbijo_unidades + cantidad;
				contadorBarbijo++;
		}

		if(tipo == "alcohol")
		{
				alcohol_unidades = alcohol_unidades + cantidad;
				contadorAlcohol++;
		}

		if(tipo == "jabon")
		{
				jabon_unidades = jabon_unidades + cantidad;
				contadorJabon++;
		}

		if((barbijo_unidades > alcohol_unidades) && (barbijo_unidades > jabon_unidades))
		{
			tipo_mayor_unidades = "barbijo";
			promedioCompra = barbijo_unidades / contadorBarbijo;
		}

		if((alcohol_unidades > barbijo_unidades) && (alcohol_unidades > jabon_unidades))
		{
			tipo_mayor_unidades = "alcohol";
			promedioCompra = alcohol_unidades / contadorAlcohol;
		}

		if((jabon_unidades > alcohol_unidades) && (jabon_unidades > barbijo_unidades))
		{
			tipo_mayor_unidades = "jabon";
			promedioCompra = jabon_unidades / contadorJabon;

		}
		
	}

	
	mensajeA = "A- El alcohol mas barato es " + alcohol_mas_barato + " la cantidad que hay es de " + alcohol_mas_barato_cantidad + " y su fabricante es " + alcohol_mas_barato_fabricante;
	mensajeB = " B -El tipo con mayor unidades es " + tipo_mayor_unidades + " el promedio de compra es " + promedioCompra; 
	mensajeC = " C- Las unidades de jabon en total que hay son: " + jabon_unidades;

	alert(mensajeA + "\n" + mensajeB + "\n" + mensajeC);
}
