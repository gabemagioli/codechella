import "./informacoes.css";
import bannerInfo from "./bannerInfo.png";
import { useState } from "react";
import { BsCaretDownFill, BsCaretUpFill } from "react-icons/bs";
<style>
        @import url('https://fonts.googleapis.com/css2?family=Calistoga&display=swap');
</style>

const Informacoes = () => {
   
    <>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
    <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100&display=swap" rel="stylesheet"/>
    </>
    const [seta, setSeta] = useState(<BsCaretUpFill/>);
    const [mostrarPergunta, setMostrarPergunta] = useState(true);

    const aparecer = () => {
        setMostrarPergunta(!mostrarPergunta);

        if(mostrarPergunta === true){
            setSeta(<BsCaretUpFill/>);
        } else{
            setSeta(<BsCaretDownFill/>);
        }
    }

    return(
        <main className="mainInfo">
            <img src={bannerInfo} alt="informacoes gerais" className="banner-info"/>
            <section>
                <h3 className="titulo-faq">Perguntas Frequentes:</h3>
                <div className="informacoes-gerais">
                    <h6 className="perguntas" onClick={aparecer}>Quais serao as atracoes? {seta}</h6>
                   { mostrarPergunta &&
                    <p className="respostas">Teremos dois dias de shows, o primeiro 11/03 com bandas de rock, e o segundo 12/03 com bandas pop. Confira o line-up em detalhes clicando neste link!</p>
                     }

                    <h6 className="perguntas" onClick={aparecer}>Qual e a classificacao etaria? {seta}</h6>
                   { mostrarPergunta &&
                    <p className="respostas">Teremos dois dias de shows, o primeiro 11/03 com bandas de rock, e o segundo 12/03 com bandas pop. Confira o line-up em detalhes clicando neste link!</p>
                     }
                     <h6 className="perguntas" onClick={aparecer}>Quais sao os setores disponiveis? {seta}</h6>
                   { mostrarPergunta &&
                    <p className="respostas">Teremos dois dias de shows, o primeiro 11/03 com bandas de rock, e o segundo 12/03 com bandas pop. Confira o line-up em detalhes clicando neste link!</p>
                     }
                     <h6 className="perguntas" onClick={aparecer}>Quais sao os itens proibidos? {seta}</h6>
                   { mostrarPergunta &&
                    <p className="respostas">Teremos dois dias de shows, o primeiro 11/03 com bandas de rock, e o segundo 12/03 com bandas pop. Confira o line-up em detalhes clicando neste link!</p>
                     }
                </div>
            </section>
        </main>
    );
}

export default Informacoes;