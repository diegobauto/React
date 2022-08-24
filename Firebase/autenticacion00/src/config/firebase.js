import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; //Permite poder autenticarse por medio de Firebase

// Las credenciales estan al lado de Descripcion general ...
// En la tuerca(configuración)->configuración del proyecto
const firebaseConfig = {
  apiKey: "AIzaSyAQfi2IPV10fwVENJ6xoXCWQpXuTFoLR78",
  authDomain: "autenticacion-b5824.firebaseapp.com",
  projectId: "autenticacion-b5824",
  storageBucket: "autenticacion-b5824.appspot.com",
  messagingSenderId: "422303982224",
  appId: "1:422303982224:web:337f657b0e94051536ae15",
};

// Inicializar Firebase
export const app = initializeApp(firebaseConfig);

//Exporto 'auth' ya que para poder crear o registrar un usuario es necesario utilizarlo
export const auth = getAuth(app);
