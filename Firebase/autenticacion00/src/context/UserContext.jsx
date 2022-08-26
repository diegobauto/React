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

//Creacion del contexto
const usuarioContexto = createContext();

//Funcion para poder llamarla de otro componente y obtener el contexto con todos sus valores
//Evita importar el 'contexto' y el 'useContext' en los demás componentes, ahora solo se llama la función
//Es una forma mas sencilla y mejor relizada
export const usarContexto = () => {
  const context = useContext(usuarioContexto);
  if (!context) throw new Error("Esto no es un Provider");
  return context;
};

//Componente del contexto
function UserContext({ children }) {
  //Estado que permite validar si hay un usuario activo
  const [usuario, setUsuario] = useState(null);

  //Estado de carga ya que al momento de cargar el contexto react realiza unos render
  //Inicialmente no existe un usuario porque aón no esta la respuesta de Firebase
  const [cargando, setCargando] = useState(true);

  //Se ejecuta una sola vez cada que carga el componente
  useEffect(() => {
    const estadoUsuario = onAuthStateChanged(auth, (usuarioActual) => {
      console.log(usuarioActual); //Ver en consola siempre el usuarioActual
      setUsuario(usuarioActual); //Asignar ese usuario, si hay(objeto), sino (null)
      setCargando(false);
    });
    return () => estadoUsuario(); //Retorna la funcion anterior
  }, []);

  //Funciones con Firebase
  const registrar = (correo, clave) => {
    return createUserWithEmailAndPassword(auth, correo, clave);
  };
  const ingresar = (correo, clave) => {
    return signInWithEmailAndPassword(auth, correo, clave);
  };
  const ingresarConGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };
  const cerrarSesion = () => signOut(auth);
  const cambiarClave = (correo) => sendPasswordResetEmail(auth, correo);

  return (
    // 'usuarioContexto' es el contexto que se creo enateriormente
    // Al contexto se le pone '.Provider'
    <usuarioContexto.Provider
      // El 'value' tiene un objeto que permite decirle a los
      //componentes hijos las variables o estados que pueden usar
      value={{
        usuario,
        registrar,
        ingresar,
        ingresarConGoogle,
        cerrarSesion,
        cambiarClave,
        cargando
      }}
    >
      {children}
    </usuarioContexto.Provider>
  );
}

export default UserContext;
