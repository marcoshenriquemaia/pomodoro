import CardHistorico from "../card-historico/index.js";



const formataTempo = (tempo1) => {
    const tempoShowMin = tempo1 / 60;
    const tempoShowSeg = tempo1 % 60;
    const formatedMin = Math.floor(tempoShowMin).toFixed(0);
    const formatedSeg = tempoShowSeg < 10 ? `0${tempoShowSeg}` : tempoShowSeg;

    return `${formatedMin}:${formatedSeg}`
}


const Contador = () => {
    const $temporizador = document.querySelector('.temporizador');
    if (!foco) {
        CardHistorico({ tempoFinal: formataTempo(tempo.antigo) });
        foco = true;
        tempo.atual = 1500;
        tempo.antigo == 300 && (tempo.antigo = 1500);
        console.log(tempo.atual)
        $temporizador.textContent = formataTempo(tempo.atual);
        return;
    };
    if (foco) {
        if (!tempo.atual) {
            alterarBotao()
            CardHistorico({ tempoFinal: formataTempo(tempo.antigo) });
            tempo.atual = tempo.antigo == 1500 ? 300 : 1500;
            tempo.antigo = tempo.antigo == 1500 ? 300 : 1500;
            $temporizador.textContent = formataTempo(tempo.atual);
            return;
        }
        $temporizador.textContent = formataTempo(tempo.atual);
        crescerBarra();
        tempo.atual = tempo.atual - 1;
        setTimeout(Contador, 1);
    }
    else {
        tempo.atual = 1500;
    }
}



const alterarBotao = () => {
    const $boxBarraTempo = document.querySelector('.box-barra-tempo');
    const $botao = document.querySelector('.botao-temporizador');
    $botao.textContent == 'Start' ? $botao.textContent = 'x' : $botao.textContent = 'Start';
    $botao.classList.toggle('botao-temporizador-off');
    $boxBarraTempo.classList.toggle('box-barra-tempo-on');
}

const crescerBarra = () => {
    const $barraTempo = document.querySelector('.barra-tempo');
    let porcentagem = (((tempo.atual / tempo.antigo) * 100) - 100) * -1;
    
    console.log(tempo.atual, tempo.antigo);
    $barraTempo.style.width = porcentagem + "%";
}

export default Contador;