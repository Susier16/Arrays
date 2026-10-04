{
    
//Variables
let resultado = "";
const simbolo = "*";
const filas = 20;

//Bucle principal de 19 a 0
for(let i = filas - 1; i >= 0; i--){
    //Bucle anidado para poner espacios antes del símbolo
    for(let j = 0; j < i; j++){
        resultado += " ";
    }
    //Añade elm símbolo y salta de línea
    resultado += simbolo + "\n";

}
// Salida por pantalla
  const salida8 = document.getElementById('salida8');
  salida8.textContent = resultado;

}