$(function () {

    $("button").click(function () {

        $.post("9.php", function (data, status) {
                $("div").text(data);
            });
    });
});