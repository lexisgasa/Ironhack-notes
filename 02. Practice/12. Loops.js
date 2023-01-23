// Loops 1
// Crea un for loop que cuente de 0 a 100 i en cada iteración sume el valor actual a un resultado total. Al final haz un console.log que printee el resultado.
let loop1 = () => {
    let total = 0;
    for (let i = 0; i <= 100; i++) {
        total += i
        console.log(total)
    }
}

// Loops 2
// Crea un array de números llamado "numbers" con valores aleatorios.
//  Utiliza un for loop para recorrer el array y encontrar el número mayor y el número menor.
//  Imprime ambos números en la consola.

let loop2 = () => {
    let numbers = [8, 21, 44, 1, 13, 3, 7]
    let largest = numbers[0];
    let smallest = numbers[0] ;

    for ( let i = 0; i < numbers.length; i++   ) {
       
        if ( numbers[i] > numbers[i-1] && numbers[i] >= largest ) {
            largest = numbers[i];
        } else if ( numbers[i] <= smallest ) {
            smallest = numbers[i];
        }
    } 
console.log(smallest)
console.log(largest)

}

// Loops 3
// Utiliza un bucle while para imprimir los números pares del 2 al 20.
let loop3 = () => {
    let i = 0;
    while (i <= 20) {
        if ( i % 2 === 0 ) {
            console.log(i)
            i++;
        } else {
            i++;
        }
    }
}

// Loops 4
// Crea una variable llamada "numeroAdivinar" con un número entero entre 1 y 10 (puedes asignarle un valor manualmente).
// Crea una variable llamada "numeroIngresado" y asignale el valor 0.
// Utiliza un bucle do...while para asignar a la variable "numeroIngresado" un número entero obtenido
//  de un array de números [1,2,3,4,5,6,7,8,9,10]. El bucle debe continuar hasta que "numeroIngresado" 
// sea igual a "numeroAdivinar".
// Una vez que el bucle finaliza, imprime en la consola el número de iteraciones realizadas.

let loop4 = () => {
    let numeroAdivinar = 8;
    let numeroIngresado = 0;
    let numbers = [1,2,3,4,5,6,7,8,9,10];
    let intentos = 0;
    
    do {   
        numeroIngresado = numbers[intentos];
        intentos++
    } while (numeroIngresado != numeroAdivinar);



}