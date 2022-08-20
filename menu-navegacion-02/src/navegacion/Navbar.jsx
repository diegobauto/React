import { NavLink } from "react-router-dom";
import "./Navbar.css"; //Estilos css

export const Navbar = () => {
  return (
    <div className="nav">
      {/* Lista desordenada */}
      <ul>
        <li>
          {/* El 'exact' lo que permite es que la url sea exacta
          Debido a que lo que vace el 'NavLink' es encontrar  la primero direccion que 
          encuentra, cuando se pasa '/' podría coger cualquiera debido a que todas la tienen*/}
          <NavLink exact to="/" activeClassName="active">
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink to="/persona" activeClassName="active">
            Persona
          </NavLink>
        </li>
        <li>
          <NavLink to="/contacto" activeClassName="active">
            Contacto
          </NavLink>
        </li>
        <li>
          <NavLink to="/lista-usuarios" activeClassName="active">
            Usuarios
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
