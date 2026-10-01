let radio;
const PI = 3.14159;//Podríamos usar la constante Math.PI  en lugar a PI la cual es mas exacta

radio = Number(prompt("Escribe el radio del círculo:"));
//Comprobamos si es introducido un valor numérico isNaN() y a su vez que sea mayor que 0
if (isNaN(radio) || radio<= 0) {
    document.write("Debe introducir un número > 0")
}else{
        document.write("El radio principal es: " + radio + "<br>");

    const area = PI * 2 * radio ; 
    //const longitud = (radio ** 2).toFixed(2)
    

//Document.write convierte cualquier valor a string directamente
//<br> salto de linea (como hacer enter+sift en un documento)
document.write("El area del círculo es: " + area + "<br>" );

//Calculamos el nuevo radio
//Usamos un operador de decremento o aumento

let aumento = radio
aumento *= (25/100)
radio = radio + aumento
    document.write("El nuevo radio + 25% es: " + radio + "<br>");

let areaNew = PI * 2 * radio ;

//Calculamos el nuevo area
    document.write("Por lo que el área de nuevo es: " + areaNew + "<br>");

;



}
