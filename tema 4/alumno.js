class Alumno{

	constructor(nombre, DNI, curso, notas){

		this.nombre = nombre;
		this.DNI = DNI;
		this.curso = curso;
		this.notas = notas;

	}
}

  Alumno.prototype.toString = function alumnoToString() {
  var retorno = "El alumno " + this.nombre + " con DNI " + this.DNI + " matriculado en " + this.curso + " tiene de nota: " + this.notas;
  return retorno;
}