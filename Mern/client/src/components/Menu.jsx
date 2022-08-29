import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="menu">
      <h2>
        <Link to="/">Mis Tareas</Link>
      </h2>
      <Link to="/crear_tarea">Crear Tarea</Link>
    </div>
  );
}

export default Menu;
