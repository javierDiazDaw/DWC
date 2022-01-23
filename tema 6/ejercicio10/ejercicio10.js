window.addEventListener("load", iniciar);


function iniciar(){

    cuerpo();

    document.getElementById('caja').addEventListener('mousemove', mostrarCoordenadas, false);
}

function cuerpo(){

    //H1
    var posicion = document.createElement('h1');
    posicion.setAttribute("id", "muestraCoordenadas")
    var textoCoordenadas = document.createTextNode("Coordenada X:  - Coordenada Y: ");
    posicion.appendChild(textoCoordenadas);
    document.body.appendChild(posicion);

    //Caja
    var div = document.createElement('div');
    div.setAttribute("id", "caja");
    document.body.appendChild(div);

}

function mostrarCoordenadas(event){    
        var x = event.clientX;
        var y = event.clientY;
        var coordenadas = document.getElementById("muestraCoordenadas");
        coordenadas.innerHTML = "Coordenada X:  " + x + "- Coordenada Y: " + y;

}