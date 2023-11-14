import { Link } from "react-router-dom";
import "../App.css";

//Componente de una ruta no encontrada
function NotFoundPage() {
  return (
    <div className="cnt-center">
      <p>Not Found</p>
      <Link to="/profile">Volver</Link>
    </div>
  );
}

export default NotFoundPage;
