var num1;
var num2;
var num3;
var media;



num1 = parseInt(prompt("Escribe el primer número"));
num2 = parseInt(prompt("Escribe el segundo número"));
num3 = parseInt(prompt("Escribe el tercer número"));


if (num1 < num2 && num1 < num3) 
{
	console.log("El número más pequeño es " + num1);
}else if(num2 < num1 && num2 < num3){
	console.log("El número más pequeño es " + num2);
}else if(num3 < num1 && num3 < num2){
	console.log("El número más pequeño es " + num3);
}

if (num1 > num2 && num1 > num3) 
{
	console.log("El número más grande es " + num1);
}else if(num2 > num1 && num2 > num3){
	console.log("El número más grande es " + num2);
}else if(num3 > num1 && num3 > num2){
	console.log("El número más grande es " + num3);
}

media = (num1 + num2 + num3)/3;

console.log("La media es " + media);

/*do{
	console.log("El número más pequeño es " + num1);
}while (num1 < num2 && num1 < num3);

do{
	console.log("El número más pequeño es " + num2);
}while (num2 < num3 && num2 < num1);

do{
	console.log("El número más pequeño es " + num3);
}while (num3 < num2 && num3 < num1);*/