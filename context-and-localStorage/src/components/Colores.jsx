import React, { useContext } from "react";
import { TemaContexto } from "../context/TemaProvider.jsx";

export const Colores = () => {
  //Utiliza el contexto del TemaProvider, ambas variables de value
  const { tema, cambiarColor } = useContext(TemaContexto);

  return (
    <div
      //Se aplica un estulo a partir de 'tema', obtenido del contexto
      style={{
        backgroundColor: tema.background,
        color: tema.color,
      }}
    >
      <input
        type="color"
        onChange={(e) =>
          //Al cambial el input del color utiliza la funcion 'cambiarColor' del contexto
          cambiarColor({ color: e.target.value, background: tema.background })
        }
      />
      <input
        type="color"
        onChange={(e) =>
          //Al cambial el input del color utiliza la funcion 'cambiarColor' del contexto
          cambiarColor({ background: e.target.value, color: tema.color })
        }
      />
    </div>
  );
};
