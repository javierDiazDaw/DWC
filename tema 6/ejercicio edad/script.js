window.addEventListener('load', inicio);

function inicio (){

    
    document.getElementById('edad').addEventListener('blur', validar, false);
    

}

function validar (){

    var edad = document.getElementById('edad');

    if(edad.value < 18){
        mostrarMensaje();
    }else{
        document.getElementById('pId').remove();
    }

}


function mostrarMensaje (){

    var parrafo = document.createElement('p');
    parrafo.setAttribute("id", "pId")
    var error = document.createTextNode("No puede ser menor de edad");
    parrafo.appendChild(error);

    document.body.appendChild(parrafo);
}