import { Routes, Route } from "react-router-dom";
import "./App.css";

import Menu from "./components/Menu";
import NotFound from "./pages/NotFound";
import Formulario from "./pages/Formulario";
import Tareas from "./pages/Tareas";

import TareaContexto from "./context/TareaContexto";

function App() {
  return (
    <>
      <Menu />
      {/*Conexto que contiene a los hijos (aquellos que pueden utilizar ese contexto)
      En este caso las rutas, o los componentes dentro de las rutas*/}
      <TareaContexto> 
        <Routes>
          <Route path="/" element={<Tareas />} />
          <Route path="/crear_tarea" element={<Formulario />} />
          <Route path="/editar_tarea/:id" element={<Formulario />} />
          {/* Ruta por si no se encuentra una dirección url */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </TareaContexto>
    </>
  );
}

export default App;
