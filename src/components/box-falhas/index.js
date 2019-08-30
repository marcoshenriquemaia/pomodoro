import CriarElemento from "../shared/cria-elemento/index.js";

const BoxFalhas = () =>{
    const containerEstatistica = document.querySelector('.box-historico');
    
    const box = CriarElemento({tipoElemento: 'div', classes: ['box-falhas']});
    const titulo = CriarElemento({tipoElemento: 'span', classes: ['titulo-focado', 'titulo-total-falhas'], conteudo: 'TOTAL FALHAS'});
    const tempo = CriarElemento({tipoElemento: 'span', classes: ['tempo-focado', 'quantidade-de-falhas'], conteudo: '5 Vezes'});

    containerEstatistica.appendChild(box);
    box.appendChild(titulo);
    box.appendChild(tempo);
}

export default BoxFalhas;