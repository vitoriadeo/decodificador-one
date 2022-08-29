function codificarTexto() {

    let textoAlterado;
    let textoPuro = document.getElementById('campoTexto').value;

    if (textoPuro.includes('e')) {
        textoAlterado = textoPuro.replace(/[e]+/g, 'enter');
    }

    if (textoPuro.includes('i')) {
        textoAlterado = textoAlterado.replace(/[i]+/g, 'imes');
    }

    if (textoPuro.includes('a')) {
        textoAlterado = textoAlterado.replace(/[a]+/g, 'ai');
    }

    if (textoPuro.includes('o')) {
        textoAlterado = textoAlterado.replace(/[o]+/g, 'ober');
    }

    if (textoPuro.includes('u')) {
        textoAlterado = textoAlterado.replace(/[u]+/g, 'ufat');
    }

    return document.querySelector('#resultado').innerHTML = textoAlterado;

}

function decodificarTexto() {
    let textoPuro = document.getElementById('campoTexto').value;
    let textoAlterado;

    if (textoPuro.includes('enter')) {
        textoAlterado = textoPuro.replace(/enter/img, 'e');
    }

    if (textoPuro.includes('imes')) {
        textoAlterado = textoAlterado.replace(/imes/img, 'i');
    }

    if (textoPuro.includes('ai')) {
        textoAlterado = textoAlterado.replace(/ai/img, 'a');
    }

    if (textoPuro.includes('ober')) {
        textoAlterado = textoAlterado.replace(/ober/img, 'o');
    }

    if (textoPuro.includes('ufat')) {
        textoAlterado = textoAlterado.replace(/ufat/img, 'u');
    }

    document.querySelector('#resultado').innerHTML = textoAlterado;
}

function copiar() {
    let conteudo = document.querySelector('#resultado');
    conteudo.select();
    document.execCommand('copy');
    document.querySelector('#resultado').innerHTML = "COPIADO!!";
}