
$(function () {

    $("button").click(function () {            
        
        $.ajax({
           
            url: '9Ajax.php',
            //esto es solo se necesita para enviar
            //type: 'post',
            //beforeSend es opcional
            beforeSend: function () {
                $('#divId').html("Procesando, espere por favor...");
            },
            success: function (response) {
                //esto solo se necesita para convertir json en objeto
                //response = JSON.parse(response);
                $('#divId').html(response);
            }
        });    
    });
});



