$(function () {

    $.ajax({

        url: '12.php',
        type: 'post',

        success: function (response) {

            arrayViajes = JSON.parse(response);

            var div = $("<div class='todos-los-viajes'></div>");
            $("body").append(div);
            var h1 = $("<h1></h1>").text("Subtitulo");
            div.append(h1);
            var ul = $("<ul></ul>");
            div.append(ul);

            for (let i = 0; i < arrayViajes.length; i++) {

                var li = $("<li></li>");
                ul.append(li);                  

                var img = $("<img src=" + arrayViajes[i].src + "/>");
                li.append(img);

                var p = $("<p></p>").text(arrayViajes[i].desc);
                li.append(p);

                var ul2 = $("<ul class='specs'</ul>");
                li.append(ul2);

                for (let j = 0; j < arrayViajes[i].specs.length; j++) {

                    var li2 = $("<li></li>").text(arrayViajes[i].specs[j]);
                    ul2.append(li2);
                }

            }

        }

    });

});