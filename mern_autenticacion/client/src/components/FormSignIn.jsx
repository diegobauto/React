import { useState } from "react";
import { useAuth } from "../context/AuthProvider";
import { signinRequest } from "../api/auth";

//Componente con el formulario de Inicio de sesión
function FormSignIn() {
  const [values, setValues] = useState({ email: "", password: "" }); //Estado para los valores del formulario
  const [errorsForm, setErrorsForm] = useState(""); //Estado para los errores

  const { setUserAuth } = useAuth(); //Uso del contexto

  //Función para el inicio de sesión
  const signin = async (user) => {
    try {
      const res = await signinRequest(user); //Iniciar sesión desde el servidor
      setUserAuth(res);
    } catch (error) {
      setErrorsForm(error.response.data.message);
    }
  };

  //Función cuando se hace submit al formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    signin(values);
  };

  //Función cuando se hace algun cambio en algun imput o campo del formulario
  const handleChange = ({ target: { name, value } }) => {
    setValues({ ...values, [name]: value });
    setErrorsForm("");
  };

  return (
    <div className="form-container sign-in-container">
      <form onSubmit={handleSubmit}>
        <h1>Sign In</h1>
        <span>or use your account</span>
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
        <button>Sign In</button>
      </form>
    </div>
  );
}

export default FormSignIn;
