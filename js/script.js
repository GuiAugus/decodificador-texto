const textEntrada = document.querySelector("#textoEntrada") 
const mensagem = document.querySelector(".mensagem-resultado")

function mostraCriptografar() {
    const textoCriptografado = criptografar(textEntrada.value);
    mensagem.value = textoCriptografado;
    textEntrada.value = "";
}

function criptografar(stringCriptografar) {

    let listaCodigo = [['a', 'ai'] , ['e', 'enter'], ['i', 'imes'] , ['o', 'ober'] , ['u', 'ufat']];
    stringCriptografar = stringCriptografar.toLowerCase();

    for(let i = 0; i < listaCodigo.length; i++) {
        if(stringCriptografar.includes(listaCodigo[i][0])) {
            stringCriptografar = stringCriptografar.replaceAll(listaCodigo[i][0], listaCodigo[i][1]);
        }
    }

    return stringCriptografar
}

