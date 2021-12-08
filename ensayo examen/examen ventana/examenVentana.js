
var ventana;

function init(){

    setTimeout(function(ventana){

    	var nuevaVentana = "Bienvenido";

		var altura=380;
		var anchura=630;
			 
		// calculamos la posicion x e y para centrar la ventana
		var y=parseInt((window.screen.height/2)-(altura/2));
		var x=parseInt((window.screen.width/2)-(anchura/2));
                                 // abre una nueva ventana
        ventana = window.open("","",'width='+anchura+',height='+altura+',top='+y+',left='+x+',toolbar=no,location=no,status=no,menubar=no,scrollbars=no,directories=no,resizable=no');
		ventana.document.write(nuevaVentana);

		ventana.document.getElementById("cerrar-ventana").onclick=cerrar;

		ventana.document.write('<form><input type="button" id="cerrar-ventana" value="Cerrar"></form>');

		return ventana;

    },5000);

    return ventana;


}

function cerrar(){
                ventana.close();
                ventana=null;
            }
