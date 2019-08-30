import CriarElemento from "../shared/cria-elemento/index.js";




const options = {
    scales: {
        yAxes: [{
            ticks: {
                suggestedMin: 50,
                suggestedMax: 100
            }
        }]
    }
}

const data = {
    labels: ['1', '2', '3', '4', '5', '6', '7'],
    datasets: [{
        label: 'My First dataset',
        backgroundColor: '#224150',
        borderColor: 'rgb(255, 99, 132)',
        data: [0, 10, 5, 2, 20, 30, 45]
    }]
}

const Grafico = () => {
    const $boxTemporizador = document.querySelector('.box-temporizador');

    const $botaoTemporizador = document.querySelector('.botao-temporizador');
    const $temporizador = document.querySelector('.temporizador');
    const $divBarraTempo = document.querySelector('.box-barra-tempo');
    const grafico = CriarElemento({ tipoElemento: 'canvas', id: 'myChart', width: 400, height: 250 });

    $boxTemporizador.removeChild($temporizador);
    $boxTemporizador.removeChild($divBarraTempo);
    $boxTemporizador.removeChild($botaoTemporizador);
    $boxTemporizador.appendChild(grafico);

    var ctx = document.getElementById('myChart').getContext('2d');
    var myBarChart = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: options
    });

}

export default Grafico;