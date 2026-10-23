// PIN correcto de la tarjeta
const PIN = 1234;

// Contador de intentos realizados
let cont = 0;

// Valor que introduce el usuario
let pass;

// Número máximo de intentos permitidos
const maxIntentos = 3;

// Mensaje inicial con las instrucciones
alert("Inserta su PIN de 4 dígitos. Tiene " + maxIntentos + " intentos.");

// do...while: el PIN se pide al menos una vez
// y se repite mientras queden intentos

//------DO WHILE----------------------------------------------
/*do {
    // Pedimos el PIN y lo convertimos a número
    pass = Number(prompt("PIN : "));

    // Sumamos un intento
    cont += 1;

    // PIN incorrecto y todavía quedan intentos:
    // avisamos del intento actual (en el último intento no, para no duplicar alertas)
    if (pass !== PIN && cont < maxIntentos) {
        alert("Intento " + cont + " / " + maxIntentos);
    }

    // PIN correcto: damos la bienvenida y salimos del bucle
    if (pass === PIN) {
        alert("PIN correcto. Bienvenido!!");
        break;
    }

    // PIN incorrecto y se acabaron los intentos: bloqueamos la tarjeta
    if (cont === maxIntentos && pass !== PIN) {
        alert("Tarjeta bloqueada, superó el número de intentos!!");
        break;
    }

} while (cont < maxIntentos); // Repite mientras queden intentos*/

//------WHILE----------------------------------------------

 while (cont < maxIntentos){//Minetras no se cumpla la condición se sigue ejecutando el contenido del while
    // Pedimos el PIN y lo convertimos a número
    pass = Number(prompt("PIN : "));

    // Sumamos un intento
    cont += 1;

    // PIN incorrecto y todavía quedan intentos:
    // avisamos del intento actual (en el último intento no, para no duplicar alertas)
    if (pass !== PIN && cont < maxIntentos) {
        alert("Intento " + cont + " / " + maxIntentos);
    }

    // PIN correcto: damos la bienvenida y salimos del bucle
    if (pass === PIN) {
        alert("PIN correcto. Bienvenido!!");
        break;
    }

    // PIN incorrecto y se acabaron los intentos: bloqueamos la tarjeta
    if (cont === maxIntentos && pass !== PIN) {
        alert("Tarjeta bloqueada, superó el número de intentos!!");
        break;
    }

}