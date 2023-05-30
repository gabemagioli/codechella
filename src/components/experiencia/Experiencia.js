import bannerExperiencia from "./bannerExperiencia.png";
import sustentabilidade from "./sustentabilidade.png"
import "./experiencia.css";
import pessoa from "./pessoa.png";
import rodaGigante from "./rodaGigante.png"


const Experiencia = () => {

    <>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
    <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100&display=swap" rel="stylesheet"/>
    </>

    return(
        <main className="main-experiencia">
            <img src={bannerExperiencia} alt="a esperiecia" className="img-experiencia"/>
            <section className="intro-experiencia">
                <div className="itens">
                    <img src={pessoa} alt="pessoa feliz" className="foto-experiencia"/>
                    <div className="texto-ex">
                        <h6 className="info-experiencia">Acessibilidade e Inclusao</h6>
                        <p className="p-experiencia">Nosso evento tenta abraçar um público mais amplo em todos os sentidos, de todas as idades, corpos, gostos e pensamentos!  Isso está presente no  espaço físico, na sinalização, no treinamento da equipe de apoio, na comunicação em libras, braile, visual e tátil. Além disso, dispomos de ingressos gratuitos para pessoas com deficiência e acompanhantes, pessoas idosas e crianças!</p>
                    </div>
                </div>
                <div className="itens">
                    <div className="texto-ex2">
                        <h6 className="info-experiencia2">Sustentabilidade</h6>
                        <p className="p-experiencia2">Queremos estar aqui celebrando daqui a 50, 100 anos! Por isso, levamos o futuro do nosso planeta a sério. Nosso festival é carbono zero, com utilização de copos retornáveis, coleta e destinação adequada de resíduos, e transporte coletivo.</p>
                    </div>
                    <img src={sustentabilidade} alt="pessoa feliz" className="foto-experiencia2"/>
                </div>
                <div className="itens">
                    <img src={rodaGigante} alt="pessoa feliz" className="foto-experiencia"/>
                    <div className="texto-ex">
                        <h6 className="info-experiencia">Atracoes</h6>
                        <p className="p-experiencia">Intervenções artísticas e culturais para todos os gostos! Durante os intervalos dos shows, nossa experiência contará com recreação para crianças, oficina de cerâmica, origami, circo e aquarela! Além disso, nosso espaço contra com 3 praças de alimentação, roda gigante e outros brinquedos!</p>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Experiencia;