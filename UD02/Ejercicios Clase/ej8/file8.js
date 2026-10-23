let valor = Number(prompt("Escribe un número entre 1 y 5"));

    switch (valor) {
        case 1:
            alert("One");//En caso de introducir el número 1
            break

        case 2:
            alert("Two");//En caso de introducir el número 2
            break

        case 3:
            alert("Three");//En caso de introducir el número 3
            break
        case 4:
            alert("Four");//En caso de introducir el número 4
            break
        case 5:
            alert("Five");//En caso de introducir el número 5
            break

        case 6://Utilizamos la misma respuesta en caso de que el valor sea 6 ó 7 de esta forma
        case 7:
            alert("¡Six Seven!");//En caso de introducir los números 6 ó 7
            break
        
        default:
            alert("Escribe un valor numérico entre 1y 5");//En caso de introducir valor fuera del rango o valor NaN
            break
    }

