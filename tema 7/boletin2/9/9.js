$(function () {

    $("button").click(function () {

        //esa funcion trata la información que sea, para recibir y tratar esa informacion con algo
        $.post("9.php", function (data, status) {
                $("div").text(data);
            });
    });
});