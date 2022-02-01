$(document).ready(function(){
   
    $("button").click(function() {
        var image = new Image();
       var src = "";    
        var src = 'https://i.blogs.es/594843/chrome/450_1000.jpg';

        if (src == "") {
            $("div").text("Error al cargar imagen");
        }else{
            image.src = src;    
            $('div').append(image);
        }
        
    });
 
 });