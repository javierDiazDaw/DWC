
$(function () {

    $("button").click(function () {            
        
        $.ajax({
           
            url: '9Ajax.php',
            type: 'post',
            beforeSend: function () {
                $('#divId').html("Procesando, espere por favor...");
            },
            success: function (response) {
                response = JSON.parse(response);
                $('#divId').html(response);
            }
        });    
    });
});



