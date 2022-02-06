<?php
    
    $array = [
        ["src"=>"https://m.media-amazon.com/images/I/514JM7v9dVL._AC_SX679_.jpg", "desc"=>"descripcion1","specs"=>["spec1.1", "spec1.2"]],
        ["src"=>"https://i.ebayimg.com/images/g/eQsAAOSw9xJcAhgW/s-l300.jpg", "desc"=>"descripcion2", "specs"=> ["spec2.1", "spec2.2"]],
    ];
        
    echo json_encode($array);

?>