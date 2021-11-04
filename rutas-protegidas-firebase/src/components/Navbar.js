import React from 'react'
import { Link } from 'react-router-dom'
import { logOutUsuario } from '../config/firebase.js'

export const Navbar = ({ usuario }) => {

  console.log(usuario);

  const handleLogOut = () => {
    logOutUsuario()
  }


  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <span className="navbar-brand">
          <h2>Rutas Protegidas</h2>
        </span>
        {!!usuario && <Link className="btn btn-outline-primary" to="/" exact >Inicio</Link>}
        {!!usuario && <Link className="btn btn-outline-secondary" to="/admin" >Admin</Link>}
        {!usuario && <Link className="btn btn-outline-success" to="/admin" >Iniciar Session</Link>}
        {!!usuario && <Link
          className="btn btn-outline-danger"
          to="/login"
          onClick={handleLogOut}
        >Cerrar Session</Link>}
      </div>

    </nav>
  )
}
