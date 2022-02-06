$(document).ready(function(){
    
    $(".b1").click(function(){        
        var texto = $("p").text(); //para texto
        alert(texto);
       
    });

    $(".b2").click(function(){ 
        var html = $("p").html(); //indica etiquetas html
        alert(html);

    });

    $(".b3").click(function(){
        var input = $("input").val(); //para el contenido de los imput
        alert(input);
    });

    $(".b4").click(function(){
        var texto = $("a").text(); 
        alert(texto);
    });

});