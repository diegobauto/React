import { useContext } from "react";
import { TareaContexto } from "../context/TareasContexto";

function CartaTarea({ tarea }) {
  //Utilizo el compinente(TareaContexto) para traer el contexto
  //En este caso como voy a utilizar eliminar en el componente solo declaro una 
  //variable para traer solo eliminarTarea de
  //TareaContexto.Provider value={{ tareas, crearTarea, eliminarTarea }}
  const { eliminarTarea } = useContext(TareaContexto); 
  return (
    <div className="card">
      <h1>{tarea.titulo}</h1>
      <p>{tarea.descripcion}</p>
      <button
        className="eliminar"
        onClick={() => {
          eliminarTarea(tarea.id);
        }}
      >
        Eliminar
      </button>
    </div>
  );
}

export default CartaTarea;
