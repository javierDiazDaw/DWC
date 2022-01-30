$(document).ready(function(){

    
    $("button").click(function(){        
        if ($("a").text()=="Google"){
            $("a").text("Google Earth");            
        }

        $('a').each(function() { 
            $(this).attr('href', 'http://www.google.es/intl/es/earth/index.html'); 
        });
    });

    
});