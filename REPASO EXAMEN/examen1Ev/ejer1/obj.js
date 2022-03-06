//Creacion paciente
var paciente1 = new Paciente("javi", "diaz", "3456", 1111, true);
var paciente2 = new Paciente("marta", "carrillo", "7452", 2222, false);
var paciente3 = new Paciente("paco", "jimenez", "3461", 3333, true);

//Creacion medico
var medico1 = new Medico("pedro", "garcia", "2379", 56);
var medico2 = new Medico("sandra", "dominguez", "1279", 15);
var medico3 = new Medico("andrea", "gamez", "3096", 26);

//Creacion cita
var citaPrevia1 = new CitaPrevia(new Date (2020,03,12,03,45), paciente1, medico1);
var citaPrevia2 = new CitaPrevia(new Date (1998,10,02,13,27), paciente2, medico2);
var citaPrevia3 = new CitaPrevia(new Date (1976,07,05,10,26), paciente3, medico3);

//Creacion Array
//var arrayCitas = new Array(citaPrevia1, citaPrevia2);
var arrayCitas = new Array;

var introduceCita = (introducir) => {
    
        this.arrayCitas.push(introducir)
}

/*var introduceCita = (introducir) => {
    if(!buscarCita(introducir.paciente)) {
        this.arrayCitas.push(introducir)
    }
   
}*/


var mostrarCitas = ()=> {
    arrayCitas.forEach(cita => {
        cita.infoCitaPrevia();
        document.write("<br>");
    })
}

var buscarCita = (dni)=> {
    return arrayCitas.findIndex((citaPrevia)=> citaPrevia.paciente.dni.toUpperCase()==dni.toUpperCase());
}

var eliminarCita = (dni)=> {
    var buscar = buscarCita(dni);
    if (buscar!=-1) {
        arrayCitas.splice(buscar,1);
        return true
    } else {
        document.write("La cita no ha sido eliminada");
    }
}

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

var devuelveMutua = () => {
    var arrayMutua = new Array();
    arrayCitas.forEach(citaPrevia => {
        if (citaPrevia.paciente.mutualista == true) {
            arrayMutua.push(citaPrevia);
        }
    });
    return arrayMutua;
}

//PRUEBAS

//Introducir
introduceCita(citaPrevia1);
introduceCita(citaPrevia2);
introduceCita(citaPrevia3);

//Mostrar
document.write("Todas las citas introducidas" + "<br>");
mostrarCitas();
document.write("<br>");

//Buscar
document.write("Citas encontradas por dni del paciente" + "<br>");
document.write(" ");
document.write(" ");
var buscar = buscarCita("7452");
document.write(arrayCitas[buscar].infoCitaPrevia());
document.write("<br>");


//Eliminar
/*document.write("Citas disponibles (citas que no se han borrado)" + "<br>");
document.write(" ");
document.write(" ");
var eliminar = eliminarCita("7452");
mostrarCitas();
document.write("<br>");*/


//Ordenar por fecha
document.write("Citas ordenadas por fecha" + "<br>");
document.write(" ");
ordenarFecha();
mostrarCitas();
document.write("<br>");

//Array de mutua
document.write("Array de mutua" + "<br>");
var mutua = devuelveMutua();
mutua.forEach(element => {
    element.infoCitaPrevia();
    document.write("<br>")
});