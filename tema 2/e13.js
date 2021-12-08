var dia;
var mes;
var año;
var suma;


alert("Escribe una fecha");
	
do{

dia = parseInt(prompt("Dígitos para el día"));
	

}while (dia > 31 || dia < 1);

do{

mes = parseInt(prompt("Dígitos para el mes"));

}while (mes > 12 || mes < 1);


año = parseInt(prompt("Dígitos para el año"));

suma = dia + mes + año;	
sum = 0;

alert("La suma es " + suma);

do{
	
	if(suma == 0){
		suma = sum;
		sum = 0;
	}

	sum+=suma % 10;
	suma = parseInt(suma/10);



}while(suma>=1 || sum>9);

alert(sum);


/*alert("En número tarot es " +suma.toString().split('').reduce(function(r, n) { return r + parseInt(n) }, 0));*/

