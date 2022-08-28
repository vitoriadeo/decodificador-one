

function codificarTexto() {
    var textoAlterado;
    var textoPuro = document.getElementById('campoTexto').value;

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

    document.querySelector('#resultado').innerHTML = textoAlterado;

}


/*
function decodificarTexto() {

    if (textoAlterado.includes('enter')) {
        textoAlterado = textoAlterado.replace(/enter/img, 'e');
    }

    if (textoAlterado.includes('imes')) {
        textoAlterado = textoAlterado.replace(/imes/img, 'i');
    }

    if (textoAlterado.includes('ai')) {
        textoAlterado = textoAlterado.replace(/ai/img, 'a');
    }

    if (textoAlterado.includes('ober')) {
        textoAlterado = textoAlterado.replace(/ober/img, 'o');
    }

    if (textoAlterado.includes('ufat')) {
        textoAlterado = textoAlterado.replace(/ufat/img, 'u');
    }
}

*/