class Medico extends Persona{
    constructor (nombre, apellido, dni, nFacultativo) {
        super(nombre, apellido, dni);
        this.nFacultativo = nFacultativo;  
    }

    infoMedico(){
        
        document.write("N Facultativo: " + this.nFacultativo);
        super.infoPersona();
    }

}