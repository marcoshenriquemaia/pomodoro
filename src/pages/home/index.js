import CriarElemento from "../../components/shared/cria-elemento/index.js";
import BoxTemporizador from "../../components/box-temporizador/index.js";
import Separador from "../../components/separador/index.js";

const Home = () =>{
    const container = document.querySelector('.container');
    const containerHome = CriarElemento({tipoElemento: 'section', classes: ['container-home']});
    const boxTemporizador = BoxTemporizador();
    const separador = Separador({textSeparador: 'Historico', pai: containerHome});
    const boxHistorico = CriarElemento({tipoElemento: 'div', classes: ['box-historico']});

    container.appendChild(containerHome);
    containerHome.appendChild(boxTemporizador);
    containerHome.appendChild(separador);
    containerHome.appendChild(boxHistorico);
}


export default Home;