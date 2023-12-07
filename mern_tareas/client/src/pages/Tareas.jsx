import { useEffect } from "react";
import { usarContexto } from "../context/TareaContexto";
import Tarea from "../components/Tarea";

function Tareas() {
  const { tareas, obtenerTareas } = usarContexto(); //Contexto traido

  //Se ejecuta al cargar la pagina y obtiene las tareas del servidor
  useEffect(() => {
    obtenerTareas();
  }, []);

  function renderTareas() {
    if (tareas.length === 0) return <h2 className="sin-contenido">No hay tareas</h2>;
    return tareas.map((tarea) => <Tarea tarea={tarea} key={tarea.id} />);
  }

  return <div className="contenedor">{renderTareas()}</div>;
}

export default Tareas;
