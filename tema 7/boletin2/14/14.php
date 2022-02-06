<?php
    
    $jsonDaw1 = [
         "Modulo1"=>"programación", 
         "Modulo2"=>"Base de datos",
         "Modulo3"=>"Lenguaje de marcas",
         "Modulo4"=>"Entorno de Desarrollo", 
         "Modulo5"=>"Formacion Profesional",
         "Modulo6"=>"Sistemas Informáticos"
        ];
  

    $jsonDaw2 = [
        "Modulo1"=>"Cliente", 
        "Modulo2"=>"Srevidor",
        "Modulo3"=>"Despliegue",
        "Modulo4"=>"Diseño", 
        "Modulo5"=>"Empresa"
        ];
        
    echo json_encode($jsonDaw1);
    echo json_encode($jsonDaw2);

?>