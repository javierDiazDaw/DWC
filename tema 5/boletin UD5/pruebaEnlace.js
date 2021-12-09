window.addEventListener("load", inicio);

function inicio(){

    var x = document.getElementById("enlace");
    x.addEventListener("mouseover", myFunction);
    x.addEventListener("mouseout", mySecondFunction);
}



function myFunction() {
  document.getElementById("idEnlace").innerHTML += "Hola<br>";
}

function mySecondFunction() {
  document.getElementById("idEnlace").style.backgroundColor= 'green';
}