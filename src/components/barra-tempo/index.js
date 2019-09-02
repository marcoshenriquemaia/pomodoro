import CriarElemento from "../shared/cria-elemento/index.js";
import ColocaCss from "../../utils/coloca-css/indes.js";

ColocaCss({path: 'barra-tempo'});

const BarraTempo = () => {
    const boxBarraTempo = document.querySelector('.box-barra-tempo');
    const barraTempo = document.querySelector('.barra-tempo');

    barraTempo && boxBarraTempo.removeChild(barraTempo);
    const barra = CriarElemento({ tipoElemento: 'div', classes: ['barra-tempo'] })

    boxBarraTempo.appendChild(barra);
}

export default BarraTempo;
