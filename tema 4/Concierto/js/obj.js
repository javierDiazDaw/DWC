var listaMap = new Map();
        listaMap.set("49028792",["Javier", "Diaz"]);
        listaMap.set("34598701",["Laura", "Reina"]);
        listaMap.set("35946876",["Josema", "Perez"]);       

var banda1 = new Banda("A", "2005", listaMap, 637923632, "Rumba");

var listaMap = new Map();
        listaMap.set("34576890",["Pedro", "Rodriguez"]);
        listaMap.set("64569873",["Marta", "Carrillo"]);
        listaMap.set("23486948",["Conchi", "Gil"]);       

var banda2 = new Banda("Power", "2006", listaMap, 285947665, "Heavy Metal");

var listaMap = new Map();
        listaMap.set("49028792",["Pepe", "Sanchez"]);
        listaMap.set("34598701",["Juan", "Garcia"]);
        listaMap.set("35946876",["Sara", "Trenas"]);       

var banda3 = new Banda("Triciclo", "1972", listaMap, 628912690, "Rumba");

var arrayBandas = new Array(banda1, banda2, banda3);

var clase = new Listado(arrayBandas);

document.write("<h3>" + "Imprimir listado Bandas:" + "</h3>" + "<br>");

var resultado3 = clase.imprimirListadoBandas();
for (let l in resultado3 ) {
	l.infoBanda();

}

document.write("<h3>" + "Buscar banda por estilo:" + "</h3>" + "<br>");

var resultado = clase.buscarBandaPorEstilo("Rumba");

resultado.infoBanda();
resultado.infoLista();

document.write("<h3>" + "Buscar banda por nombre:" + "</h3>" + "<br>");

var resultado = clase.buscarBandaPorNombre("Power");

resultado.infoBanda();
resultado.infoLista();

/*document.write("<h3>" + "Ordenar banda por año:" + "</h3>" + "<br>");

var resultado =clase.ordenarBandaPorAnio();
for (var l of resultado) {
	l.infoBanda();
}*/

document.write("<h3>" + "Eliminar banda por nombre:" + "</h3>" + "<br>");

var resultadoBorrar = clase.eliminarBandaPorNombre("A");

document.write(resultadoBorrar + "<br>");

resultadoBorrar = clase.imprimirListadoBandas();
for (let l in resultadoBorrar ) {
	l.infoBanda();	

}
