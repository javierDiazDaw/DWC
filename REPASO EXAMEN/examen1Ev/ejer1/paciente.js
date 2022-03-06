class Paciente extends Persona{
    constructor (nombre, apellido, dni, nAfilicacion, mutualista) {
        super(nombre, apellido, dni);
        this.nAfilicacion = nAfilicacion;
        this.mutualista = mutualista;
    }

    infoPaciente(){
        
        document.write("N Afilicación: " + this.nAfilicacion + ", Mutualista: " + this.mutualista + " ");
        super.infoPersona();
    }

}