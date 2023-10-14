import { createContext, useContext, useEffect, useState } from "react";
import { getNewAccessTokenRequest, getUserInfo } from "../api/usuarios.api";

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

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    if (accessToken) {
      //El usuario ya esta autenticado
      console.log("ss");
    } else {
      const token = getRefreshToken();
      if (token) {
        const response = await getNewAccessTokenRequest(token);
        console.log(response.accessToken);
        const userInfo = await getUserInfo(response.accessToken);
        console.log(userInfo);
        saveUser({
          user: userInfo,
          accessToken: response.accessToken,
          refreshToken: token,
        });
      }
    }
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

  return (
    <ContextUser.Provider
      value={{ isAuthenticated, getAccessToken, getRefreshToken, saveUser, getUser }}
    >
      {children}
    </ContextUser.Provider>
  );
}

export default UserContext;
