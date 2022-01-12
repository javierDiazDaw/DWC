window.addEventListener('load', mostrarTabla);

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