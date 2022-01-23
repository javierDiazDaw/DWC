window.addEventListener("load", iniciar);

function iniciar() {
    cuerpo();
    
    var m = document.getElementsByName('mostrar');

    for (let i = 0; i < m.length; i++) {
        m[i].addEventListener('click', mostrarContenido);        
    }
    

    var o = document.getElementsByName('ocultar');
    
    for (let i = 0; i < o.length; i++) {
        o[i].addEventListener('click', ocultarContenido);        
    }

    
}

function cuerpo() {

    var json =  [{titular: "Noticia 1", contenido: "Contenido de la noticia 1", descripcion: "Esta es la noticia 1" },
                 {titular: "Noticia 2",contenido: "Contenido de la noticia 2",descripcion: "Esta es la noticia 2"},
                 {titular: "Noticia 3",contenido: "Contenido de la noticia 3",descripcion: "Esta es la noticia 3"}];

    
    for (let i = 0; i < json.length; i++) {
      
        var div = document.createElement("div");
        div.setAttribute("id", "noticia" + ([i+1]));        
        document.body.appendChild(div);

        var h1 = document.createElement('h1');
        var txtNoticia = document.createTextNode(json[i].titular);
        h1.appendChild(txtNoticia);
        div.appendChild(h1);

        var imagenMostrar = document.createElement('img');
        imagenMostrar.setAttribute('src', 'https://fotos-themonkeybusiness.s3.eu-west-3.amazonaws.com/wp-content/uploads/2021/03/06021844/icono-instagram-png-transparente.png')
        imagenMostrar.setAttribute('name', 'mostrar');
        div.appendChild(imagenMostrar);

        var imagenOcultar = document.createElement('img');        
        imagenOcultar.setAttribute('src', 'http://assets.stickpng.com/images/584ac2d03ac3a570f94a666d.png')
        imagenOcultar.setAttribute('name', 'ocultar');
        div.appendChild(imagenOcultar);

        var p = document.createElement('p');
        p.setAttribute("id", "p"+([i+1]));
        p.setAttribute("style", "display: block;");
        var txtContenido = document.createTextNode(json[i].contenido); 
        p.appendChild(txtContenido);
        p.addEventListener("contextmenu", clickDerecho, false); 
        div.appendChild(p); 

        var h4 = document.createElement('h4');    
        h4.setAttribute("style", "display: none;");
        var txtDescripcion = document.createTextNode(json[i].descripcion); 
        h4.appendChild(txtDescripcion); 
        div.appendChild(h4);

    }
}

function mostrarContenido(e) {

    var p = e.currentTarget.nextSibling.nextSibling;

	if (p.getAttribute("style") == "display: none;") {

		p.setAttribute("style", "display: block;");

	} else {

		p.setAttribute("style", "display: block;");	
    }
}
function ocultarContenido(e) {

    var p = e.currentTarget.nextSibling; 



    if (p.getAttribute("style") == "display: block;") {

		p.setAttribute("style", "display: none;");

	} else {

		p.setAttribute("style", "display: none;");
	}   

   
}

function clickDerecho(e) {
    e.preventDefault();

	var h4 = e.currentTarget.parentNode.lastChild;

	if (h4.getAttribute("style") == "display: none;") {

		h4.setAttribute("style", "display: block;");

	} else {

		h4.setAttribute("style", "display: none;");
	}
}

