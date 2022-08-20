import { useState } from "react";
//useState sirve para declarar estados en el componente

export const Contador = () => {
  // Estado para el contador
  // Parametros: [primero, segundo]
  // El primero es el que guarda el valor, el segundo el que modifica el valor
  // Se pone algo entre los parentesis para darle un valor inicial
  const [contador, setContador] = useState(0);

    // Funcion para modificar el estado del contador, ir sumando de 1 en 1
  const handleContador = () => {
    setContador(contador + 1);
  };

  return (
    <>
      <h2>Contador</h2>
      <p>
        El numero del contador es: <span>{contador}</span>
      </p>
      {/* Ternario para decir si es mayor o menor a 2 */}
      <h4>{contador > 2 ? "Contador es mayor a dos" : "Es menor a dos"}</h4>
      {/* Ejecuto la funcion anterior al dar click en el boton */}
      <button onClick={() => handleContador()}>Aumentar</button>
    </>
  );
};
