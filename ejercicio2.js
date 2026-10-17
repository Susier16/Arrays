//Ejercicio2
function ejecutarEjercicio2() {

    // Array con 11 ceros para usar directamente los índices del 1 al 10
    let frecuencias = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    // Repetimos 10.000 veces
    for (let i = 0; i < 10000; i++) {
    // Generamos un número aleatorio del 1 al 10
    let numero = Math.floor(Math.random() * 10) + 1;

    // Sumamos 1 a la cuenta de ese número
    frecuencias[numero]++;
    }

    // Mostramos los resultados en la consola con el formato pedido
    console.log("\nFrecuencias:");
    for (let num = 1; num <= 10; num++) {
    console.log("Número " + num + ": " + frecuencias[num]);
    }
}