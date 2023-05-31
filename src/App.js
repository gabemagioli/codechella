import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Experiencia from "./components/experiencia/Experiencia";
import MapaSetores from "./components/mapaSetores/MapaSetores";
import Informacoes from "./components/informacoes/Informacoes";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="home" element={<Home/>}/>
          <Route path="experiencia" element={<Experiencia/>}/>
          <Route path="setores" element={<MapaSetores/>}/>
          <Route path="informacoes" element={<Informacoes/>}/>
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
