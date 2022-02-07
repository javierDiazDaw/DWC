//Javier Díaz Romań
$(function () {

    //se envian los datos al archivo php
    $("button").click(function () { 
        
        var nombre = $("#nombre").val();
        var apellidos = $("#apellidos").val();

        //creación del json
        var datos = {
            "nombre": nombre,
            "apellidos": apellidos
        };
        
        //Creacion de Ajax
        $.ajax({
            
            //Conexión con el archivo 2.php mediante post
            data: datos,
            url: '2.php',
            type: 'post',            
            
        });    
    });
});