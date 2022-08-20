import React from "react";

export const Formulario = () => {
  //Estados para el nombre de la comida, la descripcion y la lista
  const [comida, setComida] = React.useState("");
  const [descripcion, setDescripcion] = React.useState("");
  const [listaComidas, setListaComidas] = React.useState([]);

  // Guarda el valor en el estado 'comida' de lo que se va digitando en el input
  const handleComida = (e) => {
    setComida(e.target.value);
  };

  const guardarDatos = function (e) {
    // Evita el comportamiento por defecto del navegador
    // Que no envie el formualrio y no refresque el navegador
    e.preventDefault();

    // Validacion de los campos, que no esten vacios
    if (!comida.trim()) {
      console.log("Campo comida vacio");
      return;
    }
    if (!descripcion.trim()) {
      console.log("Campo descripcion vacio");
      return;
    }

    // Se le agrega un nuevo elemnto a la lista
    //  Con los tres puntos se le da los elementos que ya tenia la lista
    //  Despues de la coma va el elemento nuevo
    setListaComidas([
      ...listaComidas,
      { nombre: comida, descripcion: descripcion },
    ]);
    setComida(""); // Limpieza del estado de la comida
    setDescripcion(""); // Limpieza del estado de la descripcion
    // Limpia el input, tambien se podria si en el input se coloca el 'value' con el valor del estado
    e.target.reset();
  };

  return (
    <div>
      <h2>Formulario</h2>
      {comida}
      <form onSubmit={guardarDatos}>
        <input
          type="text"
          placeholder="Ingrese su comida"
          className="form-control mb-2"
          name="comida"
          onChange={handleComida}
        />

        <input
          type="text"
          placeholder="Descripcion de la comida"
          className="form-control  mb-2"
          name="descripcion"
          // Asignamos el evento de cambio al input y accedemos al valor del input mediante su target.value
          onChange={(e) => setDescripcion(e.target.value)}
        />
        <button className="btn btn-outline-success">Aidcionar Elemento</button>
      </form>
      <ul>
        {/* Iterar el arreglo, Siempre que iteremos debos usar el atributo key */}
        {listaComidas.map((item, i) => (
          // Acceser a los atributos del objeto
          <li key={i}>
            {item.nombre} - {item.descripcion}
          </li>
        ))}
      </ul>
    </div>
  );
};
