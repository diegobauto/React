import {useState} from "react";
//useState sirve para declarar estados en el componente

export const Listas = () => {
  // const estadoInicial = [1,2,3,4,5,6]
  // const [lista, setLista] = React.useState([1,2,3,4,5,6])

  const estadoInicial = [
    { id: 1, texto: "Tarea 1" },
    { id: 2, texto: "Tarea 2" },
    { id: 3, texto: "Tarea 3" },
    { id: 4, texto: "Tarea 4" },
  ];
  //Estado para la lista con un valir inicial, en este caso una lista predefinida
  const [lista, setLista] = useState(estadoInicial);

  //Funcion para añadir un nuevo elemento a la lista
  const handleAdicionarElemento = () => {
    //Se modifica el valor de la lista con setLista
    //Luego se le ponen los tres puntos para guardar lo que tenia
    //Despues de la coma va el nuevo elemento que se le agrega a la lista
    setLista([...lista, { id: lista.length+1, texto: `Tarea ${lista.length+1}`  }]);
  };

  return (
    <div>
      <h2>Listas</h2>
      <ul>
        {/* Recorre la lista uno por uno */}
        {lista.map((tarea) => (
            // Se le pone key para que React pueda identificar el componente
            // Esto pasa mayormente en las listas
          <li key={tarea.id}>{tarea.texto}</li>
        ))}
      </ul>
      {/* Boton que realiza la funcion anterior al hacerle click */}
      <button
        className="btn btn-info text-white"
        onClick={() => handleAdicionarElemento()}
      >
        Adicionar Elementos
      </button>
    </div>
  );
};
