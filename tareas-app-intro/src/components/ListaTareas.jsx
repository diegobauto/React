import { useContext } from "react";
import { TareaContexto } from "../context/TareasContexto";
import CartaTarea from "./CartaTarea";

function ListaTareas() {
  const { tareas } = useContext(TareaContexto); //Utilizo lo que paso desde el contexto (value)

  //Por si no hay tareas
  if (tareas.length === 0) {
    return <h1 className="vacio">No hay Tareas</h1>;
  }

  return (
    <>
      <div className="padre">
        {tareas.map((tarea) => (
          // Recorrer todas las tareas
          // Se le pasa una key para que react pueda reconocoer el componente
          <CartaTarea key={tarea.id} tarea={tarea} />
        ))}
      </div>
    </>
  );
}

export default ListaTareas;
