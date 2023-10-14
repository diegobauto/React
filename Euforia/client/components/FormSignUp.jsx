import { useState } from "react";
import { signupRequest } from "../api/usuarios.api";

function FormSignUp({ values }) {
  const { changeStyleContainer } = values;

  const stateInitial = {
    nombre: "",
    correo: "",
    contrasena: "",
  };

  //Estado para el usuario a crear
  const [userToCreate, setUserToCreate] = useState(stateInitial);

  //Funcion para guardar los valores del formulario en un estado
  const handleChangeUserToCreate = ({ target: { name, value } }) => {
    //Obtengo la etiqueta con el nombre y el valor
    //Para poder cambiar el estado con lo que ya tenia (...userToCreate)
    //y lo que quiero añadir al campo [name] : con su valor 'value'
    setUserToCreate({ ...userToCreate, [name]: value });
  };

  const handleSubmitSignUp = async (e) => {
    e.preventDefault();
    await signupRequest(userToCreate); //Mandar la peticion al servidor para crear usuario
    setUserToCreate(stateInitial); //Limpiar los campos del formulario
    changeStyleContainer("container"); //Mostrar la parte de iniciar sesión (ya que creo un usuario)
  };

  return (
    <div className="form-container sign-up-container">
      <form onSubmit={handleSubmitSignUp}>
        <h1>Crear Cuenta</h1>
        <span>crear una cuenta de usuario</span>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={userToCreate.nombre}
          onChange={handleChangeUserToCreate}
        />
        <input
          type="email"
          name="correo"
          placeholder="Correo"
          value={userToCreate.correo}
          onChange={handleChangeUserToCreate}
        />
        <input
          type="password"
          name="contrasena"
          placeholder="Contraseña"
          value={userToCreate.contrasena}
          onChange={handleChangeUserToCreate}
        />
        <button>Crear Cuenta</button>
      </form>
    </div>
  );
}

export default FormSignUp;
