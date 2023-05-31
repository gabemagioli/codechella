import logoCodechella from "./logoCodechella.png";
import { Link } from "react-router-dom";
import "./header.css";
const Header = () => {
    <>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
    <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100&display=swap" rel="stylesheet"/>
    </>

    return(
        <>
        <header className="header">
            <img src={logoCodechella} alt="codechella logo" className="logo"/>
            <nav className="nav">
                <Link to="/home" className="navegacao">Inicio</Link>
                <Link to="/experiencia" className="navegacao">A experiencia</Link>
                <Link to="/setores" className="navegacao">Mapa de Setores</Link>
                <Link to="/informacoes" className="navegacao">Informacoes</Link>
                <h2 className="navegacao">Ingresso</h2>
            </nav>
        </header>
        </>
    );
}

export default Header;