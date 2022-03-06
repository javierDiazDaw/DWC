Ejercicio 1. [7 puntos] 

Implementa mediante objetos en ES6 y utilizando archivos js externos (uno para cada clase) el siguiente programa para guardar los pacientes que tienen cita médica: 

Nombre clase: CitaPrevia
	Atributos: fechaHora;  // Objeto Date.
	     paciente;   // Objeto Paciente, que tiene como atributo //  N.º de afiliación
     //  Mutualista, de tipo booleano		
	     medico;     // Objeto Medico,  que tiene como atributo  //  N.º de facultativo

Las clases Paciente y Médico heredan de una clase Persona que tiene como atributos: nombre, apellido y DNI.

Implementa las clases CitaPrevia, Paciente, Medico y Persona con sus atributos y los métodos para imprimir los objetos en archivos js independientes.

En otro archivo js crea el array de citas previas y las siguientes funciones (debes decidir tú los parámetros de entrada) y realiza una prueba para comprobar que todo funciona correctamente:

introduceCita: introducir en el array una cita. Antes de añadirla deberá comprobar si el paciente tiene ya una cita. En ese caso mostrará el siguiente mensaje: “El paciente ya tiene una cita asignada, debe eliminarla para poder asignar otra”.
eliminarCita: elimina una cita. Si no la encuentra, la función imprimirá un mensaje avisando de que la cita no ha sido encontrada.
buscarCita: busca una cita de un paciente dado en el array. 
mostrarCitas: muestra todas las citas del array. Cada cita se mostrará en una línea diferente.
ordenaCitasPorFechaHora: ordena el array por fecha de la cita de manera descendente.
listadoMutualistas: devuelve un array con las citas de los pacientes que sean mutualistas. Debes usar métodos del Array y funciones flecha.

El uso de funciones flecha será valorado.



Ejercicio 2 [3 puntos] 

Trabajas para una agencia de publicidad y te han pedido el siguiente desarrollo:

Al cargar la página se solicita un nombre de usuario, este debe contener exactamente 7 dígitos o caracteres, ni más, ni menos, en caso contrario debe volver a solicitar el nombre de usuario. 

Una vez introducido el nombre de usuario, el programa averiguará el número de dígitos que contiene el mismo y mostrará un pop-up en la esquina inferior derecha cada 3 segundos tantas veces como dígitos tenga el nombre de usuario, es decir, si el nombre de usuario tiene 2 dígitos, aparecerán 2 pop-ups con una con un intervalo de 3 segundos entre ellas. El pop-up mostrará el siguiente mensaje:

"Hola usuario. Aquí tienes el producto del año. Atrévete a probarlo!!"

