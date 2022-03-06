class CitaPrevia{
    constructor(fechaHora,paciente,medico){
        this.fechaHora=fechaHora;
        this.paciente=paciente;
        this.medico=medico;
    }

    infoCita=()=>{
        this.paciente.infoPaciente();
        this.medico.infoMedico();
        document.write(this.fechaHora.toLocaleString());
    }


}