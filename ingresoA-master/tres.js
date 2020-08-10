/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones,
validando los datos ingresados. 
nombre del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el nombre del titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/
function mostrar()
{
	let nombreTitular;
	let lugar;
	let temporada;
	let cantidadDePersonas;
	let lugarMasElegido;
	let NombreTitularMasPasajeros;
	let PromedioInvierno;

	do {
		nombreTitular = prompt("Ingrese el nombre del titular");
		while (!(isNaN(nombreTitular))) {
			nombreTitular = prompt("Inválido. Ingrese el nombre del titular");
		}

		lugar = prompt('Ingrese destino: “bariloche”, “cataratas” o “salta”').toLowerCase();
		while (lugar != "bariloche" && lugar != "cataratas" && lugar != "salta") {
			lugar = prompt('Inválido. Ingrese destino: “bariloche”, “cataratas” o “salta”').toLowerCase();
		}

		temporada = prompt('Ingrese temporada: “otoño”, “invierno”, “verano”, “primavera”').toLowerCase();
		while (temporada != "otoño" && temporada != "invierno" && temporada != "verano" && temporada != "primavera") {
			temporada = prompt('Inválido. Ingrese temporada: “otoño”, “invierno”, “verano”, “primavera”').toLowerCase();
		}

	cantidadDePersonas = parseInt(prompt("Ingrese la cantidad de acompañantes"));
		while (cantidadAcompañantes < 0 || isNaN(cantidadAcompañantes)) {
			cantidadAcompañantes = parseInt(prompt("Inválido. Ingrese la cantidad de acompañantes"));}
	



		
		}

	

}