$(document).ready(function(){

    
    $("button").click(function(){    
        
        var pjQuery = $("<p>hola</p>").text("Párrafo con jQuery");
        var phtml = "<p>Párrafo con html</p>"; 
        var pdom = document.createElement("p");
        var textoDom = document.createTextNode("Párrafo con DOM");
        pdom.append(textoDom);
        
        $("body").prepend(phtml, pjQuery, pdom);

        
    });

    
});