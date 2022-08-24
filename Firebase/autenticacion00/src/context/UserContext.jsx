import {
  createUserWithEmailAndPassword /*Sirve para crear un usuario*/,
  signInWithEmailAndPassword /*Sirve para iniciar sesion*/,
  signOut /*Sirve para salirse de la sesión*/,
  onAuthStateChanged /*Sirve para verificar el estado del usuario, si esta logueado o cerro sesion*/,
  GoogleAuthProvider /*Sirve para iniciar sesion con Google*/,
  signInWithPopup /*Sirve para mostrar el popu de Google para seleccionar la cuenta*/,
  sendPasswordResetEmail /*Sirve para cambiar contraseña*/,
} from "firebase/auth";
import { auth } from "../config/firebase";
import { createContext, useContext, useEffect, useState } from "react";

const usuarioContexto = createContext();

export const usarContexto = () => {
  const context = useContext(usuarioContexto);
  if (!context) throw new Error("Esto no es un Provider");
  return context;
};

function UserContext({ children }) {
  //Estado que permite validar si hay un usuario activo
  const [usuario, setUsuario] = useState(null);

  //Se ejecuta una sola vez cada que carga el componente
  useEffect(() => {
    const estadoUsuario = onAuthStateChanged(auth, (usuarioActual) => {
      console.log({ usuarioActual }); //Ver en consola siempre el usuarioActual
      setUsuario(usuarioActual); //Asignar ese usuario, si hay(objeto), sino (null)
    });
    return () => estadoUsuario(); //Retorna la funcion anterior
  }, []);

  const registrar = (correo, clave) => {
    return createUserWithEmailAndPassword(auth, correo, clave);
  };

  const ingresar = (correo, clave) => {
    return signInWithEmailAndPassword(auth, correo, clave);
  };

  const cerrarSesion = () => signOut(auth);

  return (
    <usuarioContexto.Provider
      value={{ usuario, registrar, ingresar, cerrarSesion }}
    >
      {children}
    </usuarioContexto.Provider>
  );
}

export default UserContext;
