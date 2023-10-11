import { useState } from "react";

function FormSignIn() {
  //Estado para el usuario que va iniciar sesion
  const [userToSignin, setUserToSignin] = useState({
    correo: "",
    contrasena: "",
  });
  const handleChangeUserToSignin = ({ target: { name, value } }) => {
    //Obtengo la etiqueta con el nombre y el valor
    //Para poder cambiar el estado con lo que ya tenia (...userToCreate)
    //y lo que quiero añadir al campo [name] : con su valor 'value'
    setUserToSignin({ ...userToSignin, [name]: value });
  };
  const handleSubmitSignIn = (e) => {
    e.preventDefault();
    console.log(userToSignin);
    // createUserRequest({ nombre, correo, contrasena });
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
        <a href="#">¿Olvidaste tu contraseña?</a>
        <button>Iniciar sesión</button>
      </form>
    </div>
  );
}

export default FormSignIn;
