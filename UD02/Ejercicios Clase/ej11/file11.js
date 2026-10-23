//Variables
let valor = Number(prompt("Escribe un número para multiplicarlo: "))//Valor del usuario
let n = 11; //numeros de la tabla
let tabla = [];
let i;//Variable incremental primer bucle
let j;//Variable incremental segundo bucle
let resultado;//Resultado de cada multiplicación
//Primer bucle primera tabla , saca los resultados pares
for (i = 0; i < n; i++) {
    resultado = valor * i;

    if (resultado % 2 == 0) {
        tabla = resultado;
        alert(tabla);
    } 
    if (i == 3) {
        valor++;
        for (j = 0; j < n; j++) {//Segundo bucle primera tabla , saca los resultados pares

            resultado = valor * j;
            if (resultado % 2 == 0) {
                tabla = resultado;
                alert(tabla);
            } continue;//Continue salta el codigo que no cumple la condicion

        }

    }

}