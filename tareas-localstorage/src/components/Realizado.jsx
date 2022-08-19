import React from "react";

// Componente para ver y boton para eliminar las tareas realizadas
function Realizado({ tareasRealizadas, limpiarTareas, setTareasRealizadas }) {
  return (
    <div className="realizado">
      <input
        type="checkbox"
        checked={tareasRealizadas}
        onChange={(e) => setTareasRealizadas(!tareasRealizadas)}
      />
      <h2>Tareas Realizadas</h2>
      <button onClick={limpiarTareas}>LIMPIAR</button>
    </div>
  );
}

export default Realizado;
