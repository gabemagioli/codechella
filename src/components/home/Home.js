import "./home.css";
import bandaTopo from "./bandaTopo.png"
import data from "./data.png";
import { IoTicketOutline } from "react-icons/io5";
import imagem from "./Imagem.png";
import Vindas from "../boasvindas/Vindas";
<style>
        @import url('https://fonts.googleapis.com/css2?family=Calistoga&display=swap');
</style>


const Home = () => {

    <>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
    <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100&display=swap" rel="stylesheet"/>
    </>

    return(
        <>
        <Vindas/>
        <main>
            <div className="intro">
                <img src={bandaTopo} alt="banda de musica" className="img"/>
                <div className="nos">
                    <h2 className="titulo-datas"><img src={data} alt="data e local titulo"/></h2>
                    <p className="sobre-festival">Hora de programar nossa memoria com novas 
                    lembrancas! Uma nova experiencia sobre musica, linguagens e, claro, tecnologia! Somos um festival diverso, com varios artistas e referencias, Divirta-se!
                    </p>
                    <button className="botao">Comprar ingresso! <IoTicketOutline/></button>
                </div>
            </div>
            <div className="lineupSab">
                <h1 className="lineupTitle">/Line-Up/</h1>
                <h3 className="sab">SABADO -11/03-</h3>
                <div className="artistas">
                    <h2 className="h2">System of a DOM</h2>
                    <div className="secundario">
                        <h5 className="h5">Python Maden</h5>
                        <h5 className="h5">Apollo Client 2001 </h5>
                        <h5 className="h5"> Bon Java</h5>
                        <h5 className="h5">NickCallBack</h5>
                    </div>
                    <div className="terceiro">
                        <h6 className="h6">Linking Promises</h6>
                        <h6 className="h6">FullStack fighters</h6>
                        <h6 className="h6">Papa React</h6>
                        <h6 className="h6">Angular in Chains</h6>
                    </div>
                    <div className="quarto">
                        <h4 className="h4">Adnostik Front-end</h4>
                        <h4 className="h4">SlipkNode</h4>
                        <h4 className="h4">Pink Flutter</h4>
                        <h4 className="h4">Kiss</h4>
                    </div>
                </div>

                <h3 className="dom">DOMINGO -12/03-</h3>
                <div className="artistas">
                    <h2 className="h2">Lana Del Ploy</h2>
                    <div className="secundario">
                        <h5 className="h5">Dua Lib</h5>
                        <h5 className="h5">The Backnd</h5>
                        <h5 className="h5">CSS Styles</h5>
                        <h5 className="h5">Dj Query</h5>
                        <h5 className="h5">ArrayAna Grande</h5>
                    </div>
                    <div className="terceiro">
                        <h6 className="h6">Miley Cypress</h6>
                        <h6 className="h6">The Bootstrap Boys</h6>
                        <h6 className="h6">JSON Derulo</h6>
                        <h6 className="h6">Cloud Play</h6>
                        <h6 className="h6">Dev Lovato</h6>
                    </div>
                    <div className="quarto">
                        <h4 className="h4">Kylie MiLog</h4>
                        <h4 className="h4">Jenkins Brothers</h4>
                        <h4 className="h4">Rubycat Dolls</h4>
                    </div>
                </div>
            </div>
            <img src={imagem} alt="guitarra" className="img-fim"/>
        </main>
        </>
    );
}

export default Home;
