let msg;
alert(typeof msg + "->" + msg);//Esto muestra el tipo y el resultado
msg = BigInt(123435345645634734674n)
alert(typeof msg + "->" + msg);

msg = prompt("Escribe un número"); //prompt() siempre devuelve un string, aquí tenemos el primer tipo
alert(typeof msg + "->" + msg);
//Aquí tenemos la segunda conversión a number
msg = Number(msg); 
alert(typeof msg + "->" + msg);
//Tercera conversión a boolean
msg = Boolean(msg);
alert(typeof msg + "->" + msg);

alert(5 == "5")
alert(5 === "5")

















