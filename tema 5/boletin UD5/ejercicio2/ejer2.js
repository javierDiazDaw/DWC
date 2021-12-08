//window.onload = inicio; //cuando se recargue la pagina hace esto y es cuando se ejecuta

window.addEventListener("load", inicio);

function inicio(){
    let formulario = document.getElementById('confirmar');
    formulario.addEventListener('click', validar);
}

function validar() {

    /*var nombre = (document.forms["formulario1"].nombre.value).toUpperCase();
    var apellidos = (document.forms["formulario1"].apellidos.value).toUpperCase();
    var nombreUsuario = (document.forms["formulario1"].nombreUsuario.value).toUpperCase();
    var contrasenia = (document.forms["formulario1"].contrasenia.value).toUpperCase();
    var confirmarContrasenia = (document.forms["formulario1"].confirmarContrasenia.value).toUpperCase();
    var dia = (document.forms["formulario1"].dia.value).toUpperCase();
    var mes = (document.forms["formulario1"].mes.value).toUpperCase();
    var anio = (document.forms["formulario1"].anio.value).toUpperCase();    
    var sexo = (document.forms["formulario1"].sexo.value).toUpperCase();
    var telefono = (document.forms["formulario1"].telefono.value).toUpperCase();
    var contrasenia = (document.forms["formulario1"].contrasenia.value).toUpperCase();
    var correo = (document.forms["formulario1"].correo.value).toUpperCase();*/


    var nombre = document.getElementById("nombre").value.toUpperCase();
    var apellidos = document.getElementById("apellidos").value.toUpperCase();
    var nombreUsuario = document.getElementById("nombreUsuario").value.toUpperCase();
    var contrasenia = document.getElementById("contrasenia").value.toUpperCase();
    var confirmarContrasenia = document.getElementById("confirmarContrasenia").value.toUpperCase();
    var dia = document.getElementById("dia").value.toUpperCase();
    var mes = document.getElementById("mes");
    var valorMes = mes.options[mes.selectedIndex].value.toUpperCase();
    var anio = document.getElementById("anio").value.toUpperCase();
    var sexo = document.getElementById("sexo");
    var valorSexo = sexo.options[sexo.selectedIndex].value.toUpperCase();
    var telefono = document.getElementById("telefono").value;
    var correo = document.getElementById("correo").value.toUpperCase();

       
   /* document.write(nombre + "<br>");
    document.write(apellidos + "<br>");
    document.write(nombreUsuario + "<br>"); 
    document.write(contrasenia + "<br>");
    document.write(confirmarContrasenia + "<br>");
    document.write(dia + "<br>");
    document.write(mes + "<br>");
    document.write(anio + "<br>");  
    document.write(sexo + "<br>");
    document.write(telefono + "<br>");
    document.write(correo + "<br>");*/

    var ventana;

    ventana = window.open("","" , "height=400,width=800");
    ventana.document.write("<br>");
    ventana.document.write(nombre + "<br>");
    ventana.document.write(apellidos + "<br>");
    ventana.document.write(nombreUsuario + "<br>"); 
    ventana.document.write(contrasenia + "<br>");
    ventana.document.write(confirmarContrasenia + "<br>");
    ventana.document.write(dia + "<br>");
    ventana.document.write(valorMes + "<br>");
    ventana.document.write(anio + "<br>");  
    ventana.document.write(valorSexo + "<br>");
    ventana.document.write(telefono + "<br>");
    ventana.document.write(correo + "<br>");
    
}