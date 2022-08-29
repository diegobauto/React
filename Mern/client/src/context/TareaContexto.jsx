import { createContext, useContext, useState } from "react";
import {
  obtenerTareasSolicitud,
  obtenerTareaSolicitud,
  crearTareaSolicitud,
  actualizarTareaSolicitud,
  eliminarTareaSolicitud,
  alternarTareaRealizada,
} from "../api/tareas.api";

const ContextoTarea = createContext(); //Se crea el contexto

//Funcion para facilitar el importar en los componentes que van a utilizar e conexto
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
  //Estado para las tareas
  const [tareas, setTareas] = useState([]);

  const obtenerTareas = async () => {
    const respuesta = await obtenerTareasSolicitud();
    setTareas(respuesta.data);
  };

  const obtenerTarea = async (id) => {
    try {
      const respuesta = await obtenerTareaSolicitud(id);
      return respuesta.data;
    } catch (error) {
      console.log(error.message);
    }
  };

  const crearTarea = async (tarea) => {
    try {
      await crearTareaSolicitud(tarea);
    } catch (error) {
      console.log(error.message);
    }
  };

  const actualizarTarea = async (id, nuevosValores) => {
    try {
      await actualizarTareaSolicitud(id, nuevosValores)
    } catch (error) {
      console.log(error.message)
    }
  };

  const eliminarTarea = async (id) => {
    try {
      await eliminarTareaSolicitud(id);
      obtenerTareas();
    } catch (error) {
      console.log(error.message);
    }
  };

  const alternarTarea = async (id) => {
    try {
      const tarea = await obtenerTarea(id);
      await alternarTareaRealizada(id, !tarea.hecho);
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
