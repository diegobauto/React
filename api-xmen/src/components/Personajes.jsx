import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Loading } from "./Loading.jsx";

//Url de la API
const pathUrl = "https://xmenapiheroku.herokuapp.com/api/characters";

export const Personajes = () => {
  //Estado para la lisata de personajes
  const [listaPersonajes, setListaPersonajes] = useState([]);
  const [loading, setLoading] = useState(false);

  //Funcion para obtener los personajes de la API
  const cargarPersonajes = async () => {
    setLoading(true); //Se asigna a true por que es el momento en el que hace la carga
    const respuesta = await fetch(pathUrl);
    const data = await respuesta.json();
    setListaPersonajes(data.results);
    setLoading(false);
  };

  //Se ejecuta solo al iniciar el componente, para eso se le pasa una lista vacia
  useEffect(() => {
    cargarPersonajes();
  }, []);

  return (
    <>
     {/* Si loading es true pinta el componente, de lo contrario recorre los personajes*/}
      {loading ? (
        <Loading />
      ) : (
        // Recorre los personajes y pinta la lista con boopstrap
        <div>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {listaPersonajes.map((personaje) => (
              <div className="col" key={personaje.id}>
                <div className="card">
                  <img
                    src={personaje.img}
                    className="card-img-top"
                    alt={personaje.name}
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      {personaje.name} <small>({personaje.alias})</small>
                    </h5>
                    <p className="card-text">{personaje.description}</p>
                    <Link
                      to={`/personajes/${personaje.id}`}
                      className="btn btn-primary"
                    >
                      Ver mas...
                    </Link>
                  </div>
                  <div className="card-footer">
                    <small className="text-muted">{personaje.powers}</small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
