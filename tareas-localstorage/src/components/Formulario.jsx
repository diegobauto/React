import { useState } from "react";

const Formulario = ({ crearTarea }) => {
  const [textoTarea, setTextoTarea] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); //Quitar el por defecto del formulario, para que no recargue la pagina
    crearTarea(textoTarea);
    setTextoTarea(""); //Vaciar el estado del texto
  };

  return (
    <form onSubmit={handleSubmit} className="formulario">
      <input
        type="text"
        placeholder="Ingese una tarea"
        value={textoTarea} //Poner siempre el valor del estado, asi cuando se vacie tambien actualiza
        onChange={(e) => {
          setTextoTarea(e.target.value); //Guardar en el estado a medida que se vaya escribiendo
        }}
        required
      />
      <button>CREAR</button>
    </form>
  );
};

export default Formulario;
