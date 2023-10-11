import { createContext, useContext, useState } from "react";

const ContextUser = createContext(); //Se crea el contexto

//Funcion para facilitar la importación en los componentes que van a utilizar el contexto
export const useContextUser = () => {
  const context = useContext(ContextUser);
  //Validar que si haya un contexto
  if (context === undefined) {
    throw new Error("useContextUser debe usarse dentro de un UserContext");
  }
  return context;
};

function UserContext({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <ContextUser.Provider value={{isAuthenticated}}>
      {children}
    </ContextUser.Provider>
  );
}

export default UserContext;
