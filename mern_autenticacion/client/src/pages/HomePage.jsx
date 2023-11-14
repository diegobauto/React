import { useState, useEffect } from "react";
import FormSignUp from "../components/FormSignUp";
import FormSignIn from "../components/FormSignIn";
import FormInfo from "../components/FormInfo";
import "./home.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

//Componente de la pagina principal (formulario)
function HomePage() {
  //Estado para cambiar entre iniciar sesión y registrarse
  const [panel, setPanel] = useState(false);
  const handlePanel = () => setPanel(!panel);

  const { isAuthenticated } = useAuth(); //Uso del contexto
  const navigate = useNavigate(); //Función para poder navegar hacia otras rutas

  //Comprobar cuando ya se esta autenticado, se redirige al perfil
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/profile");
    }
  }, [isAuthenticated]);

  return (
    <div className="box-flex-form">
      <div
        className={panel ? "container right-panel-active" : "container"}
        id="container"
      >
        <FormSignUp handlePanel={handlePanel}/>
        <FormSignIn />
        <FormInfo handlePanel={handlePanel} />
      </div>
    </div>
  );
}

export default HomePage;
