const $temporizador = document.querySelector('.temporizador');

let min, seg; min = 25; seg = 0;

const Contador = (start) => {
    if ((min > 0) || (seg > 0)) {
        if (seg == 0) {
            seg = 59;
            min = min - 1
        }
        else {
            seg = seg - 1;
        }
        if ($temporizador.textContent == '25:00' && !start) {
            min = 25; seg = 0;
            return;
        }
        $temporizador.textContent = min + ":" + seg;
        if (seg.toString().length == 1) $temporizador.textContent = min + ":" + "0" + seg;
        if (min.toString().length == 1) $temporizador.textContent = '0' + min + ":" + seg;
        if (min.toString().length == 1 && seg.toString().length == 1) $temporizador.textContent = '0' + min + ":" + '0' + seg;
        setTimeout(Contador, 10);
        crescerBarra();


    } else {
        min = 25; seg = 0;
    }
}

const crescerBarra = () => {
    const $barraTempo = document.querySelector('.barra-tempo');
    let tempoAtual = (min * 60 + seg);
    let porcentagem = (((tempoAtual / 1500) * 100) - 100) * -1;
    $barraTempo.style.width = porcentagem + "%";
}

export default Contador;