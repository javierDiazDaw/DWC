var frase;
frase = (prompt("Escribe una hora con el siguiente formato", "HH:mm"));

frase = frase.replace(":","");

frase = parseInt(frase);

if(isNaN(frase))
{
 alert("Error: introduce una hora válida");
}

if (frase >=730 && frase <=1400){

 alert("Buenos días");

} else  if (frase >= 1401 && frase <=2030){
alert("Buenas tardes");


} else if (frase >= 2031 && frase <=729){
 alert("Buenas noches");
}

