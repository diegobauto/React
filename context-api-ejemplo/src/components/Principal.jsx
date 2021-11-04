import React from 'react'
import { HolaContexto } from '../context/HolaProvider.jsx'
import { TemaContexto } from '../context/TemaProvider.jsx'

export const Principal = () => {

  const { tema } = React.useContext(TemaContexto)
  const { hola } = React.useContext(HolaContexto)


  return (
    <div style={
      {
        backgroundColor: tema.background,
        color: tema.color,
      }
    }>
      <h1>Principal Component</h1>
      <hr />
      <p>{hola}</p>
    </div>
  )
}
