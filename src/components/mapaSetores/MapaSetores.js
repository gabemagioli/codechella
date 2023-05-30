import "./mapaSetores.css";
import bannerSetores from "./bannerSetores.png";
import mapaSetores from "./mapaSetores.png";

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
                </div>
            </section>
        </main>
    );
}

export default MapaSetores;