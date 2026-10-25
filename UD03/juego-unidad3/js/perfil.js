const EDAD_MINIMA = 12;

// El script está en el head, así que esperamos a que cargue la página
window.addEventListener("load", function () {
    document.getElementById("btnEntrar").addEventListener("click", validarPerfil);
});

function validarPerfil() {
    const nombre = document.getElementById("nombre").value.trim();
    const fecha = document.getElementById("fecha").value; // formato "2005-03-21"
    const mensaje = document.getElementById("mensaje");

    // Nombre vacío o fecha sin rellenar
    if (nombre === "" || fecha === "") {
        mensaje.textContent = "Acceso denegado";
        return;
    }

    const nacimiento = new Date(fecha);
    const hoy = new Date();

    // La fecha no puede ser de hoy ni del futuro
    if (nacimiento >= hoy) {
        mensaje.textContent = "Acceso denegado";
        return;
    }

    // Edad exacta (funcion de utilidades.js)
    const edad = calcularEdad(fecha);

    if (edad < EDAD_MINIMA) {
        mensaje.textContent = "Acceso denegado";
        return;
    }

    // Guardamos los datos para usarlos en la otra pantalla
    sessionStorage.setItem("nombre", nombre);
    sessionStorage.setItem("fecha", fecha);

    // Cambiamos de pantalla
    window.location.href = "juego.html";
}