import { Link, Outlet } from "react-router-dom";

//Componente para definir sub rutas
// Ejemplo: /ruta/subruta
function PagePadre() {
  return (
    <div>
      <h1>Pagina Padre</h1>
      {/* Links para acceder a a la direccion de 'to' */}
      <Link to="pageHijo1">SubRoutes 1</Link> <br/>
      <Link to="pageHijo2">SubRoutes 2</Link>

      {/* Este componente permite simular el sub route dependiendo cual se le indica en la url
      Obs: Se puede poner en cualquier lado */}
      <Outlet/> 
    </div>
  );
}

export default PagePadre;
