$(document).ready(function(){

    
    $("button").click(function(){
        $(this).next().toggle();
        if ($(this).text()=="esconder"){
            $(this).text("mostrar");
        }else{
            $(this).text("esconder");
        }
        
    });

    
});