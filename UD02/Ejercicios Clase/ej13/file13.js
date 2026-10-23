// Pedimos el nombre y el género al usuario
let nombre = prompt("Escribe el nombre:");
let genero = prompt("masculino/femenino").toLowerCase(); // toLowerCase para que no importen mayúsculas
let saludoDif;

// Función que muestra el saludo final
function saludo(nombre, genero = "no especificado") {
    alert(saludoDif + nombre + "(" + genero + ")");
};

// Función que valida el nombre y decide qué saludo usar según el género
function vacio() {
    // Si cancela el prompt (null) o no escribe nada ("")
    if (nombre == null || nombre == "") {

        alert("Error mnombre no especificado")

    } else if (genero == "masculino") {
        saludoDif = "Bienvenido"
        saludo(nombre, genero);

    } else if (genero == "femenino") {
        saludoDif = "Bienvenida"
        saludo(nombre, genero);

    } else {
        // Género en blanco o cualquier otro valor
        saludoDif = "Bienvenid@"
        saludo(nombre, genero);
    }
};

vacio();// llamamos a la función para que se ejecute todo

////////////////// Función guardada en una variable
/*let nombre = prompt("Escribe el nombre:");
let genero = prompt("masculino/femenino").toLowerCase();
let saludoDif;

// Función guardada en una variable (function expression)
const saludo = function (nombre, genero = "no especificado") {
    alert(saludoDif + nombre + "(" + genero + ")");
};

// Otra función guardada en variable
const vacio = function () {
    if (nombre == null || nombre == "") {

        alert("Error mnombre no especificado")

    } else if (genero == "masculino") {
        saludoDif = "Bienvenido"
        saludo(nombre, genero);

    } else if (genero == "femenino") {
        saludoDif = "Bienvenida"
        saludo(nombre, genero);

    } else {
        saludoDif = "Bienvenid@"
        saludo(nombre, genero);
    }
};

vacio();*/

//////////////FUNCION FLECHA
/*let nombre = prompt("Escribe el nombre:");
let genero = prompt("masculino/femenino").toLowerCase();
let saludoDif;

// Arrow function
const saludo = (nombre, genero = "no especificado") => {
    alert(saludoDif + nombre + "(" + genero + ")");
};

// Arrow function
const vacio = () => {
    if (nombre == null || nombre == "") {

        alert("Error mnombre no especificado")

    } else if (genero == "masculino") {
        saludoDif = "Bienvenido"
        saludo(nombre, genero);

    } else if (genero == "femenino") {
        saludoDif = "Bienvenida"
        saludo(nombre, genero);

    } else {
        saludoDif = "Bienvenid@"
        saludo(nombre, genero);
    }
};

vacio();*/