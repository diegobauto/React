import { useContext } from "react";
import { Contexto } from "../context/Contexto";
import "../index.css";

function Abecedario() {
  const { aumentarNumImagen } = useContext(Contexto);

  const abecedario = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  return (
    <div className="abecedario">
      {abecedario.map((letra, i) => (
        <div className="box" key={i} onClick={() => aumentarNumImagen(letra)}>
          {letra}
        </div>
      ))}
    </div>
  );
}

export default Abecedario;
