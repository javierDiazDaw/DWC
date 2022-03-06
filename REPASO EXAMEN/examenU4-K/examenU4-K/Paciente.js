class Paciente extends Persona{
    constructor(nombre, apellido, dni,numAfi,mutualista){
        super(nombre, apellido, dni);
        this.numAfi=numAfi;
        this.mutualista=mutualista;
    }
    infoPaciente= ()=>{
        super.infoP();
        document.write(" Numero de afiliacion: " + this.numAfi + " Mutualista? " + this.mutualista + "<br>" );
}
}