import React from 'react'

export const Home = () => {
  return (
    <div>
      <h1>Bienvenidos...!</h1>
      <div className="contenido d-flex justify-content-center align-items-center flex-column">

        <img className="img-fluid"
          src="img/logo.jpeg" alt="logo" />

        <figure className="text-center display-6">
          <blockquote className="blockquote">
            <p className="display-4">PC STORE</p>
          </blockquote>
          <figcaption className="blockquote-footer">
            Encontraras todo lo que estas <cite title="Source Title">buscando</cite>
          </figcaption>
        </figure>


      </div>
    </div>
  )
}
