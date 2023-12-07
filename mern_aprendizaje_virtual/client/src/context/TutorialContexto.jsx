import { createContext, useContext, useState } from "react";
import {
  obtenerTutorialesAPI,
  obtenerTutorialAPI,
  crearTutorialAPI,
  actualizarTutorialAPI,
  eliminarTutorialAPI,
  alternarEstadoTutorialAPI,
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
  const [tutoriales, setTutoriales] = useState([]); //Estado para los tutoriales

  const obtenerTutoriales = async () => {
    try {
      const respuesta = await obtenerTutorialesAPI();
      setTutoriales(respuesta.data);
    } catch (error) {
      console.log(error);
    }
  };

  const obtenerTutorial = async (id_tutorial) => {
    try {
      const respuesta = await obtenerTutorialAPI(id_tutorial);
      return respuesta.data;
    } catch (error) {
      console.log(error.message);
    }
  };

  const crearTutorial = async (tutorial) => {
    try {
      await crearTutorialAPI(tutorial);
    } catch (error) {
      console.log(error.message);
    }
  };

  const actualizarTutorial = async (id_tutorial, nuevosValores) => {
    try {
      await actualizarTutorialAPI(id_tutorial, nuevosValores)
    } catch (error) {
      console.log(error.message)
    }
  };

  const eliminarTutorial = async (id_tutorial) => {
    try {
      await eliminarTutorialAPI(id_tutorial);
      obtenerTutoriales();
    } catch (error) {
      console.log(error.message);
    }
  };

  const alternarTutorial = async (id_tutorial) => {
    try {
      const tutorial = await obtenerTutorial(id_tutorial);
      const estado = tutorial.estado_publicacion == "visible" ? "oculto" : "visible"
      await alternarEstadoTutorialAPI(id_tutorial, estado);
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
