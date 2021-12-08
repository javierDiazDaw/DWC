
//var expresion1 = /\@{1}\w{7}+\d{3}/gm;

var contador = "";

do{

	var dato = prompt("Escribe un alias", "@nnnnnnn000");

	contador += dato;


	/*if( expresion1.test(datos) == false){
		alert("datos incorrectos");
		
	}else{
		alert("nombre introducido:" + datos);
	}*/



}while(dato != "fin");

alert(contador);