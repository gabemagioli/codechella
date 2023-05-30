import bannerExperiencia from "./bannerExperiencia.png";
import "./experiencia.css";
import pessoa from "./pessoa.png";


const Experiencia = () => {

    <>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
    <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100&display=swap" rel="stylesheet"/>
    </>

    return(
        <main className="main-experiencia">
            <img src={bannerExperiencia} alt="a esperiecia" className="img-experiencia"/>
            <div className="intro-experiencia">
                <img src={pessoa} alt="pessoa feliz" className="foto-experiencia"/>
                <div className="texto-ex">
                    <h6 className="info-experiencia">Acessibilidade e Inclusao</h6>
                    <p className="p-experiencia">Nosso evento tenta abraçar um público mais amplo em todos os sentidos, de todas as idades, corpos, gostos e pensamentos!  Isso está presente no  espaço físico, na sinalização, no treinamento da equipe de apoio, na comunicação em libras, braile, visual e tátil. Além disso, dispomos de ingressos gratuitos para pessoas com deficiência e acompanhantes, pessoas idosas e crianças!</p>
                </div>
            </div>
        </main>
    );
}

export default Experiencia;