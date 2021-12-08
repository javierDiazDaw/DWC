var num;
var valor;
var respuesta;

do{

num = parseInt(prompt("Elige el cambio que quieres realizar:\n1: Dolar \n2: Libra \n3: Yenes \n4: Franco suizo \n5: Noruega \n6: Salir"));


	switch (num) {

	case 1: 
		valor = parseInt(prompt("Vas a cambiar a dolar, escribe una cantidad"));
		respuesta = valor * 1.16;
		alert(valor + "€ equivale a " + respuesta + "$.");
		break;
	case 2: 
		valor = parseInt(prompt("Vas a cambiar a libra, escribe una cantidad"));
		respuesta = valor * 0.86;
		alert(valor + "€ equivale a " + respuesta + " libras.");
		break;
	case 3: 
		valor = parseInt(prompt("Vas a cambiar a yenes, escribe una cantidad"));
		respuesta = valor * 129.05;
		alert(valor + "€ equivale a " + respuesta + " yenes.");
		break;
	case 4: 
		valor = parseInt(prompt("Vas a cambiar a franco suizo, escribe una cantidad"));
		respuesta = valor * 1.08;
		alert(valor + "€ equivale a " + respuesta + " francos suizos.");
		break;
	case 5: 
		valor = parseInt(prompt("Vas a cambiar a corona noruega, escribe una cantidad"));
		respuesta = valor * 10.13;
		alert(valor + "€ equivale a " + respuesta + " corona noruega.");
		break;
	case 6:
		alert("Hasta pronto");	

	}

}while(num != 6);

