// ============================================================
// juego.js - Rellena el panel del jugador (juego.html)
// ============================================================

// addEventListener("load", funcion): ejecuta la funcion cuando la pagina
// ya cargo entera (necesario porque el script esta en el head)
window.addEventListener("load", function () {

    // sessionStorage.getItem(clave): lee un dato guardado en esta pestana.
    // Devuelve null si esa clave no existe
    const nombre = sessionStorage.getItem("nombre");

    // Si alguien entra directo a juego.html sin pasar por el perfil
    if (nombre === null) {

        // window.location.href = "pagina": cambia a otra pantalla
        window.location.href = "index.html";

        // return: termina la funcion aqui
        return;
    }

    // Llamamos a las funciones que escriben los datos en el panel
    mostrarNombre(nombre);
    mostrarDatosFecha(sessionStorage.getItem("fecha"));
});

// Escribe el nombre del jugador con formato en el panel
function mostrarNombre(nombre) {

    // Metodos de String: primera letra en mayuscula y el resto en minuscula
    // charAt(0): devuelve la primera letra del texto
    // toUpperCase(): convierte el texto a MAYUSCULAS
    // slice(1): devuelve el texto sin la primera letra
    // toLowerCase(): convierte el texto a minusculas
    // +: une (concatena) los dos trozos
    const formateado = nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();

    // textContent: cambia el texto de un elemento de la pagina
    document.getElementById("nombreJugador").textContent = "Jugador: " + formateado;
}

// Escribe la edad y el dia de la semana de nacimiento en el panel
function mostrarDatosFecha(fecha) {

    // calcularEdad esta definida en utilidades.js
    const edad = calcularEdad(fecha);

    // new Date(texto): convierte el texto en un objeto Date.
    // Le anadimos "T00:00:00" para que use la hora local
    const nacimiento = new Date(fecha + "T00:00:00");

    // \u00f1 es la letra n con tilde (se escribe asi para evitar problemas)
    document.getElementById("edadJugador").textContent = "Edad: " + edad + " a\u00f1os";

    // Metodo de Date: dia de la semana en que naciste
    // toLocaleDateString("es-ES", opciones): fecha en formato espanol.
    // { weekday: "long" } hace que solo muestre el dia de la semana completo
    document.getElementById("cumpleJugador").textContent =
        "Naciste un " + nacimiento.toLocaleDateString("es-ES", { weekday: "long" });
}