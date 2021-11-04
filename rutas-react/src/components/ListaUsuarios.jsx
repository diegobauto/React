import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const usuarios = [
  { id: 1, nombre: 'Juan' },
  { id: 2, nombre: 'Martha' },
  { id: 4, nombre: 'Sandra' },
  { id: 3, nombre: 'Pedro' },
]


export const ListaUsuarios = () => {
  return (
    <div>
      <h3>Lista Usuarios</h3>
      <hr />
      <ul>
        {
          usuarios.map((usuario) => (
            <li key={usuario.id}>
              <NavLink
                activeClassName="active"
                to={`/lista-usuarios/${usuario.id}`}>
                {usuario.nombre}
              </NavLink>
            </li>
          ))
        }
      </ul>
    </div>
  )
}
