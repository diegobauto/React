import React from 'react'
import { NavLink } from 'react-router-dom'
import { logOutUsuario } from '../config/firebase';

export const Navbar = ({ usuario }) => {

  const handleLogOut = () => {
    logOutUsuario()
  }


  return (
    // Primero
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <span className="navbar-brand">
          <h2>Rutas Protegidas</h2>
        </span>
        {!!usuario && <NavLink className="btn btn-outline-primary" to="/" exact>
          Inicio
        </NavLink>}
        {!!usuario && <NavLink className="btn btn-outline-secondary" to="/admin" >
          Admin
        </NavLink>}
        {!usuario && <NavLink className="btn btn-outline-success" to="/login" >
          Iniciar Sesion
        </NavLink>}
        {!!usuario && <NavLink
          className="btn btn-outline-danger"
          onClick={handleLogOut}
          to="/login" >
          Cerrar Sesion
        </NavLink>}
      </div>

    </nav>
  )
}
