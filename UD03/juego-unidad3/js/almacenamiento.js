// ============================================================
// almacenamiento.js - Guarda datos en cookies, sessionStorage y localStorage
// ============================================================
// RESUMEN DE LAS 3 HERRAMIENTAS:
//  - cookie:         dura los dias que le digamos (aqui 7), aunque cierres el navegador
//  - sessionStorage: dura mientras la pestana siga abierta
//  - localStorage:   dura para siempre (hasta que se borre a mano)

// ---------- COOKIES ----------

// Guarda una cookie con un nombre, un valor y los dias que dura
function guardarCookie(nombre, valor, dias) {

    // new Date(): crea un objeto con la fecha y hora de ahora
    const caduca = new Date();

    // getDate(): devuelve el dia del mes. setDate(n): lo cambia.
    // Sumamos los dias para calcular cuando caduca la cookie
    caduca.setDate(caduca.getDate() + dias);

    // document.cookie = "nombre=valor; expires=fecha; path=/"  GUARDA la cookie
    // encodeURIComponent(): convierte el texto a un formato seguro
    // (por ejemplo, cambia los espacios y las comas por codigos)
    // toUTCString(): convierte la fecha al formato que entienden las cookies
    // path=/ : la cookie vale para todas las paginas de la web
    document.cookie = nombre + "=" + encodeURIComponent(valor) +
        "; expires=" + caduca.toUTCString() + "; path=/";
}

// Lee una cookie por su nombre. Devuelve null si no existe
function leerCookie(nombre) {

    // document.cookie devuelve TODAS las cookies juntas: "a=1; b=2; c=3"
    // split("; "): separa ese texto en un array: ["a=1", "b=2", "c=3"]
    const partes = document.cookie.split("; ");

    // Recorremos el array con un bucle for
    for (let i = 0; i < partes.length; i++) {

        // split("="): separa "a=1" en ["a", "1"]
        const par = partes[i].split("=");

        // Si el nombre coincide, devolvemos su valor
        // decodeURIComponent(): deshace el encodeURIComponent
        if (par[0] === nombre) {
            return decodeURIComponent(par[1]);
        }
    }
    return null; // no se encontro la cookie
}

// ---------- AL CARGAR LA PAGINA ----------

window.addEventListener("load", function () {

    // Mostramos lo que ya estaba guardado
    mostrarRecord();
    mostrarUltimaPartida();

    // COOKIE: leemos la fecha de la ultima visita
    const ultima = leerCookie("ultimaVisita");
    const elemento = document.getElementById("ultimaVisita");

    if (ultima === null) {
        elemento.textContent = "Primera visita";
    } else {
        elemento.textContent = "\u00daltima visita: " + ultima;
    }

    // Guardamos la visita de ahora para la proxima vez (dura 7 dias)
    // toLocaleString("es-ES"): fecha y hora en formato espanol
    guardarCookie("ultimaVisita", new Date().toLocaleString("es-ES"), 7);
});

// ---------- GUARDAR LA PARTIDA ----------

// adivina.js llama a esta funcion cuando el jugador acierta
function guardarPartida() {

    // sessionStorage.setItem(clave, valor): GUARDA un dato en esta pestana
    // "puntos" viene de adivina.js
    sessionStorage.setItem("ultimosPuntos", puntos);

    // localStorage.getItem(clave): LEE el record guardado (o null si no hay)
    // Number(...): lo convierte a numero. Si no hay record, usamos 0
    const recordActual = Number(localStorage.getItem("record")) || 0;

    // Math.max(a, b): se queda con el mayor. Solo cambia el record si lo superamos
    // localStorage.setItem(clave, valor): GUARDA el dato para siempre
    localStorage.setItem("record", Math.max(recordActual, puntos));

    // Actualizamos lo que se ve en pantalla
    mostrarRecord();
    mostrarUltimaPartida();
}

// ---------- MOSTRAR DATOS ----------

// Escribe el record (guardado en localStorage) en la pagina
function mostrarRecord() {
    const record = Number(localStorage.getItem("record")) || 0;
    document.getElementById("record").textContent = "R\u00e9cord: " + record;
}

// Escribe los puntos de la ultima partida ganada en esta sesion
function mostrarUltimaPartida() {
    const valor = sessionStorage.getItem("ultimosPuntos");
    const elemento = document.getElementById("ultimaPartida");

    if (valor === null) {
        elemento.textContent = "En esta sesi\u00f3n a\u00fan no has ganado";
    } else {
        elemento.textContent = "Puntos de tu \u00faltima partida: " + valor;
    }
}