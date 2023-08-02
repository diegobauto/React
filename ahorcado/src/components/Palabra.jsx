import { useContext, useEffect } from "react";
import "../index.css";
import { Contexto } from "../context/Contexto";

function Palabra() {
  const { adivinar } = useContext(Contexto);

  return (
    <div className="palabra">
      {adivinar.map((letra, i) => (
        <div className="letra" key={i}>{letra}</div>
      ))}
    </div>
  );
}

export default Palabra;
