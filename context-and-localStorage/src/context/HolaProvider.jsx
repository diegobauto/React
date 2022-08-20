import { createContext } from "react";

//Se crea el contexto
export const HolaContexto = createContext();

//Componente en el que se encuentra el contexto
export const HolaProvider = (props) => {
  const hola = "Hola desde una variable global";

  return (
    // Se le pone '{props.children}' para indicarle que adentro 
    // van a ir componentes hijos, aquellos que pueden utilizar el contexto
    <HolaContexto.Provider value={{ hola }}>
      {props.children}
    </HolaContexto.Provider>
  );
};
