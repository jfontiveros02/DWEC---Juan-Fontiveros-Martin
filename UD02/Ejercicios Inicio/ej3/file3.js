let msg;
alert(typeof msg + "->" + msg);

msg = prompt("Escribe un número"); //prompt siempre devuelve un string
alert(typeof msg + "->" + msg);

const original = msg;

msg = Number(msg); 
alert(typeof msg + "->" + msg);

msg = parseFloat(msg);
alert(typeof msg + "->" + msg);

msg = parseInt(msg);
alert(typeof msg + "->" + msg);

msg = Boolean(msg);
alert(typeof msg + "->" + msg);

msg = String(msg);
alert(typeof msg + "->" + msg);

msg = Number(msg);
alert(typeof msg + "->" + msg);

//Ext.2
alert("Number: " + Number(original));
alert("parseInt: " + parseInt(original));
alert("parseFloat: " + parseFloat(original));
alert("Unario +: " + (+original));




//no hace falta
//if (msg <= 0){
// alert(false)
//}else{alert(true)}


