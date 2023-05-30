
import './App.css';
import Vindas from './components/boasvindas/Vindas';
import Header from './components/header/Header';
import Home from './components/home/Home';

function App() {
  return (
    <div className="App">
      <Header/>
      <Vindas/>
      <Home/>
    </div>
  );
}

export default App;
