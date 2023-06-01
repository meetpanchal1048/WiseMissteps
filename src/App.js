import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import La from './Components/Latest_Art/La';
import PopArt from './Components/Popular_Art/PopArt';
import Abt from './Components/About/Abt';
import './App.css';

function App() {
  return (
    <>

      <div className="app">
        <Navbar />
        <Hero />
        <La />
        <PopArt />
        <Abt />
      </div>


    </>
  );
}

export default App;
