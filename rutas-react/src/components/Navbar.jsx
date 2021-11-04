import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

export const Navbar = () => {
  return (
    <div>
      <h1>Baraa de Navegacion</h1>
      <ul>
        <li>
          <NavLink exact to="/"
            activeClassName="active"
          >Inicio</NavLink>
        </li>
        <li>
          <NavLink to="/persona"
            activeClassName="active"
          >Persona</NavLink>
        </li>
        <li>
          <NavLink to="/contacto"
            activeClassName="active"
          >Contacto</NavLink>
        </li>
        <li>
          <NavLink to="/lista-usuarios"
            activeClassName="active"
          >Usuarios</NavLink>
        </li>
      </ul>
    </div>
  )
}
