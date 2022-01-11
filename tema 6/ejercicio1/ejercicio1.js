window.addEventListener("load", inicio);

function inicio(){

    var titulo = document.createElement('h1');
    var txt1 = document.createTextNode('titulo');
    titulo.appendChild(txt1);

    var parrafo = document.createElement('p');
    
    var txtp1 = document.createTextNode('texto1');
    var a = document.createElement('a');
    var txta1 = document.createTextNode('textoEnlace1');
    parrafo.appendChild(txtp1);
    parrafo.appendChild(a);
    a.appendChild(txta1)

    var txtp2 = document.createTextNode('texto2');
    var a = document.createElement('a');
    var txta2 = document.createTextNode('textoEnlace2');
    parrafo.appendChild(txtp2);
    parrafo.appendChild(a);
    a.appendChild(txta2)

    var txtp3 = document.createTextNode('texto3');
    var a = document.createElement('a');
    var txta3 = document.createTextNode('textoEnlace3');
    parrafo.appendChild(txtp3);
    parrafo.appendChild(a);
    a.appendChild(txta3)

    var txtp4 = document.createTextNode('texto4');
    parrafo.appendChild(txtp4);

    document.body.appendChild(titulo);
    document.body.appendChild(parrafo);
}