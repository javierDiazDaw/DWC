$(function () {

    //$("button").click(function(){

        $("select.select").change(function(){
       
            var seleccion = $(this).children("option:selected").val();
          
    
            //var valorOpcion1 = $("#opcion1").val();
            //var valorOpcion2 = $("#opcion2").val();
    
            var parametros = {
                "valorOpcion" : seleccion,
                
            };
    
            $.ajax({
                data: parametros,
                url: '14.php',
                type: 'post',
    
                success: function (response) {
    
                    jsonDaw = JSON.parse(response);
    
                     var ul = $("<ul></ul>");
                     $("body").append(ul);
         
                     for (let i = 0; i < jsonDaw.length; i++) {
                         var li1 =$("<li></li>").text(jsonDaw[i].Modulo1);
                         var li2 =$("<li></li>").text(jsonDaw[i].Modulo2);
                         var li3 =$("<li></li>").text(jsonDaw[i].Modulo3);
                         var li4 =$("<li></li>").text(jsonDaw[i].Modulo4);
                         var li5 =$("<li></li>").text(jsonDaw[i].Modulo5);                     
                         ul.append(li1);
                         ul.append(li2);  
                         ul.append(li3); 
                         ul.append(li4); 
                         ul.append(li5); 
                                      
                     }  
                     
                     //$(div).html(response);
    
                }
            });
    
        });


    //})
       

});