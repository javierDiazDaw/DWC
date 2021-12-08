var tiempo;

/*hora = segundos / 3600
segundos = segundos mod 3600

minutos = segundos / 60
segundos = segundos mod 60*/

//math.floor() es para redondear el numero hacia abajo

tiempo = parseInt(prompt("Escribe el tiempo en segundos"));

var horas = Math.floor( tiempo / 3600 );  
var minutos = Math.floor( (tiempo % 3600) / 60 );
var segundos = tiempo % 60;
var res = horas + ":" + minutos + ":" + segundos;  

alert(res);

