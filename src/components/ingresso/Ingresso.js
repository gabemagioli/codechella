import { Link } from "react-router-dom";
import "./ingresso.css";
import ingressoBanner from "./ingressoBanner.png";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
<style>
        @import url('https://fonts.googleapis.com/css2?family=Calistoga&display=swap');
</style>

const Ingresso = ({nome, setNome}) => {
    <>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
    <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100&display=swap" rel="stylesheet"/>
    </>

    const nomeIngresso = (e) => {
        setNome(e.target.value);
    }

    return(
        <main>
            <section>
                <div>
                    <img src={ingressoBanner} alt="garanta seu ingresso"/>
                </div>
                <div>
                    <h3 className="titulo-form">Preencha o formulário a seguir:</h3>
                    <form className="form-ingresso">
                        <label className="label">Nome Completo:</label>
                        <input type="text" placeholder="digite seu nome" className="input" onChange={nomeIngresso} value={nome} required/>
                        <label className="label">Email:</label>
                        <input type="email" placeholder="digite seu nome" className="input" required/>
                        <div className="form-pt2">
                            <label className="label">Tipo de ingresso:</label>
                            <label className="label2">Data de nascimento:</label>
                        </div>
                        <div className="form-pt2">
                        <select className="sub-input" required>
                                <option>Pista Premium</option>
                                <option>Pista Comum</option>
                                <option>Cadeiras Terreo</option>
                                <option>Cadeiras Superiores</option>
                                <option>Rampas</option>
                            </select>
                            <input type="date" className="sub-input2" required/>
                        </div>
                        <Link to="/qrcode" className="botao-ingresso">Comprar ingresso! <BsFillArrowRightCircleFill/></Link>
                    </form>
                </div>
            </section>
        </main>
    );
}

export default Ingresso;