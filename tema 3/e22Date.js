


//pido el tiempo en segundos y se guarda en el string tiempo
var tiempo = parseInt(prompt("escribe el tiempo en milisegundos"));

var horas, minutos, segundos; 

//new Date() => genera la fecha actual

horas = new Date(tiempo).getHours();

minutos = new Date(tiempo).getMinutes();

segundos = new Date(tiempo).getSeconds();



alert("Horas: " + horas + ", Minutos: " + minutos + ", Segundos: " + segundos);