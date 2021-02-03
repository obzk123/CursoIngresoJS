

let eleccionMaquina;
let ContadorDeEmpates = 0;
let ContadorDeGanadas = 0;
let ContadorDePerdidas = 0;
let numerorandom;
let numeromaximo = 3;
let numerominimo = 1;

function comenzar()
{
	numerorandom = Math.round(Math.random() * (numeromaximo - numerominimo) + numerominimo);
	
	alert(numerorandom);

}

function piedra()
{
	let eleccionMaquina = 1;

    if(numerorandom == eleccionMaquina)
    {
		alert("Empate");
		ContadorDeEmpates++;
    }

    switch(numerorandom)
    {
		case 2: alert("Perdi");
		ContadorDePerdidas++;
        break;
		case 3: alert("Gane");
		ContadorDeGanadas++;
        break;
	}

	mostrarResultado();

}


function papel()
{
    eleccionMaquina = 2;

    if(numerorandom == eleccionMaquina)
    {
		alert("Empate");
		ContadorDeEmpates++;
    }

    switch(numerorandom)
    {
		case 1: alert("Gane");
		ContadorDeGanadas++;
        break;
		case 3: alert("Perdi");
		ContadorDePerdidas++;
        break;
	}

	mostrarResultado();
	
}
function tijera()
{
    eleccionMaquina = 3;

    if(numerorandom == eleccionMaquina)
    {
		alert("Empate");
		ContadorDeEmpates++;
    }

    switch(numerorandom)
    {
		case 1: alert("Perdi");
		ContadorDePerdidas++;
        break;
		case 2: alert("Gane");
		ContadorDeGanadas++;
        break;
	}

	mostrarResultado();
}



function mostrarResultado()
{
	txtIdGanadas.value = ContadorDeGanadas;
	txtIdPerdidas.value = ContadorDePerdidas;
	txtIdEmpatadas.value = ContadorDeEmpates;
}