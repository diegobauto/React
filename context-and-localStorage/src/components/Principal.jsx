import React from "react";
import { HolaContexto } from "../context/HolaProvider.jsx";
import { TemaContexto } from "../context/TemaProvider.jsx";

export const Principal = () => {
  //Usa el contexto de TemaContexto, lo que se define como value en el contexto
  //Solo se toma el tema aun asi se pasen mas
  const { tema } = React.useContext(TemaContexto);

  //Usa el contexto de HolaContexto, lo que se define como value en el contexto
  const { hola } = React.useContext(HolaContexto);

  return (
    <div
      //Toma el estilo que tiene 'tema' que fue lo que se obtuvo del contexto
      style={{
        backgroundColor: tema.background,
        color: tema.color,
      }}
    >
      <h1>Principal Component</h1>
      <p>{hola}</p>
    </div>
  );
};
