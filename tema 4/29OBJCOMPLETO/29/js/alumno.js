/* Crear un objeto Alumno con su nombre, DNI, ... (objeto Persona), curso y notas de
    cada módulo. Crear su constructor y un método para imprimir un Alumno, otro que
    devuelva la nota media y otro para obtener su mejor nota y el nombre del módulo
    con esa nota (puede tener la misma nota en varios módulos).  */

class Alumno extends Persona {
    constructor (nombre, apellido, dni, fechaNacimiento, notasPorModulo) {
        super(nombre, apellido, dni, fechaNacimiento);
        this.notasPorModulo = notasPorModulo;
    }
    infoAlumno() {
      
        super.info();
        for (const [clave, valor] of this.notasPorModulo) {
            document.write(clave + " = " + valor + "<br>");
        }
    }
    mediaNotas(){
        var valores = this.notasPorModulo.values();
        var suma = 0;
        for (const i of valores) {
            suma += i;
        }
        return suma / this.notasPorModulo.size;
    }

    mejoresNotas(){
        var mejores = new Map();
        var mejor = [...this.notasPorModulo][0][1];
        // Para saber cual es la mejor
        /*for (const [clave, valor] of this.notasPorModulo) {
            if (valor > mejor) {
                mejor = valor;
            }
        }*/
        
        var mejor = Math.max(...this.notasPorModulo.values()); 

        // Por si coinciden en la mejor nota
        for (const [clave, valor] of this.notasPorModulo) {
            if (valor == mejor) {
                mejores.set(clave, valor);
            }
        }
        return mejores;
    }

    getNotas() {
        return this.notasPorModulo;
    }    
}