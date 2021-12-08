var menu;
var respuesta;

do{

menu = parseInt(prompt("Elige el cambio que quieres realizar:\n1: Redondeo a su inmediato superior de un número \n"+
															"2: Redondeo a su inmediato inferior de un número \n"+
															"3: Redondeo al número más cercano \n"+
															"4: Cálculo del número máximo entre dos dados \n"+
															"5: Cálculo del número mínimo entre dos dados \n"+
															"6: Cálculo de un número elevado a otro \n"+
															"7: Cálculo de la raíz cuadrada de un número \n"+
															"8: Salir"));


	switch (menu) {

	case 1: 
		num = parseInt(prompt("Escribe un numero"));
		respuesta = Math.ceil(num);
		alert("Su numero redondeado es " + respuesta);
		break;
	case 2: 
		num = parseInt(prompt("Escribe un numero"));
		respuesta = Math.floor(num);
		alert("Su numero redondeado es " + respuesta);
		break;
	case 3: 
		num = parseInt(prompt("Escribe un numero"));
		respuesta = Math.round(num);
		alert("Su numero redondeado es " + respuesta);
		break;
	case 4: 
		num = parseInt(prompt("Escribe un numero"));
		num2 = parseInt(prompt("Escribe un numero"));
		respuesta = Math.max(num,num2);
		alert("Su numero mas alto es " + respuesta);
		break;
	case 5: 
		num = parseInt(prompt("Escribe un numero"));
		num2 = parseInt(prompt("Escribe un numero"));
		respuesta = Math.min(num,num2);
		alert("Su numero mas bajo es " + respuesta);
		break;
	case 6: 
		num = parseInt(prompt("Escribe un numero"));
		numElevado = parseInt(prompt("Escribe otro numero"))

		respuesta = Math.pow(num, numElevado);
		alert("Su numero " + num + " elevado a "+ numElevado + " es " + respuesta);
		break;
	case 7: 
		num = parseInt(prompt("Escribe un numero"));

		var raizCuadrada = Math.sqrt(num)
		respuesta = raizCuadrada;
		alert("La raíz cuadrada del número " + num + " es " + respuesta);
		break;
	case 8:
		alert("Hasta pronto");	

	}

}while(menu != 7);

