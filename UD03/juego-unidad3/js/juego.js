window.addEventListener("load", function () {
    const nombre = sessionStorage.getItem("nombre");

    // Si alguien entra directo a juego.html sin pasar por el perfil
    if (nombre === null) {
        window.location.href = "index.html";
        return;
    }

    mostrarNombre(nombre);
});

function mostrarNombre(nombre) {
    // Método de String: primera letra en mayúscula y el resto en minúscula
    const formateado = nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();

    document.getElementById("nombreJugador").textContent = "Jugador: " + formateado;
}