import { useState, useEffect } from "react";
import { usarContexto } from "../context/TareaContexto";
import { useParams, useNavigate } from "react-router-dom";

function Formulario() {
  //Estado para la tarea que se va a crear o actualizar
  const [tarea, setTarea] = useState({ titulo: "", descripcion: "" });

  const { obtenerTarea, crearTarea, actualizarTarea } = usarContexto(); //Contexto
  const params = useParams(); //Permite traer los parametros de la direccion url
  const navigate = useNavigate(); //Función que permite redireccionar a una url

  useEffect(() => {
    const cargarTarea = async () => {
      if (params.id) {
        const tarea = await obtenerTarea(params.id);
        setTarea({
          titulo: tarea.titulo,
          descripcion: tarea.descripcion,
        });
      }
    };
    cargarTarea();
  }, []);

  //Funcion para guardar los valores del formulario en un estado
  const handleChange = ({ target: { name, value } }) => {
    //Obtengo la etiqueta con el nombre y el valor
    //Para poder cambiar el estado con lo que ya tenia (...tarea)
    //y lo que quiero añadir al campo [name] : con su valor 'value'
    setTarea({ ...tarea, [name]: value });
  };

  //Funcion al enviar el formulario
  const handleSubmit = async (event) => {
    event.preventDefault();
    //Aca se crea o se actualiza una tarea
    try {
      if (params.id) {
        await actualizarTarea(params.id, tarea);
      } else {
        await crearTarea(tarea);
      }
    } catch (error) {
      console.log(error.message);
    }
    navigate("/");
    //La tarea se pone vacia, aunque no es necesario ya que el flujo de la aplicacion
    //hace que se salga del formulario, asi que cuando vuelva a entrar ya estaran vacios los input
    setTarea({
      titulo: "",
      descripcion: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>{!params.id ? "Crear Tarea" : "Actualizar Tarea"}</h1>
      <input
        type="text"
        name="titulo"
        value={tarea.titulo}
        placeholder="Ingrese el título de la tarea"
        onChange={handleChange}
        required
      />
      <textarea
        name="descripcion"
        value={tarea.descripcion}
        rows="7"
        placeholder="Ingrese una descripción para la tarea"
        onChange={handleChange}
        required
      />
      <button>{!params.id ? "Crear Tarea" : "Actualizar Tarea"}</button>
    </form>
  );
}

export default Formulario;
