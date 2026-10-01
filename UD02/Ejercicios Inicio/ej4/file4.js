let radio;

const PI = 3.14159;

radio = Number(prompt("Escribe el radio del círculo:"));
if (isNaN(radio) || radio<= 0) {
    document.write("Debe introducir un número > 0")
}else{
    const volumen = (4 * PI *(radio**3))/3
    const area = PI * 2* radio ; //let area = Math.PI * (radio ** 2);
    const longitud = (radio ** 2).toFixed(2)
    //Podemos usar la constante Math.PI  en lugar a PI la cual es mas exacta

//Document.write convierte cualquier valor a string directamente
//<br> salto de linea (enter+sift)
document.write("El area del círculo es: " + area.toFixed(2) + "<br>" );

//Ext.2
//<p> parrafo (enter)
document.write("la longitud del círculo es: " +  longitud+ "<p>" );


document.write("El volumen de la circunferencia de mismo radio es: " + volumen.toFixed(2));
//  "\n"  funciona en dalert, no en document.write

}
