class Banda {
    constructor(nombre, anio, lista, telefono, estilo ) {
        this.nombre = nombre;
        this.anio = anio;
        this.lista = lista;
        this.telefono  = telefono;
        this.estilo = estilo; 
    }

    getNotas() {
        return this.lista;
    } 

    infoBanda()  {
        document.write("Banda: " + this.nombre + ", año: " + this.anio + ", telefono: " + this.telefono +
         ", estilo: " + this.estilo + "<br>");
    }

    infoLista() {
        for (const [clave, valor] of this.lista) {

            document.write("dni: " + clave + " = " + "Nombre: " + valor[0] + " Apellido: " +  valor[1] + "<br>");
        }
    	
        /*let clave = modulo.keys();
            for (let k of clave) {
            document.write("El modulo "+k+" tiene las siguientes horas " + modulo.get(k)[0]+" y alumnos " + modulo.get(k)[0]+"<br>");
        }*/
    }
    
}