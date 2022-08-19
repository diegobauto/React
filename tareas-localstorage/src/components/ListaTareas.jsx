import React from "react";
import Tarea from "./Tarea";

function ListaTareas({ listaTareas, alternarTarea, tareasRealizadas = false }) {
  //Primero filtra y luego recorre dependiendo si estan realizadas o no, segun el parametro (tareasRealizadas)
  //La primera llamada de la tabla toma un false por defecto, las que no estan hechas
  //La segunda llamda de la tabla toma un true por props, las que ya estan hechas
  const itemsLista = (valorHecho) =>
    listaTareas
      .filter((tarea) => tarea.hecho === valorHecho)
      .map((tarea) => (
        //Se llama al componente de la Tarea
        <Tarea key={tarea.nombre} tarea={tarea} alternarTarea={alternarTarea} />
      ));

  return (
    <ul>
      {/* Funcion hecha anteriormente dependiendo de el estado (tareasRealizadas)
      Ya que se llama doble vez, la primera para mostrar el parametro por defecto (false)
      que serian las tareas que no estan hechas, y la segunda las que sí */}
      {itemsLista(tareasRealizadas)}
    </ul>
  );
}

export default ListaTareas;
