window.addEventListener("load", inicio);

function inicio(){
    let formulario = document.getElementById('confirmar');
    formulario.addEventListener('click', setCookie);
}

function setCookie(nombreValidar, habitacionValidar, cafe){
    var nombreValidar = document.getElementById("nombre").value;   

    var habitacionValidar= document.getElementById("habitacion").value;   

    var cafe = (document.forms["formulario"].cafe.value);   

   document.cookie = nombreValidar + ", " + habitacionValidar + ", " + cafe ;

   document.write(document.cookie); 
}


function getCookie(nombreValidar){

    lista = document.cookie.split(";")
         for (i in lista) {
             buscarCookie = lista[i].search(nombreValidar)
             if (buscarCookie > -1) {micookie=lista[i]}
             }
         igual = micookie.indexOf("=")
         valor = micookie.substring(igual+1)
         return valor
         
}



