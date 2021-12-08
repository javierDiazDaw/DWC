class Persona {
    constructor(nombre, apellido, dni, fechaNacimiento) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.fechaNacimiento = fechaNacimiento;
    }
    info()  {
        document.write(this.nombre + " " + this.apellido + " " + this.dni + " " + this.fechaNacimiento + "<br>");
    }
    
}