import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="menu">
      <h2>
        <Link to="/">Ir a Inicio</Link>
      </h2>
      <Link to="/crear_tutorial">Crear Tutorial</Link>
    </div>
  );
}

export default Menu;
