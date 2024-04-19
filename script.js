let textarea = document.querySelector(".text-area");
let mensagem = document.querySelector(".mensagem");

// As "chaves" de criptografia que utilizaremos são:
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"





function btnencriptar() { 
    let textoEncriptar = encriptar(textarea.value);
    mensagem.value = textoEncriptar;
    textarea.value = "";
}


function encriptar(stringEncriptar) {
    let matrizCodigo = [["e", "enter"] , [ "i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptar = stringEncriptar.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptar.includes(matrizCodigo[i][0])) {
            stringEncriptar = stringEncriptar.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptar;
}

function btndesencriptar() { 
    let textoDesencriptar = desencriptar(textarea.value);
    mensagem.value = textoDesencriptar;
    textarea.value = "";
}


function desencriptar(stringDesencriptar) {
    let matrizCodigo = [["e", "enter"] , [ "i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    stringDesencriptar = stringDesencriptar.toLowerCase();

    for(let i = 0; i<matrizCodigo.length; i++) {
        if(stringDesencriptar.includes(matrizCodigo[i][1])) {
            stringDesencriptar = stringDesencriptar.replaceALL(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptar;
}