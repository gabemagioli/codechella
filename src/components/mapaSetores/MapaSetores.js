import "./mapaSetores.css";
import bannerSetores from "./bannerSetores.png";
import mapaSetores from "./mapaSetores.png";
import detalhePista from "./detalhePista.png";
import detalhePistaPremium from "./detalhePistaPremium.png";
import detalheCadeiras from "./detalheCadeiras.png";



const MapaSetores = () => {

    <>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
    <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100&display=swap" rel="stylesheet"/>
    </>

    return(
        <main className="main-setores">
            <img src={bannerSetores} alt="setores" className="setores-img"/>
            <section>
                <div className="amostra-setores">
                    <img src={mapaSetores} alt="mapa do local do evento com os setores" className="local-setores"/>
                    <div className="nome-setores">
                        <h6 className="legenda-setores">Legenda:</h6>
                        <div className="cor-setor"><p className="box-set"></p><p className="setor">Pista Premium</p></div>
                        <div className="cor-setor"><p className="box-set2"></p><p className="setor">Pista Comum</p></div>
                        <div className="cor-setor"><p className="box-set3"></p><p className="setor">Cadeiras Terreo</p></div>
                        <div className="cor-setor"><p className="box-set4"></p><p className="setor">Cadeiras Superiores</p></div>
                        <div className="cor-setor"><p className="box-set5"></p><p className="setor">Rampas</p></div>
                    </div>
                </div>
                <div className="detalhes-setores">
                    <h5 className="titulo-detalhes">Mais detalhes sobre os setores:</h5>
                    <div className="imagens-detalhes">
                        <div className="conjunto">
                            <img src={detalhePista} alt="pista" className="pista"/>
                            <h6 className="detalhamento-titulo">Pista</h6>
                            <p className="informacoes-detalhadas">Pista convencional, atendida pelos bares e banheiros das laterais do estádio. Espaço amplo, com local para sentar e descansar. Separada da pista premium por uma grade.</p>
                        </div>
                        <div className="conjunto">
                            <img src={detalhePistaPremium} alt="pista premium" className="premium"/>
                            <h6 className="detalhamento-titulo">Pista Premium</h6>
                            <p className="informacoes-detalhadas">Pista mais próxima do palco, com acesso muito próximo a banheiros e bares num raio de 100m. Todas as pessoas idosas e/ou com deficiência têm direito a acesso gratuito a essa área.</p>
                        </div>
                        <div className="conjunto">
                            <img src={detalheCadeiras} alt="cadeiras" className="cadeira"/>
                            <h6 className="detalhamento-cadeira">Cadeiras</h6>
                            <p className="informacoes-cadeira">Opção de cadeiras térreas ou elevadas. Acesso próximo a banheiros e bares, visão um pouco elevada em relação às pistas.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default MapaSetores;