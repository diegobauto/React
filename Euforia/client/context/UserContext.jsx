import { createContext, useContext, useEffect, useState } from "react";
import { getNewAccessTokenRequest, getUserInfoRequest } from "../api/usuarios.api";
import Loader from "../components/Loader";

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
  const [accessToken, setAccessToken] = useState("");
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    if (accessToken) {
      //El usuario ya esta autenticado
      const userInfo = await getUserInfoRequest(accessToken);
      saveUser({
        user: userInfo,
        accessToken: accessToken,
        refreshToken: getAccessToken(),
      });
    } else {
      const token = getRefreshToken();
      if (token) {
        const response = await getNewAccessTokenRequest(token);
        const userInfo = await getUserInfoRequest(response.accessToken);
        saveUser({
          user: userInfo,
          accessToken: response.accessToken,
          refreshToken: token,
        });
      }
    }
    setIsLoading(false);
  };

  const getAccessToken = () => accessToken;
  const getRefreshToken = () => localStorage.getItem("token") || null;
  const getUser = () => user;

  //Guarda la información de nuestros access token
  //Guardar la información de el usuario
  //Marcar que ya estamos autenticados
  const saveUser = (responseToBack) => {
    setAccessToken(responseToBack.accessToken);
    setUser(responseToBack.user);
    localStorage.setItem("token", responseToBack.refreshToken);
    setIsAuthenticated(true);
  };

  const signout = () => {
    setIsAuthenticated(false);
    setAccessToken("");
    setUser(undefined);
    localStorage.removeItem("token");
  };

  return (
    <ContextUser.Provider
      value={{
        isAuthenticated,
        getAccessToken,
        getRefreshToken,
        saveUser,
        getUser,
        signout
      }}
    >
      {isLoading ? <Loader/> : children}
    </ContextUser.Provider>
  );
}

export default UserContext;
