import React, { useEffect, useState } from 'react'
// import * as $ from 'jquery'
// import axios from 'axios'
import { Link } from 'react-router-dom';
import { Loading } from './Loading.jsx';

const pathUrl = 'https://xmenapiheroku.herokuapp.com/api/characters'

export const Personajes = () => {

  const [listaPersonajes, setListaPersonajes] = useState([])
  const [loading, setLoading] = useState(false)

  // const usuario = {
  //   id: '123456789',
  //   nombre: 'Pedro',
  //   email: 'pedro.picapiedra@gmail.com',
  //   role: 'admin'
  // }

  // const conifiguracion = {
  //   fondo: 'black',
  //   color: 'white'
  // }

  const cargarPersonajes = async () => {


    // LocalStorage
    // Guardar Informacion
    // localStorage.setItem('user-data', JSON.stringify(usuario))

    // Recuperar Informacion
    // const respuestaStorage = localStorage.getItem('user-data')
    // console.log(JSON.parse(respuestaStorage));
    // localStorage.removeItem('user-data')

    // LocalStorage
    // Guardar Informacion
    // sessionStorage.setItem('user-data', JSON.stringify(usuario))

    // Recuperar Informacion
    // const respuestaStorage = sessionStorage.getItem('user-data')
    // console.log(JSON.parse(respuestaStorage));

    //  Ejercicio
    // localStorage.setItem('config', JSON.stringify(conifiguracion))
    // const configuracionStorage = JSON.parse(localStorage.getItem('config'))
    // console.log(configuracionStorage);
    // if (configuracionStorage) {
    //   document.body.style.backgroundColor = configuracionStorage.fondo
    //   document.body.style.color = configuracionStorage.color
    // }

    // sessionStorage.setItem('config', JSON.stringify(conifiguracion))
    const configuracionStorage = JSON.parse(sessionStorage.getItem('config'))
    console.log(configuracionStorage);
    if (configuracionStorage) {
      document.body.style.backgroundColor = configuracionStorage.fondo
      document.body.style.color = configuracionStorage.color
    }



    // Peticon XMLHttpRequest
    // Creacion de una nueva instancia
    // const xhr = new XMLHttpRequest();

    // xhr.onreadystatechange = () => {
    //   console.log(xhr.readyState);

    //   if (xhr.readyState === 4) {
    //     console.log(typeof xhr.responseText)
    //     const respuesta = JSON.parse(xhr.responseText)
    //     console.log(respuesta.results);
    //     setListaPersonajes(respuesta.results)
    //   }
    // }

    // // Abrimos la peticion o Request
    // xhr.open('get', pathUrl)

    // // Enviar la peticion o Request
    // xhr.send()

    // Jquery
    // $.get(pathUrl, function (datos) {
    //   console.log(datos);
    //   setListaPersonajes(datos.results)
    // })

    // Axios
    // axios.get(pathUrl)
    //   .then(console.log)
    //   .catch(console.log)
    // const respuesta = await axios.get(pathUrl)
    // console.log(respuesta.data.results);
    // setListaPersonajes(respuesta.data.results)

    setLoading(true)
    const respuesta = await fetch(pathUrl)
    console.log(respuesta);
    const data = await respuesta.json()
    console.log(data);
    setListaPersonajes(data.results)
    setLoading(false)
  }

  useEffect(() => {
    cargarPersonajes()
  }, [])



  return (
    <>
      {
        loading ?
          <Loading />
          :
          <div>
            <h1>Lista Personajes</h1>
            <hr />


            <div className="row row-cols-1 row-cols-md-3 g-4">

              {

                listaPersonajes.map((personaje) => (
                  <div className="col" key={personaje.id}>
                    <div className="card">
                      <img src={personaje.img} className="card-img-top" alt={personaje.name} />
                      <div className="card-body">
                        <h5 className="card-title">
                          {personaje.name} <small>({personaje.alias})</small>
                        </h5>
                        <p className="card-text">
                          {personaje.description}
                        </p>
                        <Link
                          to={`/personajes/${personaje.id}`}
                          className="btn btn-primary">Ver mas...</Link>
                      </div>
                      <div className="card-footer">
                        <small className="text-muted">{personaje.powers}</small>
                      </div>
                    </div>
                  </div>
                ))

              }

            </div>



          </div>}
    </>
  )
}
