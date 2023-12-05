import { Routes, Route } from "react-router-dom";
import "./App.css";

import Menu from "./components/Menu";
import NotFound from "./pages/NotFound";
import Formulario from "./pages/Formulario";
import Tareas from "./pages/Tutoriales";
import TutorialContexto from "./context/TutorialContexto";

function App() {
  return (
    <>
      <Menu />
      <TutorialContexto> 
        <Routes>
          <Route path="/" element={<Tareas />} />
          <Route path="/crear_tutorial" element={<Formulario />} />
          <Route path="/editar_tutorial/:id" element={<Formulario />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </TutorialContexto>
    </>
  );
}

export default App;
