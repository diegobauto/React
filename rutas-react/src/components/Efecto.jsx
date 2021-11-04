import React, { useState, useEffect } from 'react'

export const Efecto = () => {

  const [contadorUno, setContadorUno] = useState(0)
  const [contadorDos, setContadorDos] = useState(0)

  useEffect(() => {
    console.log('Usando Use effect sin dependencias');
  })

  useEffect(() => {
    console.log('Usando Use effect con dependencias en array vacio');
  }, [])

  useEffect(() => {
    console.log('Usando Use effect con dependencias contadorUno');
  }, [contadorUno])

  useEffect(() => {
    console.log('Usando Use effect con dependencias contadorUno, contadorDos');
  }, [contadorUno, contadorDos])


  return (
    <div>
      <h3>Hola</h3>
      <h3>Contador Uno {contadorUno}</h3>
      <button onClick={() => setContadorUno(contadorUno + 1)}
      >Contador Uno</button>
      <hr />
      <h3>Contador Dos {contadorDos}</h3>
      <button onClick={() => setContadorDos(contadorDos + 1)}
      >Contador Dos</button>
    </div>
  )
}
