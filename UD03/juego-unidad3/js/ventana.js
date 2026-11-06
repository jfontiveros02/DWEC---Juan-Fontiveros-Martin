// ============================================================
// ventana.js - Abre una ventana adicional con datos del jugador
// ============================================================

// addEventListener("load", funcion): ejecuta la funcion cuando la pagina
// ya cargo entera (necesario porque el script esta en el <head>)
window.addEventListener("load", function () {

    // addEventListener("click", funcion): ejecuta la funcion al hacer clic
    document.getElementById("btnAyuda").addEventListener("click", abrirAyuda);
});

// Se ejecuta al pulsar el boton "Ayuda"
function abrirAyuda() {

    // sessionStorage.getItem(clave): lee el nombre guardado en el perfil
    const nombre = sessionStorage.getItem("nombre");

    // "puntos" e "intentos" son variables de adivina.js
    // intentos.length: cantidad de intentos gastados hasta ahora

    // OPERADOR %: devuelve el resto de una division.
    // Si el resto de dividir entre 2 es 0, el numero es par; si no, impar
    // condicion ? valorSiSi : valorSiNo  (operador ternario, un if en una linea)
    const pista = numeroSecreto % 2 === 0 ? "par" : "impar";

    // Construimos la direccion de la ventana enviando los datos por la URL.
    // Lo que va despues de "?" son los datos: clave=valor separados por "&"
    // encodeURIComponent(): convierte el texto a un formato seguro para la URL
    const url = "ayuda.html?nombre=" + encodeURIComponent(nombre) +
        "&puntos=" + puntos +
        "&intentos=" + intentos.length +
        "&pista=" + pista;

    // window.open(url, nombreVentana, opciones): ABRE una ventana nueva
    // width y height: ancho y alto de la ventana en pixeles
    window.open(url, "ayuda", "width=420,height=300");
}