{
//Variables
let nota = 6;

let calificacion = "";

//Comparación de rango con la nota
if (nota >= 9) {
  calificacion = "Sobresaliente\nFelicidades";
} else if (nota >= 7) {
  calificacion = "Notable";
} else if (nota >= 5) {
  calificacion = "Aprobado";
} else {
  calificacion = "Suspenso";
}

//Mensaje que devuelve al comparar
resultado = "Nota : " + nota + "\nResultado: " + calificacion;

//Salida por pantalla
const salida4 = document.getElementById('salida4');
salida4.textContent = resultado;
}