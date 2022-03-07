//Javier Diaz Roman 2º DAW

//Objetos vehiculo
var vehiculo1 = new Vehiculo("1000HDP");
var vehiculo2 = new Vehiculo("5000JhQ");
var vehiculo3 = new Vehiculo("3000WHJ");

//Objetos cita
var citaPrevia1 = new CitaPrevia(new Date(2020, 03, 12, 03, 45), vehiculo1);
var citaPrevia2 = new CitaPrevia(new Date(2013, 05, 04, 03, 45), vehiculo2);
var citaPrevia3 = new CitaPrevia(new Date(2011, 10, 12, 03, 45), vehiculo3);

//Array de las citas
var arrayCitas = new Array;

//introducir fecha por teclado
var fechaAnio = prompt("Introduce fecha de la cita-año", "yyyy");
var fechaMes = prompt("Introduce fecha de la cita-mes", "mm");
var fechaDia = prompt("Introduce fecha de la cita-dia", "dd");
var fechaHora = prompt("Introduce fecha de la cita-hora", "hh");
var fechaMinutos = prompt("Introduce fecha de la cita-minutos", "mm");


var fechaDate = new Date(fechaAnio, fechaMes, fechaDia, fechaHora, fechaMinutos);

//introducir vehiculo por teclado
var vehiculoTeclado = prompt("Introduce la matricula");
var vehiculoT = new Vehiculo(vehiculoTeclado);
var citaPreviaTeclado = new CitaPrevia(fechaDate, vehiculoT);


//FUNCIONES

//introcudir cita
var introduceCita = (introducir) => {

    arrayCitas.push(introducir);
}

//mostrar las citas
var mostrarCitas = () => {
    arrayCitas.forEach(cita => {
        cita.infoCitaPrevia();
        document.write("<br>");
    })
}

//buscar las citas por matricula
var buscarCita = (matricula) => {
    return arrayCitas.findIndex((citaPrevia) => citaPrevia.vehiculo.matricula.toUpperCase() == matricula.toUpperCase());
}

//eliminar las citas por matricula
var eliminarCita = (matricula) => {
    var buscar = buscarCita(matricula);
    if (buscar != -1) {
        arrayCitas.splice(buscar, 1);
        return true
    } else {
        document.write("La cita no ha sido eliminada");
    }
}

//ordenar las citas por fecha
var ordenarCitaMatricula = () => {
    return this.arrayCitas.sort(function (a, b){
        if (a.matricula > b.matricula) {
            return 1;
        } else if (a.matricula < b.matricula) {
            return -1;
        }
        return 0;
    });
}

//ordenar las citas por fecha
var ordenarFecha = ()=> {
    return this.arrayCitas.sort(function (a,b) {	
        if (a.fechaHora > b.fechaHora) {
            return 1 ;
        }else if (a.fechaHora < b.fechaHora) {
            return -1;
        }
        return 0;	
    });			
}



//PRUEBA

//introducir
introduceCita(citaPrevia1);
introduceCita(citaPrevia2);
introduceCita(citaPrevia3);
introduceCita(citaPreviaTeclado);

//mostrar
document.write("Lista de citas" + "<br>");
mostrarCitas();
document.write("<br>");

//buscar cita
document.write("Citas encontradas por matricula del vehiculo" + "<br>");
var buscar = buscarCita("5000JhQ"); //Se busca la segunda cita por ejemplo
document.write(arrayCitas[buscar].infoCitaPrevia());
document.write("<br>");

//eliminar cita
document.write("Citas disponibles (citas que no se han borrado)" + "<br>");
var eliminar = eliminarCita("1000HDP"); //Elimino la primera cita por matricula
mostrarCitas();
document.write("<br>");

//ordenar Cita por matricula
document.write("Citas ordenadas por matricula" + "<br>");
ordenarCitaMatricula();
mostrarCitas();
document.write("<br>");

// var resultado3 = ordenarCitaMatricula();
// for (const l of resultado3) {
//             l.infoCitaPrevia();
//             document.write("<br>");
//         }   

//ordenar Cita por fecha
document.write("Citas ordenadas por fecha" + "<br>");
ordenarFecha();
mostrarCitas();
document.write("<br>");







