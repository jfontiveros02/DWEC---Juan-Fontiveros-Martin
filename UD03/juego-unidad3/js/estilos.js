// ============================================================
// estilos.js - Cambia los estilos del panel segun los datos del jugador
// ============================================================

// addEventListener("load", funcion): ejecuta la funcion cuando la pagina
// ya ha cargado entera. Es necesario porque el script esta en el <head>
// y, sin esperar, el panel todavia no existiria.
window.addEventListener("load", function () {

    // sessionStorage.getItem(clave): lee un valor guardado en esta pestana.
    // Devuelve null si esa clave no existe.
    const nombre = sessionStorage.getItem("nombre");
    const fecha = sessionStorage.getItem("fecha");

    // Si faltan datos no hacemos nada (juego.js ya manda a index.html)
    // return: termina la funcion aqui.
    if (nombre === null || fecha === null) {
        return;
    }

    // calcularEdad esta definida en utilidades.js
    const edad = calcularEdad(fecha);

    // Llamamos a la funcion que pone los estilos
    aplicarEstilos(nombre, edad);
});

// Recibe el nombre y la edad y cambia los colores del panel
function aplicarEstilos(nombre, edad) {

    // document.getElementById(id): busca en la pagina el elemento con ese id
    const panel = document.getElementById("panel");

    // element.style.propiedad = valor: cambia el CSS del elemento desde JS

    // ESTILO 1: color de fondo segun la edad
    if (edad < 18) {
        panel.style.backgroundColor = "#cfe8ff"; // azul claro: menores
    } else if (edad < 30) {
        panel.style.backgroundColor = "#d4f5d4"; // verde claro: de 18 a 29
    } else {
        panel.style.backgroundColor = "#ffe0b3"; // naranja claro: 30 o mas
    }

    // ESTILO 2: color del texto segun la longitud del nombre
    // nombre.length: numero de letras del texto
    // condicion ? valorSiSi : valorSiNo  (operador ternario, un if en una linea)
    panel.style.color = nombre.length > 6 ? "#7a1f1f" : "#1f3d7a";

    // Un poco de decoracion
    panel.style.padding = "15px";
    panel.style.borderRadius = "10px";
}