$(document).ready(function(){

    $("#b1").click(function(){
      $("div").slideDown(3000).animate({left: '250px',
                                        opacity: '0.5',
                                        fontSize: '2em'}, "slow");
    });
    $("#stop").click(function(){
      $("div").stop();

    });

  });