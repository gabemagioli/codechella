import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Vindas from './components/boasvindas/Vindas';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Experiencia from "./components/experiencia/Experiencia";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="experiencia" element={<Experiencia/>}/>
        </Routes>
        <Home/>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
