{
//Variable contador
let contador = 0;

//Bucle For 
for (let i = 0; i < 5; i++) {
    contador += 1;
}

//Resultado
let resultado = "El resultado final del contador tras 5 iteraciones es " + contador;

//Salida por pantalla
const salida2 = document.getElementById('salida2');
let texto2 = resultado;
salida2.textContent = texto2;
}