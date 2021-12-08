var fecha1;
var fecha2;



fecha1 = prompt("Escribe la primera fecha", "dd/mm/aaaa");
	
fecha1 = fecha1.split("/");

fecha2 = prompt("Escribe la segunda fecha", "dd/mm/aaaa");
	
fecha2 = fecha2.split("/");

fecha1 = new Date(fecha1 [2], (fecha1[1]-1), fecha1 [0]);
fecha2 = new Date(fecha2 [2], (fecha2[1]-1), fecha2 [0]);

if( fecha1.getTime() < fecha2.getTime()){
	alert("La fecha " + fecha1 + " es anterior a la fecha " + fecha2);

}else{
	alert("La fecha " + fecha2 + " es anterior a la fecha " + fecha1);
}