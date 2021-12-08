/*var fecha1 = new Fecha("03/10/2013");
	

	fechaCortada = fecha1.fecha.split("/");

	fecha = new Date(fechaCortada [2], (fechaCortada[1]-1), fechaCortada[0]).getTime();

	fecha = new Date(fecha).toLocaleDateString();

	
	document.write(fecha);*/


	var arrFecha = new Array();

	var final = false;	

	
	do{
	
		var fechaElegida = prompt("Escribe una fecha: \nEscribe 'fin' para terminar "  , "dd/mm/yyyy");

		if(fechaElegida.toUpperCase() != "FIN") {

			fechaCortada = fechaElegida.split("/");

			fecha = new Date(fechaCortada [2], (fechaCortada[1]-1), fechaCortada[0]).getTime();

			arrFecha.push(fecha);

		}else{

			final = true;			
			
		}

	}while (final == false);

	var fMenor = Math.max(...arrFecha);
	var fMayor = Math.min(...arrFecha);

	var resultado = (fMayor - fMenor)*1000;

	document.write("Fecha menor: " + fMenor + "<br>" + "Fecha mayor:" + fMayor + "<br>" + "Diferencia entre ambas: " + resultado);




	