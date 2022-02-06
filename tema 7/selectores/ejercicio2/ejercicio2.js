$(function(){
    //a
    $("ul").first().css({"background-color": "cyan"});
    //b
    $("[href='SImod.html']").css({"color": "red"});
    //c
    $("a[href='SImod.html']").parent().next().children().css({"color": "green"});
    //d
    $("a[href='SImod.html']").parent().nextAll().children().css({"color": "purple"});
    //e
    $("[href]").css("background-color", "yellow");
    //f
    $("a:not([href])").css("background-color", "red");
    //g
    $('a[href*="mod"]').css("font-size", "x-large");
    //h
    $('a[href^="mod"]').css("font-size", "xx-large");
    //i
    $("a[href$='.html']").css("color", "white");
    //j   
    //$("li").children().children(":contains('hora')").css({"border":"3px solid red"});
    //$("li").children().children().next().css({"border":"3px solid red"});
    $("ul:eq(1)>li>ul>li:last-child").css({"border":"3px solid blue"});
    //k
    $(":empty").text("Nodo Vacío");
    //l
    $("li:contains('DWESE')").css({"border":"3px solid red"});
    $("li:contains('DAW')").css({"border":"3px solid red"});
    $("li:contains('EIE')").css({"border":"3px solid red"});
});