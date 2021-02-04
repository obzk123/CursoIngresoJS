function mostrar()
{
    let hora;

    hora = parseInt(laHora.value);

    if( (hora > 24) || (hora < 0) )
    {
        alert("La hora no es valida");

    }else{

        switch(hora)
        {
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
            case 11: alert("Es de mañana");
            break;

            case 12:
            case 13:
            case 14:
            case 15:
            case 16:
            case 17:
            case 18:
            case 19: alert("Es de tarde");
            break;

            default: alert("Es de noche");
            if(hora < 24)
            {
                alert("a dormir");
            }
            break;
        }
    }
}
