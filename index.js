let nombre = "juan perez";
let edad = calcularEdad(2002);
console.log("hola"+ nombre);
console.log(nombre + "tiene"+ edad+"años");
function calcularEdad(añonacimiento){
    return new Date().getFullYear() -añonacimiento;
}