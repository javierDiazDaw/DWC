window.addEventListener('load', enlace);

function mostrarTabla(){
  var tabla = document.createElement('table');
tabla.setAttribute("style", "border: 1px solid red");

  for (let i = 0; i <= 20; i++) {
      var tr = document.createElement('tr');      
      for (let j = 0; j <= 20; j++) {
          var td = document.createElement('td');
          td.setAttribute("style", "border: 1px solid blue");
          var texto = document.createTextNode('Texto');
          td.appendChild(texto);
          tr.appendChild(td);
      }
    
    tabla.appendChild(tr);        
  }
  document.getElementById('divTable').appendChild(tabla);
  
}

function enlace(){

  mostrarTabla();

  var enlace = document.createElement('a');   
  enlace.setAttribute("id", "enlace");  
  var textoEnlace = document.createTextNode("Aceptar");
  enlace.appendChild(textoEnlace);
  enlace.setAttribute("href", "#");

  document.getElementById("divTable").appendChild(enlace);
  document.getElementById("enlace").addEventListener('click', evento);
  
}

function evento(){

  var tabla = document.getElementsByTagName('table')[0];

  if (tabla != undefined){
    tabla.remove();
  }else{
    mostrarTabla();
  }
  
}  



