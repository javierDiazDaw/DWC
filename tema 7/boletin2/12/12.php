<?php
    
    $array = [
        ["src"=>"https://sucursaldefelicidad.es/wp-content/uploads/2018/10/Coche-Juguete-Beetle-Classical-Rosa.jpg", "desc"=>"descripcion1","specs"=>["spec11", "spec12"]],
        ["src"=>"https://static.fnac-static.com/multimedia/Images/ES/NR/e7/2a/15/1387239/1520-1/tsp20170829124205/Figura-de-madera-Marvel-Spiderman.jpg", "desc"=>"descripcion2", "specs"=> ["spec21", "spec22"]],
    ];
        
    echo json_encode($array);

?>