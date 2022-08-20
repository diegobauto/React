import { useParams } from "react-router";

// Componente al ingresar a un usuario por su id
export const Usuarios = () => {
  return (
    <div>
      {/* Con useParmas() se obtiene los parametras que se pasaron por url */}
      <h3>Datos Usuario {useParams().id}</h3>
    </div>
  );
};
