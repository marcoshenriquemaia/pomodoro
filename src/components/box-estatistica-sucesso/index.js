import CriarElemento from "../shared/cria-elemento/index.js";
import ColocaCss from "../../utils/coloca-css/indes.js";

ColocaCss({path: 'box-estatistica-sucesso'});

const BoxEstatisticaSucesso = () =>{
    const box = CriarElemento({tipoElemento: 'div', classes: ['box-estatistica']});
    const titulo = CriarElemento({tipoElemento: 'h1', conteudo: 'TOTAL FOCADO', classes: ['titulo-focado']});
    const wrapNumero = CriarElemento({tipoElemento: 'div', classes: ['wrap-numero-podomos']});
    const tituloNumero = CriarElemento({tipoElemento: 'h2', classes: ['subtitulo'], conteudo: 'nº pomodoros'});
    const numeroPomodoros = CriarElemento({tipoElemento: 'span', classes: ['quantidade-pomodoros'], conteudo: '13'});
    const wrapperNumeroTempo = CriarElemento({tipoElemento: 'div', classes: ['wrapper-numero-tempo']})
    const wrapTempo = CriarElemento({tipoElemento: 'div', classes: ['wrap-tempo-focado']});
    const tituloTempo = CriarElemento({tipoElemento: 'h2', classes: ['subtitulo'], conteudo: 'Total de tempo'});
    const tempoFocado = CriarElemento({tipoElemento: 'span', classes: ['tempo-focado'], conteudo: '05H 25 MIN'});

    box.appendChild(titulo);
    box.appendChild(wrapperNumeroTempo);
    wrapperNumeroTempo.appendChild(wrapNumero);
    wrapperNumeroTempo.appendChild(wrapTempo);
    wrapNumero.appendChild(tituloNumero);
    wrapNumero.appendChild(numeroPomodoros);
    wrapTempo.appendChild(tituloTempo);
    wrapTempo.appendChild(tempoFocado);

    return box;
}

export default BoxEstatisticaSucesso;