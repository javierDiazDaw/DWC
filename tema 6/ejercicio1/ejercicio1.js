    window.addEventListener("load", inicio);

    function inicio(){

    //titulo
    var titulo = document.createElement('title');
    var t1 = document.createTextNode('texto titulo');
    titulo.appendChild(t1);

    //h1
    var h1 = document.createElement('h1');
    var txt1 = document.createTextNode('texto h1');
    h1.appendChild(txt1);

    //parrafo
    var parrafo = document.createElement('p');
    
    var txtp1 = document.createTextNode('texto1');
    var enlace1 = document.createElement('a');

    var txta1 = document.createTextNode('textoEnlace1');
    parrafo.appendChild(txtp1);
    parrafo.appendChild(enlace1);
    enlace1.appendChild(txta1)

    enlace1.setAttribute("href", "https://www.google.es")

    var txtp2 = document.createTextNode('texto2');
    var enlace2 = document.createElement('a');
    var txta2 = document.createTextNode('textoEnlace2');
    parrafo.appendChild(txtp2);
    parrafo.appendChild(enlace2);
    enlace2.appendChild(txta2)

    enlace2.setAttribute("href", "https://www.google.es")

    var txtp3 = document.createTextNode('texto3');
    var enlace3 = document.createElement('a');
    var txta3 = document.createTextNode('textoEnlace3');
    parrafo.appendChild(txtp3);
    parrafo.appendChild(enlace3);
    enlace3.appendChild(txta3)

    enlace3.setAttribute("href", "https://www.google.es")

    var txtp4 = document.createTextNode('texto4');
    parrafo.appendChild(txtp4);

    document.head.appendChild(titulo);
    document.body.appendChild(h1);
    document.body.appendChild(parrafo);

}