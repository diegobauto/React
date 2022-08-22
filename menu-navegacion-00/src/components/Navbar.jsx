import "./navbar.css";
import { NavLink } from "react-router-dom";

// NavLink nos permite navegar entre rutas sin recargar la pagina
// Tambien permite ponerle atributos como className para indicar si esta activa
// Cosa que no sucede solamente con Link
// NavLink es especialmente para el menu de navegacion
function Navbar() {
  return (
    <div>
      <ul>
        <li>
          <NavLink
            to="/"
            // ternario que se le indica que cuando esta activo (cuando se esta en esa url)
            // tome la clase 'active' de './navbar.css'
            className={(active) => (active.isActive ? "active" : "")}
          >
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/nosotros"
            className={(active) => (active.isActive ? "active" : "")}
          >
            Nosotros
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/usuarios"
            className={(active) => (active.isActive ? "active" : "")}
          >
            Usuarios
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/pagePadre"
            className={(active) => (active.isActive ? "active" : "")}
          >
            Sub rutas
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
