
import './App.css';
import Vindas from './components/boasvindas/Vindas';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './components/home/Home';

function App() {
  return (
    <div className="App">
      <Header/>
      <Vindas/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
