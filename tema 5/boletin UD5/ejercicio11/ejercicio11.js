window.addEventListener('load', iniciar);

function iniciar() {

   document.getElementById("usuario").addEventListener('focus',focus1, false);
   document.getElementById("direccion").addEventListener('focus', focus2, false);
   document.getElementById("usuario").addEventListener('blur',blur1, false);
   document.getElementById("direccion").addEventListener('blur', blur2, false);

   var nombre = document.for.usuario;
  
   nombre.addEventListener('blur', function(event) {
       if (event.target.value = " ") {
           alert("El campo nombre debe estar relleno");
       }
   }, true);

   function focus1(){
      document.getElementById("usuario").style.color="red";
   }

   function focus2(){
    document.getElementById("direccion").style.color="red";
   }
   
   

   function blur2(){
    document.getElementById("direccion").style.color='#000000';
   }
   
}





