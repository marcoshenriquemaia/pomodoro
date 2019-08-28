import BarraTempo from "./src/components/barra-tempo/index.js";
import Contador from "./src/components/contador/index.js";

const $botao = document.querySelector('.botao-temporizador');
const $wrapperBarraTempo = document.querySelector('.box-barra-tempo');
const $temporizador = document.querySelector('.temporizador');



let start = false;
$botao.addEventListener('click', () => {
    start = !start;
    $temporizador.textContent = '25:00';
    $botao.textContent == 'x' ? $botao.textContent = 'Start' : $botao.textContent = 'x';
    $wrapperBarraTempo.classList.toggle('box-barra-tempo-on');
    $botao.classList.toggle('botao-temporizador-off');
    BarraTempo(start);
    Contador(start);
})


