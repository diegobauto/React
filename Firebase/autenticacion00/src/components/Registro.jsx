import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { usarContexto } from "../context/UserContext";
import Alerta from "./Alerta";

//Componente para registrar un usuario
function Registro() {
  //Estado para guardar los datos del usuario
  const [usuario, setUsuario] = useState({
    correo: "",
    clave: "",
  });

  //Estado para cualquier tipo de error
  const [error, setError] = useState("");

  //Objeto para poder redireccionar gracias a 'useNavigate'
  const navigate = useNavigate();

  //Llamamos la funcion 'usarContexto' para llamar a todo el contexto de 'UserContext'
  //Utilizamos la funcion 'registrar' declarada en el 'value' de 'UserContext'
  const { registrar } = usarContexto();

  //Obtiene el nombre de la etiqueta y el valor que se esta llenando en el campo (input)
  const handleChange = ({ target: { value, name } }) => {
    const nombreCampo = name;
    const valorDigitado = value;
    setUsuario({ ...usuario, [nombreCampo]: valorDigitado }); //Fuarda el valor sin borrar lo que ya tenia 'usuario'
  };

  //Envio del formulario de registro
  //Se ejecuta la funcion 'registrarUsuario' del contexto
  const handleSubmit = async (event) => {
    event.preventDefault(); //Evita recargar la pagina
    setError(""); //Limpia el estado del error
    try {
      await registrar(usuario.correo, usuario.clave); //Funcion utilizada del contexto
      navigate("/"); //Redirecciona a '/'
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="contenedor">
      <div>
        {/* Si hay un error lo muestra */}
        {error && <Alerta mensajeError={error} />}
        {/* Formulario para poder registrar un usuario */}
        <form onSubmit={handleSubmit}>
          <div className="campos">
            <label htmlFor="correo">Correo:</label>
            <input
              type="email"
              name="correo"
              id="correo"
              placeholder="correo@gmail.com"
              required
              onChange={handleChange}
            />
          </div>

          <div className="campos">
            <label htmlFor="clave">Contraseña: </label>
            <input
              type="password"
              name="clave"
              id="clave"
              placeholder="******"
              required
              onChange={handleChange}
            />
          </div>

          <div className="acceso">
            <button>Registrar</button>
          </div>
        </form>

        <div className="accesso-registrar">
          <p>Ya tengo una cuenta</p>
          {/* Link no recarga la pagina */}
          <Link to="/">Iniciar Sesión</Link>
        </div>
      </div>
    </div>
  );
}

export default Registro;
