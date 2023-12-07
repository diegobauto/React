import { useEffect } from "react";
import { usarContexto } from "../context/TutorialContexto";
import Tutorial from "../components/Tutorial";

function Tutoriales() {
  const { tutoriales, obtenerTutoriales } = usarContexto(); //Contexto

  useEffect(() => {
    obtenerTutoriales();
  }, []);

  function renderTutoriales() {
    if (tutoriales.length === 0) return <h1 className="sin-contenido">No hay tutoriales</h1>;
    return tutoriales.map((tutorial) => <Tutorial tutorial={tutorial} key={tutorial.id_tutorial} />);
  }

  return <div className="contenedor">{renderTutoriales()}</div>;
}

export default Tutoriales;
