// Devuelve la edad exacta a partir de un texto "2005-03-21"
function calcularEdad(fecha) {
    const nacimiento = new Date(fecha + "T00:00:00"); // hora local
    const hoy = new Date();

    let edad = hoy.getFullYear() - nacimiento.getFullYear();

    // Si todavia no ha cumplido anios este anio, restamos uno
    const mesActual = hoy.getMonth();
    const mesNacimiento = nacimiento.getMonth();
    if (mesActual < mesNacimiento ||
        (mesActual === mesNacimiento && hoy.getDate() < nacimiento.getDate())) {
        edad--;
    }
    return edad;
}