import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <>
      {/* Link para acceder al inicio, el componente se especidifica en 'App.js'  */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">XMEN - APP</Link>
        </div>
      </nav>
    </>
  )
}
