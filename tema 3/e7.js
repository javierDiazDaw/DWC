var nombre ;
var contN = 0; 
var contC = 0;
var contÑ = 0;
var listaNombres; 

while(true){

	nombre = prompt("Escribe un nombre").toUpperCase();

	contN ++;

	if(nombre.indexOf("C")==false){
		contC ++;
	}

	if(nombre.search("ñ")== false){
		contÑ ++;
	}

	if(nombre == "ULTIMO"){
		break;
	}

}

alert("Se han introducido " + (contN-1) + " nombres");
alert("Hay " + contC + " nombres que empiezan por C");
alert("Hay " + contÑ + " nombres que contienen ñ");
