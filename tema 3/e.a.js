var usuario;
var expresionU = /.{3,}/gmi;
var correo;
var expresionA = /\./gmi;
var expresionP = /\@/gmi;
var ex = /\w{3}@{1}\w+\.{1}\w{2,3}$/gmi;


//Ejercicio 1

usuario = prompt("Escribe tu usuario");

if( expresionU.test(usuario) == false){
	alert("El nombre no cumple tener al menos tres letras");
	
}else{
	alert("Usuario correcto");
}



//Ejercicio 2

correo = prompt("Escribe tu correo completo");

if(expresionA.test(correo) == false){
	alert("Falta el '.' en el correo electrónico");

} else if(expresionP.test(correo) == false){
	alert("Falta el '@' en el correo electrónico");

}


