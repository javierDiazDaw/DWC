window.addEventListener("load", ini);


function ini() {
    document.body.getElementsByTagName("a")[0].addEventListener("click",capa);

}


function capa(e) {
    var capa= document.createElement("div");
    capa.setAttribute("style","background-color:red; width: 500px; height: 500px; position:absolute; top:"+e.clientX+ ";left:"+e.clientY );
    document.body.appendChild(capa);
}