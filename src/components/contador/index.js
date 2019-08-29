const $temporizador = document.querySelector('.temporizador');
const $botaoTemporizador = document.querySelector('.botao-temporizador');
const $boxBarraTempo = document.querySelector('.box-barra-tempo');
const $barraTempo = document.querySelector('.barra-tempo');
const boxTemporizador = document.querySelector('.box-temporizador');
const $botaoEstatistica = document.querySelector('.fa-chart-bar');

let min, seg; min = 25; seg = 0;

const Contador = (status) => {
    console.log(`teste1: ${status}`);

    if (verificarTempo(status)) return;
    if ((min > 0) || (seg > 0)) {
        if (seg == 0) {
            seg = 59;
            min = min - 1
        }
        else {
            seg = seg - 1;
        }
        if ($botaoTemporizador.textContent == 'Start' && !status){
            $temporizador.textContent = '05:00'
            min = 5; seg = 0;
            console.log(`teste2: ${status}`);
            return;
        }
        if ($botaoTemporizador.textContent == 'Start' && status){
            $temporizador.textContent = '25:00'
            min = 25; seg = 0;
            console.log(`teste3: ${status}`);
            return;
        }
        $temporizador.textContent = min + ":" + seg;
        if (seg.toString().length == 1) $temporizador.textContent = min + ":" + "0" + seg;
        if (min.toString().length == 1) $temporizador.textContent = '0' + min + ":" + seg;
        if (min.toString().length == 1 && seg.toString().length == 1) $temporizador.textContent = '0' + min + ":" + '0' + seg;
        setTimeout(Contador, 5);
        crescerBarra();
    } else {
        min = 25; seg = 0;
    }
}
const verificarTempo = (status) => {
    if ($temporizador.textContent != '00:00') return;
    if (!status) {
        $temporizador.textContent = '05:00';
        min = 5; seg = 0;
        console.log(`teste4: ${status}`);
    };
    if (status) {
        $temporizador.textContent = '25:00';
        min = 25; seg = 0;
        console.log(`teste5: ${status}`);
    }
    $botaoTemporizador.classList.toggle('botao-temporizador-off');
    $botaoTemporizador.textContent = 'Start';
    $boxBarraTempo.classList.toggle('box-barra-tempo-on');

    return true;
}

const crescerBarra = () => {
    const $barraTempo = document.querySelector('.barra-tempo');
    let dividendo; !status ? dividendo = 1500 : dividendo = 300;
    let tempoAtual = (min * 60 + seg);
    let porcentagem = (((tempoAtual / dividendo) * 100) - 100) * -1;
    $barraTempo.style.width = porcentagem + "%";
}

export default Contador;