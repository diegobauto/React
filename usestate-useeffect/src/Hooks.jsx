import { useState, useEffect } from "react";
//uso de Estados (variables en React)
//uso de Effect para cuando cambia algun valor en el componente

export const Hooks = () => {
  //Estado para dos contadores
  const [contadorUno, setContadorUno] = useState(0);
  const [contadorDos, setContadorDos] = useState(0);

  // No tiene dependencias, siempre se ejecuta
  useEffect(() => {
    console.log("Usando Use effect sin dependencias");
  });

  //Una lista vacia, solo se ejcuta al iniciar el componente
  useEffect(() => {
    console.log("Usando Use effect con dependencias en array vacio");
  }, []);

  //Se ejecuta la función cuando el 'contadorUno' cambia de valor
  useEffect(() => {
    console.log("Usando Use effect con dependencias contadorUno");
  }, [contadorUno]);

  //Se ejecuta la función cuando el 'contadorUno' y 'contadorDos' cambia de valor
  useEffect(() => {
    console.log("Usando Use effect con dependencias contadorUno, contadorDos");
  }, [contadorUno, contadorDos]);

  return (
    <>
        <h1>Mirar la consola</h1>
      <h3>Contador Uno {contadorUno}</h3>
      {/* Al darle click al botno el 'contadorUno' aumenta en 1 */}
      <button onClick={() => setContadorUno(contadorUno + 1)}>
        Contador Uno
      </button>
      <hr />
      <h3>Contador Dos {contadorDos}</h3>
      {/* Al darle click al botno el 'contadorDos' aumenta en 1 */}
      <button onClick={() => setContadorDos(contadorDos + 1)}>
        Contador Dos
      </button>
    </>
  );
};
