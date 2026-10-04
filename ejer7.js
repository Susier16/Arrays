{
    
//Variables
let resultado = "";
const simbolo = "*";
const filas = 20;

//Bucle principal de 0 a 19
for(let i = 0; i < filas; i++){
    //Bucle anidado para poner espacios antes del símbolo
    for(let j = 0; j < i; j++){
        resultado += " ";
    }
    //Añade elm símbolo y salta de línea
    resultado += simbolo + "\n";

}
// Salida por pantalla
  const salida7 = document.getElementById('salida7');
  salida7.textContent = resultado;

}