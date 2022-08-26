import { usarContexto } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

function Perfil() {
  //Objeto para poder redireccionar gracias a 'useNavigate'
  const navigate = useNavigate();

  //Llamamos la funcion 'usarContexto' para llamar a todo el contexto de 'UserContext'
  //Utilizamos el estado 'usuario' y la funcion 'cerrarSesion' declarada en el 'value' de 'UserContext'
  //El 'usuario' como su nombre lo indica es el Usuario logueado, dentro tenemos varios atributos
  //pertenecientes a un perfil (correo, foto, telefono, nombre ...)
  const { usuario, cerrarSesion, cargando } = usarContexto();

  //Funcion para cerrar sesion
  const handleClick = () => {
    cerrarSesion(); //Funcion utilizada del contexto
    navigate("/"); //Redirecciona a '/'
  };

  if (cargando) {
    return <h1 className="cargando">Cargando...</h1>
  }

  return (
    <div className="contenedor">
      <div className="perfil">
        <p>
          <b>Correo Usuario:</b> {usuario.email}
        </p>
        <button onClick={handleClick}>Cerrar Sesión</button>
      </div>
    </div>
  );
}

export default Perfil;
