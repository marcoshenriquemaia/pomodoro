import CriarElemento from "../shared/cria-elemento/index.js";

const CardHistorico = ({status: start}) =>{
    const boxHistorico = document.querySelector('.box-historico');
    const card = CriarElemento({tipoElemento: 'div', classes: ['card-historico']});
    const tempo = CriarElemento({tipoElemento: 'span', classes: ['tempo-card-historico'], conteudo: '25:00'});
    const imagemSeparacao = CriarElemento({tipoElemento: 'img', imagem: 'barras.png', classes: ['imagem-card']});
    const texto = CriarElemento({tipoElemento: 'span', classes: ['text-card-historico'], conteudo: 'Completo'});
    const iconeCompleto = CriarElemento({tipoElemento: 'img', imagem: 'valido.png'})
    const tempoFalha = CriarElemento({tipoElemento: 'span', classes: ['tempo-card-historico'], conteudo: '5:00'})

    boxHistorico.appendChild(card);
    card.appendChild(tempo);
    card.appendChild(imagemSeparacao);
    card.appendChild(texto);
    start && card.appendChild(iconeCompleto);
    !start && card.appendChild(tempoFalha);
    if (!start) card.style.backgroundImage = 'linear-gradient(to right, #000000, #FF0000)';

}

  

export default CardHistorico;