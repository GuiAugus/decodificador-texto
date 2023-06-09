const textEntrada = document.querySelector("#textoEntrada") 
const mensagem = document.querySelector(".mensagem-resultado")

function mostraCriptografar() {
    const textoCriptografado = criptografar(textEntrada.value);
    mensagem.value = textoCriptografado;
    
    const mensagens = document.getElementById("mensagem");
    const imagem = document.getElementById("procurando");
    
        if (mensagens != null || imagem != null) {
            mensagens.remove();
            imagem.remove();
            }
    textEntrada.value = "";
}

function criptografar(stringCriptografar) {

    let listaCodigo = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'] , ['o', 'ober'] , ['u', 'ufat']];
    stringCriptografar = stringCriptografar.toLowerCase();

    for(let i = 0; i < listaCodigo.length; i++) {
        if(stringCriptografar.includes(listaCodigo[i][0])) {
            stringCriptografar = stringCriptografar.replaceAll(listaCodigo[i][0], listaCodigo[i][1]);
        }
    }

    return stringCriptografar
}

function mostraDescriptografar() {
    const textoDescriptografado = descriptografar(textEntrada.value);
    mensagem.value = textoDescriptografado;

    const mensagens = document.getElementById("mensagem");
    const imagem = document.getElementById("procurando");
    
        if (mensagens != null || imagem != null) {
            mensagens.remove();
            imagem.remove();
            }
            
    textEntrada.value = "";
}

function descriptografar(stringDescriptografar) {

    let listaCodigo = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'] , ['o', 'ober'] , ['u', 'ufat']];
    stringDescriptografar = stringDescriptografar.toLowerCase();

    for(let i = 0; i < listaCodigo.length; i++) {
        if(stringDescriptografar.includes(listaCodigo[i][1])) {
            stringDescriptografar = stringDescriptografar.replaceAll(listaCodigo[i][1], listaCodigo[i][0]);
        }
    }

    return stringDescriptografar
}

function copiar() {  
    var textoCopiado = document.getElementById("resultado");
  
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999);   

    navigator.clipboard.writeText(textoCopiado.value);
  }