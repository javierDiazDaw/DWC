window.addEventListener('load', iniciar);

function iniciar(){
    lista();
    desplegable();
}

function lista(){

    var datosJson = [
        {src:"https://sucursaldefelicidad.es/wp-content/uploads/2018/10/Coche-Juguete-Beetle-Classical-Rosa.jpg", 
        desc: "Coche de carreras", 
        specs: ["plastico", "12€"]},

        {src:"https://static.fnac-static.com/multimedia/Images/ES/NR/e7/2a/15/1387239/1520-1/tsp20170829124205/Figura-de-madera-Marvel-Spiderman.jpg", 
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

function desplegable(){

    var imagen = document.getElementsByTagName("img");
    for (let i = 0; i < imagen.length; i++) {
        imagen[i].addEventListener("click", mostrarElementos);
        
    }
}

function mostrarElementos(){

    if (this.nextSibling.style.display=='none') {
       var visible = "";
      }else{
        visible = "none";
      }
      var padre = this.parentNode;
      var arrayHijos = padre.childNodes;
      for (let i = 1; i < arrayHijos.length; i++) {
        arrayHijos[i].style.display=visible;

      }

      

}
