import "../App.css";
import { useAuth } from "../context/AuthProvider";

//Componente navegación
function Navbar() {
  //Uso del contexto
  const { signout } = useAuth();

  //Función para cerrar sesión
  const handleClick = () => signout();

  return (
    <header>
      <nav>
        <ul>
          <li>
            <button onClick={handleClick}>Cerrar sesión</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
