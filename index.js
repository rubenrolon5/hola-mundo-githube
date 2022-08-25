let nombre = "juan perez";
let edad = calcularEdad(2002);
console.log("hola"+ nombre);
console.log(nombre + "tiene"+ edad+"años");

console.log("se le pagara:"+calcularsalario(8,30000));
 function calcularEdad(añonacimiento){
    return new Date().getFullYear() -añonacimiento;
}
function calcularsalario(horastrabajadas, montoporhora){
    return horastrabajadas * montoporhora;
}