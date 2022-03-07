//Javier Diaz Roman 2º DAW

class Vehiculo {
    constructor(matricula) {
        this.matricula = matricula;              
    }

    //To string de vehiculos
    infoVehiculo() {
        document.write("Matricula: " + this.matricula);
    }
    
}