import { createContext, useContext, useState, useEffect } from "react";
import { signoutRequest, getUserRequest } from "../api/auth";
import Cookies from "js-cookie";

//Creación del contexto
const AuthContext = createContext();

//Contexto de la aplicación
export const useAuth = () => {
  const context = useContext(AuthContext); //Uso del contexto
  if (!context) throw new Error("useAuth must be used within a AuthProvider");
  return context;
};

export function AuthProvider({ children }) {
  //Estados para gestiónar el contexto de la utenticación de un usuario
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  //Estado de carga, inicia que estado cargando mientras hace el useEffect
  const [loading, setLoading] = useState(true);

  //Para cuando cargue el componente AuthProvider
  //Valida siempre el token,
  //debido a que puede ser cualquiera que ingrese un valor en las cookies
  //Y no sea un token valido
  useEffect(() => {
    return async () => {
      const cookies = Cookies.get(); //Obtiene las cookies
      let auxIsAuth = false; //Una variable auxiliar
      if (cookies.token) {
        try {
          //Realiza una petición para obtener el usuario respecto a esa cookie
          //Pero no se envia (cookie) por argumento debido a que en el backend (servidor), ya esta la cookie
          const res = await getUserRequest();
          if (res.data) {
            auxIsAuth = true; //Se indica que ya hay un usuario atenticado
            setUser(res.data); //Asigna el estado del usuario
          }
        } catch (error) {
          console.error(error);
        }
      }
      setIsAuthenticated(auxIsAuth); //Se indica que ya hay un usuario atenticado, pero ye en el estado
      setLoading(false); //Ya no esta cargando
    };
  }, []);

  const setUserAuth = (res) => {
    //Se asginan los estados de que ya esta un usuario autenticado y cual es ese usuario
    setUser(res.data);
    setIsAuthenticated(true);
  };

  //Se podrian traer las funciones de signup y signin (mas optimo y común)
  //Sin embargo no se hace para el manejo de errores
  //por lo que un formulario sirve para ambos y para cambiar el panel cuando se registra un usuario

  //Función para cerrar sesión
  const signout = async () => {
    try {
      await signoutRequest(); //Cerrar sesión desde el servidor
      //Se asginan los estados de que ya no hay un usuario autenticado
      setUser(null);
      setIsAuthenticated(false);
    } catch (error) {}
  };

  return (
    <AuthContext.Provider
      //Valores que se pueden usar en toda la app debido al contexto
      value={{ user, isAuthenticated, loading, setUserAuth, signout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
