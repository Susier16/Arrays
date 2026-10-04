{
    
//Variables
let resultado = "";
const simbolo = "*";
const filas = 20;

//Bucle principal de 0 a 19
for(let i = 0; i < filas; i++){
    //Bucle anidado para poner los símbolos
    for(let j = 0; j < i; j++){
        resultado += simbolo;
    }
    //Añade el símbolo y salta de línea
    resultado += simbolo + "\n";

}
// Salida por pantalla
  const salida10 = document.getElementById('salida10');
  salida10.textContent = resultado;

}