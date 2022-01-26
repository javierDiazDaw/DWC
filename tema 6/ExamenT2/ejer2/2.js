// JAVIER DIAZ ROMAN
window.addEventListener('load', inicio);

function inicio (){

    
    document.getElementById('codigo').addEventListener('blur', validar, false);   
    

}

function validar (){

    var expresion = /^[A-Z]{3}-\d{1,5}$/;

    var codigo = document.getElementById('codigo').value;

    if(expresion.test(codigo) == false){
        document.getElementById('error').innerHTML = 'codigo incorrecto';
    }else{
        document.getElementById('error').innerHTML = '';
        document.getElementById('boton').addEventListener('click', enviar, false);
    }

}

function enviar(){

    var validarCodigo = document.getElementById("codigo").value;

    sessionStorage.setItem("codigo", validarCodigo);
}
