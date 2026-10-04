{

let numero = "";

for(i = 20; i >= 1; i--) {
    if (i % 5 === 0 && i % 3 === 0){
        numero += i + ": FizzBuzz\n";
    }
    else if(i % 3 === 0){
        numero += i + ": Fizz\n";
    }
    else if(i % 5 === 0){
        numero += i + ": Buzz\n"
    }
    else{
        numero += i + "\n"
    }
}

// Salida por pantalla
const salida6 = document.getElementById('salida6');
salida6.textContent = numero;

}