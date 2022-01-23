/*window.addEventListener("load", inicio);

function inicio(){

    var div = document.createElement("div");
    div.setAttribute("style", "width: 100%; height: 100%;");
    document.body.appendChild(div);

    var imagen = document.createElement('img');
    imagen.setAttribute('src' , 'http://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c325.png');
    //imagen.setAttribute('style', 'position: absolute;');
    div.appendChild(imagen);
    
    imagen.addEventListener("mousemove", function(event){

        var x = event.clientX;
        var y = event.clientY;
    
        //Y se las coloco al div.
        imagen.style.left = x + "px";
        imagen.style.top = y + "px";

    });
}*/

window.addEventListener('load', iniciar);

function iniciar() {

    var container = document.getElementById('container');
    
    var img = document.createElement('img');
    img.setAttribute("src", "http://pngimg.com/uploads/pacman/pacman_PNG89.png");
    img.setAttribute("style", "position: absolute; width: 50px;")
    container.appendChild(img);
    

    container.addEventListener('mousemove', function(event) {

        x = event.clientX;
        y = event.clientY;

        img.style.left = x + "px";
        img.style.top = y + "px";

    });

}

