var paciente1 = new Paciente("Kimia", "Ehsani", "1", 5, true);
var medico1 = new Medico("Maria", "Gon", "1", 6);

var paciente2 = new Paciente("Kimia2", "Ehsani", "2", 5, false);
var medico2 = new Medico("Maria2", "Gon", "2", 6);

var paciente3 = new Paciente("Kimia3", "Ehsani", "3", 5, true);
var medico3 = new Medico("Maria3", "Gon", "2", 6);

var citas = [];
introduceCita(new CitaPrevia(new Date("2020-01-02"), paciente1, medico1), citas);
introduceCita(new CitaPrevia(new Date("2020-01-04"), paciente2, medico2), citas);
introduceCita(new CitaPrevia(new Date("2021-01-02"), paciente3, medico3), citas);


mostrarCitas(citas);
document.write("<br> Cita eliminada: ------------------------------ <br>")
eliminarCita("3", citas);
document.write("<br>");
mostrarCitas(citas);
document.write("<br> listadoMutualistas: ------------------------------ <br>")
mostrarCitas(listadoMutualistas(citas));
document.write("<br> Array ordenado: ------------------------------ <br>")
ordenaCitasPorFechaHora(citas);
mostrarCitas(citas);

function introduceCita(cita, citas) {
    citaEncontrada = buscarCita(cita.paciente.dni, citas);
    if ((citaEncontrada == undefined)) {
        citas.push(cita);
    } else {
        alert("El paciente ya tiene una cita asignada, debe eliminarla para poder asignar otra");
    }
    return citas;
}


function buscarCita(dni, citas) {
    return citas.find(
        (cita) => { return cita.paciente.dni == dni; }
    );
}

function eliminarCita(dni, citas) {
    var cita = buscarCita(dni, citas);
    if (cita != undefined) {
        citas.splice(citas.indexOf(cita), 1);
    } else {
        alert("La cita no ha sido encontrada");
    }
}

function mostrarCitas(citas) {
    citas.forEach(cita => {
        cita.infoCita();
        document.write("<br>");
    });

}

function ordenaCitasPorFechaHora(citas) {
    return citas.sort((c1, c2) => {
        if (c1.fechaHora > c2.fechaHora) {
            return -1;
        } else if (c1.fechaHora < c2.fechaHora) {
            return 1;
        } else {
            return 0;
        }
    })

}

function listadoMutualistas(citas) {
    return citas.filter((cita) => {
        return cita.paciente.mutualista == true;
    })
}