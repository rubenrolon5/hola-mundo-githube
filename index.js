let nombre = "juan perez";
let edad = calcularEdad(2002);
console.log("hola"+ nombre);
console.log(nombre + "tiene"+ edad+"años");
console.log("Se va a pagar: "+calcularSalario(16));

function calcularEdad(añonacimiento){
    return new Date().getFullYear() -añonacimiento;
}

function calcularSalario(horasTrabajadas){
    return horasTrabajadas * 20000;
}