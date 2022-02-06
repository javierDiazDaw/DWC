$(document).ready(function(){
   
    $("#b1").focus(function(){
        $("input").css("background-color", "yellow");
      });
    $("#b2").blur(function(){
        $("input").css("background-color", "white");
      });
 
 });