import React, { useEffect } from 'react'
import { useParams, useHistory } from 'react-router'

const estadoInicial = {
  "id": null,
  "name": "",
  "username": "Samantha",
  "email": "Nathan@yesenia.net",
  "address": {
    "street": "Douglas Extension",
    "suite": "Suite 847",
    "city": "McKenziehaven",
    "zipcode": "59590-4157",
    "geo": {
      "lat": "-68.6102",
      "lng": "-47.0653"
    }
  },
  "phone": "1-463-123-4447",
  "website": "ramiro.info",
  "company": {
    "name": "Romaguera-Jacobson",
    "catchPhrase": "Face to face bifurcated interface",
    "bs": "e-enable strategic applications"
  }
}
export const Usuario = () => {

  console.log(useParams());
  const { id } = useParams()

  useEffect(() => {
    obtenerDatosUsuario(id)
  }, [id])

  const obtenerDatosUsuario = async (idUser) => {
    const pathUrl = `https://jsonplaceholder.typicode.com/users/${idUser}`
    const respuesta = await fetch(pathUrl)
    const user = await respuesta.json()
    console.log(user);
    setUsuario(user)
  }




  const [usuario, setUsuario] = React.useState(estadoInicial)


  console.log(useHistory());
  const history = useHistory()
  const handleClick = () => {
    history.push('/lista-usuarios')
  }

  return (
    <div>
      <h3>Usuario ID: {id}</h3>
      <strong>Nombre: {usuario.name}</strong><br />
      <strong>Email: {usuario.email}</strong><br />
      <strong>Username: {usuario.username}</strong><br />
      <strong>Direccion: {usuario.address.street}</strong><br />


      <pre>
        {JSON.stringify(usuario, null, 2)}
      </pre>

      <button onClick={handleClick} >Regresar</button>
    </div>
  )
}
