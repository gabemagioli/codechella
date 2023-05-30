import "./home.css";
import bandaTopo from "./bandaTopo.png"
import data from "./data.png";
import { IoTicketOutline } from "react-icons/io5";
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
            <div>
                <h1 className="lineupTitle">/Line-Up/</h1>
            </div>


        </main>
    );
}

export default Home;
