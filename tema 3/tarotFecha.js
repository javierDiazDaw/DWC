var fecha;
fechaActual= Date.now();



fecha = prompt("Escribe una fecha", "dd/mm/aaaa");
	
fecha = fecha.split("/");

fecha = new Date(fecha [2], (fecha[1]-1), fecha [0]);

if( fecha.getTime() < fechaActual){
	alert("La fecha introducida es menor a la de hoy");

}else{
	alert("La fecha introducida es mayor a la de hoy");
}

	
