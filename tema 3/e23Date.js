


var numF = parseInt(prompt("Elige el número de fechas"));

var fecha = prompt("Escribe la primera fecha","dd/mm/aaaa");

fecha = fecha.split("/");

fecha = new Date(fecha [2], (fecha[1]-1), fecha [0]).getTime();



var fechaMayor = fecha;

for (var i = 1; i < numF; i++) {
	
	fecha = prompt("Escribe la fecha " + i + ": ","dd/mm/aaaa");

	fecha = fecha.split("/");

	fecha = new Date(fecha [2], (fecha[1]-1), fecha [0]).getTime();	

	
	if (fechaMayor < fecha){

		fechaMayor = fecha;

		
	}

}

var fechaConvertida = new Date(fechaMayor);

alert("La fecha mayor es " + fechaConvertida.toLocaleDateString());


