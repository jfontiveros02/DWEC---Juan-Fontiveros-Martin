// ============================================================
// ayuda.js - Muestra en la ventana de ayuda los datos recibidos
// ============================================================

// addEventListener("load", funcion): espera a que la ventana cargue entera
window.addEventListener("load", function () {

    // window.location.search: devuelve la parte de la URL desde el "?"
    // (por ejemplo, "?nombre=Paco&puntos=8")
    // URLSearchParams(texto): convierte ese texto en algo de lo que se puede
    // leer cada dato por su nombre
    const params = new URLSearchParams(window.location.search);

    // params.get(clave): devuelve el valor de ese dato (o null si no existe)
    // "|| valor": si el dato no existe, usamos un valor por defecto
    const nombre = params.get("nombre") || "jugador";
    const puntos = params.get("puntos") || 0;
    const intentos = params.get("intentos") || 0;
    const pista = params.get("pista") || "desconocida";

    // textContent: cambia el texto de un elemento de la pagina
    document.getElementById("saludo").textContent = "Hola, " + nombre;
    document.getElementById("datosAyuda").textContent =
        "Intentos: " + intentos + " | Puntos: " + puntos;
    document.getElementById("pista").textContent =
        "Pista: el n\u00famero secreto es " + pista;
});