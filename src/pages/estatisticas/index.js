import CriarElemento from "../../components/shared/cria-elemento/index.js";
import Grafico from "../../components/grafico/index.js";
import BoxEstatisticaSucesso from "../../components/box-estatistica-sucesso/index.js";
import BoxFalhas from "../../components/box-falhas/index.js";
import ColocaCss from "../../utils/coloca-css/indes.js";

ColocaCss({path: 'estatisticas'});

const Estatisticas = () =>{
    const container = document.querySelector('.container');
    const containerEstatisticas = CriarElemento({tipoElemento: 'section', classes: ['container-estatisticas']});
    const boxGrafico = CriarElemento({tipoElemento: 'div', classes: ['box-grafico']});
    const boxInformacoes = CriarElemento({tipoElemento: 'div', classes: ['box-informacoes']});
    const boxSucesso = BoxEstatisticaSucesso();
    const boxFracasso = BoxFalhas();
    
    container.appendChild(containerEstatisticas);
    containerEstatisticas.appendChild(boxGrafico);
    containerEstatisticas.appendChild(boxInformacoes);
    Grafico(boxGrafico);
    boxInformacoes.appendChild(boxSucesso);
    boxInformacoes.appendChild(boxFracasso);
}

export default Estatisticas;