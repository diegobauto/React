import { usarContexto } from "../context/UserContext";
import { Navigate } from "react-router-dom";

function RutaPrivada({ children }) {
  //Traemos los valores del contexto
  const { cargando, usuario } = usarContexto();

  //Pregunta si esta cargando, para la carga del usuario
  if (cargando) return <h1 className="cargando">Cargando...</h1>;

  //Comprueba si hay un usuario autenticado
  if (!usuario) return <Navigate to="/" />;

  //Retorna el componente hijo, que este dentro de 'RutaPrivada'
  return <>{children}</>;
}

export default RutaPrivada;
