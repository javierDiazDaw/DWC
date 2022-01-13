window.addEventListener('load', lista);

function lista(){

    var div = document.createElement("div");
    var h1 = document.createElement("h1");
    textSub = document.createTextNode("Subtituloo");
    h1.appendChild(textSub);
    div.appendChild(h1);

    var ul = document.createElement("ul");
    var datosJson = [
        {src:"/img/img1.jpg", desc: "descripcion1", specs: ["spec11", "spec12"]},
        {src:"/img/img2.jpg", desc: "descripcion2", specs: ["spec21", "spec22"]},
        ];
    
    var lista = document.getElementsByTagName('li');

    for (let i = 0; i < lista.length; i++) {
        
        var li = document.createElement("li");
        var imagen = document.createElement("img");
        imagen.setAttribute("src", "");
        li.appendChild(imagen);
        
        var p = document.createElement("p");
        var ul2 = document.createElement("ul");
        ul2.setAttribute("class", "");
    }
        
    div.appendChild(ul);    
    document.body.appendChild(div);


}
