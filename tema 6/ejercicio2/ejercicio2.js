window.addEventListener("load", inicio);

function inicio(){
    //a
    var para = document.createElement('p');
    //b
    var txt1 = document.createTextNode('Este es el ');
    //c
    para.appendChild(txt1);
    //d
    var enfasis = document.createElement('em');
    //e
    var txt2 = document.createTextNode('contenido ');
    //f
    enfasis.appendChild(txt2);
    //g
    para.appendChild(enfasis);
    //h
    var txt3 = document.createTextNode('de mi parrafo');
    //i
    para.appendChild(txt3);
    //j
    document.getElementById('testdiv').appendChild(para);
}

