
//creacion de objetos

let p1 = new Punto (4,3);
let p2 = new Punto (2,2);


let rectangulo1 = new Rectangulo(p1,p2);

document.write("Perimetro: " + rectangulo1.perimetro(p1,p2)+ "<br>");
document.write("Área: " + rectangulo1.area(p1,p2));