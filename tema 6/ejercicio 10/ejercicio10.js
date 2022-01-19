window.addEventListener("load", iniciar);

function iniciar(){

    document.getElementById('divId').addEventListener('onmousemover', 
    mostrarCoordenadas, false);
}

function mostrarCoordenadas(event){

    
        var x = event.clientX;
        var y = event.clientY;
        var coordenadas = "X coordenada: " + x + ", Y coordenada: " + y;
        document.getElementById("divId").innerHTML = coordenadas;
   

}