import "./App.css"; //Estilos css

// No se pone las llaves {} ya que en el componente esta como exports default ...
import PrimerComponente from "./components/PrimerComponente";

// Se ponen las llaves {} ya que el componente se exporta en la misma linea de la función
import { Variables } from "./components/Variables";
import { Eventos } from "./components/Eventos";
import { Contador } from "./components/Contador";
import { Listas } from "./components/Listas";
import { Formulario } from "./components/Formulario";

function App() {
  return (
    <div className="App container mt-5">
      <PrimerComponente />
      <hr />
      <Variables />
      <hr />
      <Eventos />
      <hr />
      <Contador />
      <hr />
      <Listas />
      <hr />
      <Formulario />
    </div>
  );
}

export default App;
