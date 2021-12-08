
var p1 = new Piloto("Jose Ángel", "Ferrari");

document.write("<br>");

var p2 = new Piloto("Andrea", "Mercedes");

document.write("<br>");

var p3 = new Piloto("Sara", "Trenas");

document.write("<br>");

var sesion = new Array();

sesion.push([p1, 6000]);
sesion.push([p2, 3000]);
sesion.push([p3, 1000]);


for (let item of sesion) {
	item[0].infoPiloto();
	document.write(" " + item[1] + "<br>")
	document.write("<br>");
}

//sesion.borrarArray();


for (let item of sesion) {
	document.write(item[0].nombre + " " + item[0].escuderia + " " + item[1] + "milisegundos" + "<br>");
}

document.write("<br>");

var ordenarTiempo = sesion.sort(sortFunction);



document.write(ordenarTiempo + "<br>");