import CriarElemento from "../shared/cria-elemento/index.js";

const Separador = ({textSeparador, pai, classe}) =>{
    const divSeparador = CriarElemento({tipoElemento: 'div', classes: ['separacao-historico', classe]});
    const textSeparacao = CriarElemento({tipoElemento: 'span', classes: ['text-separacao-historico'], conteudo: textSeparador});
    
    pai.appendChild(divSeparador);
    divSeparador.appendChild(textSeparacao);

    return divSeparador;
}

export default Separador;