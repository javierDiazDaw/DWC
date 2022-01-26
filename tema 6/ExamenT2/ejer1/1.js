// JAVIER DIAZ ROMAN
window.addEventListener("load", inicio);

function inicio(){

    cuerpo();
}

function cuerpo(){

    var json = [{titulo: "Beaking Bad",genero: "Drama",sinopsis: "Altamente aclamado por la crítica, este drama televisivo escrito y producido por Vince Gilligan ('Expediente X') nos muestra la vida de Walter White (Bryan Cranston 'Malcolm'), un genio en el campo ...",src:"https://es.web.img3.acsta.net/c_310_420/pictures/18/04/04/22/52/3191575.jpg"},
                {titulo: "Juego de Tronos",genero: "Fantasía",sinopsis: "HBO, desde la calidad que caracteriza a la cadena, nos brinda una vez más una magistral adaptación televisiva de la serie de novelas 'Canción de hielo y fuego' del escritor estadounidense George R. ...",src:"https://es.web.img2.acsta.net/c_310_420/pictures/19/03/22/10/08/5883111.jpg?coixp=50&coiyp=40"},
                {titulo: "Peaky Blinders",genero: "Crimen,Drama",sinopsis: "Peaky Blinders es un drama de BBC que narra la historia de la familia gitana Shelby y su banda de gángsters, un grupo de personas características por sus boinas con cuchillas y dueñas de los ...",src:"https://es.web.img2.acsta.net/c_310_420/pictures/15/10/23/08/59/222051.jpg?coixp=45&coiyp=64"}
            ];


    var div1 = document.createElement('div');
    document.body.appendChild(div1);

    var ul = document.createElement('ul');
    ul.setAttribute("style", "list-style-type: none;")
    div1.appendChild(ul);

    for (let i = 0; i < json.length; i++) {

        var li = document.createElement('li');
        ul.appendChild(li);

        var div2 = document.createElement('div');
        div2.setAttribute("class", "left-block");
        li.appendChild(div2);

        var p = document.createElement('p');
        p.setAttribute("class", "titulo");
        var txtTitulo = document.createTextNode(json[i].titulo);
        p.appendChild(txtTitulo);
        div2.appendChild(p);

        //Evento titulo
        p.addEventListener("click", mostrarDescripcion, false);

        var div3 = document.createElement('div');
        div3.setAttribute("class", "desc");
        div3.setAttribute("style", "display: block;")
        div2.appendChild(div3);

        var div4 = document.createElement('div');
        div4.setAttribute("class", "content_genre");
        div3.appendChild(div4);

        var b = document.createElement('b');
        var txtGeneroB = document.createTextNode('Género:');
        b.appendChild(txtGeneroB);
        div4.appendChild(b);
        var txtGenero = document.createTextNode(json[i].genero);
        div4.appendChild(txtGenero);

        var p2 = document.createElement('p');
        p2.setAttribute('class', 'product-desc');
        div3.appendChild(p2);

        var b2 = document.createElement('b');
        var txtSinopsisB = document.createTextNode('Sinopsis:');
        b2.appendChild(txtSinopsisB);
        p2.appendChild(b2);
        var txtSinopsis = document.createTextNode(json[i].sinopsis);
        p2.appendChild(txtSinopsis);

        var img = document.createElement('img');
        img.setAttribute("src", json[i].src);
        img.setAttribute("title", json[i].titulo);
        div3.appendChild(img);
    }
}

function mostrarDescripcion (e) {

	var divDesc = e.currentTarget.nextSibling;

	if (divDesc.getAttribute("style") == "display: block;") {

		divDesc.setAttribute("style", "display: none;");

	} else {

		divDesc.setAttribute("style", "display: block;");
	}

}