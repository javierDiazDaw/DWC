Ejercicio 1. [ 4 puntos ] Nuestro mundo se encuentra bajo la amenaza del mayor villano hasta
el momento. Te ha raptado y te obliga a realizar un programa para avisar el lanzamiento de su
última arma. Al ejecutar el programa, que enviará al presidente de la república, se le pedirá un
código de 4 dígitos, sin saberlo, con esos dígitos el presidente enviará el día y mes en que el
mundo explotará (el año será el actual). Al enviar los dígitos se mostrará el mensaje “La Tierra
desaparecerá en...” y a continuación irá mostrando los minutos y segundos que faltan para el fin
del mundo, y se irá actualizando con una línea nueva cada segundo. Al llegar a cero, se abrirá una
nueva ventana emergente dónde aparecerá escrito “Bye Bye World” y la ventana donde se
mostraba la cuenta atrás se cerrará, lanzando en ese momento el villano su arma letal. Si el
código introducido genera una fecha menor que la actual la cuenta atrás empezará en 5
segundos.


Ejercicio 2. [ 6 puntos ]
Implementa mediante objetos en ES6 y utilizando archivos js externos (uno para cada clase) el
siguiente programa para guardar los vehículos que tienen cita previa en la ITV con la siguiente
información:
Nombre clase: CitaPrevia
Atributos:
fechaHora // Objeto Date con hora
vehiculo // Objeto Vehículo, tendrá al menos un campo matricula
Se propone que cada día la sede pueda generar un informe con las citas registradas que se van a
llevar a cabo. Estas citas se irán almacenando en un array.
Implementa las clases CitaPrevia y Vehiculo con sus atributos en archivos js.
En el archivo html crea el array de citas previas y las siguientes funciones (debes decidir tú los
parámetros de entrada) y realiza una prueba para comprobar que todo funciona correctamente:
● introduceCita: introducir en el array una cita. Los datos para crear la citaPrevia se
introducirán por teclado. Se deberá comprobar que la matrícula del vehículo no tiene ya
una cita asignada. En ese caso mostrará el siguiente mensaje: “El vehículo ya tiene una
cita asignada, debe eliminarla para poder asignar otra”.
● eliminarCita: una función que busque una cita. Si no la encuentra, la función imprimirá un
mensaje avisando de que la cita no ha sido encontrada.
● buscarCita: busca una cita en el array según la matrícula del vehículo.
● mostrarCitas: muestra todas las citas del array. Cada cita se mostrará en una línea
diferente.
● ordenaCitasPorMatricula: ordena el array por las matrículas de los vehículos
Será valorado el uso de funciones flecha.