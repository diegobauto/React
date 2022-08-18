import { useState, useContext } from "react";
import { TareaContexto } from "../context/TareasContexto";

function Formulario() {
  //Utilizo el componente(TareaContext) para poder usar todo lo que tenga ese contexto
  const { crearTarea } = useContext(TareaContexto);
  //Designar un estado a el titulo de la tarea en el formulario
  const [tituloTarea, setTituloTarea] = useState("");
  //Designar un estado a la descripcion de la tarea en el formulario
  const [descripcion, setDescripcion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); //Eliminar la recarga de la pagina cuando se envia el formulario
    crearTarea(tituloTarea, descripcion); //crear tarea, viene del contexto (TareaContexto)
    setTituloTarea("")
    setDescripcion("") //Vaciar los inputs, los inputs deben tener eñ value con la variable
  };

  return (
    //Creo un formulario para poder agregar una nueva tarea
    <form onSubmit={handleSubmit} className="formulario">
      <h1 className="tituloForm">Crear Tarea</h1>
      <input
        type="text"
        placeholder="Digite el titulo de la tarea."
        value={tituloTarea} //Se le asigna el valor para que cambie en el momento de vaciar el input
        onChange={(e) => {
          //Se va actualizando el estado a medida que nota un cambio en el input
          //Y tomo la etiqueta que tiene el evento (e), en este caso el input, y accedo al valor
          setTituloTarea(e.target.value);
        }}
        required
      />
      <textarea
        placeholder="Digite la descripción de la tarea."
        value={descripcion} //Se le asigna el valor para que cambie en el momento de vaciar el input
        onChange={(e) => {
          //Se va actualizando el estado a medida que nota un cambio en el textarea
          //Y tomo la etiqueta que tiene el evento (e), en este caso el textarea, y accedo al valor
          setDescripcion(e.target.value);
        }}
        required
      ></textarea>
      <button className="agregar">Agregar Tarea</button>
    </form>
  );
}

export default Formulario;
