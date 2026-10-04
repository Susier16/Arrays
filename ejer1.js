{
//Declaración de variables
var nombreVar = "Jorge";
let nombreLet = "Ana";
const nombreConst = "Aaron";

/*let resultado = "nombreVar asignado a: " + nombreVar + "\n" +
                "nombreLet asignado a: " + nombreLet + "\n\n" +
                "nombreConst asignado a: " + nombreConst;
*/

//Reasignación de variables
nombreVar = "Enrique";
nombreLet = "Paquita";
//const nombreConst = "Cloe";

let resultado = "nombreVar reasignado a: " + nombreVar + "\n" +
                "nombreLet reasignado a: " + nombreLet + "\n\n" +
                "nombreConst no se puede reasignar. Si se intenta hacer 'nombreConst = nuevoValor', \nJavaScript lanza un Uncaught SyntaxError: Identifier 'nombreConst' has already been declared y bloquea la ejecución.";

//let resultado = "nombre reasignado a: " + nombreConst;

//Salida por pantalla
const salida1 = document.getElementById('salida1');
let texto1 = resultado;
salida1.textContent = texto1;
}

