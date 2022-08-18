import { useState, useEffect, createContext } from "react";
import { tareas as data } from "../data/data";

//Crea un contexto
export const TareaContexto = createContext();

//Componente del contexto
export function TareaContextoProvider(props) {
  const [tareas, setTareas] = useState([]); //estado para las tareas (BD)

  //useEffect sirve para cuando encuentra un cambio en el componente
  //En este caso tiene una lista vacia, indicandole que solo lo haga una vez 
  //cuando se recargue la pagina
  //Dentro de los lista iria lo que quiero que es pendiente para actualizar
  useEffect(() => {
    setTareas(data);
  }, []);

  function crearTarea(titulo, descripcion) {
    //Con los tres puntos guarda lo que ya tenia y despues de la coma lo que quiero de mas
    setTareas([...tareas, {
      id: tareas.length+1,
      titulo, //No hace falta pasarle key:value porque tienen el mismo nombre
      descripcion: descripcion //Se puede hacer lo mismo de arriba (linea anterior)
    }])
  }

  function eliminarTarea(id) {
    //Ternario para guardar las tareas que son diferentes al id que quiero eliminar
    //Asi quito la que quiero eliminar y quedan las que no
   setTareas(tareas.filter((tarea) => tarea.id !== id))  
  }

  return (
    // Se le pasa como value (puede ser cualquier variable) lo que queremos utilizar
    // en los demas componentes
    <TareaContexto.Provider value={{ tareas, crearTarea, eliminarTarea }}>
      {props.children}
    </TareaContexto.Provider>
  );
}
