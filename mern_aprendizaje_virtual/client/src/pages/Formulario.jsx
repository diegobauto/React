import { useState, useEffect } from "react";
import { usarContexto } from "../context/TutorialContexto";
import { useParams, useNavigate } from "react-router-dom";

function Formulario() {
  //Estado para el tutorial que se va a crear o actualizar
  const [tutorial, setTutorial] = useState({
    titulo: "",
    descripcion: "",
  });

  const { obtenerTutorial, crearTutorial, actualizarTutorial } = usarContexto(); //Contexto
  const params = useParams(); //Traer los parametros de la direccion url
  const navigate = useNavigate(); //Redireccionar

  //Carga
  useEffect(() => {
    const cargarTutorial = async () => {
      if (params.id) {
        const tutorial = await obtenerTutorial(params.id);
        setTutorial({
          titulo: tutorial.titulo,
          descripcion: tutorial.descripcion,
        });
      }
    };
    cargarTutorial();
  }, []);

  //Funcion para guardar los valores del formulario en el estado
  const handleChange = ({ target: { name, value } }) => {
    setTutorial({ ...tutorial, [name]: value });
  };

  //Funcion al enviar el formulario
  const handleSubmit = async (event) => {
    event.preventDefault();
    //Aca se crea o se actualiza un tutorial
    try {
      if (params.id) {
        await actualizarTutorial(params.id, tutorial);
      } else {
        await crearTutorial(tutorial);
      }
    } catch (error) {
      console.log(error.message);
    }
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>{!params.id ? "Crear Tutorial" : "Actualizar Tutorial"}</h1>
      <input
        type="text"
        name="titulo"
        value={tutorial.titulo}
        placeholder="Ingrese el título del tutorial"
        onChange={handleChange}
        required
      />
      <textarea
        name="descripcion"
        value={tutorial.descripcion}
        rows="7"
        placeholder="Ingrese una descripción para el tutorial"
        onChange={handleChange}
        required
      />
      <button>{!params.id ? "Crear Tutorial" : "Actualizar Tutorial"}</button>
    </form>
  );
}

export default Formulario;
