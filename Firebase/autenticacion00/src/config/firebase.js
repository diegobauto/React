import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; //Permite poder autenticarse por medio de Firebase

// Las credenciales estan al lado de Descripcion general ...
// En la tuerca(configuración)->configuración del proyecto
const firebaseConfig = {
  apiKey: "AIzaSyBYJSvRO5a__-Cpo9wIi4Ve7i8bkX4H_bk",
  authDomain: "autenticacion-bc396.firebaseapp.com",
  projectId: "autenticacion-bc396",
  storageBucket: "autenticacion-bc396.appspot.com",
  messagingSenderId: "282643059533",
  appId: "1:282643059533:web:afcd5348d972fea74edd04",
};

// Inicializar Firebase
export const app = initializeApp(firebaseConfig);

//Exporto 'auth' ya que para poder crear o registrar un usuario es necesario utilizarlo
export const auth = getAuth(app);
