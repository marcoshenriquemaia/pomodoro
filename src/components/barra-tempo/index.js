import CriarElemento from "../shared/cria-elemento/index.js";


const BarraTempo = (start) => {
    const boxBarraTempo = document.querySelector('.box-barra-tempo');
    if (!start) {
        boxBarraTempo.removeChild(document.querySelector('.barra-tempo'))
        return;
    };
    const barra = CriarElemento({ tipoElemento: 'div', classes: ['barra-tempo'] })

    boxBarraTempo.appendChild(barra);
}

export default BarraTempo;
