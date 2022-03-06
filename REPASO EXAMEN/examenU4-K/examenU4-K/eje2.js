
var nombre="";
var miReg= new RegExp("^[a-zA-Z0-9]{7}$",'i');
var miRegDigito= new RegExp("[0-9]",'g');
do{
    nombre= prompt("Nombre de usuario?");
}while(!nombre.match(miReg));

var digitos= nombre.match(miRegDigito);
var cont=0;

function mostrarVentana() {
    cont++;
    if(cont==digitos.length){
        clearInterval(miVar);
    }
    var v=window.open("","","width=200,height=100, left=1500px, top=800px");
    v.document.write("Hola " + nombre+ ", Aquí tienes el producto del año. Atrévete a probarlo!!")
    
}
var miVar= setInterval(mostrarVentana, 3000);

