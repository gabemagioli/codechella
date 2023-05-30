import logoCodechella from "../header/logoCodechella.png";
import "./footer.css";
import { AiFillGithub } from "react-icons/ai";

function Footer () {

    
    <>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
    <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100&display=swap" rel="stylesheet"/>
    </>


    return(
        <footer>
            <div className="ftr-p1">
                <img src={logoCodechella} alt="logo do festival" className="logo-footer"/>
                <a className="a-footer" href="https://github.com/gabemagioli/codechella"><p className="rede-social">siga nossas redes sociais:   <AiFillGithub/></p></a>
            </div>
            <div>
                <p className="desenvolvido">Desenvolvido por Gabriel Magioli.</p>
                <p className="desenvolvido">Design por Alura.</p>
                <p className="desenvolvido">Projeto ficticio sem fins comerciais.</p>
            </div>
        </footer>
    );
}

export default Footer;