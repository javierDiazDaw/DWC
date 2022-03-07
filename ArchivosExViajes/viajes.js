//Javier Díaz Román

$(function(){

    //Creacion de Ajax
    $.ajax({

        //Conexión con viajes.php mediante post
        url:'viajes.php',
        type:'post',

        success: function (response) {

            /**
             * analiza una cadena de texto como JSON, 
             * transformando el valor producido.
             */

            arrViajes = JSON.parse(response);

            //Creación del DOM mediante jquery

            var div = $("<div class='todos-los-viajes'></div>");
            $("body").append(div);
            var h1 = $("<h1>").text("Viajes guía incluido");
            div.append(h1);
            var ul = $("<ul>");
            div.append(ul);

            for (let i = 0; i < arrViajes.length; i++) {
                
                var li = $("<li>");
                li.addClass('viajes ' + arrViajes[i].clase_pais);
                ul.append(li);

                var h2 = $("<h2>").text(arrViajes[i].ciudad_h2);
                li.append(h2);

                var span = $("<span>").addClass("detalle");
                span.text(arrViajes[i].detalle_precio_total + '€ por ' + arrViajes[i].detalle_num_noches + ' noches. ');
                li.append(span);

                var spanNoche = $("<span>").addClass("por-noche");
                li.append(spanNoche);
                var spanPrecio = $("<span>").addClass("precio").text(arrViajes[i].precio_noche + '€ /noche ');
                spanNoche.append(spanPrecio);

                var button = $("<button>").addClass("reserva").text('Resérvalo ya!');
                li.append(button);

                var ul2 = $("<ul>");
                ul2.addClass("fotos");
                div.append(ul2);

                var li2 = $("<li>");
                ul2.append(li2);                
                    
                    var img = $("<img>", {"src": arrViajes[i].ruta_imagen});
                    li2.append(img);

                    var spanPie = $("<span>").text(arrViajes[i].pie_imagen);
                    li2.append(spanPie);                    
                 
            }

            //funcion para añadir la clase 'descatada'
            $("img").mouseover(function(){
                $(this).parent().parent().find(".precio").toggleClass('destacada');                
            });

            $("spanPie").mouseover(function(){
                $(this).parent().parent().sibling("spanNoche.por-noche").toggleClass('destacada');                
            });

            //funcion para ocultar u mostrar pie de pagina haciendo click en la imagen
            $("img").click(function(){
                $(this).next().toggle();
                
            });

            
            

        }
    })

})