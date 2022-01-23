window.addEventListener('load', iniciar);

/**
 * mostrar tabla = lista;
 *        enlace = mostrar juguetes;
 *        evento = evento;
 * 
 */

 function iniciar(){

  document.getElementsByTagName('h1')[0].addEventListener('click', ocultarMostrarTitulo);
  

}

function lista(){

    arrayJuguetes = [	{	img:"https://juguettos.com/1361787-large_default/A0041951.jpg", 
                        precio:"14,99",
			            href:"https://juguettos.com/1039-la-banda", 
                        ref:"A0041951",
			            title:"La Banda Tambor Acústico", 
                        coleccion:"La Banda"
		},
		{	img:"https://juguettos.com/1362350-large_default/A0133071.jpg", 
            precio:"21,99",
			href:"https://juguettos.com/1039-la-banda", 
            ref:"A0051216",
			title:"La Banda Guitarra Española", 
            coleccion:"La Banda"
		}
    ];
          
    
    var div = document.createElement("div");
    document.body.appendChild(div);

    var ul = document.createElement("ul");
    ul.setAttribute("style", "list-style-type: none");
    div.appendChild(ul);

    for (let i = 0; i < arrayJuguetes.length; i++) {

        var li = document.createElement("li");
        ul.appendChild(li);

        var div2 = document.createElement("div");
        div2.setAttribute("class", "left-block");
        li.appendChild(div2);        

        var imagen = document.createElement("img");
        imagen.setAttribute("src", arrayJuguetes[i].img);
        imagen.setAttribute("title", arrayJuguetes[i].title);
        div2.appendChild(imagen);

        var div3 = document.createElement("div");
        div3.setAttribute("class", "desc");
        div3.setAttribute("style", "display: none");
        div2.appendChild(div3); 

        var div4 = document.createElement("div");
        div4.setAttribute("class", "content_price");
        var textoPrecio = document.createTextNode(arrayJuguetes[i].precio);
        div4.appendChild(textoPrecio);
        div3.appendChild(div4);
        
        var enlace = document.createElement("a");
        enlace.setAttribute("href" , arrayJuguetes[i].href);
        var textoColeccion = document.createTextNode(arrayJuguetes[i].coleccion);
        enlace.appendChild(textoColeccion);
        div3.appendChild(enlace);

        var parrafo = document.createElement("p");
        parrafo.setAttribute("class" , "product-desc");
        var textoRef = document.createTextNode(arrayJuguetes[i].ref);
        parrafo.appendChild(textoRef);         
        div3.appendChild(parrafo);        
    }
}


function desplegable(){
  var foto = document.getElementsByTagName('img')
  
  for (let i = 0; i < foto.length; i++) {
    
    foto[i].addEventListener('click', ocultarMostrar);
  }  
}

function ocultarMostrar(){

  var h1 = document.getElementsByTagName("h1")[0];
  if (this.nextSibling.style.display=='none') {
    visible = "";
    
  }else{
    visible = "none";
  }
  var padre = this.parentNode;
  var arrayHijos = padre.childNodes;
  for (let i = 1; i < arrayHijos.length; i++) {
    arrayHijos[i].style.display=visible;
    
  }
}


function ocultarMostrarTitulo(){

    var div = document.getElementsByTagName('div')[0];
    var h1 = document.getElementsByTagName("h1")[0];
  
    if (div == undefined){
      lista();
      desplegable();
      h1.firstChild.nodeValue = "OCULTAR JUGUETES";
    }else{
      div.remove();
      h1.firstChild.nodeValue = "MOSTRAR JUGUETES";
    }
    
  }  

