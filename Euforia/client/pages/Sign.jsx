import "./sign.css";
import { useState } from "react";
import { useContextUser } from "../context/UserContext";
import { Navigate } from "react-router-dom";
import FormSignUp from "../components/FormSignUp";
import FormSignIn from "../components/FormSignIn";
import InfoSign from "../components/InfoSign";

function Sign() {
  const [container, setContainer] = useState("container");
  const changeStyleContainer = () => {
    container === "container"
      ? setContainer("container right-panel-active")
      : setContainer("container");
  };

  //Si un usuario YA esta autenticado me redirige al dashboard
  const { isAuthenticated } = useContextUser();
  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }
  //Si un usuario NO esta autenticado me muestra los formularios
  return (
    <div className="box-flex-form">
      <div className={container} id="container">
        <FormSignUp values={{ changeStyleContainer }} />
        <FormSignIn />
        <InfoSign values={{ changeStyleContainer }} />
      </div>
    </div>
  );
}

export default Sign;
