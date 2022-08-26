import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Acceso from "./components/Acceso";
import Registro from "./components/Registro";
import Perfil from "./components/Perfil";
import UserContext from "./context/UserContext";
import RutaPrivada from "./components/RutaPrivada";

function App() {
  return (
    //Se utiliza el contexto para que las demas rutas puedan utilizarlo
    <UserContext>
      {/* Rutas, se espcifica la direccion url y el componente al que se va a dirigir */}
      <Routes>
        <Route path="/" element={<Acceso />} />
        <Route path="/registro" element={<Registro />} />
        <Route
          path="/perfil"
          element={
            // Se define la ruta privada para poder entrar al perfil
            <RutaPrivada>
              <Perfil />
            </RutaPrivada>
          }
        />
        {/* Cuando se digita una ruta que no existe (*), Navigate redirecciona al login */}
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </UserContext>
  );
}

export default App;
