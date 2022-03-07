//Javier Diaz Roman 2º DAW

class CitaPrevia{
    constructor(fechaHora, vehiculo){
        this.fechaHora = fechaHora;
        this.vehiculo = vehiculo;        
    }

    //To string de cita previa
    infoCitaPrevia(){        
        document.write("Fecha de la cita: " + this.fechaHora);
        document.write("<br>");
        document.write("Informe Vehiculo: ");
        this.vehiculo.infoVehiculo();        
        document.write("<br>");
    };  
}