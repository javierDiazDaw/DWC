var nota;

nota = parseFloat(prompt("Introduce la nota de tu asignatura"));

if (nota < 5) 
{
	alert("SUSPENSO");
}else if(nota >= 5 && nota <6)
{
	alert("APROBADO");
}else if(nota >= 6 && nota < 7)
{
	alert("BIEN");
}else if(nota >= 7 && nota < 9)
{
	alert("NOTABLE");
}else if(nota >= 9 && nota < 11)
{
	alert("SOBRESALIENTE");
}else{
	alert("Dato mal introducido");
}