import CriarElemento from "../shared/cria-elemento/index.js";



const CardHistorico = ({tempoFinal}) => {
    const boxHistorico = document.querySelector('.box-historico');
    const card = CriarElemento({ tipoElemento: 'div', classes: ['card-historico'] });
    const tempo = CriarElemento({ tipoElemento: 'span', classes: ['tempo-card-historico'], conteudo: tempoFinal });
    const imagemSeparacao = CriarElemento({ tipoElemento: 'img', imagem: foco ? 'barras.png' : 'barrasred.png', classes: ['imagem-card'] });
    
    boxHistorico.appendChild(card);
    card.appendChild(tempo);
    card.appendChild(imagemSeparacao);
    identificarStatus(card);
}

const identificarStatus = (card) => {
    const $temporizado = document.querySelector('.temporizador');
    const iconeCompleto = CriarElemento({ tipoElemento: 'img', imagem: 'valido.png' })
    const tempoFalha = CriarElemento({ tipoElemento: 'span', classes: ['tempo-card-historico'], conteudo: $temporizado.textContent})

    if (!foco) {
        const texto = CriarElemento({ tipoElemento: 'span', classes: ['text-card-historico'], conteudo: 'Incompleto' });
        card.classList.add('box-historico-falha');
        card.appendChild(texto);
        card.appendChild(tempoFalha);

    }
    if (foco) {
        const texto = CriarElemento({ tipoElemento: 'span', classes: ['text-card-historico'], conteudo: 'Completo' });
        card.appendChild(texto);
        card.appendChild(iconeCompleto);
    }
}



export default CardHistorico;