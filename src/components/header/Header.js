import logoCodechella from "./logoCodechella.png";
import "./header.css";
const Header = () => {
    <>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
    <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100&display=swap" rel="stylesheet"/>
    </>

    return(
        <header className="header">
            <img src={logoCodechella} alt="codechella logo" className="logo"/>
            <nav className="nav">
                <h2 className="navegacao">A experiencia</h2>
                <h2 className="navegacao">Mapa de Setores</h2>
                <h2 className="navegacao">Informacoes</h2>
                <h2 className="navegacao">Ingresso</h2>
            </nav>
        </header>
    );
}

export default Header;