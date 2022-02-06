$(function(){

    //a
    $("p").attr("class","borde");
    //b
    $("ul[data-hours]").parent("li").attr("class", "verde");    
    //c
    $("p").removeClass("borde");
    //d
    $("p").click(function(){
		$(this).toggleClass("borde");
	});	
    //e
    $("p:contains('Primero')").text("Módulos de primero");
    //f
    $("p:contains('Segundo')").text("Módulos de segundo ");
    //g
    $(":empty").remove();
    //h
    $("p:contains('Módulos de primero')").next("ul").append("<li>Módulo de fol</li>");
    //i
    $("p:contains('Módulos de primero')").next("ul").children("li:first").before("<li>Módulo de programación</li>");
    //j
    $("li:contains('Base de Datos')").append("<li>Módulo de sistemas informáticos</li>");    
    //k
    /*$("p:contains('Módulos de segundo')").next("ul").children().children().click(function(){
        $(this).css("color", "blue");
    });*/
    $("ul").eq(1).children().children().parent().click(function () {
        var horas = $(this).children().first().attr("data-hours");
        var nombre = $(this).children().first().children().first().text();

        var li = document.createElement("li");
        li.appendChild(document.createTextNode(horas + ", " + nombre));
        $(this).children().first().append(li);
    });
    //l
    //$("p:contains('Módulos de segundo')").next().children().empty();
    //$("ul").eq(1).children().empty();
    //m
    //$("p:contains('Módulos de primero')").next().remove();
   // $("ul:first").remove();

});