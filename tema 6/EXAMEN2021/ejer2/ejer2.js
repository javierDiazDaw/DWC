window.addEventListener("load", iniciar);

function iniciar() {
         document.getElementById('boton').addEventListener('click', validar);
}
    

function validar() {

    var expresion = /^[A-Z]{3}-\d{1,5}$/;
    var codigo = document.getElementById("codigo").value;

    if (expresion.test(codigo) == false) {
        document.getElementById('error').innerHTML = 'codigo incorrecto';
    }else {
        guardar();
    }
}    

function guardar(){

    //Con cookie
    // var validarCodigo = document.getElementById("codigo").value; 

   //el nombre ('producto') debe ser cambiado para no sobreescribir la cookie
   // document.cookie = "producto1 =" + validarCodigo;
    
    location.reload();    

    //Con storage
    var validarCodigo = document.getElementById("codigo").value;
    
        console.log(localStorage.getItem("codigo"));
		localStorage.setItem("codigo", validarCodigo);
}

