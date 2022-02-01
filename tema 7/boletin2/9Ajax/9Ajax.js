$(function () {

    $("button").click(function () {

            
        
        $.ajax({
            data: parametros,
            url: '9Ajax.php',
            type: 'post',
            beforeSend: function () {
                $(data).html("Procesando, espere por favor...");
            },
            success: function (sePuedePonerLoQueQuieras) {
                $(data).html(sePuedePonerLoQueQuieras);
            }
        });    
    });
});



