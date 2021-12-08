var misNotas = new Map();
        misNotas.set("DWS",10);
        misNotas.set("DWC", 5);
        misNotas.set("DAW", 8);
        misNotas.set("DIW",10);

var a1 = new Alumno("Javier", "Diaz", "49028792", "09/08/1998", misNotas);
a1.infoAlumno();
document.write("La nota media es: " + a1.mediaNotas() + "<br>");
for (const [clave, valor] of a1.mejoresNotas()) {
document.write(clave + " = " + valor + "<br>");
}

        document.write("<br>");

var misNotas = new Map();
        misNotas.set("DWS", 6);
        misNotas.set("DWC", 6);
        misNotas.set("DAW", 7);
        misNotas.set("DIW", 8);

var a2 = new Alumno("Dani", "Avila", "2", "06/11/1998", misNotas);

        
a2.infoAlumno();        
document.write("La nota media es: " + a2.mediaNotas() + "<br>");
for (const [clave, valor] of a2.mejoresNotas()) {
document.write(clave + " = " + valor + "<br>");
}

// meter todos los alumnos en un array
var arrayAlumnos = new Array(a1, a2);

// creo un objeto de Aula con los alumnos dentro
var clase = new Aula(arrayAlumnos);

document.write("<h3>" + "Buscar alumno por dni:" + "</h3>" + "<br>");
// se guarda en una variable el objeto alumno que coincide con el dni "2"
var resultado = clase.busquedaAlumno("2");

// llamo infoAlumno de la clase alumno
resultado.infoAlumno();

// forma mas concisa
// clase.busquedaAlumno("2").infoAlumno();

document.write("<h3>" + "Buscar alumno por nota:" + "</h3>" + "<br>");
var resultado2 = clase.ordenarNota("2");
for (const [clave, valor] of resultado2) {
            document.write(clave + " = " + valor + "<br>");
        }

document.write("<h3>" + "Buscar alumno por apellido:" + "</h3>" + "<br>");
var resultado3 = clase.ordenarApellido();
for (const l of resultado3) {
            l.infoAlumno();
            document.write("<br>");
        }      

        