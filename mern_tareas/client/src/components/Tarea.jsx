import { usarContexto } from "../context/TareaContexto";
import { useNavigate } from "react-router-dom";

function Tarea({ tarea }) {
  const { eliminarTarea, alternarTarea } = usarContexto(); //Contexto traido
  const navigate = useNavigate(); //Función que permite redireccionar

  return (
    <article className="tarjeta">
      <div className="tituloYcheck">
        <h2>{tarea.titulo}</h2>
        <p>{tarea.hecho == 1 && "✓"}</p>
      </div>
      <p className={`descripcion${tarea.hecho === 1 ? " check" : ""}`}>{tarea.descripcion}</p>
      <div>
        <button className="actualizar" onClick={() => navigate(`/editar_tarea/${tarea.id}`)}>
          Actualizar
        </button>
        <button className="eliminar" onClick={() => eliminarTarea(tarea.id)}>
          Eliminar
        </button>
        <button className="alternar" onClick={() => alternarTarea(tarea.id)}>
          {tarea.hecho == 1 ? "Desmarcar" : "Marcar"}
        </button>
      </div>
    </article >
  );
}

export default Tarea;
