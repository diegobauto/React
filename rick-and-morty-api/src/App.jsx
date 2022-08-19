import { useState } from "react";
import "./App.css";
import ListaPersonajes from "./components/ListaPersonajes";
import Pagination from "./components/Pagination";

function App() {
  
  const [pagina, setPagina] = useState(1);

  return (
    <div className="App">
      <h1>Rick and Morty</h1>
      <Pagination pagina={pagina} setPagina={setPagina} />
      <ListaPersonajes pagina={pagina} />
      <Pagination pagina={pagina} setPagina={setPagina} />
    </div>
  );
}

export default App;
