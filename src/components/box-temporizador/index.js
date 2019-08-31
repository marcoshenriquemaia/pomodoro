import CriarElemento from "../shared/cria-elemento/index.js";
import BarraTempo from "../barra-tempo/index.js";
import Contador from "../contador/index.js";

const BoxTemporizador = () => {
    const box = CriarElemento({tipoElemento: 'div', classes: ['box-temporizador']});
    const temporizador = CriarElemento({ tipoElemento: 'span', conteudo: '25:00', classes: ['temporizador'] });
    const boxBarraTempo = CriarElemento({ tipoElemento: 'div', classes: ['box-barra-tempo'] });
    const botaoTemporizador = CriarElemento({ tipoElemento: 'button', classes: ['botao-temporizador'], conteudo: 'Start' });

    box.appendChild(temporizador);
    box.appendChild(boxBarraTempo);
    box.appendChild(botaoTemporizador);

    botaoTemporizador.addEventListener('click', () => {
        if (botaoTemporizador.textContent == 'x') foco = false;
        BarraTempo();
        alterarBotao();
        if (foco) Contador();
    })

    const alterarBotao = () => {
        botaoTemporizador.textContent == 'Start' ? botaoTemporizador.textContent = 'x' : botaoTemporizador.textContent = 'Start';
        botaoTemporizador.classList.toggle('botao-temporizador-off');
        boxBarraTempo.classList.toggle('box-barra-tempo-on');
    }

    return box;
}


export default BoxTemporizador;