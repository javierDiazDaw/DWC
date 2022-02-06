<?php
        
    if ($_POST["valorOpcion"]=="daw1") {

        $jsonDaw1 =[[
            "Modulo1"=>"programación", 
            "Modulo2"=>"Base de datos",
            "Modulo3"=>"Lenguaje de marcas",
            "Modulo4"=>"Entorno de Desarrollo", 
            "Modulo5"=>"Formacion Profesional"            
           ]];

        echo json_encode($jsonDaw1);
    }

    if($_POST["valorOpcion"]=="daw2") {

        $jsonDaw2 = [[
            "Modulo1"=>"Cliente", 
            "Modulo2"=>"Servidor",
            "Modulo3"=>"Despliegue",
            "Modulo4"=>"Diseño", 
            "Modulo5"=>"Empresa"
            ]];

        echo json_encode($jsonDaw2);
    }    
    
    

?>