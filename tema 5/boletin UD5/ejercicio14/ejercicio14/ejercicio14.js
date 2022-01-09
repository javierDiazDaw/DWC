window.addEventListener("load", inicio);

function inicio(){
    let formulario = document.getElementById('confirmar');
    formulario.addEventListener('click', setCookie);
}

function setCookie(){

    //recoge los datos
    var nombreValidar = document.getElementById("nombre").value;   
    var habitacionValidar= document.getElementById("habitacion").value;  
    var cafe = (document.forms["formulario"].cafe.value);   

    //envía las cookies
   document.cookie = nombreValidar+", "+habitacionValidar+", "+cafe ;

   //recarga la página   
   location.reload()
}


function getCookie(){
    //recojo el usuario y la habitación
    var nombreValidar = document.getElementById("nombre").value;   
    var habitacionValidar= document.getElementById("habitacion").value;  

    //miro si esta la cookie con la clave usuario+habitacion
    if (document.cookie.split(';').some((item) => item.trim().startsWith(nombreValidar+habitacionValidar+"="))) {
        
        //si esta guardo el valor de la clave
        const cafe = document.cookie
        .split('; ')
        .find(row => row.startsWith(nombreValidar+habitacionValidar+"="))
        .split('=')[1];
        
        //marca el cafe 
        document.getElementById(cafe).checked = true;
        
        //envia la alerta de una oferta
        alert(nombreValidar+" tienes una oferta en su cafe favorito "+cafe);
        
        // const output = document.getElementById('cookie-value')
        // output.textContent = cafe;
    }


    /*lista = document.cookie.split(";")
         for (i in lista) {
             buscarCookie = lista[i].search(nombreValidar)
             if (buscarCookie > -1) {micookie=lista[i]}
             }
         igual = micookie.indexOf("=")
         valor = micookie.substring(igual+1)
         return valor*/
         
}



