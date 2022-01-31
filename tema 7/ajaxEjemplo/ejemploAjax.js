
$(function(){

    $("#boton").click(function(){

        var valorCaja1 = $("#valor1").val();
        var valorCaja2 = $("#valor2").val();

        //json
        var parametros = {
            "valorCaja1": valorCaja1,
            "valorCaja2": valorCaja2
        };

        $.ajax({
            data: parametros,
            url: 'ejemploAjax.php',
            type: 'post',
            beforeSend: function () {
                $("#resultado").html("Procesando, espere por favor...");
            },
            success: function (sePuedePonerLoQueQuieras) {
                $("#resultado").html(sePuedePonerLoQueQuieras);
            }
        });
    });

});


