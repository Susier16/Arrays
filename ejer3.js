{
//Caso 1
var mensaje = "Hola";
let dentroIf1 = "";
if (true) {
  let mensaje = "Adiós";
  dentroIf1 = mensaje;
}
let fueraIf1 = mensaje;

//Caso 2
let mensajeLet = "Hola";
let dentroIf2 = "";
if (true) {
  let mensajeLet = "Adiós";
  dentroIf2 = mensajeLet;
}
let fueraIf2 = mensajeLet;

//Caso 3
var mensajeVar = "Hola";
let dentroIf3 = "";
if (true) {
  var mensajeVar = "Adiós";
  dentroIf3 = mensajeVar;
}
let fueraIf3 = mensajeVar;

// Concatenamos todo de una sola vez
let resultado = 
  "Caso 1 (var / let):\n" +
  "- Dentro: " + dentroIf1 + "\n" +
  "- Fuera: " + fueraIf1 + "\n" +
  "Después, imprime mensaje fuera del bloque. ¿Son iguales? No, let respeta el bloque if.\n\n" +
  "Caso 2 (let / let):\n" +
  "- Dentro: " + dentroIf2 + "\n" +
  "- Fuera: " + fueraIf2 + "\n" +
  "Ahora prueba a usar 2 casos let. ¿Cambia algo? No, let sigue respetando el bloque if.\n\n" +
  "Caso 3 (var / var):\n" +
  "- Dentro: " + dentroIf3 + "\n" +
  "- Fuera: " + fueraIf3 + "\n" +
  "Finalmente prueba a usar en los 2 casos var. ¿Cambia algo? Sí, var sobrescribe la variable externa.";

//Salida por pantalla
const salida3 = document.getElementById('salida3');
salida3.textContent = resultado;
}