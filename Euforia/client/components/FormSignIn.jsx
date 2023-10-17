import { useState } from "react";
import { signinRequest } from "../api/usuarios.api";
import { useContextUser } from "../context/UserContext";

function FormSignIn() {
  const [errors, setErrors] = useState("");

  //Estado para el usuario que va iniciar sesion
  const [userToSignin, setUserToSignin] = useState({
    correo: "",
    contrasena: "",
  });

  const { saveUser } = useContextUser();

  const handleChangeUserToSignin = ({ target: { name, value } }) => {
    //Obtengo la etiqueta con el nombre y el valor
    //Para poder cambiar el estado con lo que ya tenia (...userToCreate)
    //y lo que quiero añadir al campo [name] : con su valor 'value'
    setUserToSignin({ ...userToSignin, [name]: value });
    setErrors("");
  };

  const handleSubmitSignIn = async (e) => {
    e.preventDefault();
    try {
      const response = await signinRequest(userToSignin);
      saveUser(response.data);
    } catch (error) {
      setErrors(error.response.data.error);
    }
  };

  return (
    <div className="form-container sign-in-container">
      <form onSubmit={handleSubmitSignIn}>
        <h1>Iniciar sesión</h1>
        <span>iniciar sesión con usuario</span>
        <input
          type="email"
          name="correo"
          placeholder="Correo"
          value={userToSignin.correo}
          onChange={handleChangeUserToSignin}
        />
        <input
          type="password"
          name="contrasena"
          placeholder="Contraseña"
          value={userToSignin.contrasena}
          onChange={handleChangeUserToSignin}
        />
        {errors && <span className="error">{errors}</span>}
        {/* <a href="#">¿Olvidaste tu contraseña?</a> */}
        <button>Iniciar sesión</button>
      </form>
    </div>
  );
}

export default FormSignIn;
