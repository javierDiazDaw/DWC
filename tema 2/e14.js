var hombre = "H";
var mujer = "M";
var genero;
var sueldo;
var contadorH = 0;
var contadorM = 0;

do{
	do {
		genero = prompt("Indique su género");

		if (genero != hombre && genero != mujer)
		{
				alert("El género debe ser 'H' o 'M'");
		}
	}while((genero != hombre) && (genero != mujer) && (genero != "*"));

	if (genero == hombre)
	{
		do{
			sueldo = parseInt(prompt("Indique el sueldo"));
	
			if (sueldo < 1000 || sueldo > 2000)
			{
				alert("El sueldo debe estar entre 1000 y 2000 €");
			}

	}while(sueldo < 1000 || sueldo > 2000);

	alert("El sueldo H es de " + sueldo);


	}else if (genero == mujer)
	{
		do{
			sueldo = parseInt(prompt("Indique el sueldo"));

			if (sueldo < 1000 || sueldo > 2000)
			{
				alert("El sueldo debe estar entre 1000 y 2000 €");
			}

		}while(sueldo < 1000 || sueldo > 2000);

		alert("El sueldo M es de " + sueldo);

	}

}while(genero != "*");

alert("fin");
