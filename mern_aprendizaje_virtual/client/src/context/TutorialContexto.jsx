import { createContext, useContext, useState } from "react";
import {
  obtenerTutorialesSolicitud,
  obtenerTutorialSolicitud,
  crearTutorialSolicitud,
  actualizarTutorialSolicitud,
  eliminarTutorialSolicitud,
  alternarTutorialEstado,
} from "../api/tutoriales.api";

const ContextoTutorial = createContext(); //Creación contexto

//Funcion para facilitar el importar en los componentes que van a utilizar e conexto
export const usarContexto = () => {
  const contexto = useContext(ContextoTutorial);
  //Validar que si haya un contexto
  if (contexto === undefined) {
    throw new Error("usarContexto debe usarse dentro de un TutorialContexto");
  }
  return contexto;
};

function TutorialContexto({ children }) {
  //Estado para los tutoriales
  const [tutoriales, setTutoriales] = useState([]);

  const obtenerTutoriales = async () => {
    const respuesta = await obtenerTutorialesSolicitud();
    setTutoriales(respuesta.data);
  };

  const obtenerTutorial = async (id_tutorial) => {
    try {
      const respuesta = await obtenerTutorialSolicitud(id_tutorial);
      return respuesta.data;
    } catch (error) {
      console.log(error.message);
    }
  };

  const crearTutorial = async (tutorial) => {
    try {
      await crearTutorialSolicitud(tutorial);
    } catch (error) {
      console.log(error.message);
    }
  };

  const actualizarTutorial = async (id_tutorial, nuevosValores) => {
    try {
      await actualizarTutorialSolicitud(id_tutorial, nuevosValores)
    } catch (error) {
      console.log(error.message)
    }
  };

  const eliminarTutorial = async (id_tutorial) => {
    try {
      await eliminarTutorialSolicitud(id_tutorial);
      obtenerTutoriales();
    } catch (error) {
      console.log(error.message);
    }
  };

  const alternarTutorial = async (id_tutorial) => {
    try {
      const tutorial = await obtenerTutorial(id_tutorial);
      const estado = tutorial.estado_publicacion == "visible" ? "oculto" : "visible"
      await alternarTutorialEstado(id_tutorial, estado);
      obtenerTutoriales();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <ContextoTutorial.Provider
      value={{
        tutoriales,
        obtenerTutoriales,
        obtenerTutorial,
        crearTutorial,
        actualizarTutorial,
        eliminarTutorial,
        alternarTutorial
      }}
    >
      {children}
    </ContextoTutorial.Provider>
  );
}

export default TutorialContexto;
