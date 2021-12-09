window.addEventListener('load', iniciar);

function iniciar() {

    var usu = document.getElementById("usuario");
    var direc = document.getElementById("direccion");
    

    usu.addEventListener('blur', function(event) {
        if ( event.target.value = " ") {
            alert("El campo nombre debe estar relleno");
        }
    }, true);

    direc.addEventListener('blur', function(event) {
        if ( event.target.value = " ") {
            alert("El campo direccion debe estar relleno");
        }
    }, true);

    
}





