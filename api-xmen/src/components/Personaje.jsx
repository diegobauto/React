import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Loading } from "./Loading.jsx";

const pathUrl = "https://xmenapiheroku.herokuapp.com/api/characters";
export const Personaje = () => {
  //Estados para el personaje y la carga (loading)
  const [personaje, setPersonaje] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams(); //Obtenermos el valor del parametro que llego por url

  //Obtenemos el personaje por su id 
  const cargarPersonaje = async (idPersonaje) => {
    setLoading(true);
    const respuesta = await fetch(`${pathUrl}/${idPersonaje}`);
    const data = await respuesta.json();
    setPersonaje(data);
    setLoading(false);
  };

  //Carga el personaje con la variable 'id' cambia
  useEffect(() => {
    cargarPersonaje(id);
  }, [id]);

  return (
    <>
    {/* Si loading es true pinta el componente, de lo contrario muestra la tarejeta del personaje */}
      {loading ? (
        <Loading />
      ) : (
        //Tarjeta del Personaje
        <>
          <h1>{personaje.name}</h1>
          <h3>{personaje.affiliation}</h3>
          <small>{personaje.created}</small>
          <hr />
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={personaje.img}
                  className="img-fluid rounded-start"
                  alt={personaje.name}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{personaje.alias}</h5>
                  <p className="card-text">{personaje.description}</p>
                  <p className="card-text">
                    <small className="text-muted">{personaje.powers}</small>
                  </p>
                  <Link to="/" className="btn btn-primary">
                    regresar
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
