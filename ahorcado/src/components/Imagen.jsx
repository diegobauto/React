import { useContext } from "react";
import "../index.css";
import { Contexto } from "../context/Contexto";

function Imagen() {
  const { numImagen } = useContext(Contexto);

  return (
    <div className="image">
      <img src={`src/assets/${numImagen}.jpg`} />
    </div>
  );
}

export default Imagen;
