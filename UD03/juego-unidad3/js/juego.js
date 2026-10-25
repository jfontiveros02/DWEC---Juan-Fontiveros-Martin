window.addEventListener("load", function () {
    const nombre = sessionStorage.getItem("nombre");

    // Si alguien entra directo a juego.html sin pasar por el perfil
    if (nombre === null) {
        window.location.href = "index.html";
        return;
    }

    mostrarNombre(nombre);
    mostrarDatosFecha(sessionStorage.getItem("fecha"));
});

function mostrarNombre(nombre) {
    // Método de String: primera letra en mayúscula y el resto en minúscula
    const formateado = nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();

    document.getElementById("nombreJugador").textContent = "Jugador: " + formateado;
}

function mostrarDatosFecha(fecha) {
    const edad = calcularEdad(fecha);
    const nacimiento = new Date(fecha + "T00:00:00");

    document.getElementById("edadJugador").textContent = "Edad: " + edad + " a\u00f1os";
    // Metodo de Date: dia de la semana en que naciste
    document.getElementById("cumpleJugador").textContent =
        "Naciste un " + nacimiento.toLocaleDateString("es-ES", { weekday: "long" });
}