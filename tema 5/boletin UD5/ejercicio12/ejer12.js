window.addEventListener("load", inicio);

function inicio(){
    var posar=document.getElementById("enlace").value;
    
        posar.addEventListener('mouseover', puntero, false);
    
}

function puntero(e){

    document.getElementById("enlace").innerHTML += "Moused over!<br>";


    /*if(e.currentTarget.name == "NameEnlace"){
        enlaceID = document.getElementById("enlace") 

        document.write.style.color='red';
    }*/
}





