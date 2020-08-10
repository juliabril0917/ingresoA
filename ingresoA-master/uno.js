/*
1)De 5  personas que ingresan al hospital se deben tomar y
validar los siguientes datos.
nombre , temperatura, sexo y edad.
a)informar la cantidad de personas de cada sexo.
b)la edad promedio en total
c)la mujer con más temperatura(si la hay)
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar()
{
	
	let nombre;
	let temperatura; 
	let sexo;
	let edad;
	let promedioEdad;
	let mujerConMasTemp;
	let nombreMujerConMayorTemp;
	let flagMujerConMasTemp = 0;
	let contadorSexoFem = 0;
	let contadorSexoMasc = 0;
	let acumuladorEdad = 0;


	for (i= 0; i <5; i++ ) {

		nombre = prompt("ingrese su nombre");
		while (!(isNaN(nombre))){
			nombre = prompt("Nombre incorrecto. Ingrese su nombre");
		}

		edad = parseInt(prompt("Ingrese su edad"));
		while ( edad <= 0 || edad >= 100 || isNaN(edad)) {
			edad = prompt("Ingrese una edad de 0 a 100");
		}
		sexo = prompt("Ingrese su genero f para femenino o m para masculido"). toLowerCase();
		while (!(sexo == 'm' || sexo == 'f'))
		{
			sexo = prompt("error ingrese f para femenino y m para masculino");
		}

		temperatura = parseFloat(prompt("Ingrese su temperatutra corporal"));
		while (temperatura <= 32 || temperatura >= 42 ){

			temperatura = parseFloat("Incorrecto. Ingrese una temperatura entre 32 y 43");
		} 


		acumuladorEdad += edad;

		switch (sexo) {
			case "f":
				contadorSexoFem++
				if (!(flagMujerConMasTemp) || temperatura > mujerConMasTemp) {
					mujerConMasTemp = temperatura;
					flagMujerConMasTemp = 0;
					nombreMujerConMayorTemp = nombre;
				}
				break;
			case "m":
				contadorSexoMasc++
				break;
		}
	}

	promedioEdad = acumuladorEdad / 5;

    alert("A- Cantidad de mujeres " + contadorSexoFem + "\n Cantidad de hombres: "  + contadorSexoMasc );
	alert("B- El promedio de todas las edades es de " + promedioEdad );

	if (!(contadorSexoFem == 0)) {
		alert("C. La mujer con mayor temperatura tiene "+ mujerConMasTemp + " y se llama " + nombreMujerConMayorTemp);
		
	} else {
		alert("C. No hay mujeres.");
	 
	}

		}


		
		
	


