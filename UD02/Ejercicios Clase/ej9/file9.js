
//MIRAR CORRECION Y COMPARAR
// Fuente 1: lo que escribe el usuario
// prompt() devuelve null si pulsa Cancelar y "" si acepta sin escribir
const usuario = prompt("Escribe tu nombre de usuario:");

// Fuente 2: constante de prueba (prueba con null, undefined, "" o 0)
const invitado = "";//0;//"Invitado";//NaN;//false; esto son diferentes pruebas

// Fuente 3: valor de respaldo
const respaldo = "Anónimo";

// Con ??: solo evita al siguiente si el valor es null o undefined
const conNullish = usuario ?? invitado ?? respaldo;

// Con ||: evita si el valor es "falso" (null, undefined, "", 0, false...)
const conOr = usuario || invitado || respaldo;

console.log("Con ??:", conNullish);
console.log("Con ||:", conOr);


