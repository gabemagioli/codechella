import estaaqui from "./estaaqui.png";
import Qrcode from "./Qrcode.png";
import Logo from "./Logo.png";
import Ellipse from "./Ellipse.png";
import "./qrcode.css";

const QrCode = ({nome, setNome}) => {
    <>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
    <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100&display=swap" rel="stylesheet"/>
    </>

    return(
        <main>
            <section>
                <img src={estaaqui} alt="esta aqui seu ingresso" />
                <div>
                    <h6 className="receber">Uhul, agora sim! Seu ingresso está aqui, apresente na entrada do evento e divirta-se!</h6>
                    <div className="bilhete">
                        <div className="top">
                            <img src={Logo} alt="logo do festival" className="top-logo"/>
                            <img src={Ellipse} alt="logo do festival" className="top-logo2"/>
                        </div>
                        <div className="infos-bilhete">
                            <img src={Qrcode} alt="qr code do seu ingresso" className="code"/>
                            <div className="nome">
                                <h6 className="nome">{nome}</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default QrCode;