window.addEventListener('load', lista);

function lista(){

    var datosJson = [
        {src:"/img/img1.jpg", 
        desc: "Coche de carreras", 
        specs: ["plastico", "12€"]},

        {src:"/img/img1.jpg", 
        desc: "Spiderman desmontable", 
        specs: ["madera", "7€"]},
        ];

    var div = document.createElement("div");
    var h1 = document.createElement("h1");
    textSub = document.createTextNode("Tienda de juguetes");
    h1.appendChild(textSub);
    div.appendChild(h1);

    var ul = document.createElement("ul");      
    
    for (let i = 0; i < datosJson.length; i++) {
        
        var li = document.createElement("li");

        var imagen = document.createElement("img");
        imagen.setAttribute("src", datosJson[i].src);
        li.appendChild(imagen); 
        
        var p = document.createElement("p");
        var textoP = document.createTextNode(datosJson[i].desc);
        p.appendChild(textoP);
        li.appendChild(p);
        
        var ul2 = document.createElement("ul");
        ul2.setAttribute("class", "spec");
        li.appendChild(ul2);

       for (let j = 0; j < datosJson[i].specs.length; j++) {
           
            var li2 = document.createElement("li");
            var texto2 = document.createTextNode(datosJson[i].specs[j]);
            li2.appendChild(texto2);
            ul2.appendChild(li2);              

       } 

       ul.appendChild(li);
    }
        
    div.appendChild(ul);    
    document.body.appendChild(div);


}
