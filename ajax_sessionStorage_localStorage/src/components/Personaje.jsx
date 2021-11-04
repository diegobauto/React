import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { Loading } from './Loading.jsx'

const pathUrl = 'https://xmenapiheroku.herokuapp.com/api/characters'
export const Personaje = () => {

  const { id } = useParams()
  console.log(id);

  const [personaje, setPersonaje] = useState({})
  const [loading, setLoading] = useState(false)

  // style = "max-width: 540px;"

  const cargarPersonaje = async (idPersonaje) => {
    setLoading(true)
    // https://xmenapiheroku.herokuapp.com/api/characters/2
    const respuesta = await fetch(`${pathUrl}/${idPersonaje}`)
    console.log(respuesta);
    const data = await respuesta.json()
    console.log(data);
    setPersonaje(data)
    setLoading(false)
  }

  useEffect(() => {
    cargarPersonaje(id)
  }, [id])

  return (
    <>
      {
        loading ?
          <Loading />
          :
          <>
            <h1>{personaje.name}</h1>
            <h3>{personaje.affiliation}</h3>
            <small>{personaje.created}</small>
            <hr />
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={personaje.img} className="img-fluid rounded-start" alt={personaje.name} />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5
                      className="card-title">
                      {personaje.alias}
                    </h5>
                    <p className="card-text">{personaje.description}</p>
                    <p className="card-text"><small className="text-muted">{personaje.powers}</small></p>
                    <Link to="/" className="btn btn-primary" >regresar</Link>
                  </div>
                </div>
              </div>
            </div>
          </>}
    </>
  )
}
