class CitaPrevia{
    constructor(fechaHora, paciente, medico){
        this.fechaHora = fechaHora;
        this.paciente = paciente;
        this.medico = medico;
    }

    infoCitaPrevia(){        
        document.write("Fecha de la cita: " + this.fechaHora);
        document.write("<br>");
        document.write("Informe Paciente: ");
        this.paciente.infoPaciente();
        document.write("Informe Medico: ");
        this.medico.infoMedico();
        document.write("<br>");
    };

}