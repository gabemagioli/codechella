import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Experiencia from "./components/experiencia/Experiencia";
import MapaSetores from "./components/mapaSetores/MapaSetores";
import Informacoes from "./components/informacoes/Informacoes";
import Ingresso from "./components/ingresso/Ingresso";
import QrCode from "./components/qrcodeIngresso/Qrcode";
import { useState } from "react";

function App() {

  const [nome, setNome] = useState("");

  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="home" element={<Home/>}/>
          <Route path="experiencia" element={<Experiencia/>}/>
          <Route path="setores" element={<MapaSetores/>}/>
          <Route path="informacoes" element={<Informacoes/>}/>
          <Route path="ingresso" element={<Ingresso nome={nome} setNome={setNome}/>}/>
          <Route path="qrcode" element={<QrCode nome={nome} setNome={setNome}/>}/>
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
