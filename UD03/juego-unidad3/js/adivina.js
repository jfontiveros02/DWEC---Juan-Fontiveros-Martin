// ============================================================
// adivina.js - Juego "Adivina el numero" (del 1 al 10)
// ============================================================

// ---------- VARIABLES DEL JUEGO ----------

// El numero que hay que adivinar (se elige al cargar la pagina)
let numeroSecreto;

// ARRAY: guarda todos los numeros que ha probado el jugador
let intentos = [];

// Puntos de la partida: se calculan solo cuando se acierta
let puntos = 0;

// Indica si la partida ya termino (true) o sigue en marcha (false)
let terminado = false;

// ---------- ARRANQUE ----------

// addEventListener("load", funcion): ejecuta la funcion cuando la pagina
// ya cargo entera (necesario porque el script esta en el <head>)
window.addEventListener("load", function () {

    // Math.random(): devuelve un decimal aleatorio entre 0 y 0.99999...
    // Lo multiplicamos por 10 para que vaya de 0 a 9.99999...
    // Math.floor(): REDONDEA HACIA ABAJO (7.9 pasa a 7), asi queda de 0 a 9
    // Le sumamos 1 para que el numero secreto vaya de 1 a 10
    numeroSecreto = Math.floor(Math.random() * 10) + 1;

    // addEventListener("click", funcion): ejecuta la funcion al hacer clic
    document.getElementById("btnProbar").addEventListener("click", probar);
    document.getElementById("btnNueva").addEventListener("click", nuevaPartida);
});

// ---------- JUGAR ----------

// Se ejecuta cada vez que el jugador pulsa el boton "Probar"
function probar() {

    // Si ya acerto, no dejamos seguir jugando
    if (terminado) {
        return; // return: termina la funcion aqui
    }

    // .value: lo que hay escrito en el campo
    // .trim(): quita los espacios del principio y del final
    const texto = document.getElementById("numero").value.trim();

    // Number(texto): convierte el texto a numero ("5" pasa a 5)
    const numero = Number(texto);

    const pista = document.getElementById("pista");

    // VALIDACION: el campo no puede estar vacio, tiene que ser un numero
    // entero (Number.isInteger) y estar entre 1 y 10
    if (texto === "" || !Number.isInteger(numero) || numero < 1 || numero > 10) {
        pista.textContent = "Escribe un n\u00famero entero del 1 al 10";
        return;
    }
    // Nota: \u00fa es la letra u con tilde. Se escribe asi para evitar problemas de codificacion.

    // array.push(valor): AÑADE el valor al final del array
    intentos.push(numero);

    // ACIERTO
    if (numero === numeroSecreto) {

        // array.length: cantidad de elementos del array (los intentos gastados)
        // Math.max(a, b): devuelve el mayor de los dos. Asi los puntos
        // nunca bajan de 0 (por ejemplo, 10 - 12 daria -2, y Math.max devuelve 0)
        puntos = Math.max(0, 10 - intentos.length);

        pista.textContent = "\u00a1Acertaste! El n\u00famero era " + numeroSecreto;
        terminado = true;

    // FALLO
    } else {

        // Math.abs(n): valor absoluto (quita el signo menos: -3 pasa a 3)
        // Es la distancia entre tu numero y el secreto
        const distancia = Math.abs(numero - numeroSecreto);

        // condicion ? valorSiSi : valorSiNo  (operador ternario, un if en una linea)
        let texto2 = numero < numeroSecreto ? "M\u00e1s alto" : "M\u00e1s bajo";

        // Si estamos a 2 o menos, avisamos de que esta cerca
        if (distancia <= 2) {
            texto2 = texto2 + " (est\u00e1s cerca)";
        }
        pista.textContent = texto2;
    }

    actualizarPantalla();
}

// ---------- MOSTRAR DATOS ----------

// Escribe en la pagina los intentos y los puntos actuales
function actualizarPantalla() {

    // array.join(", "): une todos los elementos del array en un texto,
    // separados por ", " (por ejemplo, [3, 7, 5] pasa a "3, 7, 5")
    document.getElementById("intentos").textContent =
        "Intentos: " + intentos.length + " (" + intentos.join(", ") + ")";

    document.getElementById("puntos").textContent = "Puntos: " + puntos;
}

// ---------- NUEVA PARTIDA ----------

// window.location.reload(): recarga la pagina. Al recargar, se vuelve a
// ejecutar el evento "load" y se elige un numero secreto nuevo
function nuevaPartida() {
    window.location.reload();
}