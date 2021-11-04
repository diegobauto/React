import './App.css';
import { NavBar } from './components/NavBar.jsx';
import { Principal } from './components/Principal.jsx';
import { HolaProvider } from './context/HolaProvider.jsx';
import { TemaProvider } from './context/TemaProvider.jsx';


function App() {
  return (
    <TemaProvider className="App">
      <HolaProvider >

        <NavBar />
        <Principal />

      </HolaProvider >
    </TemaProvider>
  );
}

export default App;
