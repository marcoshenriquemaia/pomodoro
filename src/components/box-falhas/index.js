import CriarElemento from "../shared/cria-elemento/index.js";

const BoxFalhas = () =>{
    const box = CriarElemento({tipoElemento: 'div', classes: ['box-falhas']});
    const titulo = CriarElemento({tipoElemento: 'span', classes: ['titulo-focado', 'titulo-total-falhas'], conteudo: 'TOTAL FALHAS'});
    const tempo = CriarElemento({tipoElemento: 'span', classes: ['tempo-focado', 'quantidade-de-falhas'], conteudo: '5 Vezes'});

    box.appendChild(titulo);
    box.appendChild(tempo);

    return box;
}

export default BoxFalhas;