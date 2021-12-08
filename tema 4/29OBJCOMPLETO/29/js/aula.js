/*
Crear un objeto Aula que contenga los alumnos de un aula y tenga los siguientes métodos:
	buscar un alumno del aula por DNI.
	ordenar por nota para un alumno en particular
	ordenar el array de alumnos por apellido
	imprimir los alumnos de un aula. */


class Aula {
	constructor (arrayAlumnos) {
        this.arrayAlumnos = arrayAlumnos;
       
	}

	busquedaAlumno(dni) {		
		
		/*for(let estudiante of this.arrayAlumnos) {
			if (estudiante.dni==dni){
				return estudiante;
				
			}
		}
		return -1;*/

		return this.arrayAlumnos.filter((alumno)=> alumno.dni==dni)[0];
		

		//filter(alumno *parametro de entrada* .dni)=
	}

	ordenarNota(dni){

		var alumno = this.busquedaAlumno(dni);
		var ordenado = new Map([...alumno.getNotas().entries()].sort((a,b) => b[1] - a[1])); 
			return ordenado;
			
			// los 3 ... separa los elementos que hay en la estructura y los [ ] los convierto en un array
	}

	ordenarApellido(){

		return this.arrayAlumnos.sort(function (a1,a2) {	
			if (a1.apellido > a2.apellido) {
				return 1 ;
			}else if (a1.apellido < a2.apellido) {
				return -1;
			}
			return 0;	
		});			
	}

	info(){

		for (const l of this.arrayAlumnos) {
            l.infoAlumno();
            document.write("<br>");
        }   
	}
}