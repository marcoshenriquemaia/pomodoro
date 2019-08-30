import CriarElemento from "../shared/cria-elemento/index.js";

const Rodape = () =>{
    const container = document.querySelector('.container');
    const boxRodape = CriarElemento({tipoElemento: 'div', classes: ['rodape']})
    const iconeHome = CriarElemento({tipoElemento: 'i', classes: ['fas, fa-mug-hot, icones']})
    const iconeEstatisticas = CriarElemento({tipoElemento: 'i', classes: ['far, fa-chart-bar, icones']})

    container.appendChild(boxRodape);
    boxRodape.appendChild(iconeHome);
    boxRodape.appendChild(iconeEstatisticas);
}

export default Rodape;