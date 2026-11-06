// ============================================================
// utilidades.js - Funciones que se reutilizan en varias pantallas
// ============================================================

// Devuelve la edad exacta a partir de un texto "2005-03-21"
function calcularEdad(fecha) {

    // new Date(texto): crea un objeto Date con esa fecha.
    // Le anadimos "T00:00:00" para que use la hora local
    const nacimiento = new Date(fecha + "T00:00:00");

    // new Date(): sin nada, es la fecha y hora de ahora
    const hoy = new Date();

    // getFullYear(): devuelve el anio de la fecha (por ejemplo, 2026)
    // Restando los anios sale la edad "aproximada"
    let edad = hoy.getFullYear() - nacimiento.getFullYear();

    // getMonth(): devuelve el mes (de 0 = enero a 11 = diciembre)
    const mesActual = hoy.getMonth();
    const mesNacimiento = nacimiento.getMonth();

    // Si todavia no ha cumplido anios este anio, restamos uno.
    // Pasa si el mes actual es anterior al mes de nacimiento,
    // o si es el mismo mes pero el dia de hoy es anterior al del cumple.
    // getDate(): devuelve el dia del mes (de 1 a 31)
    // ||  significa "o"      &&  significa "y"
    if (mesActual < mesNacimiento ||
        (mesActual === mesNacimiento && hoy.getDate() < nacimiento.getDate())) {

        // edad--: resta 1 a la variable
        edad--;
    }

    // return: devuelve el resultado a quien llamo a la funcion
    return edad;
}