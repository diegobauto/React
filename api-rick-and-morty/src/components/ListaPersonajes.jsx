import { useEffect, useState } from "react";
import Personaje from "./Personaje";

function ListaPersonajes({pagina}) {
  //Estado para la lista de personajes
  const [listaPersonajes, setListaPersonajes] = useState([]);

  //Actualiza la funcion cuando la variable 'pagina' cambie de estado
  useEffect(() => {
    obtenerAPI();
  }, [pagina]);

  //Funcion para obtener un recurso (API REST)
  async function obtenerAPI() {
    if (1 <= pagina <= 42) {
      const url = `https://rickandmortyapi.com/api/character?page=${pagina}`;
      const response = await fetch(url);
      const data = await response.json();
      setListaPersonajes(data.results);
    }
  }

  return (
    //Recorrer la lista y mostrar el componente Personaje por cada uno
    <div className="contenedor">
      {listaPersonajes.map((personaje) => (
        <Personaje key={personaje.id} personaje={personaje} />
      ))}
    </div>
  );
}

export default ListaPersonajes;
