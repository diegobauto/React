import { useState } from "react";
//useState sirve para declarar estados en el componente

export const Eventos = () => {
  // Evento para manejar el texto
  // Parametros: [primero, segundo]
  // El primero es el que guarda el valor, el segundo el que modifica el valor
  // Se pone algo entre los parentesis para darle un valor inicial
  const [texto, setTexto] = useState("Hola desde el componente Evento");

  //Funcion para modificar el estado del texto
  const handleClick = () => {
    setTexto("lo borre...!");
  };

  return (
    <div>
      <h2>Eventos</h2>
      <h3>{texto}</h3>
      {/* Realiza la función anterior cuando se haga un click en el boton */}
      <button onClick={() => handleClick()}>Presioname...!</button> 
    </div>
  );
};
