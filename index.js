// Funciones flecha
const sumar = (num1, num2) => num1 + num2;
const restar = (num1, num2) => num1 - num2;
const multiplicar = (num1, num2) => num1 * num2;
const dividir = (num1, num2) => num1 / num2;

// Se solicita input numérico al usuario
const num1 = parseInt(prompt("Ingrese el primer número:"));
const num2 = parseInt(prompt("Ingrese el segundo número:"));

// Se muestran las operaciones disponibles en consola
console.log("Operaciones disponibles: ");
console.log("- Suma (+)");
console.log("- Resta (-)");
console.log("- Multiplicación (*)");
console.log("- División (/)");

// Se solicita input de la operación
const operacion = prompt("Ingrese la operación que desea realizar");

// Se llama la función correspondiente según la operación ingresada
switch (operacion) {
  case "+":
    console.log(`El resultado de la suma es: ${sumar(num1, num2)}`);
    break;
  case "-":
    console.log(`El resultado de la resta es: ${restar(num1, num2)}`);
    break;
  case "*":
    console.log(`El resultado de la multiplicación es: ${multiplicar(num1, num2)}`);
    break;
  case "/":
    console.log(`El resultado de la división es: ${dividir(num1, num2)}`);
    break;
  default:
    console.log("Operación inválida. Por favor, inténtelo de nuevo.");
}
