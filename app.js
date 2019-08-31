import BarraTempo from "./src/components/barra-tempo/index.js";
import Contador from "./src/components/contador/index.js";
import CardHistorico from "./src/components/card-historico/index.js";
import Grafico from "./src/components/grafico/index.js";
import BoxEstatisticaSucesso from "./src/components/box-estatistica-sucesso/index.js";
import BoxFalhas from "./src/components/box-falhas/index.js";
import Separador from "./src/components/separador/index.js";
import BoxTemporizador from "./src/components/box-temporizador/index.js";
import Home from "./src/pages/home/index.js";
import Estatisticas from "./src/pages/estatisticas/index.js";

const $container = document.querySelector('.container');
const $botaoEstatistica = document.querySelector('.fa-chart-bar');
const $botaoHome = document.querySelector('.fa-mug-hot');
const $botaoTemporizador = document.querySelector('.botao-temporizador');
const $temporizador = document.querySelector('.temporizador');
const textSeparacao = document.querySelector('.separacao-historico');
const $boxBarraTempo = document.querySelector('.box-barra-tempo');
const $boxHistorico = document.querySelector('.box-historico');
const $divBarraTempo = document.querySelector('.box-barra-tempo');


let pag = true;

$botaoEstatistica.addEventListener('click', () => {
    if (!pag) return;
    pag = !pag;
    const containerEstatisticas = document.querySelector('.container-estatisticas');
    containerEstatisticas && containerEstatisticas.remove();
    Estatisticas();
    // Grafico();
    // Separador({ textSeparador: 'Geral', classe: 'separador-geral', pai: $boxHistorico });
    // BoxEstatisticaSucesso();
    // BoxFalhas();
    // textSeparacao.classList.toggle('separacao-historico-grafico');
})

$botaoHome.addEventListener('click', () => {
    if (pag) return;
    pag = !pag;
    const $boxTemporizador = document.querySelector('.box-temporizador');
    const grafico = document.querySelector('#myChart');
    const containerEstatisticas = document.querySelector('.container-estatisticas');
    containerEstatisticas.remove();
    $boxTemporizador.removeChild(grafico);
    BoxTemporizador();
    $boxHistorico.innerHTML = '';
    textSeparacao.classList.toggle('separacao-historico-grafico');
})


$container.onload = Home();


