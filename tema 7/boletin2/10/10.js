$(function () {

    $("button").click(function () { 
        
        var nombre = $("#nombre").val();
        var apellidos = $("#apellidos").val();

        //json
        var datos = {
            "nombre": nombre,
            "apellidos": apellidos
        };
        
        $.ajax({
            
            data: datos,
            url: '10.php',
            type: 'post',
            
            // se usa para recoger los datos
            // success: function (response) {
            //     esto solo se necesita para convertir json en objeto
            //     respuesta = JSON.parse(response);
            //     $('#divId').html(response);
            // }
        });    
    });
});