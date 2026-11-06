// ============================================================
// perfil.js - Valida el nombre y la fecha de nacimiento (index.html)
// ============================================================

// const: variable que NO cambia. Edad minima para poder jugar
const EDAD_MINIMA = 12;

// El script esta en el head, asi que esperamos a que cargue la pagina.
// addEventListener("load", funcion): ejecuta la funcion cuando la pagina
// ya cargo entera; si no, el boton todavia no existiria.
window.addEventListener("load", function () {

    // document.getElementById(id): busca en la pagina el elemento con ese id
    // addEventListener("click", funcion): ejecuta la funcion al hacer clic
    document.getElementById("btnEntrar").addEventListener("click", validarPerfil);
});

// Se ejecuta al pulsar el boton "Entrar"
function validarPerfil() {

    // .value: lo que hay escrito en el campo
    // .trim(): quita los espacios del principio y del final
    const nombre = document.getElementById("nombre").value.trim();
    const fecha = document.getElementById("fecha").value; // formato "2005-03-21"
    const mensaje = document.getElementById("mensaje");

    // Nombre vacio o fecha sin rellenar
    // ||  significa "o": basta con que una de las dos condiciones se cumpla
    if (nombre === "" || fecha === "") {

        // textContent: cambia el texto de un elemento de la pagina
        mensaje.textContent = "Acceso denegado";

        // return: termina la funcion aqui, asi no se sigue comprobando
        return;
    }

    // new Date(texto): convierte el texto de la fecha en un objeto Date
    // new Date(): sin nada, es la fecha y hora de ahora
    const nacimiento = new Date(fecha);
    const hoy = new Date();

    // Las fechas se pueden comparar con >= y <
    // La fecha no puede ser de hoy ni del futuro
    if (nacimiento >= hoy) {
        mensaje.textContent = "Acceso denegado";
        return;
    }

    // Edad exacta (calcularEdad esta definida en utilidades.js)
    const edad = calcularEdad(fecha);

    // Si es menor que la edad minima, no puede entrar
    if (edad < EDAD_MINIMA) {
        mensaje.textContent = "Acceso denegado";
        return;
    }

    // sessionStorage.setItem(clave, valor): guarda un dato en esta pestana.
    // Lo guardamos para usarlo en la otra pantalla (juego.html)
    sessionStorage.setItem("nombre", nombre);
    sessionStorage.setItem("fecha", fecha);

    // window.location.href = "pagina": cambia a otra pantalla
    window.location.href = "juego.html";
}