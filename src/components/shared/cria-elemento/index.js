const CriarElemento = ({ tipoElemento, conteudo, classes, cor, icone, alt, tipo, placeholder, id, nameInput, imagem, width, height }) => {
    const elemento = document.createElement(tipoElemento);

    if (conteudo) elemento.textContent = conteudo;
    if (cor) elemento.style.backgroundColor = cor;
    if (alt) elemento.setAttribute('alt', alt);
    if (tipo) elemento.setAttribute('type', tipo);
    if (id) elemento.setAttribute('id', id);
    if (placeholder) elemento.setAttribute('placeholder', placeholder);
    if (nameInput) elemento.setAttribute('for', nameInput);
    if (imagem) elemento.setAttribute('src', `../../../src/assets/icons/${imagem}`);
    if (width) elemento.setAttribute('width', width);
    if (height) elemento.setAttribute('height', height);
    if (classes) {
        classes.map(classe => {
            elemento.classList.add(classe);
        })
    }
    if (icone) {
        elemento.classList.add('fas');
        elemento.classList.add('icones');
        elemento.classList.add(DictionaryIcones[icone]);
    }

    return elemento;
}

export default CriarElemento;