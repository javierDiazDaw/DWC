var expresion = /^[a-zA-Z0-9]{7}$/i
var correcto = false;

do {
    var usuario = prompt("Escribe tu usuario");
    if( expresion.test(usuario) == false){
        alert("El usuario debe contener 7 digitos o caracteres");
        correcto = false;
        
    }else{
        alert("Usuario correcto");
        correcto = true;
    }
   
}while (correcto == false);

 
var cantidad = (''+usuario).length;
document.write(cantidad);


var altura=380; 
var anchura=630;
 
// calculamos la posicion x e y para centrar la ventana

//Ventana centro
//var y=parseInt((window.screen.height/2)-(altura/2));
//var x=parseInt((window.screen.width/2)-(anchura/2));

//Ventana superior derecha
//var y=parseInt((window.screen.height/4)-(altura/1));
//var x=parseInt((window.screen.width/1)-(anchura/4));

//Ventana superior izquierda
//var y=parseInt((window.screen.height/4)-(altura/1));
//var x=parseInt((window.screen.width/4)-(anchura/1));

//Ventana inferior izquierda
//var y=parseInt((window.screen.height/1)-(altura/4));
//var x=parseInt((window.screen.width/4)-(anchura/1));

//Ventana inferior derecha
var y=parseInt((window.screen.height/1)-(altura/4));
var x=parseInt((window.screen.width/1)-(anchura/4));


var nuevaVentana;

    nuevaVentana = window.open("","",'width='+anchura+',height='+altura+',top='+y+',left='+x+',toolbar=no,location=no,status=no,menubar=no,scrollbars=no,directories=no,resizable=no');
    nuevaVentana.document.write("Hola " +  usuario + ". Aquí tienes el producto del año. Atrévete a probarlo!!");
