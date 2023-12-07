import { createContext, useContext, useState } from "react";
import {
  obtenerTareasAPI,
  obtenerTareaAPI,
  crearTareaAPI,
  actualizarTareaAPI,
  eliminarTareaAPI,
  alternarTareaRealizadaAPI,
} from "../api/tareas.api";

const ContextoTarea = createContext(); //Se crea el contexto

//Funcion para facilitar el importar en los componentes que van a utilizar e contexto
export const usarContexto = () => {
  const contexto = useContext(ContextoTarea);
  //Validar que si haya un contexto
  if (contexto === undefined) {
    throw new Error("usarContexto debe usarse dentro de un TareaContexto");
  }
  return contexto;
};

//Componente del contexto
function TareaContexto({ children }) {
  const [tareas, setTareas] = useState([]); //Estado para las tareas

  const obtenerTareas = async () => {
    try {
      const respuesta = await obtenerTareasAPI();
      setTareas(respuesta.data);
    } catch (error) {
      console.log(error);
    }
  };

  const obtenerTarea = async (id) => {
    try {
      const respuesta = await obtenerTareaAPI(id);
      return respuesta.data;
    } catch (error) {
      console.log(error.message);
    }
  };

  const crearTarea = async (tarea) => {
    try {
      await crearTareaAPI(tarea);
    } catch (error) {
      console.log(error.message);
    }
  };

  const actualizarTarea = async (id, nuevosValores) => {
    try {
      await actualizarTareaAPI(id, nuevosValores)
    } catch (error) {
      console.log(error.message)
    }
  };

  const eliminarTarea = async (id) => {
    try {
      await eliminarTareaAPI(id);
      obtenerTareas();
    } catch (error) {
      console.log(error.message);
    }
  };

  const alternarTarea = async (id) => {
    try {
      const tarea = await obtenerTarea(id);
      await alternarTareaRealizadaAPI(id, !tarea.hecho);
      obtenerTareas();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <ContextoTarea.Provider
      value={{
        tareas,
        obtenerTareas,
        obtenerTarea,
        crearTarea,
        actualizarTarea,
        eliminarTarea,
        alternarTarea
      }}
    >
      {children}
    </ContextoTarea.Provider>
  );
}

export default TareaContexto;
