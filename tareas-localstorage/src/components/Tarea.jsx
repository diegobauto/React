import React from "react";

// Item con la tarea
function Tarea({ tarea, alternarTarea }) {
  return (
    <li className="item">
      <p>{tarea.nombre}</p>
      <input
        type="checkbox"
        checked={tarea.hecho}
        onChange={() => alternarTarea(tarea.nombre)}
      />
    </li>
  );
}

export default Tarea;
