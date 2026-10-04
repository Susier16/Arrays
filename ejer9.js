{
    
//Variables
let resultado = "";
const simbolo = "*";
const filas = 20;

//Bucle principal de 19 a 0
for(let i = filas - 1; i >= 0; i--){
    //Bucle anidado para poner los símbolos
    for(let j = 0; j < i; j++){
        resultado += simbolo;
    }
    //Añade el símbolo y salta de línea
    resultado += simbolo + "\n";

}
// Salida por pantalla
  const salida9 = document.getElementById('salida9');
  salida9.textContent = resultado;

}