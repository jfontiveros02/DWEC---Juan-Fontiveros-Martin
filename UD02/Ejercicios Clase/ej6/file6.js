let ques1 = Number(prompt("¿Cuanto llevas contigo?"));
if (ques1 != Number && ques1 <= 50){
    alert("Debes escribir un número > 50")
}else{document.write("Llevas un total de: " + ques1 + "<br>") }

let ques2 = confirm("¿Eres sincero?");
if(ques2 === false){
    alert("No podras pasar")
}else{document.write("Has dicho la verdad: " + ques2 + "<br>") }

let ques3 =prompt("¿Qué responderías si te pregunto si puedes entrar en mayúsculas? yes/no")
if(ques3 != "yes"){
     alert("No podras pasar")
}else{document.write("Dijiste: " + ques3 + "<br>") }

if(ques1 && ques2 && ques3){
    document.write("Conseguiste pasar!!!")
}else{alert("No podras pasar")}