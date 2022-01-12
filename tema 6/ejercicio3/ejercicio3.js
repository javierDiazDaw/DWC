window.addEventListener('load', buscaMarca);

function buscaMarca(){

    //Obtener li
    var lista = document.getElementsByTagName('li');

    //Obtener el ul Parent
    var ul = lista[0].parentNode;

    //Cambiar el tipo de estilo de lista a square
    ul.setAttribute("style", "square");

    //Crear un nodo li 1
    var li1 = document.createElement('li');
    var text1 = document.createTextNode('Mazda');

    //Añadir el nodo creado al inicio
    li1.appendChild(text1);
    ul.insertBefore(li1, lista[0]);

    //Crear un nodo li 2
    var li2 = document.createElement('li');
    var text2 = document.createTextNode('Dacia');

    //Añadir el nodo creado al final
    li2.appendChild(text2);
    ul.appendChild(li2);

    //Crear un nodo li
    var li3 = document.createElement('li');
    var text3 = document.createTextNode('Fiat');


    //Añadir el nodo creado por en medio
    li3.appendChild(text3);
    ul.insertBefore(li3, lista[4]);

    //Crear un nodo li 3
    var li4 = document.createElement('li');
    var text4 = document.createTextNode('Nissan');

    //Crear un nodo li
    var li5 = document.createElement('li');
    var text5 = document.createTextNode('Scala');

    //Recorro la lista
    for(let i = 0; i < lista.length; i ++){

        //Busco el nodo li cuyo Child innerHTML sea BMW
        if(lista[i].innerHTML == "BMW"){

            //Añado el nodo li después de BMW
            li5.appendChild(text5);
            ul.insertBefore(li5, lista[i].nextSibling);

            //Añado el nodo li antes de BMW
            li4.appendChild(text4);
            ul.insertBefore(li4, lista[i]);

        }

    }

}