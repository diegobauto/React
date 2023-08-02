import { createContext, useEffect, useState } from "react";

export const Contexto = createContext();

export function ContextoProvider(props) {
  const [numImagen, setNumImagen] = useState(1);
  const [palabra, setPalabra] = useState("");
  const [adivinar, setAdivinar] = useState([]);

  function aumentarNumImagen(letra) {
    if (numImagen < 8) {
      if (!palabra.includes(letra)) {
        setNumImagen(numImagen + 1);
      } else {
        const posiciones = [];
        for (let i = 0; i < palabra.length; i++) {
          if (palabra[i] === letra) {
            posiciones.push(i);
          }
        }
        setAdivinar(
          adivinar.map((l, i) => (posiciones.includes(i) ? letra : l))
        );
      }
    }
  }

  useEffect(() => {
    const palabraFinal = "HOLA MUNDO";
    setPalabra(palabraFinal);
    setAdivinar(palabraFinal.split("").map((e) => e == " " ? " "  : "__"));
  }, []);

  return (
    <Contexto.Provider
      value={{ palabra, numImagen, aumentarNumImagen, adivinar }}
    >
      {props.children}
    </Contexto.Provider>
  );
}
