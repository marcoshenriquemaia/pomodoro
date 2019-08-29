import BarraTempo from "./src/components/barra-tempo/index.js";
import Contador from "./src/components/contador/index.js";
import CardHistorico from "./src/components/card-historico/index.js";
import Grafico from "./src/components/grafico/index.js";

const $botaoEstatistica = document.querySelector('.fa-chart-bar');
const $botao = document.querySelector('.botao-temporizador');
const $wrapperBarraTempo = document.querySelector('.box-barra-tempo');
const $temporizador = document.querySelector('.temporizador');
const textSeparacao = document.querySelector('.separacao-historico');


let start = false;

$botao.addEventListener('click', () => {
    start = !start;
    status = !status;
    $botao.textContent == 'x' ? $botao.textContent = 'Start' : $botao.textContent = 'x';
    $wrapperBarraTempo.classList.toggle('box-barra-tempo-on');
    $botao.classList.toggle('botao-temporizador-off');
    BarraTempo();
    CardHistorico({ start });
    Contador();
    console.log($botao.textContent);
    console.log(status);
})


$botaoEstatistica.addEventListener('click', ()=>{
    Grafico();
    textSeparacao.classList.toggle('separacao-historico-grafico');
})


