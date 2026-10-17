//Ejercicio 1
function ejecutarEjercicio1(){
    console.log("\nCombinaciones:")
    // Bucle para generar 50 combinaciones
    for (let i = 1; i <= 50; i++) {
    // Lista vacía para guardar los 6 números de cada jugada
    let combinacion = [];
    
    // Repetimos hasta tener exactamente 6 números
    while (combinacion.length < 6) {
        // Generamos un número entero del 1 al 49
        let numeroAleatorio = Math.floor(Math.random() * 49) + 1;

        // Solo lo añadimos si no ha salido antes
        if (!combinacion.includes(numeroAleatorio)) {
        combinacion.push(numeroAleatorio);
        }
    }

    // Imprimimos la combinación directamente en la consola
    console.log("Combinación " + i + ": " + combinacion.join(", "));
    }
}
