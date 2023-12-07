import { usarContexto } from "../context/TutorialContexto";
import { useNavigate } from "react-router-dom";

function Tutorial({ tutorial }) {
  const { eliminarTutorial, alternarTutorial } = usarContexto(); //Contexto
  const navigate = useNavigate(); //Redireccionar

  return (
    <article className="tarjeta">
      <div className="tituloYcheck">
        <h2>{tutorial.titulo}</h2>
        <p>{tutorial.estado_publicacion == "oculto" ? "" : "👁️"}</p>
      </div>
      <p className={`descripcion${tutorial.estado_publicacion === "oculto" ? " check" : ""}`}>{tutorial.descripcion}</p>
      <div>
        <button className="actualizar" onClick={() => navigate(`/editar_tutorial/${tutorial.id_tutorial}`)}>
          Actualizar
        </button>
        <button className="eliminar" onClick={() => eliminarTutorial(tutorial.id_tutorial)}>
          Eliminar
        </button>
        <button className="alternar" onClick={() => alternarTutorial(tutorial.id_tutorial)}>
          {tutorial.estado_publicacion == "oculto" ? "Mostrar" : "Ocultar"}
        </button>
      </div>
    </article>
  );
}

export default Tutorial;
