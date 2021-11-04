import React, { useContext, useState } from 'react'
import { TemaContexto } from '../context/TemaProvider.jsx'

export const NavBar = () => {


  // const [color, setColor] = useState('')
  // const [colorTexto, setColorTexto] = useState('')

  const { tema, cambiarColor } = useContext(TemaContexto)

  return (
    <div style={
      {
        backgroundColor: tema.background,
        color: tema.color,
      }
    }>
      <h1>NavBar Component</h1>
      <hr />

      <input
        type="color"
        onChange={e => cambiarColor({ color: e.target.value, background: tema.background })}
      />

      <input
        type="color"
        onChange={e => cambiarColor({ background: e.target.value, color: tema.color })}
      />


    </div>
  )
}
