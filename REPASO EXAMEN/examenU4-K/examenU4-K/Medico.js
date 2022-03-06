class Medico extends Persona{
    constructor(nombre, apellido, dni,numFacultativo){
        super(nombre, apellido, dni);
        this.numFacultativo=numFacultativo;
    }

    infoMedico= ()=>{
            super.infoP();
            document.write(" Numero de facultativo: " + this.numFacultativo + "<br>");
    }
}