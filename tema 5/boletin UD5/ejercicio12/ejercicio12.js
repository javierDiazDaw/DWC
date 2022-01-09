window.addEventListener("load", inicio);

function inicio(){
    document.getElementById("enlace").addEventListener('mouseover', mouseOver);
    document.getElementById("enlace").addEventListener('mouseout', mouseOut);
}  

function mouseOver(e){
    document.getElementById("enlace").style.backgroundColor = "red";
}

function mouseOut(e){
    document.getElementById("enlace").style.backgroundColor = "white";
}







