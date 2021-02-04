function mostrar()
{

  //Variables de validacion
  let respuesta;
  let bolsa;
  let cantidad;
  let precio;

  //Cantidades
  let cal = 0;
  let arena = 0;
  let cemento = 0;

  //Precios
  let precio_cal = 0;
  let precio_arena = 0;
  let precio_cemento = 0;

  //Variables para el usuario
  let total_cal = 0;
  let total_cal_descuento = 0;
  let total_arena = 0;
  let total_arena_descuento = 0;
  let total_cemento = 0;
  let total_cemento_descuento = 0;
  let total_bolsas_bruto = 0;
  let total_bolsas_descuento = 0;
  let bolsa_cara = 0;
  let mayor_cantidad_bolsas = 0;

  do{

    do
    {
      bolsa = prompt("Que bolsa desea comprar (arena, cal, cemento): ");

    }while( (bolsa != 'arena') && (bolsa != 'cal') && (bolsa != 'cemento') );
    
    do
    {
      cantidad = parseInt(prompt("Cuantas bolsas desea: "));

    }while(cantidad <= 0);
  
    do
    {
      precio = parseInt(prompt("Precio por bolsa: "));

    }while(precio <= 0);


    if(bolsa == 'arena')
    {
      arena = arena + cantidad;
      precio_arena = precio;
    }else{
      if(bolsa == 'cal')
      {
        cal = cal + cantidad;
        precio_cal = precio;
      }else{
        cemento = cemento + cantidad;
        precio_cemento = precio;
      }
    }
    
    respuesta = prompt("Seguir comprando s/n");

  }while(respuesta == 's');

  
  //Calculando el valor total de las bolsas de arena
  if( (arena > 10) && (arena < 30))
  {
    total_arena_descuento = (arena * precio_arena) * 0.15;
    total_arena = (arena * precio_arena) - total_arena_descuento;
  }else{
    if(arena > 30)
    {
      total_arena_descuento = (arena * precio_arena) * 0.25;
      total_arena = (arena * precio_arena) - total_arena_descuento;
    }else{
      total_arena = (arena * precio_arena);
    }
  }
  
  //Calculando el valor total de las bolsas de cal
  if( (cal > 10) && (cal < 30))
  {
    total_cal_descuento = (cal * precio_cal) * 0.15;
    total_cal = (cal * precio_cal) - total_cal_descuento;
  }else{
    if(cal > 30)
    {
      total_cal_descuento = (cal * precio_cal) * 0.25;
      total_cal = (cal * precio_cal) - total_cal_descuento;
    }else{
      total_cal = (cal * precio_cal);
    }
  }


    //Calculando el valor total de las bolsas de cemento
    if( (cemento > 10) && (cemento < 30))
    {
      total_cemento_descuento = (cemento * precio_cemento) * 0.15
      total_cemento = (cemento * precio_cemento) - total_cemento_descuento;
    }else{
      if(cemento > 30)
      {
        total_cemento_descuento = (cemento * precio_cemento) * 0.25
        total_cemento = (cemento * precio_cemento) - total_cemento_descuento;
      }else{
        total_cemento = (cemento * precio_cemento);
      }
    }

    //Verificando cual es la bolsa mas cara
    if( (precio_arena > precio_cal) && (precio_arena > precio_cemento) )
    {
      bolsa_cara = "arena";
    }
    if( (precio_cal > precio_arena) && (precio_cal > precio_cemento) )
    {
      bolsa_cara = "cal";
    }
    if( (precio_cemento > precio_cal) && (precio_cemento > precio_arena) )
    {
      bolsa_cara = "cemento";
    }

    //Verificando la mayor cantidad
    if( (arena > cal) && (arena > cemento) )
    {
      mayor_cantidad_bolsas = "arena";
    }
    if( (cal > arena) && (cal > cemento) )
    {
      mayor_cantidad_bolsas = "cal";
    }
    if( (cemento > cal) && (cemento > arena) )
    {
      mayor_cantidad_bolsas = "cemento";
    }

    total_bolsas_bruto = (arena * precio_arena) + (cal * precio_cal) + (cemento * precio_cemento); 

    total_bolsas_descuento = total_cemento + total_arena + total_cal;

    alert("El importe total en bruto es: $" + total_bolsas_bruto);
    
    //Si alguna es mayor a 10 se aplica el descuento
    if( (arena > 10) || (cal > 10) || (cemento > 10) )
    {
      alert("El importe total a pagar con descuento es: $" + total_bolsas_descuento); 
    }

    alert("La mayor cantidad de bolsas es de: " + mayor_cantidad_bolsas);
    
    alert("La bolsa mas cara es: " + bolsa_cara);
}
