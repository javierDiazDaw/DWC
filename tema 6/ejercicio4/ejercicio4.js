window.addEventListener('load', get_fortune);

function get_fortune() {

    var hoy = new Date(); dichos= new Array(
    "Carpe Diem.",
    "El silencio es oro, pero la cinta aislante es plata.",
    "Una manzana al día, mantiene al doctor en la lejanía.", 
    "A cada uno lo suyo.",
    "Si a la primera no lo consigues, inténtalo de nuevo.",
    "No te conformes con la mediocridad, pelea por el éxito", 
    "Vive y deja vivir."
    );
    var n=dichos.length;
    numero = Math.floor(Math.random()*n);
    //dichos = "Hoy es: "+hoy+ ".<br /><br />Hoy la suerte te dice: <br /><br /><em>" +dichos[numero] +"</em>"; document.getElementById('divdicho').innerHTML = dichos;
    
    var p1 = document.createElement('p');
    var text1 = document.createTextNode('Hoy es: ');
    var text2 = document.createTextNode(hoy);
    p1.appendChild(text1);
    p1.appendChild(text2);

    var br1 = document.createElement('br');
    var br2 = document.createElement('br');

    var p2 = document.createElement('p');
    var text3 = document.createTextNode('Hoy la suerte te dice: ');
    p2.appendChild(text3);

    var br3 = document.createElement('br');
    var br4 = document.createElement('br');

    var em = document.createElement('em');
    var text4 = document.createTextNode(dichos[numero]);
    em.appendChild(text4);  
    
    var divdichos = document.getElementById('divdicho');
    divdichos.appendChild(p1);
    divdichos.appendChild(br1);
    divdichos.appendChild(br2);
    divdichos.appendChild(p2);
    divdichos.appendChild(br3);
    divdichos.appendChild(br4);      
    divdichos.appendChild(em);
     

    
    
}
    