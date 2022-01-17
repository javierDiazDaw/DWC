window.addEventListener("load", inicio);


function inicio(){
    var enlace = document.createElement("a");
    enlace.setAttribute("href","https://www.youtube.com/");
    enlace.setAttribute("id" , "enlace");
    var textoEnlace = document.createTextNode("pincha aquí"); 
    enlace.appendChild(textoEnlace);

   document.getElementById("enlace").addEventListener('mouseover', mouseOver);
   // document.getElementById("enlace").addEventListener('mouseout', mouseOut);

    document.body.appendChild(enlace);
}  

function mouseOver(e){
    document.getElementById("enlace").style.backgroundColor = "red";
}

function mouseOut(e){
    document.getElementById("enlace").style.backgroundColor = "white";
}







