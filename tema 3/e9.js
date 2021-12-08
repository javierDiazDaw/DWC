var texto;
var textoCortado;
var palabras = 0;
var contPalabras = 0;
var a = 0;
var contA = 0;

texto = prompt("Escribe un texto");

while(contPalabras < texto.length){

	if(texto.charAt(contPalabras) == " "){

		palabras ++;

	
	}contPalabras ++;

textoCortado = texto.split(" ");

while(textoCortado < texto.length){

	if(textoCortado.charAt("a")){

		a++;

	}contA++;	

	
 }
}


alert("Hay "+ (palabras + 1) + " palabras correctas");
alert("Hay "+ textoCortado  + " palabras que comienzan por 'a'");
alert("Hay "+ a + " palabras que comienzan por 'a'");

