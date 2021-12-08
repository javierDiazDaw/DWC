window.addEventListener("load", inicio);

function inicio(){
    /*let formulario = document.getElementById('confirmar');
    formulario.addEventListener('click', validar);*/
    var elementos=document.forms[0];
    for(var i=0; i<elementos.elements.length;i++){
        elementos.elements[i].addEventListener('click', validar, false);
    }

}

function validar(e){
    if(e.currentTarget.name == "animal"){
        divPregunta1 = document.getElementById("pregunta1")

        if(e.currentTarget.value=="orca"){
            divPregunta1.innerHTML= "Correcto";
        }else{
            divPregunta1.innerHTML= "Incorrecto. La resopuesta correcta es Orca";
        }
        
        //NOTA: INNERhtml -----> introduce un texto en una etiqueta div
    }

    else if(e.currentTarget.name == "vehiculo"){
        divPregunta2 = document.getElementById("pregunta2")

        if(e.currentTarget.value=="patines"){
            divPregunta2.innerHTML= "Correcto";
        }else{
            divPregunta2.innerHTML= "Incorrecto. La respuesta correcta es Patines";
        }
        
    }
}