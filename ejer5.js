{
//Variables
let contador = 0;
let i = 1;

//Bucle
while( i <= 50){
    if(i % 4 === 0){contador = contador + i;}
    i++;
}

let resultado = "Total acumulado: " + contador;

//Salida por pantalla
const salida5 = document.getElementById('salida5');
salida5.textContent = resultado;
}