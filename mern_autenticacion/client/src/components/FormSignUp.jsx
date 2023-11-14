import { useState } from "react";
import { signupRequest } from "../api/auth";

//Componente con el formulario de Registro de sesión
function FormSignUp({ handlePanel }) {
  const initialValues = { name: "", email: "", password: "" };

  const [values, setValues] = useState(initialValues); //Estado para los valores del formulario
  const [errorsForm, setErrorsForm] = useState(""); //Estado para los errores

  //Función para la creación de un usuario
  const signup = async (user) => {
    try {
      await signupRequest(user); //Crear un usuario desde el servidor
      handlePanel(); //Cambiar el panel para iniciar sesión
      setValues(initialValues); //Limpiar el formulario
    } catch (error) {
      setErrorsForm(error.response.data.message);
    }
  };

  //Función cuando se hace submit al formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    signup(values);
  };

  //Función cuando se hace algun cambio en algun imput o campo del formulario
  const handleChange = ({ target: { name, value } }) => {
    setValues({ ...values, [name]: value });
    setErrorsForm("");
  };

  return (
    <div className="form-container sign-up-container">
      <form onSubmit={handleSubmit}>
        <h1>Create Account</h1>
        <span>or use your email for registration</span>
        <input
          autoComplete="username"
          type="text"
          name="name"
          value={values.name}
          placeholder="Name"
          onChange={handleChange}
        />
        <input
          autoComplete="email"
          type="email"
          name="email"
          value={values.email}
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={values.password}
          placeholder="Password"
          onChange={handleChange}
        />
        {errorsForm && <span className="error">{errorsForm}</span>}
        <button>SignUp</button>
      </form>
    </div>
  );
}

export default FormSignUp;
