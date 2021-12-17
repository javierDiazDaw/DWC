window.addEventListener("load", inicio);

function inicio(){
    let formulario = document.getElementById('confirmar');

    var nombre = document.getElementById("nombre").value; 
    //var habitacion= document.getElementById("habitacion").value; 
    //var cafe = (document.forms["formulario"].cafe.value); 

    formulario.addEventListener('click', localStorage.setItem("usuario", nombre));
}







