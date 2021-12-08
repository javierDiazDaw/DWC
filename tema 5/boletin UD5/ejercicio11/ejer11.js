window.addEventListener("load", inicio);

function inicio(){
    var elementos=document.getElementById("enlace").value;
    for(var i=0; i<elementos.elements.length;i++){
        elementos.elements[i].addEventListener('onmouseover', puntero, false);
    }
}

function puntero(e){
    if(e.currentTarget.name == "NameEnlace"){
        enlaceID = document.getElementById("enlace") 

        document.write.style.color='red';
    }
}





