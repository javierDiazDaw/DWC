
// Cuando se carga la página llamamos a la función iniciar
window.addEventListener("load", iniciar, false);

// La función iniciar...
function iniciar () {

	document.getElementsByTagName("h1")[0].addEventListener("click", cargar, false);

}

/* La función 'implementar', lo que hace es leer el array y meterlo
en la página, primeramente estará oculto */
function crearDOM() {

	// Creamos nuestro array con toda la información que vamos a escribir a continuación
	arrayJuguetes = [	
					{
						img:"https://juguettos.com/1361787-large_default/A0041951.jpg",
						precio:"14,99",
						href:"https://juguettos.com/1039-la-banda",
						edad:"3-6",
						ref:"A0041951",
						title:"La Banda Tambor Acústico",
						coleccion:"La Banda"
					},

					{
						img:"https://juguettos.com/1362350-large_default/A0133071.jpg",
						precio:"21,99",
						href:"https://juguettos.com/1039-la-banda",
						edad:"3-6",
						ref:"A0051216",
						title:"La Banda Guitarra Española",
						coleccion:"La Banda"
					}
				];

	// Identificamos el cuerpo de la página, el body
	var cuerpo = document.getElementById("body");

	// Creamos un div que será el padre de todos los elementos que ahora vamos a crear
	var divPadre = document.createElement("div");
	
	// Creamos una lista de tipo desordenada
	var lista = document.createElement("ul");
	lista.setAttribute("style", "list-style-type: none;");

	// Creamos todas estas variables, a las que a continuación le daremos un valor
	var elementoLista;
	var divLeft;
	var imagen;
	var divContent;
	var enlace;
	var parrafo;

	/* Haremos un bucle for que empiece en 0 y vaya hasta que sea menor que la 
	longitud del array que tenemos creado arriba */
	for (var i = 0; i < arrayJuguetes.length; i++) {
		/* Creamos el primer y único elemento de nuestra lista */
		elementoLista = document.createElement("li");

		// Creamos un div y le modificamos el atributo class
		divLeft = document.createElement("div");
		divLeft.setAttribute("class", "left-block");

		/* Creamos una imagen y le modificamos los atributos src y title 
		poniendole los valores que le corresponden*/
		imagen = document.createElement("img");
		imagen.setAttribute("src", arrayJuguetes[i]["img"]);
		imagen.setAttribute("title", arrayJuguetes[i]["title"]);
		imagen.addEventListener("click", mostrarDescripcion, false);

		divDesc = document.createElement("div");
		divDesc.setAttribute("class", "desc");
		divDesc.setAttribute("style", "display:none");

		/* Creamos otro div y modificamos su atributo class dándole un valor, y,
		también creamos un nodo de texto, que srá el precio del producto en cuestión */
		divContent = document.createElement("div");
		divContent.setAttribute("class", "content_price");
		divContent.appendChild(document.createTextNode(arrayJuguetes[i]["precio"] + "€"));

		/* Creamos un enlace, modificamos su atributo href dándole el valor que le
		corresponde y creamos en dicho enlace un nodo de texto con el valor que le
		corresponde */
		enlace = document.createElement("a");
		enlace.setAttribute("href", arrayJuguetes[i]["href"]);
		enlace.appendChild(document.createTextNode(arrayJuguetes[i]["coleccion"]));

		/* Creamos un párrafo, le modificamos el atributo class dándole un valor
		y añadimos a dicho párrafo un nodo de texto, que será el que le corresponda */
		parrafo = document.createElement("p");
		parrafo.setAttribute("class", "product-desc");
		parrafo.appendChild(document.createTextNode("Ref:"+arrayJuguetes[i]["ref"]));

		/* Ahora, en divLeft meteremos cada elemento creado anteriormente desde que empezamos
		el bucle*/
		divDesc.appendChild(divContent);
		divDesc.appendChild(enlace);
		divDesc.appendChild(parrafo);

		divLeft.appendChild(imagen);
		divLeft.appendChild(divDesc);
		/* En elemento lista, es decir, el li que cuelga dle ul padre, meteremos divLeft 
		el cual contiene todos los elementos, como ya hemos visto*/
		elementoLista.appendChild(divLeft);

		/* Y en lista, el ul padre meteremos el li que contiene el divLeft con
		todos los elementos */
		lista.appendChild(elementoLista);
	}


	/* Cuando haya terminado el bucle for, en el divPadre, que es el div que envuelve
	todo, meteremos la lista ul padre */
	divPadre.appendChild(lista);

	
	/* Y, por último, en el cuerpo de la página, añadiremos a continuación del
	último elemento que haya (la imágen), meteremos el divPadre que contiene todo */
	cuerpo.appendChild(divPadre);
}

/* Esta función cargar haá su función cada vez que se haga click en la imágen
correspondiente para mostrar y ocultar los elementos */
function cargar (e) {

	/* Identificamos el div padre que será el primer div que hay
	en el documento */
	var h1 = document.getElementsByTagName("h1")[0];

	if(h1.firstChild.nodeValue == "MOSTRAR JUGUETES"){
		crearDOM();
		h1.firstChild.nodeValue = "OCULTAR JUGUETES"
	}else{
		document.body.lastChild.remove();
		h1.firstChild.nodeValue = "MOSTRAR JUGUETES"
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