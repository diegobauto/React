import "./App.css";
import { Colores } from "./components/Colores.jsx";
import { Principal } from "./components/Principal.jsx";
import { HolaProvider } from "./context/HolaProvider.jsx";
import { TemaProvider } from "./context/TemaProvider.jsx";

function App() {
  return (
    <TemaProvider className="App">
      <HolaProvider>
        <Colores />
        <Principal />
      </HolaProvider>
    </TemaProvider>
  );
}

export default App;
