import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <nav>
      <h2>Mis Tareas</h2>
      <ul className="menu-links">
        <li><Link to="/">Ir a inicio</Link></li>
        <li><Link to="/crear_tarea">Crear Tarea</Link></li>
      </ul>
    </nav>
  );
}

export default Menu;
