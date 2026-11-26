/*
 * Sala 1 - Objetos
 * Autor: Juan Fontiveros
 *
 * Requisitos:
 *  - Objeto con propiedades de tipos simples (string, number, boolean)
 *  - Al menos una propiedad que sea una función (método)
 *  - Al menos una propiedad con objetos anidados
 *  - Clonación de objetos (spread = copia superficial, structuredClone = copia profunda)
 *  - Control de excepciones (try / catch / throw)
 */

// ---------- OBJETO PRINCIPAL ----------
const cofre = {
    // Tipos simples
    nombre: "Cofre del bibliotecario",
    cerrado: true,
    intentosMaximos: 3,
    intentosUsados: 0,

    // Objetos anidados
    habitacion: {
        libros:  { cantidad: 7, descripcion: "libros polvorientos en la estantería" },
        velas:   { cantidad: 3, descripcion: "velas encendidas sobre la mesa" },
        cuadros: { cantidad: 4, descripcion: "cuadros colgados en la pared" }
    },

    cerradura: {
        digitos: 3,
        nota: "Multiplica los libros por las velas... y lo que cuelga de la pared va al final."
    },

    // Propiedad con función: calcula el código a partir de los objetos anidados
    calcularCodigo() {
        const { libros, velas, cuadros } = this.habitacion;
        return `${libros.cantidad * velas.cantidad}${cuadros.cantidad}`;
    },

    // Propiedad con función: comprueba el código. Lanza excepciones si algo va mal.
    comprobar(codigo) {
        if (!this.cerrado) {
            throw new Error("El cofre ya está abierto.");
        }
        if (codigo.trim() === "") {
            throw new Error("Tienes que escribir un código.");
        }
        if (!/^\d+$/.test(codigo)) {
            throw new TypeError("El código solo puede tener números.");
        }
        if (codigo.length !== this.cerradura.digitos) {
            throw new RangeError(`El código debe tener ${this.cerradura.digitos} dígitos.`);
        }

        this.intentosUsados++;

        if (codigo === this.calcularCodigo()) {
            this.cerrado = false;
            return true;
        }
        return false;
    },

    intentosRestantes() {
        return this.intentosMaximos - this.intentosUsados;
    }
};

// ---------- CLONACIÓN ----------
// Copia SUPERFICIAL con spread: las propiedades simples se copian,
// pero los objetos anidados se comparten con el original (misma referencia).
const copiaSuperficial = { ...cofre };

// Copia PROFUNDA con structuredClone: los objetos anidados también se duplican.
// structuredClone no puede copiar funciones, así que clonamos solo los datos.
const copiaHabitacion = structuredClone(cofre.habitacion);

// Demostración (se ve en la consola del navegador)
copiaSuperficial.nombre = "Copia del cofre";            // no afecta al original
copiaHabitacion.libros.cantidad = 999;                  // no afecta al original
console.log("Original:", cofre.nombre, cofre.habitacion.libros.cantidad);              // Cofre del bibliotecario 7
console.log("Copia superficial:", copiaSuperficial.nombre);                              // Copia del cofre
console.log("¿Comparten habitación?", copiaSuperficial.habitacion === cofre.habitacion); // true
console.log("¿Copia profunda independiente?", copiaHabitacion !== cofre.habitacion);    // true

// ---------- DOM ----------
const info      = document.getElementById("info");
const inputCod  = document.getElementById("codigo");
const mensaje   = document.getElementById("mensaje");
const pIntentos = document.getElementById("intentos");
const btnAbrir  = document.getElementById("btnAbrir");

function mostrarIntentos() {
    pIntentos.textContent = `Intentos restantes: ${cofre.intentosRestantes()}`;
}

function mostrarMensaje(texto, tipo) {
    mensaje.textContent = texto;
    mensaje.className = `mensaje ${tipo}`;
}

document.getElementById("btnNota").addEventListener("click", () => {
    info.innerHTML = `<p class="pista">"${cofre.cerradura.nota}"</p>`;
});

document.getElementById("btnExaminar").addEventListener("click", () => {
    // Mostramos los datos usando la COPIA profunda para no tocar el original.
    // Volvemos a clonar para que el jugador vea los valores reales.
    const vista = structuredClone(cofre.habitacion);
    info.innerHTML = "";
    for (const clave in vista) {
        const { cantidad, descripcion } = vista[clave];
        info.innerHTML += `<p class="pista">Ves ${cantidad} ${descripcion}.</p>`;
    }
});

btnAbrir.addEventListener("click", () => {
    try {
        const correcto = cofre.comprobar(inputCod.value);

        if (correcto) {
            mostrarMensaje("¡Clic! El cofre se abre y dentro hay una llave. Pasando a la sala 2...", "exito");
            btnAbrir.disabled = true;
            sessionStorage.setItem("sala1", "superada");
            setTimeout(() => window.location.href = "sala2.html", 2000);
        } else if (cofre.intentosRestantes() <= 0) {
            mostrarMensaje("Te has quedado sin intentos. La sala se reinicia...", "error");
            btnAbrir.disabled = true;
            setTimeout(() => window.location.reload(), 2000);
        } else {
            mostrarMensaje("Código incorrecto.", "error");
        }
    } catch (error) {
        // Capturamos cualquier excepción lanzada por comprobar()
        mostrarMensaje(`${error.name}: ${error.message}`, "error");
    } finally {
        mostrarIntentos();
        inputCod.value = "";
        inputCod.focus();
    }
});

mostrarIntentos();
