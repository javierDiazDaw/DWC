$(function () {

    $("button").click(function () { 
        
        var datos = $('#formulario').serialize();
        
        $.post("11.php", datos);    
    });
});